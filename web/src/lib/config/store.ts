"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { env } from "@/lib/env";

export type AuthMode = "apiKey" | "bearer";

export type AppConfigState = {
  apiBaseUrl: string;
  authMode: AuthMode;
  apiKey: string;
  bearerToken: string;

  setApiBaseUrl: (value: string) => void;
  setAuthMode: (value: AuthMode) => void;
  setApiKey: (value: string) => void;
  setBearerToken: (value: string) => void;
  reset: () => void;
};

const DEFAULTS = {
  apiBaseUrl: env.autobotsApiBaseUrl,
  authMode: "bearer" as const,
  apiKey: env.autobotsApiKey,
  bearerToken: "",
};

export const useAppConfig = create<AppConfigState>()(
  persist(
    (set) => ({
      ...DEFAULTS,

      setApiBaseUrl: (value) => set({ apiBaseUrl: value.replace(/\/$/, "") }),
      setAuthMode: (value) => set({ authMode: value }),
      setApiKey: (value) => set({ apiKey: value }),
      setBearerToken: (value) => set({ bearerToken: value }),

      reset: () => set({ ...DEFAULTS }),
    }),
    {
      name: "kiwi:config",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        apiBaseUrl: state.apiBaseUrl,
        authMode: state.authMode,
        apiKey: state.apiKey,
        bearerToken: state.bearerToken,
      }),
    },
  ),
);
