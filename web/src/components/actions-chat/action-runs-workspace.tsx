"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Bot, PanelRightOpen } from "lucide-react";

import { ActionRunDetail } from "@/components/actions-chat/action-run-detail";
import { ActionRunsList } from "@/components/actions-chat/action-runs-list";
import { ActionRunsOverviewPanel } from "@/components/actions-chat/action-runs-overview-panel";
import { Button } from "@/components/ui/button";
import { mapRunToMessages, sortByUpdated, type ActionResultDoc, type ActionResultLiteDoc } from "@/lib/actions-chat/helpers";
import { toApiError } from "@/lib/api/client";
import { useAutobotsClient } from "@/lib/api/use-autobots-client";

const RUNS_QUERY_KEY = ["actions-chat", "runs"] as const;

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return "Something went wrong.";
}

function isRunInFlight(status?: string | null) {
  const value = (status || "").toLowerCase();
  return value.includes("wait") || value.includes("queue") || value.includes("process") || value.includes("running");
}

export function ActionRunsWorkspace() {
  const client = useAutobotsClient();

  const [selectedRunId, setSelectedRunId] = useState<string | null>(null);
  const [runSearch, setRunSearch] = useState("");
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  const actionRunsQuery = useQuery({
    queryKey: RUNS_QUERY_KEY,
    queryFn: async (): Promise<ActionResultLiteDoc[]> => {
      const { data, error, response } = await client.GET("/v1/action_results/", {
        params: {
          query: {
            limit: 200,
            offset: 0,
          },
        },
      });

      if (error) throw await toApiError(response);
      return (data?.docs || []) as ActionResultLiteDoc[];
    },
    refetchInterval: (query) => {
      const data = (query.state.data as ActionResultLiteDoc[] | undefined) || [];
      return data.some((run) => isRunInFlight(run.status)) ? 5000 : false;
    },
  });

  const runs = useMemo(() => sortByUpdated(actionRunsQuery.data || []), [actionRunsQuery.data]);

  const filteredRuns = useMemo(() => {
    const needle = runSearch.trim().toLowerCase();
    if (!needle) return runs;

    return runs.filter((run) => {
      const haystack = `${run.result?.name || "Action run"} ${run.status || ""} ${run.result?.type || ""}`.toLowerCase();
      return haystack.includes(needle);
    });
  }, [runSearch, runs]);

  const effectiveSelectedRunId = useMemo(() => {
    if (filteredRuns.length === 0) return null;
    return filteredRuns.some((run) => run._id === selectedRunId) ? selectedRunId : filteredRuns[0]._id;
  }, [filteredRuns, selectedRunId]);

  const selectedRunQuery = useQuery({
    queryKey: ["actions-chat", "run", effectiveSelectedRunId],
    enabled: Boolean(effectiveSelectedRunId),
    queryFn: async (): Promise<ActionResultDoc> => {
      const { data, error, response } = await client.GET("/v1/action_results/{id}", {
        params: {
          path: {
            id: effectiveSelectedRunId!,
          },
        },
      });

      if (error) throw await toApiError(response);
      return data as ActionResultDoc;
    },
    refetchInterval: (query) => {
      const run = query.state.data as ActionResultDoc | undefined;
      return run && isRunInFlight(run.status) ? 5000 : false;
    },
  });

  const selectedRunMessages = useMemo(() => mapRunToMessages(selectedRunQuery.data || null), [selectedRunQuery.data]);
  const runsErrorMessage = getErrorMessage(actionRunsQuery.error);
  const runningCount = runs.filter((run) => isRunInFlight(run.status)).length;
  const successfulRuns = runs.filter((run) => (run.status || "").toLowerCase().includes("success")).length;

  return (
    <>
      <div className="space-y-4">
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white/85 px-5 py-4 shadow-sm dark:border-slate-800/80 dark:bg-slate-950/70 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">Action Runs</h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Focus on the run list and transcript. Open overview only when you need workspace stats.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" onClick={() => setIsOverviewOpen(true)}>
              <PanelRightOpen className="h-4 w-4" />
              Overview
            </Button>
            <Link
              href="/actions"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
            >
              <Bot className="h-4 w-4" />
              Open actions
            </Link>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[340px_minmax(0,1fr)] 2xl:grid-cols-[380px_minmax(0,1fr)]">
          <ActionRunsList
            runs={filteredRuns}
            selectedRunId={effectiveSelectedRunId}
            searchValue={runSearch}
            onSearchChange={setRunSearch}
            onSelect={setSelectedRunId}
            isLoading={actionRunsQuery.isLoading}
            errorMessage={actionRunsQuery.error ? runsErrorMessage : null}
          />

          <ActionRunDetail
            run={selectedRunQuery.data || null}
            messages={selectedRunMessages}
            isLoading={selectedRunQuery.isLoading && Boolean(effectiveSelectedRunId)}
            errorMessage={selectedRunQuery.error ? getErrorMessage(selectedRunQuery.error) : null}
          />
        </div>
      </div>

      <ActionRunsOverviewPanel
        open={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        totalRuns={runs.length}
        runningCount={runningCount}
        successfulRuns={successfulRuns}
      />
    </>
  );
}
