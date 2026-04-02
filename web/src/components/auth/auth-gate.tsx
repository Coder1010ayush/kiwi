"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useAppConfig } from "@/lib/config/store";

export function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const { authMode, bearerToken, hasHydrated } = useAppConfig();
  const allowUnauthed = pathname === "/settings" || pathname.startsWith("/settings/");

  useEffect(() => {
    if (!hasHydrated) return;
    if (authMode !== "bearer") return;
    if (allowUnauthed) return;
    if (bearerToken.trim()) return;

    const next = typeof window !== "undefined" ? window.location.pathname + window.location.search : pathname;
    router.replace(`/login?next=${encodeURIComponent(next)}`);
  }, [allowUnauthed, authMode, bearerToken, hasHydrated, pathname, router]);

  if (!hasHydrated) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-md items-center justify-center px-6">
        <div className="text-center">
          <div className="text-sm font-medium">Loading console…</div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Restoring your Kiwi session.
          </div>
        </div>
      </div>
    );
  }

  if (authMode === "bearer" && !bearerToken.trim() && !allowUnauthed) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-md items-center justify-center px-6">
        <div className="text-center">
          <div className="text-sm font-medium">Redirecting to login…</div>
          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Your console is configured for bearer-token auth.
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
