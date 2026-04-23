import type { ServerResponse } from "node:http";

export function sendJson(res: ServerResponse, statusCode: number, payload: unknown): void {
  if (res.headersSent) {
    return;
  }

  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

export function sendJsonRpcError(
  res: ServerResponse,
  statusCode: number,
  code: number,
  message: string,
  id: string | number | null = null
): void {
  sendJson(res, statusCode, {
    jsonrpc: "2.0",
    error: {
      code,
      message,
    },
    id,
  });
}

export function errorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return "Unknown error";
}
