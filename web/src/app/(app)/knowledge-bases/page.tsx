"use client";

import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Database, Plus } from "lucide-react";

import { useAutobotsClient } from "@/lib/api/use-autobots-client";
import { toApiError } from "@/lib/api/client";
import type { components } from "@/lib/api/schema";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type KnowledgeBase = components["schemas"]["KnowledgeBaseResponse"];

type KnowledgeBaseCreateRequest = components["schemas"]["KnowledgeBaseCreateRequest"];

type KnowledgeBaseRole = components["schemas"]["KnowledgeBaseRole"];

function roleBadgeVariant(role: KnowledgeBaseRole) {
  switch (role) {
    case "admin":
      return "success" as const;
    case "read_write_update":
      return "warning" as const;
    default:
      return "default" as const;
  }
}



export default function KnowledgeBasesPage() {
  const client = useAutobotsClient();

  const kbsQuery = useQuery({
    queryKey: ["kbs"],
    queryFn: async (): Promise<KnowledgeBase[]> => {
      const { data, error, response } = await client.GET("/v1/ingestion/kb/", {});
      if (error) throw await toApiError(response);
      return (data || []) as KnowledgeBase[];
    },
  });

  const createMutation = useMutation({
    mutationFn: async (payload: KnowledgeBaseCreateRequest) => {
      const { data, error, response } = await client.POST("/v1/ingestion/kb/", {
        body: payload,
      });
      if (error) throw await toApiError(response);
      return data;
    },
    onSuccess: async () => {
      await kbsQuery.refetch();
    },
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Knowledge Bases</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Create and browse knowledge bases you have access to.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" /> Create KB
          </CardTitle>
          <CardDescription>New knowledge base (name required).</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="My KB"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description (optional)</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What is this KB for?"
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
            <Button
              onClick={() => createMutation.mutate({ name, description: description || null })}
              disabled={!name.trim() || createMutation.isPending}
            >
              {createMutation.isPending ? "Creating…" : "Create"}
            </Button>
            {createMutation.error ? (
              <div className="text-sm text-rose-600">{(createMutation.error as Error).message}</div>
            ) : null}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" /> Your KBs
          </CardTitle>
          <CardDescription>List of knowledge bases returned by the API.</CardDescription>
        </CardHeader>
        <CardContent>
          {kbsQuery.isLoading ? (
            <div className="text-sm text-slate-500">Loading…</div>
          ) : kbsQuery.error ? (
            <div className="text-sm text-rose-600">{(kbsQuery.error as Error).message}</div>
          ) : (kbsQuery.data || []).length === 0 ? (
            <div className="text-sm text-slate-500">No KBs found.</div>
          ) : (
            <div className="grid gap-3 md:grid-cols-2">
              {(kbsQuery.data || []).map((kb) => (
                <div
                  key={kb._id}
                  className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50/70 dark:border-slate-800 dark:hover:bg-slate-900/20"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold">{kb.name}</div>
                      <div className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
                        {kb.description || "—"}
                      </div>
                      <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-mono">{kb._id}</span>
                      </div>
                    </div>

                    <Badge variant={roleBadgeVariant(kb.current_user_role)}>
                      {kb.current_user_role}
                    </Badge>
                  </div>

                  <div className="mt-3 flex gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <div className="rounded-lg bg-slate-100 px-2 py-1 dark:bg-slate-900">
                      files: <span className="font-medium">{kb.file_count}</span>
                    </div>
                    <div className="rounded-lg bg-slate-100 px-2 py-1 dark:bg-slate-900">
                      members: <span className="font-medium">{kb.member_count}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
