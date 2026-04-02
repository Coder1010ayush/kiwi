"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Activity, Bot, Sparkles } from "lucide-react";

import { ActionList } from "@/components/actions-chat/action-list";
import { ChatList, type ConversationListItem } from "@/components/actions-chat/chat-list";
import { ChatThread } from "@/components/actions-chat/chat-thread";
import { CreateActionDialog } from "@/components/actions-chat/create-action-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  buildRunTranscript,
  createLocalMessage,
  getActionFamilyLabel,
  getChatPreview,
  getChatTitle,
  getChatTransportProvider,
  getLatestActionOutput,
  getMessageText,
  isSupportedActionType,
  sortByUpdated,
  type ActionDoc,
  type ActionLiteDoc,
  type ChatDoc,
  type ChatTransportProvider,
  type Message,
} from "@/lib/actions-chat/helpers";
import type { ActionCreatePayload } from "@/lib/actions-chat/presets";
import { toApiError } from "@/lib/api/client";
import type { components } from "@/lib/api/schema";
import { useAutobotsClient } from "@/lib/api/use-autobots-client";

type DataBlockInput = components["schemas"]["DataBlock-Input"];

const ACTIONS_QUERY_KEY = ["actions-chat", "actions"] as const;
const CHATS_QUERY_KEY = ["actions-chat", "chats"] as const;

type RunSession = {
  id: string;
  actionId: string;
  title: string;
  messages: Message[];
  createdAt: string;
  updatedAt: string;
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return "Something went wrong.";
}

