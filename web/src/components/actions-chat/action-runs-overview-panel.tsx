"use client";

import { Activity, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type ActionRunsOverviewPanelProps = {
  open: boolean;
  onClose: () => void;
  totalRuns: number;
  runningCount: number;
  successfulRuns: number;
};

export function ActionRunsOverviewPanel({
  open,
  onClose,
  totalRuns,
  runningCount,
  successfulRuns,
}: ActionRunsOverviewPanelProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/40 backdrop-blur-sm">
      <div className="h-full w-full max-w-xl border-l border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">Run overview</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Workspace summary and live metrics</div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close run overview panel">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="h-[calc(100%-73px)] overflow-y-auto p-5">
          <div className="space-y-5">
            <div className="rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-5 py-6 shadow-sm dark:border-slate-800/80 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm dark:border-emerald-900/70 dark:bg-slate-950/70 dark:text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" />
                Dedicated runs workspace
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">Action Runs</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Review historical runs, watch currently executing jobs, and inspect transcripts in a screen dedicated just to execution history.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200/80 dark:border-slate-800/80">
                <CardContent className="p-5">
                  <div className="text-sm text-slate-500 dark:text-slate-400">Total runs</div>
                  <div className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-50">{totalRuns}</div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Historical and current action executions.</div>
                </CardContent>
              </Card>

              <Card className="border-slate-200/80 dark:border-slate-800/80">
                <CardContent className="p-5">
                  <div className="text-sm text-slate-500 dark:text-slate-400">Currently running</div>
                  <div className="mt-2 flex items-center gap-2 text-3xl font-semibold text-slate-900 dark:text-slate-50">
                    <Activity className="h-5 w-5 text-sky-500" />
                    {runningCount}
                  </div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Progress auto-refreshes while runs are active.</div>
                </CardContent>
              </Card>

              <Card className="border-slate-200/80 dark:border-slate-800/80">
                <CardContent className="p-5">
                  <div className="text-sm text-slate-500 dark:text-slate-400">Successful runs</div>
                  <div className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-50">{successfulRuns}</div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Click any run to inspect the conversation transcript.</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
