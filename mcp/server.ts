import { createServer } from "node:http";

import { DEFAULT_PORT, MCP_ENDPOINT, SERVER_NAME } from "./config/constants.js";
import { createMcpHandlers } from "./handlers/mcpHandlers.js";
import { sendJson, sendJsonRpcError } from "./http/responseUtils.js";
import { SessionStore } from "./sessions/sessionStore.js";

const sessionStore = new SessionStore();
const { handlePost, handleGet, handleDelete } = createMcpHandlers(sessionStore);

const httpServer = createServer(async (req, res) => {
  const method = req.method ?? "GET";
  const url = new URL(req.url ?? "/", `http://${req.headers.host ?? "localhost"}`);

  try {
    if (url.pathname === "/health") {
      sendJson(res, 200, {
        ok: true,
        name: SERVER_NAME,
        endpoint: MCP_ENDPOINT,
      });
      return;
    }

    if (url.pathname !== MCP_ENDPOINT) {
      sendJson(res, 404, {
        error: "Not found",
      });
      return;
    }

    if (method === "POST") {
      await handlePost(req, res);
      return;
    }

    if (method === "GET") {
      await handleGet(req, res);
      return;
    }

    if (method === "DELETE") {
      await handleDelete(req, res);
      return;
    }

    res.setHeader("Allow", "POST, GET, DELETE");
    sendJsonRpcError(
      res,
      405,
      -32000,
      `Method ${method} is not allowed for ${MCP_ENDPOINT}.`
    );
  } catch (error) {
    console.error("Error handling MCP request:", error);

    if (!res.headersSent) {
      sendJsonRpcError(res, 500, -32603, "Internal server error.");
    }
  }
});

const requestedPort = Number.parseInt(
  process.env.MCP_PORT ?? process.env.PORT ?? String(DEFAULT_PORT),
  10
);
const port = Number.isFinite(requestedPort) && requestedPort > 0 ? requestedPort : DEFAULT_PORT;

httpServer.listen(port, () => {
  console.log(`${SERVER_NAME} listening on http://localhost:${port}${MCP_ENDPOINT}`);
});

async function shutdown(signal: string): Promise<void> {
  console.log(`Received ${signal}. Shutting down MCP server...`);

  for (const [sessionId, session] of [...sessionStore.entries()]) {
    try {
      await session.transport.close();
    } catch (error) {
      console.error(`Error closing session ${sessionId}:`, error);
      try {
        await session.server.close();
      } catch (serverError) {
        console.error(`Error closing server for session ${sessionId}:`, serverError);
      }
    } finally {
      sessionStore.delete(sessionId);
    }
  }

  httpServer.close((error) => {
    if (error) {
      console.error("Error while closing HTTP server:", error);
      process.exit(1);
    }

    process.exit(0);
  });
}

process.on("SIGINT", () => {
  void shutdown("SIGINT");
});

process.on("SIGTERM", () => {
  void shutdown("SIGTERM");
});
