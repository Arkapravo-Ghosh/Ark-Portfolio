import type { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export type SessionContext = {
  server: McpServer;
  transport: StreamableHTTPServerTransport;
};

export class SessionStore {
  private readonly sessions = new Map<string, SessionContext>();

  get(sessionId: string): SessionContext | undefined {
    return this.sessions.get(sessionId);
  }

  set(sessionId: string, context: SessionContext): void {
    this.sessions.set(sessionId, context);
  }

  delete(sessionId: string): boolean {
    return this.sessions.delete(sessionId);
  }

  entries(): IterableIterator<[string, SessionContext]> {
    return this.sessions.entries();
  }
}
