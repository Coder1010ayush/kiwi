"use client";

import { Activity, LoaderCircle, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MessageBody } from "@/components/actions-chat/message-body";
import {
  formatDateTime,
  getActionFamilyLabel,
  getMessageDisplay,
  getRunProgressValue,
  getRunStatusVariant,
  getRunTitle,
  type ActionResultDoc,
  type Message,
} from "@/lib/actions-chat/helpers";
import { cn } from "@/lib/utils";

type ActionRunDetailProps = {
  run: ActionResultDoc | null;
  messages: Message[];
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

function getRunSummary(status?: string | null) {
  const value = (status || "").toLowerCase();
  if (value.includes("error") || value.includes("fail")) return "This run finished with an error.";
  if (value.includes("success") || value.includes("done") || value.includes("complete")) return "This run completed successfully.";
  if (value.includes("wait") || value.includes("queue")) return "This run is queued and waiting for execution.";
  if (value.includes("process") || value.includes("running")) return "This run is currently executing.";
  return status || "Unknown status";
}


export function ActionRunDetail({ run, messages, isLoading, errorMessage }: ActionRunDetailProps) {
  if (!run) {
    return (
      <Card className="border-slate-200/80 dark:border-slate-800/80 lg:h-[calc(100vh-18rem)]">
        <CardContent className="flex h-full min-h-[700px] flex-col items-center justify-center gap-4 p-10 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500/15 to-emerald-500/15 text-sky-600 dark:text-sky-300">
            <Sparkles className="h-8 w-8" />
          </div>
          <div>
            <div className="text-xl font-semibold text-slate-900 dark:text-slate-50">Select an action run</div>
            <p className="mt-2 max-w-lg text-sm text-slate-500 dark:text-slate-400">
              Open a previous or currently running execution to inspect its status, timing, and conversation transcript.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const progress = getRunProgressValue(run.status);
  const inFlight = isRunInFlight(run.status);

  return (
    <Card className="flex min-h-[700px] flex-col overflow-hidden border-slate-200/80 shadow-sm dark:border-slate-800/80 lg:h-[calc(100vh-18rem)]">
      <div className="border-b border-slate-200/70 bg-white/90 px-5 py-5 dark:border-slate-800/70 dark:bg-slate-950/80">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <Activity className="h-3.5 w-3.5 text-sky-500" />
              Action run
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">{getRunTitle(run)}</h1>
              <Badge variant="default">{getActionFamilyLabel(run.result?.type)}</Badge>
              <Badge variant={getRunStatusVariant(run.status)}>{run.status || "unknown"}</Badge>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{getRunSummary(run.status)}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:w-[360px]">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/60">
              <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Created</div>
              <div className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-50">{formatDateTime(run.created_at)}</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/60">
              <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Updated</div>
              <div className="mt-2 text-sm font-medium text-slate-900 dark:text-slate-50">{formatDateTime(run.updated_at)}</div>
            </div>
          </div>
        </div>

        {inFlight ? (
          <div className="mt-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-4 dark:border-slate-800/80 dark:bg-slate-900/50">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <LoaderCircle className="h-3.5 w-3.5 animate-spin text-sky-500" />
                  Run progress
                </span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800/80">
                <div className={cn("h-full rounded-full transition-all duration-500", getProgressTone(run.status))} style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="flex-1 overflow-y-auto bg-slate-50/60 px-5 py-5 dark:bg-slate-950/40">
        {isLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/70"
              >
                <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="mt-4 h-3 w-full rounded bg-slate-100 dark:bg-slate-900" />
                <div className="mt-2 h-3 w-4/5 rounded bg-slate-100 dark:bg-slate-900" />
              </div>
            ))}
          </div>
        ) : errorMessage ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-950 dark:bg-rose-950/30 dark:text-rose-300">
            {errorMessage}
          </div>
        ) : messages.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-white/80 p-8 text-center text-sm text-slate-500 shadow-sm dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400">
            This run does not have a conversation transcript yet.
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message, index) => {
              const { text, urls } = getMessageDisplay(message);
              const messageText = text || "(No renderable text)";
              const isUser = message.role === "user";

              return (
                <div key={`${run._id}-${index}`} className={cn("flex", isUser ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[min(78ch,88%)] rounded-[28px] border px-4 py-3 shadow-sm",
                      isUser
                        ? "border-sky-200 bg-sky-50 text-slate-900 dark:border-sky-900/70 dark:bg-sky-950/30 dark:text-slate-50"
                        : "border-slate-200 bg-white text-slate-900 dark:border-slate-800 dark:bg-slate-950/85 dark:text-slate-50",
                    )}
                  >
                    <MessageBody text={messageText} urls={urls} isUser={isUser} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
}
