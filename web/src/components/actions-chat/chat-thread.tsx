"use client";

import { useEffect, useMemo, useRef } from "react";
import { Bot, MessageSquare, SendHorizontal, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { MessageBody } from "@/components/actions-chat/message-body";
import {
  formatDateTime,
  getActionFamilyLabel,
  getActionModel,
  getActionSystemPrompt,
  getMessageDisplay,
  type ActionDoc,
  type ActionLiteDoc,
  type Message,
} from "@/lib/actions-chat/helpers";
import { cn } from "@/lib/utils";

type ConversationMeta = {
  id: string;
  title: string;
  updatedAt?: string | null;
  mode: "chat" | "run";
};

type ChatThreadProps = {
  selectedAction: ActionLiteDoc | null;
  selectedActionDetail: ActionDoc | null;
  selectedConversation: ConversationMeta | null;
  messages: Message[];
  composerValue: string;
  onComposerChange: (value: string) => void;
  onSend: () => void;
  onOpenCreateAction: () => void;
  onCreateConversation: () => void;
  isConversationLoading: boolean;
  isSending: boolean;
  sendError?: string | null;
};


export function ChatThread({
  selectedAction,
  selectedActionDetail,
  selectedConversation,
  messages,
  composerValue,
  onComposerChange,
  onSend,
  onOpenCreateAction,
  onCreateConversation,
  isConversationLoading,
  isSending,
  sendError,
}: ChatThreadProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTop = container.scrollHeight;
  }, [messages, isSending, selectedConversation?.id]);

  const providerLabel = useMemo(() => getActionFamilyLabel(selectedAction?.type), [selectedAction?.type]);
  const model = useMemo(() => getActionModel(selectedActionDetail), [selectedActionDetail]);
  const systemPrompt = useMemo(() => getActionSystemPrompt(selectedActionDetail), [selectedActionDetail]);

  if (!selectedAction) {
    return (
      <Card className="h-full min-h-[700px] border-slate-200/80 dark:border-slate-800/80 lg:h-[calc(100vh-18rem)]">
        <CardContent className="flex h-full flex-col items-center justify-center gap-4 p-10 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-500/15 to-emerald-500/15 text-sky-600 dark:text-sky-300">
            <Sparkles className="h-8 w-8" />
          </div>
          <div>
            <div className="text-xl font-semibold text-slate-900 dark:text-slate-50">Create your first action</div>
            <p className="mt-2 max-w-lg text-sm text-slate-500 dark:text-slate-400">
              Use the guided form to create an action, then start chatting with it in a clean, full-height workspace.
            </p>
          </div>
          <Button onClick={onOpenCreateAction}>Create action</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="flex h-full min-h-[700px] flex-col overflow-hidden border-slate-200/80 shadow-sm dark:border-slate-800/80 lg:h-[calc(100vh-18rem)]">
      <div className="border-b border-slate-200/70 bg-white/90 px-5 py-5 dark:border-slate-800/70 dark:bg-slate-950/80">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <Bot className="h-3.5 w-3.5 text-sky-500" />
              Action workspace
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">{selectedAction.name}</h1>
              <Badge variant="default">{providerLabel}</Badge>
              {model ? <Badge variant="success">{model}</Badge> : null}
            </div>
            <p className="mt-2 max-w-3xl text-sm text-slate-600 dark:text-slate-300">
              {selectedAction.description || "No description provided for this action."}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={onCreateConversation}>
              <MessageSquare className="h-4 w-4" />
              New chat
            </Button>
          </div>
        </div>

        {systemPrompt ? (
          <div className="mt-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-sm text-slate-600 dark:border-slate-800/80 dark:bg-slate-900/50 dark:text-slate-300">
            <div className="font-medium text-slate-900 dark:text-slate-50">System prompt</div>
            <p className="mt-2 line-clamp-3 whitespace-pre-wrap">{systemPrompt}</p>
          </div>
        ) : null}
      </div>

      {!selectedConversation ? (
        <CardContent className="flex flex-1 flex-col items-center justify-center gap-4 p-10 text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-300">
            <MessageSquare className="h-7 w-7" />
          </div>
          <div>
            <div className="text-lg font-semibold text-slate-900 dark:text-slate-50">Start a conversation</div>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Kiwi uses saved backend chats when available and falls back to runtime sessions when needed.
            </p>
          </div>
          <Button onClick={onCreateConversation}>Create new conversation</Button>
        </CardContent>
      ) : (
        <>
          <div className="flex items-center justify-between border-b border-slate-200/70 bg-slate-50/70 px-5 py-3 dark:border-slate-800/70 dark:bg-slate-900/50">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-50">
                <span className="truncate">{selectedConversation.title}</span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                    selectedConversation.mode === "chat"
                      ? "bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300"
                      : "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300",
                  )}
                >
                  {selectedConversation.mode === "chat" ? "Saved chat" : "Runtime session"}
                </span>
              </div>
              <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Updated {formatDateTime(selectedConversation.updatedAt)}
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto bg-slate-50/60 px-5 py-5 dark:bg-slate-950/40">
            {isConversationLoading ? (
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
            ) : messages.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-200 bg-white/80 p-8 text-center text-sm text-slate-500 shadow-sm dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400">
                No messages yet. Send the first prompt to begin.
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message, index) => {
                  const { text, urls } = getMessageDisplay(message);
                  const messageText = text || "(No renderable text)";
                  const isUser = message.role === "user";

                  return (
                    <div key={`${selectedConversation.id}-${index}`} className={cn("flex", isUser ? "justify-end" : "justify-start")}>
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

            {isSending ? (
              <div className="mt-4 flex justify-start">
                <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-500 shadow-sm dark:border-slate-800 dark:bg-slate-950/85 dark:text-slate-300">
                  Assistant is thinking...
                </div>
              </div>
            ) : null}
          </div>

          <div className="border-t border-slate-200/70 bg-white/95 px-5 py-4 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/90">
            {sendError ? (
              <div className="mb-3 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:border-rose-950 dark:bg-rose-950/30 dark:text-rose-300">
                {sendError}
              </div>
            ) : null}
            <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <Textarea
                className="min-h-24 resize-none border-0 bg-transparent p-0 shadow-none focus:ring-0"
                placeholder="Message your action..."
                value={composerValue}
                onChange={(event) => onComposerChange(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    onSend();
                  }
                }}
              />
              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="text-xs text-slate-500 dark:text-slate-400">Press Enter to send. Use Shift + Enter for a new line.</div>
                <Button onClick={onSend} disabled={!composerValue.trim() || isSending}>
                  <SendHorizontal className="h-4 w-4" />
                  {isSending ? "Sending..." : "Send"}
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
