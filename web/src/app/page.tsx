import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-[-200px] -z-10 mx-auto h-[520px] max-w-6xl rounded-full bg-gradient-to-r from-sky-500/20 via-emerald-500/15 to-fuchsia-500/20 blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100vh-0px)] max-w-6xl flex-col px-4 py-10 md:px-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Kiwi</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Autobots Console</div>
            </div>
          </div>

          <Link href="/dashboard">
            <Button variant="secondary" size="sm">
              Open Console <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </header>

        <main className="flex flex-1 flex-col justify-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-200">
              <Sparkles className="h-3.5 w-3.5" />
              Production-grade UI, typed API, and clean architecture.
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              A clean frontend for your Autobots backend.
            </h1>
            <p className="mt-4 text-base text-slate-600 md:text-lg dark:text-slate-300">
              Kiwi gives you a polished console for ingestion and knowledge base management — built with
              Next.js, TypeScript, and a generated OpenAPI client.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/dashboard">
                <Button size="lg">
                  Launch Console <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/settings">
                <Button size="lg" variant="ghost">
                  Configure API
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="space-y-2 p-5">
                <div className="text-sm font-semibold">Typed API</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  OpenAPI types are generated into the codebase for safer, faster iteration.
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-2 p-5">
                <div className="text-sm font-semibold">Nice UX</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Thoughtful loading, error, and empty states — plus dark mode.
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-2 p-5">
                <div className="text-sm font-semibold">Production-minded</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  Organized modules, env-based config, and reliable defaults.
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="mt-10 border-t border-slate-200 py-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
          Built for Autobots.
        </footer>
      </div>
    </div>
  );
}
