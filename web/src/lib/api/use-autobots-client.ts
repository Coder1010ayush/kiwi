"use client";

import { useMemo } from "react";

import { useAppConfig } from "@/lib/config/store";
import { createAutobotsClient } from "@/lib/api/client";

function normalizeBearer(token: string) {
  const trimmed = token.trim();
  if (!trimmed) return "";
  return trimmed.toLowerCase().startsWith("bearer ") ? trimmed : `Bearer ${trimmed}`;
}

export function useAutobotsClient() {
  const { apiBaseUrl, authMode, apiKey, bearerToken } = useAppConfig();

  const authorization = useMemo(() => {
    if (authMode === "bearer") return normalizeBearer(bearerToken);

    // API key mode: the spec uses an apiKey scheme named "Authorization"
    // (header/query/cookie). We send the value as-is so callers can paste either
    // a raw key or a fully formatted value.
    return apiKey.trim();
  }, [apiKey, authMode, bearerToken]);

  return useMemo(
    () =>
      createAutobotsClient({
        baseUrl: apiBaseUrl,
        authorization: authorization || undefined,
      }),
    [apiBaseUrl, authorization],
  );
}
