"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppConfig } from "@/lib/config/store";

type BearerAccessToken = {
  access_token: string;
  token_type: string;
};

function stripTrailingSlash(url: string) {
  return url.replace(/\/$/, "");
}

export default function LoginPage() {
  const router = useRouter();
  const [nextPath, setNextPath] = useState("/dashboard");

  useEffect(() => {
    const next = new URLSearchParams(window.location.search).get("next");
    if (next) setNextPath(next);
  }, []);

  const { apiBaseUrl, setAuthMode, setBearerToken } = useAppConfig();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!username.trim() || !password) {
      setError("Username and password are required.");
      return;
    }

    setIsSubmitting(true);
    try {
      const base = stripTrailingSlash(apiBaseUrl);
      const url = `${base}/v1/auth/token`;

      const body = new URLSearchParams({
        username: username.trim(),
        password,
        grant_type: "password",
        scope: "",
      });

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        body,

      });

      if (!res.ok) {
        let message = `Login failed (${res.status})`;
        try {
          const ct = res.headers.get("content-type") || "";
          if (ct.includes("application/json")) {
            const payload = (await res.json()) as unknown;
            if (payload && typeof payload === "object" && "detail" in payload) {
              message = String((payload as Record<string, unknown>).detail);
            }
          } else {
            message = await res.text();
          }
        } catch {
          // ignore
        }
        throw new Error(message);
      }

      const token = (await res.json()) as BearerAccessToken;
      if (!token?.access_token) throw new Error("Login succeeded, but no access_token was returned.");

      setAuthMode("bearer");
      setBearerToken(token.access_token);

      router.replace(nextPath);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-[-200px] -z-10 mx-auto h-[520px] max-w-4xl rounded-full bg-gradient-to-r from-sky-500/20 via-emerald-500/15 to-fuchsia-500/20 blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-10 md:px-6">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>
                Use your Autobots username/password. If you haven’t configured the API base URL, do that first.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                </div>

                {error ? <div className="text-sm text-rose-600">{error}</div> : null}

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Signing in…" : "Sign in"}
                  </Button>
                  <Link href="/settings" className="text-sm text-sky-600 hover:text-sky-500 dark:text-sky-400">
                    Configure API →
                  </Link>
                </div>

                <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">
                  Current API base URL: <span className="font-mono">{apiBaseUrl}</span>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-slate-700 dark:hover:text-slate-200">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
