import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { SERVER_NAME, SERVER_VERSION } from "./config/constants.js";
import { registerPortfolioTools } from "./tools/registerPortfolioTools.js";

export function createPortfolioServer(): McpServer {
  const server = new McpServer({
    name: SERVER_NAME,
    version: SERVER_VERSION,
  });

  registerPortfolioTools(server);
  return server;
}
