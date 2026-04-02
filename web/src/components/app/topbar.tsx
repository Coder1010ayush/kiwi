"use client";

import Link from "next/link";
import { Globe, LogIn, LogOut } from "lucide-react";

import { ThemeToggle } from "@/components/app/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAppConfig } from "@/lib/config/store";

export function Topbar({ title }: { title?: string }) {
  const { apiBaseUrl, authMode, bearerToken, setBearerToken } = useAppConfig();

  const isLoggedIn = authMode === "bearer" && bearerToken.trim().length > 0;

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center gap-3 border-b border-slate-200 bg-white/70 px-4 backdrop-blur md:px-6 dark:border-slate-800 dark:bg-slate-950/40">
      <div className="flex-1">
        <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          {title || "Kiwi"}
        </div>
        <div className="mt-0.5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Globe className="h-3.5 w-3.5" />
          <span className="truncate">{apiBaseUrl}</span>
          <Badge className="hidden sm:inline-flex" variant="default">
            {authMode}
          </Badge>
        </div>
      </div>

      {authMode === "bearer" ? (
        isLoggedIn ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setBearerToken("")}
            aria-label="Sign out"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Sign out</span>
          </Button>
        ) : (
          <Link href="/login">
            <Button variant="secondary" size="sm">
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">Sign in</span>
            </Button>
          </Link>
        )
      ) : null}

      <ThemeToggle />
    </header>
  );
}
