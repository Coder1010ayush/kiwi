"use client";

import { Activity, LoaderCircle, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  formatDateTime,
  getActionFamilyLabel,
  getRunProgressValue,
  getRunStatusVariant,
  getRunTitle,
  type ActionResultLiteDoc,
} from "@/lib/actions-chat/helpers";
import { cn } from "@/lib/utils";

type ActionRunsListProps = {
  runs: ActionResultLiteDoc[];
  selectedRunId: string | null;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onSelect: (runId: string) => void;
  isLoading: boolean;
  errorMessage?: string | null;
};

function isRunInFlight(status?: string | null) {
  const value = (status || "").toLowerCase();
  return value.includes("wait") || value.includes("queue") || value.includes("process") || value.includes("running");
}

function getProgressTone(status?: string | null) {
  const value = (status || "").toLowerCase();
  if (value.includes("error") || value.includes("fail")) return "bg-rose-500";
  if (value.includes("success") || value.includes("done") || value.includes("complete")) return "bg-emerald-500";
  return "bg-sky-500";
}

function getStatusDotTone(status?: string | null) {
  const value = (status || "").toLowerCase();
  if (value.includes("error") || value.includes("fail")) return "bg-rose-500";
  if (value.includes("success") || value.includes("done") || value.includes("complete")) return "bg-emerald-500";
  if (value.includes("process") || value.includes("running")) return "bg-sky-500";
  return "bg-slate-400";
}

function getStatusSummary(status?: string | null) {
  const value = (status || "").toLowerCase();
  if (value.includes("error") || value.includes("fail")) return "Completed with an error";
  if (value.includes("success") || value.includes("done") || value.includes("complete")) return "Completed successfully";
  if (value.includes("wait") || value.includes("queue")) return "Queued";
  if (value.includes("process") || value.includes("running")) return "Currently running";
  return status || "Unknown status";
}

export function ActionRunsList({
  runs,
  selectedRunId,
  searchValue,
  onSearchChange,
  onSelect,
  isLoading,
  errorMessage,
}: ActionRunsListProps) {
  return (
    <Card className="flex flex-col overflow-hidden border-slate-200/80 dark:border-slate-800/80 lg:h-[calc(100vh-18rem)]">
      <CardHeader className="space-y-4 border-b border-slate-200/70 bg-white/80 dark:border-slate-800/70 dark:bg-slate-950/80">
        <CardTitle className="flex items-center gap-2 text-base">
          <Activity className="h-4 w-4 text-sky-500" />
          Action Runs
        </CardTitle>
        <CardDescription>Review completed and currently running executions in one place.</CardDescription>

        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search runs"
            className="pl-9"
          />
        </div>
      </CardHeader>

      <CardContent className="flex-1 min-h-0 p-3">
        <div className="flex h-full flex-col gap-3 overflow-y-auto pr-1">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-2xl border border-slate-200 p-4 dark:border-slate-800"
              >
                <div className="h-4 w-36 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="mt-3 h-3 w-full rounded bg-slate-100 dark:bg-slate-900" />
              </div>
            ))
          ) : errorMessage ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-950 dark:bg-rose-950/30 dark:text-rose-300">
              {errorMessage}
            </div>
          ) : runs.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-5 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-400">
              <div className="font-medium text-slate-900 dark:text-slate-50">No action runs yet</div>
              <p className="mt-1">Runs will show up here after an action is executed.</p>
            </div>
          ) : (
            runs.map((run) => {
              const progress = getRunProgressValue(run.status);
              const isActive = run._id === selectedRunId;
              const inFlight = isRunInFlight(run.status);

              return (
                <button
                  key={run._id}
                  type="button"
                  onClick={() => onSelect(run._id)}
                  className={cn(
                    "w-full rounded-2xl border p-4 text-left shadow-sm transition",
                    isActive
                      ? "border-sky-300 bg-sky-50/70 ring-1 ring-sky-200/80 dark:border-sky-700 dark:bg-sky-950/20 dark:ring-sky-900/60"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70 dark:border-slate-800 dark:bg-slate-950/70 dark:hover:border-slate-700 dark:hover:bg-slate-900/60",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-slate-900 dark:text-slate-50">
                        {getRunTitle(run)}
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                          {getActionFamilyLabel(run.result?.type)}
                        </span>
                        <span>{formatDateTime(run.created_at)}</span>
                      </div>
                    </div>

                    <Badge variant={getRunStatusVariant(run.status)}>{run.status || "unknown"}</Badge>
                  </div>

                  {inFlight ? (
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                        <span className="inline-flex items-center gap-1.5">
                          <LoaderCircle className="h-3.5 w-3.5 animate-spin text-sky-500" />
                          Running
                        </span>
                        <span>{progress}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800/80">
                        <div className={cn("h-full rounded-full transition-all duration-500", getProgressTone(run.status))} style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-2">
                        <span className={cn("h-2 w-2 rounded-full", getStatusDotTone(run.status))} />
                        {getStatusSummary(run.status)}
                      </span>
                      <span>{progress}%</span>
                    </div>
                  )}
                </button>
              );
            })
          )}
        </div>
      </CardContent>
    </Card>
  );
}
