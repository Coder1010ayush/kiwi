"use client";

import { MessageSquarePlus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDateTime } from "@/lib/actions-chat/helpers";
import { cn } from "@/lib/utils";

export type ConversationListItem = {
  id: string;
  title: string;
  preview: string;
  updatedAt?: string | null;
  mode: "chat" | "run";
};

type ChatListProps = {
  conversations: ConversationListItem[];
  selectedConversationId: string | null;
  onSelect: (conversationId: string) => void;
  onCreateConversation: () => void;
  onDeleteConversation: (conversationId: string) => void;
  canCreateConversation: boolean;
  isLoading: boolean;
  isCreatingConversation: boolean;
  deletingConversationId?: string | null;
  errorMessage?: string | null;
};

export function ChatList({
  conversations,
  selectedConversationId,
  onSelect,
  onCreateConversation,
  onDeleteConversation,
  canCreateConversation,
  isLoading,
  isCreatingConversation,
  deletingConversationId,
  errorMessage,
}: ChatListProps) {
  return (
    <Card className="flex flex-col overflow-hidden border-slate-200/80 dark:border-slate-800/80 lg:h-[calc(100vh-18rem)]">
      <CardHeader className="space-y-4 border-b border-slate-200/70 bg-white/80 dark:border-slate-800/70 dark:bg-slate-950/80">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-base">Chats</CardTitle>
            <CardDescription>Saved chats when supported, with runtime sessions as fallback.</CardDescription>
          </div>

          <Button
            size="sm"
            variant="secondary"
            onClick={onCreateConversation}
            disabled={!canCreateConversation || isCreatingConversation}
          >
            <MessageSquarePlus className="h-4 w-4" />
            {isCreatingConversation ? "Creating..." : "New"}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 min-h-0 p-3">
        <div className="flex h-full flex-col gap-3 overflow-y-auto pr-1">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="animate-pulse rounded-2xl border border-slate-200 p-4 dark:border-slate-800"
              >
                <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-800" />
                <div className="mt-3 h-3 w-full rounded bg-slate-100 dark:bg-slate-900" />
              </div>
            ))
          ) : errorMessage ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-950 dark:bg-rose-950/30 dark:text-rose-300">
              {errorMessage}
            </div>
          ) : conversations.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-5 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-400">
              <div className="font-medium text-slate-900 dark:text-slate-50">No conversations yet</div>
              <p className="mt-1">Start the first conversation for the selected action.</p>
            </div>
          ) : (
            conversations.map((conversation) => {
              const isActive = conversation.id === selectedConversationId;
              const isDeleting = deletingConversationId === conversation.id;

              return (
                <div
                  key={conversation.id}
                  className={cn(
                    "group flex items-start gap-3 rounded-2xl border p-4 shadow-sm transition",
                    isActive
                      ? "border-sky-300 bg-sky-50/70 ring-1 ring-sky-200/80 dark:border-sky-700 dark:bg-sky-950/20 dark:ring-sky-900/60"
                      : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70 dark:border-slate-800 dark:bg-slate-950/70 dark:hover:border-slate-700 dark:hover:bg-slate-900/60",
                  )}
                >
                  <button type="button" className="min-w-0 flex-1 text-left" onClick={() => onSelect(conversation.id)}>
                    <div className="flex items-center gap-2">
                      <div className="truncate text-sm font-semibold text-slate-900 dark:text-slate-50">
                        {conversation.title}
                      </div>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                          conversation.mode === "chat"
                            ? "bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300"
                            : "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300",
                        )}
                      >
                        {conversation.mode === "chat" ? "saved" : "runtime"}
                      </span>
                    </div>
                    <div className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">{conversation.preview}</div>
                    <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                      Updated {formatDateTime(conversation.updatedAt)}
                    </div>
                  </button>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-70 transition group-hover:opacity-100"
                    onClick={() => onDeleteConversation(conversation.id)}
                    disabled={isDeleting}
                    aria-label={`Delete conversation ${conversation.title}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              );
            })
          )}
        </div>
      </CardContent>
    </Card>
  );
}