function createRuntimeSession(action: ActionLiteDoc | null, existingCount: number): RunSession {
  const now = new Date().toISOString();
  return {
    id: `run:${globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`}`,
    actionId: action?._id || "",
    title: action ? `${action.name} · Session ${existingCount + 1}` : "Runtime session",
    messages: [],
    createdAt: now,
    updatedAt: now,
  };
}

function sessionPreview(session: RunSession) {
  const last = [...session.messages].reverse().map(getMessageText).find((value) => value.trim());
  if (!last) return "Unsaved runtime session";
  return last.length > 92 ? `${last.slice(0, 89)}...` : last;
}

export function ActionsWorkspace() {
  const client = useAutobotsClient();
  const queryClient = useQueryClient();

  const [selectedActionId, setSelectedActionId] = useState<string | null>(null);
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  const [actionSearch, setActionSearch] = useState("");
  const [composer, setComposer] = useState("");
  const [isCreateActionOpen, setIsCreateActionOpen] = useState(false);
  const [runSessions, setRunSessions] = useState<RunSession[]>([]);

  const actionsQuery = useQuery({
    queryKey: ACTIONS_QUERY_KEY,
    queryFn: async (): Promise<ActionLiteDoc[]> => {
      const { data, error, response } = await client.GET("/v1/actions/", {
        params: {
          query: {
            limit: 200,
            offset: 0,
          },
        },
      });

      if (error) throw await toApiError(response);
      return (data?.docs || []) as ActionLiteDoc[];
    },
  });

  const chatsQuery = useQuery({
    queryKey: CHATS_QUERY_KEY,
    queryFn: async (): Promise<ChatDoc[]> => {
      const { data, error, response } = await client.GET("/v1/action_chats/", {
        params: {
          query: {
            limit: 100,
            offset: 0,
          },
        },
      });

      if (error) throw await toApiError(response);
      return (data || []) as ChatDoc[];
    },
  });

  const actions = useMemo(
    () => sortByUpdated((actionsQuery.data || []).filter((action) => isSupportedActionType(action.type))),
    [actionsQuery.data],
  );

  const filteredActions = useMemo(() => {
    const needle = actionSearch.trim().toLowerCase();
    if (!needle) return actions;

    return actions.filter((action) => {
      const haystack = `${action.name} ${action.description || ""} ${action.type}`.toLowerCase();
      return haystack.includes(needle);
    });
  }, [actionSearch, actions]);

  const effectiveSelectedActionId = useMemo(() => {
    if (filteredActions.length === 0) return null;
    return filteredActions.some((action) => action._id === selectedActionId)
      ? selectedActionId
      : filteredActions[0]._id;
  }, [filteredActions, selectedActionId]);

  const selectedAction = useMemo(
    () => actions.find((action) => action._id === effectiveSelectedActionId) || null,
    [actions, effectiveSelectedActionId],
  );

  const selectedActionQuery = useQuery({
    queryKey: ["actions-chat", "action", effectiveSelectedActionId],
    enabled: Boolean(effectiveSelectedActionId),
    queryFn: async (): Promise<ActionDoc> => {
      const { data, error, response } = await client.GET("/v1/actions/{id}", {
        params: {
          path: {
            id: effectiveSelectedActionId!,
          },
        },
      });

      if (error) throw await toApiError(response);
      return data as ActionDoc;
    },
  });

  const selectedActionDetail = selectedActionQuery.data || null;
  const chatTransportProvider = getChatTransportProvider(selectedActionDetail);

  const backendChatsForSelectedAction = useMemo(() => {
    const chats = chatsQuery.data || [];
    if (!effectiveSelectedActionId) return [];
    return sortByUpdated(chats.filter((chat) => chat.action?._id === effectiveSelectedActionId));
  }, [chatsQuery.data, effectiveSelectedActionId]);

  const runtimeSessionsForSelectedAction = useMemo(
    () =>
      [...runSessions.filter((session) => session.actionId === effectiveSelectedActionId)].sort(
        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      ),
    [runSessions, effectiveSelectedActionId],
  );

  const conversations = useMemo<ConversationListItem[]>(() => {
    const backend = backendChatsForSelectedAction.map((chat) => ({
      id: `chat:${chat._id}`,
      title: getChatTitle(chat),
      preview: getChatPreview(chat),
      updatedAt: chat.updated_at || chat.created_at,
      mode: "chat" as const,
    }));

    const runtime = runtimeSessionsForSelectedAction.map((session) => ({
      id: session.id,
      title: session.title,
      preview: sessionPreview(session),
      updatedAt: session.updatedAt,
      mode: "run" as const,
    }));

    return [...runtime, ...backend].sort((a, b) => {
      const aTime = new Date(a.updatedAt || 0).getTime();
      const bTime = new Date(b.updatedAt || 0).getTime();
      return bTime - aTime;
    });
  }, [backendChatsForSelectedAction, runtimeSessionsForSelectedAction]);

  const effectiveSelectedConversationId = useMemo(() => {
    if (conversations.length === 0) return null;
    return conversations.some((conversation) => conversation.id === selectedConversationId)
      ? selectedConversationId
      : conversations[0].id;
  }, [conversations, selectedConversationId]);

  const selectedBackendChatId = effectiveSelectedConversationId?.startsWith("chat:")
    ? effectiveSelectedConversationId.slice(5)
    : null;

  const selectedRuntimeSession = useMemo(
    () => runSessions.find((session) => session.id === effectiveSelectedConversationId) || null,
    [runSessions, effectiveSelectedConversationId],
  );

  const selectedChatQuery = useQuery({
    queryKey: ["actions-chat", "chat", selectedBackendChatId],
    enabled: Boolean(selectedBackendChatId),
    queryFn: async (): Promise<ChatDoc> => {
      const { data, error, response } = await client.GET("/v1/action_chats/{id}", {
        params: {
          path: {
            id: selectedBackendChatId!,
          },
        },
      });

      if (error) throw await toApiError(response);
      return data as ChatDoc;
    },
  });

  const selectedConversation = useMemo(() => {
    if (selectedRuntimeSession) {
      return {
        id: selectedRuntimeSession.id,
        title: selectedRuntimeSession.title,
        updatedAt: selectedRuntimeSession.updatedAt,
        mode: "run" as const,
      };
    }

    const chat = selectedChatQuery.data || backendChatsForSelectedAction.find((item) => item._id === selectedBackendChatId) || null;
    if (!chat) return null;

    return {
      id: `chat:${chat._id}`,
      title: getChatTitle(chat),
      updatedAt: chat.updated_at || chat.created_at,
      mode: "chat" as const,
    };
  }, [backendChatsForSelectedAction, selectedBackendChatId, selectedChatQuery.data, selectedRuntimeSession]);

  const selectedMessages = selectedRuntimeSession?.messages || selectedChatQuery.data?.messages || [];

  const createChatMutation = useMutation({
    mutationFn: async ({ actionId, provider }: { actionId: string; provider: ChatTransportProvider }) => {
      const { data, error, response } = await client.POST("/v1/action_chats/", {
        params: {
          query: {
            action_id: actionId,
            openai_provider: provider,
          },
        },
      });

      if (error) throw await toApiError(response);
      return data as ChatDoc;
    },
    onSuccess: async (chat) => {
      await queryClient.invalidateQueries({ queryKey: CHATS_QUERY_KEY });
      setSelectedConversationId(`chat:${chat._id}`);
    },
  });

  const createActionMutation = useMutation({
    mutationFn: async (payload: ActionCreatePayload) => {
      const { data, error, response } = await client.POST("/v1/actions/", {
        body: payload,
      });

      if (error) throw await toApiError(response);
      return data as ActionDoc;
    },
    onSuccess: async (action) => {
      await queryClient.invalidateQueries({ queryKey: ACTIONS_QUERY_KEY });
      setActionSearch("");
      setSelectedActionId(action._id);
    },
  });

  const deleteChatMutation = useMutation({
    mutationFn: async (chatId: string) => {
      const { data, error, response } = await client.DELETE("/v1/action_chats/{id}", {
        params: {
          path: {
            id: chatId,
          },
        },
      });

      if (error) throw await toApiError(response);
      return data as ChatDoc;
    },
    onSuccess: async (_, chatId) => {
      if (`chat:${chatId}` === effectiveSelectedConversationId) {
        setSelectedConversationId(null);
      }
      await queryClient.invalidateQueries({ queryKey: CHATS_QUERY_KEY });
    },
  });

  const sendChatMessageMutation = useMutation({
    mutationFn: async ({ chatId, text }: { chatId: string; text: string }) => {
      const { data, error, response } = await client.POST("/v1/action_chats/{id}", {
        params: {
          path: {
            id: chatId,
          },
        },
        body: {
          text,
        } as DataBlockInput,
      });

      if (error) throw await toApiError(response);
      return data as string;
    },
    onMutate: async ({ chatId, text }) => {
      const chatKey = ["actions-chat", "chat", chatId] as const;
      await queryClient.cancelQueries({ queryKey: chatKey });

      const previousChat = queryClient.getQueryData<ChatDoc>(chatKey) || null;
      if (previousChat) {
        queryClient.setQueryData(chatKey, {
          ...previousChat,
          messages: [...(previousChat.messages || []), createLocalMessage("user", text)],
        });
      }

      setComposer("");
      return { chatKey, previousChat };
    },
    onSuccess: (assistantReply, { chatId }, context) => {
      if (!context) return;
      const current = queryClient.getQueryData<ChatDoc>(context.chatKey);
      if (!current) return;

      queryClient.setQueryData<ChatDoc>(context.chatKey, {
        ...current,
        messages: [...(current.messages || []), createLocalMessage("assistant", assistantReply)],
      });

      queryClient.invalidateQueries({ queryKey: ["actions-chat", "chat", chatId] });
      queryClient.invalidateQueries({ queryKey: CHATS_QUERY_KEY });
    },
    onError: (_error, variables, context) => {
      if (context?.previousChat) {
        queryClient.setQueryData(context.chatKey, context.previousChat);
      }
      setComposer(variables.text);
    },
    onSettled: async (_data, _error, variables) => {
      await queryClient.invalidateQueries({ queryKey: ["actions-chat", "chat", variables.chatId] });
      await queryClient.invalidateQueries({ queryKey: CHATS_QUERY_KEY });
    },
  });

  const runActionMutation = useMutation({
    mutationFn: async ({ actionId, text }: { actionId: string; text: string }) => {
      const { data, error, response } = await client.POST("/v1/actions/{id}/run", {
        params: {
          path: {
            id: actionId,
          },
        },
        body: {
          text,
        },
      });

      if (error) throw await toApiError(response);
      return data as ActionDoc;
    },
  });

  async function handleCreateConversation(actionId = effectiveSelectedActionId, provider = chatTransportProvider) {
    if (!actionId) return;

    setSelectedActionId(actionId);

    try {
      const chat = await createChatMutation.mutateAsync({ actionId, provider });
      setSelectedConversationId(`chat:${chat._id}`);
      return;
    } catch {
      const session = createRuntimeSession(selectedAction, runtimeSessionsForSelectedAction.length);
      setRunSessions((current) => [session, ...current]);
      setSelectedConversationId(session.id);
    }
  }

  async function handleCreateAction(payload: ActionCreatePayload) {
    const action = await createActionMutation.mutateAsync(payload);
    setIsCreateActionOpen(false);
    setSelectedActionId(action._id);
    setSelectedConversationId(null);

    try {
      await handleCreateConversation(action._id, getChatTransportProvider(action));
    } catch {
      // runtime fallback handled above
    }
  }

  function deleteRuntimeSession(sessionId: string) {
    setRunSessions((current) => current.filter((session) => session.id !== sessionId));
    if (sessionId === effectiveSelectedConversationId) {
      setSelectedConversationId(null);
    }
  }

  async function handleSendMessage() {
    const text = composer.trim();
    if (!effectiveSelectedActionId || !effectiveSelectedConversationId || !text) return;

    if (selectedBackendChatId) {
      if (sendChatMessageMutation.isPending) return;
      await sendChatMessageMutation.mutateAsync({ chatId: selectedBackendChatId, text });
      return;
    }

    if (!selectedRuntimeSession || runActionMutation.isPending) return;

    const previousMessages = selectedRuntimeSession.messages;
    const userMessage = createLocalMessage("user", text);
    setComposer("");
    setRunSessions((current) =>
      current.map((session) =>
        session.id === selectedRuntimeSession.id
          ? {
              ...session,
              messages: [...session.messages, userMessage],
              updatedAt: new Date().toISOString(),
            }
          : session,
      ),
    );

    try {
      const response = await runActionMutation.mutateAsync({
        actionId: effectiveSelectedActionId,
        text: buildRunTranscript(previousMessages, text),
      });

      const assistantOutput = getLatestActionOutput(response) || "Received a response, but there was no renderable output.";

      setRunSessions((current) =>
        current.map((session) =>
          session.id === selectedRuntimeSession.id
            ? {
                ...session,
                messages: [...session.messages, createLocalMessage("assistant", assistantOutput)],
                updatedAt: new Date().toISOString(),
              }
            : session,
        ),
      );
    } catch {
      setRunSessions((current) =>
        current.map((session) =>
          session.id === selectedRuntimeSession.id
            ? {
                ...session,
                messages: previousMessages,
                updatedAt: new Date().toISOString(),
              }
            : session,
        ),
      );
      setComposer(text);
      throw new Error("Run failed.");
    }
  }

  const actionErrorMessage = getErrorMessage(actionsQuery.error);
  const chatListErrorMessage = getErrorMessage(chatsQuery.error);
  const sendError = selectedBackendChatId
    ? sendChatMessageMutation.error
      ? getErrorMessage(sendChatMessageMutation.error)
      : null
    : runActionMutation.error
      ? getErrorMessage(runActionMutation.error)
      : null;

  return (
    <>
      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-6 py-7 shadow-sm dark:border-slate-800/80 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 md:px-8">
          <div className="pointer-events-none absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-60px] left-[-40px] h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-medium text-sky-700 shadow-sm dark:border-sky-900/70 dark:bg-slate-950/70 dark:text-sky-300">
                <Sparkles className="h-3.5 w-3.5" />
                Dedicated actions workspace
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">Actions</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                Create reusable provider-backed actions, launch chats, and work in a cleaner space without run history competing for attention.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={() => setIsCreateActionOpen(true)}>
                <Bot className="h-4 w-4" />
                Create action
              </Button>
              <Link
                href="/action-runs"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 text-sm font-medium text-slate-900 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-slate-800"
              >
                <Activity className="h-4 w-4" />
                Open action runs
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="border-slate-200/80 dark:border-slate-800/80">
            <CardContent className="p-5">
              <div className="text-sm text-slate-500 dark:text-slate-400">Supported actions</div>
              <div className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-50">{actions.length}</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">OpenAI, Claude, Gemini, and Grok actions in your workspace.</div>
            </CardContent>
          </Card>
          <Card className="border-slate-200/80 dark:border-slate-800/80">
            <CardContent className="p-5">
              <div className="text-sm text-slate-500 dark:text-slate-400">Conversations</div>
              <div className="mt-2 text-3xl font-semibold text-slate-900 dark:text-slate-50">{conversations.length}</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">Saved chats plus runtime fallback sessions for unsupported action types.</div>
            </CardContent>
          </Card>
          <Card className="border-slate-200/80 dark:border-slate-800/80">
            <CardContent className="p-5">
              <div className="text-sm text-slate-500 dark:text-slate-400">Selected provider</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="default">{getActionFamilyLabel(selectedAction?.type)}</Badge>
                <Badge variant="success">{selectedActionDetail ? "action loaded" : "waiting"}</Badge>
              </div>
              <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Form-first creation and a focused chat workspace with cleaner transcript rendering.
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 xl:grid-cols-[280px_300px_minmax(0,1fr)] 2xl:grid-cols-[300px_320px_minmax(0,1fr)]">
          <ActionList
            actions={filteredActions}
            selectedActionId={effectiveSelectedActionId}
            searchValue={actionSearch}
            onSearchChange={setActionSearch}
            onSelect={(actionId) => {
              setSelectedActionId(actionId);
              setSelectedConversationId(null);
            }}
            onCreateAction={() => setIsCreateActionOpen(true)}
            isLoading={actionsQuery.isLoading}
            errorMessage={actionsQuery.error ? actionErrorMessage : null}
          />

          <ChatList
            conversations={conversations}
            selectedConversationId={effectiveSelectedConversationId}
            onSelect={setSelectedConversationId}
            onCreateConversation={() => handleCreateConversation()}
            onDeleteConversation={(conversationId) => {
              if (conversationId.startsWith("chat:")) {
                deleteChatMutation.mutate(conversationId.slice(5));
              } else {
                deleteRuntimeSession(conversationId);
              }
            }}
            canCreateConversation={Boolean(effectiveSelectedActionId)}
            isLoading={chatsQuery.isLoading && runtimeSessionsForSelectedAction.length === 0}
            isCreatingConversation={createChatMutation.isPending}
            deletingConversationId={deleteChatMutation.variables ? `chat:${deleteChatMutation.variables}` : null}
            errorMessage={chatsQuery.error ? chatListErrorMessage : null}
          />

          <ChatThread
            selectedAction={selectedAction}
            selectedActionDetail={selectedActionDetail}
            selectedConversation={selectedConversation}
            messages={selectedMessages}
            composerValue={composer}
            onComposerChange={setComposer}
            onSend={() => {
              void handleSendMessage();
            }}
            onOpenCreateAction={() => setIsCreateActionOpen(true)}
            onCreateConversation={() => handleCreateConversation()}
            isConversationLoading={selectedChatQuery.isLoading && Boolean(selectedBackendChatId)}
            isSending={sendChatMessageMutation.isPending || runActionMutation.isPending}
            sendError={sendError}
          />
        </div>
      </div>

      {isCreateActionOpen ? (
        <CreateActionDialog
          onOpenChange={setIsCreateActionOpen}
          onSubmit={handleCreateAction}
          isSubmitting={createActionMutation.isPending}
          errorMessage={createActionMutation.error ? getErrorMessage(createActionMutation.error) : null}
        />
      ) : null}
    </>
  );
}
