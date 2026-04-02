import createClient from "openapi-fetch";

import type { paths } from "@/lib/api/schema";

export type AutobotsClient = ReturnType<typeof createAutobotsClient>;

export type CreateAutobotsClientOptions = {
  baseUrl: string;
  /** Raw value to put into the `Authorization` header (no automatic prefixing). */
  authorization?: string;
};

export function createAutobotsClient(opts: CreateAutobotsClientOptions) {
  const baseUrl = opts.baseUrl.replace(/\/$/, "");

  return createClient<paths>({
    baseUrl,
    fetch: async (request: Request) => {
      const headers = new Headers(request.headers);

      if (opts.authorization) {
        headers.set("Authorization", opts.authorization);
      }

      // Note: we do NOT force `credentials: include` here because many backends use
      // `Access-Control-Allow-Origin: *` which breaks credentialed CORS requests.
      // If you need cookie-based auth, we can add a toggle and configure CORS accordingly.
      const nextRequest = new Request(request, { headers });

      return fetch(nextRequest);
    },
  });
}

export class ApiError extends Error {
  readonly status: number;
  readonly details?: unknown;

  constructor(message: string, status: number, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export async function toApiError(response: Response) {
  const contentType = response.headers.get("content-type") || "";

  let details: unknown = undefined;
  try {
    if (contentType.includes("application/json")) {
      details = await response.json();
    } else {
      details = await response.text();
    }
  } catch {
    // ignore parse errors
  }

  const message = (() => {
    if (isRecord(details) && "detail" in details) {
      const d = details.detail;
      return typeof d === "string" ? d : String(d);
    }

    return `Request failed (${response.status})`;
  })();

  return new ApiError(message, response.status, details);
}
