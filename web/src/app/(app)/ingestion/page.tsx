"use client";

import { useMemo, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { UploadCloud } from "lucide-react";

import { useAutobotsClient } from "@/lib/api/use-autobots-client";
import { toApiError } from "@/lib/api/client";
import type { components } from "@/lib/api/schema";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FileListResponse = components["schemas"]["FileListResponseSchema"];
type JobStatus = components["schemas"]["JobStatusSchema"];
type IngestAsyncResponse = components["schemas"]["IngestAsyncResponse"];

function fmt(dt?: string | null) {
  if (!dt) return "—";
  const d = new Date(dt);
  return Number.isNaN(d.getTime()) ? dt : d.toLocaleString();
}

function badgeVariantFromStatus(status: string) {
  const s = status.toLowerCase();
  if (s.includes("error") || s.includes("failed")) return "danger" as const;
  if (s.includes("done") || s.includes("complete") || s.includes("success")) return "success" as const;
  if (s.includes("progress") || s.includes("processing")) return "warning" as const;
  return "default" as const;
}



export default function IngestionPage() {
  const client = useAutobotsClient();

  const [filenameContains, setFilenameContains] = useState("");
  const [status, setStatus] = useState("");
  const [scope, setScope] = useState<"personal" | "kb" | "all" | "">("all");

  const [limit, setLimit] = useState(25);
  const [offset, setOffset] = useState(0);

  const queryKey = useMemo(
    () => ["ingested-files", { filenameContains, status, scope, limit, offset }],
    [filenameContains, status, scope, limit, offset],
  );

  const filesQuery = useQuery({
    queryKey,
    queryFn: async (): Promise<FileListResponse> => {
      const { data, error, response } = await client.GET("/v1/ingestion/files", {
        params: {
          query: {
            filename_contains: filenameContains || undefined,
            status: status || undefined,
            scope: scope || undefined,
            limit,
            offset,
          },
        },
      });

      if (error) {
        throw await toApiError(response);
      }

      return data as FileListResponse;
    },
  });

  const uploadMutation = useMutation({
    mutationFn: async (args: { file: File; kbId?: string }) => {
      const body = new FormData();
      body.append("file", args.file);

      const { data, error, response } = await client.POST("/v1/ingestion/file/async", {
        params: {
          query: {
            kb_id: args.kbId || undefined,
          },
        },
        // openapi-fetch expects `body` for requestBody
        body: body as unknown as components["schemas"]["Body_ingest_file_async_v1_ingestion_file_async_post"],
      });

      if (error) {
        throw await toApiError(response);
      }

      return data as IngestAsyncResponse;
    },
    onSuccess: async () => {
      await filesQuery.refetch();
    },
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [kbId, setKbId] = useState("");

  const total = filesQuery.data?.total ?? 0;
  const pageStart = total === 0 ? 0 : offset + 1;
  const pageEnd = Math.min(offset + limit, total);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Ingestion</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Upload files and monitor ingestion jobs.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UploadCloud className="h-5 w-5" /> Upload
          </CardTitle>
          <CardDescription>
            Upload a file for async ingestion into your personal KB or a specific KB.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="file">File</Label>
              <Input
                id="file"
                type="file"
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="kbId">KB ID (optional)</Label>
              <Input
                id="kbId"
                placeholder="kb_..."
                value={kbId}
                onChange={(e) => setKbId(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button
              onClick={() => {
                if (!selectedFile) return;
                uploadMutation.mutate({ file: selectedFile, kbId: kbId.trim() || undefined });
              }}
              disabled={!selectedFile || uploadMutation.isPending}
            >
              {uploadMutation.isPending ? "Uploading…" : "Upload & Ingest"}
            </Button>

            {uploadMutation.data ? (
              <div className="text-sm text-slate-600 dark:text-slate-300">
                Queued job <span className="font-mono">{uploadMutation.data.job_id}</span>
              </div>
            ) : null}

            {uploadMutation.error ? (
              <div className="text-sm text-rose-600">{(uploadMutation.error as Error).message}</div>
            ) : null}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ingested files</CardTitle>
          <CardDescription>Filter and page through ingestion jobs.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-4">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="filenameContains">Filename contains</Label>
              <Input
                id="filenameContains"
                placeholder="report.pdf"
                value={filenameContains}
                onChange={(e) => {
                  setOffset(0);
                  setFilenameContains(e.target.value);
                }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Input
                id="status"
                placeholder="processing"
                value={status}
                onChange={(e) => {
                  setOffset(0);
                  setStatus(e.target.value);
                }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="scope">Scope</Label>
              <select
                id="scope"
                value={scope}
                onChange={(e) => {
                  setOffset(0);
                  const v = e.target.value;
                  if (v === "all" || v === "personal" || v === "kb") setScope(v);
                }}
                className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-400/60 focus:ring-4 focus:ring-sky-400/15 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"
              >
                <option value="all">all</option>
                <option value="personal">personal</option>
                <option value="kb">kb</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {total === 0 ? "No results." : `Showing ${pageStart}–${pageEnd} of ${total}`}
            </div>

            <div className="flex items-center gap-2">
              <select
                value={limit}
                onChange={(e) => {
                  setOffset(0);
                  setLimit(Number(e.target.value));
                }}
                className="h-9 rounded-lg border border-slate-200 bg-white px-2 text-xs dark:border-slate-800 dark:bg-slate-950"
              >
                {[10, 25, 50, 100].map((n) => (
                  <option key={n} value={n}>
                    {n} / page
                  </option>
                ))}
              </select>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => setOffset(Math.max(0, offset - limit))}
                disabled={offset === 0 || filesQuery.isFetching}
              >
                Prev
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setOffset(offset + limit)}
                disabled={offset + limit >= total || filesQuery.isFetching}
              >
                Next
              </Button>

              <Button variant="ghost" size="sm" onClick={() => filesQuery.refetch()}>
                Refresh
              </Button>
            </div>
          </div>

          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs text-slate-500 dark:bg-slate-900/40 dark:text-slate-400">
                <tr>
                  <th className="px-3 py-2">Filename</th>
                  <th className="px-3 py-2">Status</th>
                  <th className="px-3 py-2">Weaviate</th>
                  <th className="px-3 py-2">GraphRAG</th>
                  <th className="px-3 py-2">Updated</th>
                </tr>
              </thead>
              <tbody>
                {filesQuery.isLoading ? (
                  <tr>
                    <td className="px-3 py-4 text-slate-500" colSpan={5}>
                      Loading…
                    </td>
                  </tr>
                ) : filesQuery.error ? (
                  <tr>
                    <td className="px-3 py-4 text-rose-600" colSpan={5}>
                      {(filesQuery.error as Error).message}
                    </td>
                  </tr>
                ) : (filesQuery.data?.files || []).length === 0 ? (
                  <tr>
                    <td className="px-3 py-4 text-slate-500" colSpan={5}>
                      No jobs found.
                    </td>
                  </tr>
                ) : (
                  (filesQuery.data?.files || []).map((job: JobStatus) => (
                    <tr
                      key={job._id}
                      className="border-t border-slate-200 hover:bg-slate-50/80 dark:border-slate-800 dark:hover:bg-slate-900/20"
                    >
                      <td className="px-3 py-3">
                        <div className="font-medium text-slate-900 dark:text-slate-50">
                          {job.original_filename || "—"}
                        </div>
                        <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                          <span className="font-mono">{job._id}</span>
                        </div>
                      </td>
                      <td className="px-3 py-3">
                        <Badge variant={badgeVariantFromStatus(job.status)}>{job.status}</Badge>
                      </td>
                      <td className="px-3 py-3">
                        <Badge variant={badgeVariantFromStatus(job.weaviate_status)}>
                          {job.weaviate_status}
                        </Badge>
                      </td>
                      <td className="px-3 py-3">
                        <Badge variant={badgeVariantFromStatus(job.graphrag_status)}>
                          {job.graphrag_status}
                        </Badge>
                      </td>
                      <td className="px-3 py-3 text-xs text-slate-500 dark:text-slate-400">
                        {fmt(job.updated_at)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
