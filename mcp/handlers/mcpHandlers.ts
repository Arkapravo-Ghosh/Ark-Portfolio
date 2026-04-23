import { randomUUID } from "node:crypto";
import type { IncomingMessage, ServerResponse } from "node:http";

import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";

import { createPortfolioServer } from "../createPortfolioServer.js";
import { getHeader, isInitializeRequest, readJsonBody } from "../http/requestUtils.js";
import { errorMessage, sendJsonRpcError } from "../http/responseUtils.js";
import { SessionStore } from "../sessions/sessionStore.js";

export type McpRequestHandlers = {
  handlePost: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
  handleGet: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
  handleDelete: (req: IncomingMessage, res: ServerResponse) => Promise<void>;
};

export function createMcpHandlers(sessionStore: SessionStore): McpRequestHandlers {
  async function handlePost(req: IncomingMessage, res: ServerResponse): Promise<void> {
    let parsedBody: unknown;

    try {
      parsedBody = await readJsonBody(req);
    } catch (error) {
      sendJsonRpcError(res, 400, -32700, `Invalid JSON body: ${errorMessage(error)}`);
      return;
    }

    const sessionId = getHeader(req, "mcp-session-id");
    const existingSession = sessionId ? sessionStore.get(sessionId) : undefined;

    if (existingSession) {
      await existingSession.transport.handleRequest(req, res, parsedBody);
      return;
    }

    if (sessionId) {
      sendJsonRpcError(res, 404, -32001, `MCP session not found: ${sessionId}`);
      return;
    }

    if (!isInitializeRequest(parsedBody)) {
      sendJsonRpcError(
        res,
        400,
        -32000,
        "Bad Request: initialize request required when starting a new MCP session."
      );
      return;
    }

    const server = createPortfolioServer();
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: () => randomUUID(),
      onsessioninitialized: (newSessionId) => {
        sessionStore.set(newSessionId, {
          server,
          transport,
        });
        console.log(`Initialized MCP session ${newSessionId}`);
      },
    });

    transport.onerror = (error) => {
      console.error("MCP transport error:", error);
    };

    transport.onclose = () => {
      const closedSessionId = transport.sessionId;
      if (closedSessionId) {
        sessionStore.delete(closedSessionId);
        console.log(`Closed MCP session ${closedSessionId}`);
      }

      void server.close().catch((closeError) => {
        console.error("Error closing MCP server:", closeError);
      });
    };

    await server.connect(transport);
    await transport.handleRequest(req, res, parsedBody);
  }

  async function handleGet(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const sessionId = getHeader(req, "mcp-session-id");
    if (!sessionId) {
      sendJsonRpcError(res, 400, -32000, "Missing mcp-session-id header.");
      return;
    }

    const session = sessionStore.get(sessionId);
    if (!session) {
      sendJsonRpcError(res, 404, -32001, `MCP session not found: ${sessionId}`);
      return;
    }

    await session.transport.handleRequest(req, res);
  }

  async function handleDelete(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const sessionId = getHeader(req, "mcp-session-id");
    if (!sessionId) {
      sendJsonRpcError(res, 400, -32000, "Missing mcp-session-id header.");
      return;
    }

    const session = sessionStore.get(sessionId);
    if (!session) {
      sendJsonRpcError(res, 404, -32001, `MCP session not found: ${sessionId}`);
      return;
    }

    await session.transport.handleRequest(req, res);
    sessionStore.delete(sessionId);
    await session.transport.close();
  }

  return {
    handlePost,
    handleGet,
    handleDelete,
  };
}
