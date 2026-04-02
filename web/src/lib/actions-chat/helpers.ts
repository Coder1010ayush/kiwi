import type { components } from "@/lib/api/schema";

export type ActionLiteDoc = components["schemas"]["ActionLiteDoc"];
export type ActionResultDoc = components["schemas"]["ActionResultDoc"];
export type ActionResultLiteDoc = components["schemas"]["ActionResultLiteDoc"];
export type ActionDoc = components["schemas"]["ActionDoc"];
export type ChatDoc = components["schemas"]["ChatDoc"];
export type Message = components["schemas"]["Message"];
export type ChatTransportProvider = "openai" | "azure";
export type ActionFamily = "openai" | "claude" | "gemini" | "grok" | "custom";

type ExtractedContent = {
  text: string;
  urls: string[];
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function compactWhitespace(value: string) {
  return value.replace(/\r/g, "").replace(/\n{3,}/g, "\n\n").trim();
}

function uniqueStrings(values: string[]) {
  return [...new Set(values.map((value) => value.trim()).filter(Boolean))];
}

function looksLikeJson(value: string) {
  const trimmed = value.trim();
  return (
    (trimmed.startsWith("{") && trimmed.endsWith("}")) ||
    (trimmed.startsWith("[") && trimmed.endsWith("]"))
  );
}

function tryParseJson(value: string) {
  if (!looksLikeJson(value)) return null;

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function pushText(parts: string[], value: string) {
  const normalized = compactWhitespace(value);
  if (normalized) parts.push(normalized);
}

function pushUrl(urls: string[], value: string) {
  const normalized = value.trim();
  if (/^https?:\/\//i.test(normalized)) {
    urls.push(normalized);
  }
}

function extractUnknown(value: unknown, textParts: string[], urls: string[], depth = 0): void {
  if (value == null || depth > 8) return;

  if (typeof value === "string") {
    const parsed = tryParseJson(value);
    if (parsed !== null) {
      extractUnknown(parsed, textParts, urls, depth + 1);
      return;
    }

    pushUrl(urls, value);
    pushText(textParts, value);
    return;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    pushText(textParts, String(value));
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item) => extractUnknown(item, textParts, urls, depth + 1));
    return;
  }

  if (!isRecord(value)) {
    return;
  }

  const preferredCollections = ["blocks", "parts", "messages", "results", "content", "contents"] as const;
  for (const key of preferredCollections) {
    const next = value[key];
    if (Array.isArray(next)) {
      extractUnknown(next, textParts, urls, depth + 1);
    }
  }

  const preferredTextFields = [
    "text",
    "value",
    "content",
    "output_text",
    "input_text",
    "system",
    "instructions",
    "system_instruction",
    "title",
    "summary",
    "output",
  ] as const;

  for (const key of preferredTextFields) {
    const next = value[key];
    if (typeof next === "string") {
      const parsed = tryParseJson(next);
      if (parsed !== null) {
        extractUnknown(parsed, textParts, urls, depth + 1);
      } else {
        pushText(textParts, next);
      }
    } else if (Array.isArray(next) || isRecord(next)) {
      extractUnknown(next, textParts, urls, depth + 1);
    }
  }

  const preferredUrlFields = ["url", "urls", "href", "file_urls", "image_urls"] as const;
  for (const key of preferredUrlFields) {
    const next = value[key];
    if (typeof next === "string") {
      pushUrl(urls, next);
    } else if (Array.isArray(next)) {
      next.forEach((item) => {
        if (typeof item === "string") pushUrl(urls, item);
      });
    }
  }
}

function extractContent(value: unknown): ExtractedContent {
  const textParts: string[] = [];
  const urls: string[] = [];
  extractUnknown(value, textParts, urls);

  const text = uniqueStrings(textParts).join("\n\n");
  return {
    text: text || "",
    urls: uniqueStrings(urls),
  };
}

export function getMessageDisplay(message: Message | null | undefined): ExtractedContent {
  if (!message) {
    return { text: "", urls: [] };
  }

  return extractContent(message.content);
}

export function getMessageText(message: Message | null | undefined) {
  return getMessageDisplay(message).text;
}

export function getMessageUrls(message: Message | null | undefined) {
  return getMessageDisplay(message).urls;
}

export function getMessageRoleLabel(message: Message | null | undefined) {
  const role = message?.role || "assistant";
  return role === "assistant"
    ? "Assistant"
    : role === "user"
      ? "You"
      : role === "system"
        ? "System"
        : role === "developer"
          ? "Developer"
          : role;
}

export function createLocalMessage(role: string, content: string): Message {
  return {
    role: role as Message["role"],
    content,
  } as Message;
}

export function formatDateTime(value?: string | null) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export function getActionFamilyFromType(type?: string | null): ActionFamily {
  const normalized = (type || "").toLowerCase();
  if (!normalized) return "custom";
  if (normalized.includes("grok")) return "grok";
  if (normalized.includes("gemini")) return "gemini";
  if (normalized.includes("claude") || normalized.includes("anthropic")) return "claude";
  if (normalized.includes("openai")) return "openai";
  return "custom";
}

export function getActionFamilyLabel(type?: string | null) {
  const family = getActionFamilyFromType(type);
  return family === "custom"
    ? "Custom"
    : family === "openai"
      ? "OpenAI"
      : family === "claude"
        ? "Claude"
        : family === "gemini"
          ? "Gemini"
          : "Grok";
}

export function isSupportedActionType(type?: string | null) {
  const normalized = (type || "").toLowerCase();
  return Boolean(normalized) && ["openai", "claude", "gemini", "grok"].some((token) => normalized.includes(token));
}

export function getChatTransportProvider(action?: Pick<ActionDoc, "config" | "type"> | null): ChatTransportProvider {
  if (!action || !isRecord(action.config)) return "openai";
  const provider = action.config.provider;
  return provider === "azure" ? "azure" : "openai";
}

export function getActionModel(action?: Pick<ActionDoc, "config"> | null) {
  if (!action || !isRecord(action.config)) return null;

  if (typeof action.config.model === "string" && action.config.model.trim()) {
    return action.config.model;
  }

  if (isRecord(action.config.config) && typeof action.config.config.model === "string") {
    return action.config.config.model;
  }

  return null;
}

function getContentsText(contents: unknown) {
  return extractContent(contents).text;
}

export function getActionSystemPrompt(action?: Pick<ActionDoc, "config"> | null) {
  if (!action || !isRecord(action.config)) return "";

  if (typeof action.config.system === "string" && action.config.system.trim()) {
    return compactWhitespace(action.config.system);
  }

  if (typeof action.config.instructions === "string" && action.config.instructions.trim()) {
    return compactWhitespace(action.config.instructions);
  }

  if (Array.isArray(action.config.messages)) {
    const systemMessage = action.config.messages.find((message) => {
      if (!isRecord(message)) return false;
      const role = message.role;
      return role === "system" || role === "developer";
    });

    if (systemMessage && isRecord(systemMessage)) {
      return extractContent(systemMessage.content).text;
    }
  }

  if (Array.isArray(action.config.input)) {
    const firstInput = action.config.input[0];
    if (isRecord(firstInput) && typeof firstInput.content === "string") {
      return compactWhitespace(firstInput.content);
    }
  }

  if (typeof action.config.system_instruction === "string") {
    return compactWhitespace(action.config.system_instruction);
  }

  if (isRecord(action.config.config) && typeof action.config.config.system_instruction === "string") {
    return compactWhitespace(action.config.config.system_instruction);
  }

  return compactWhitespace(getContentsText(action.config.contents));
}

export function getChatPreview(chat: ChatDoc | null | undefined) {
  const messages = chat?.messages || [];
  const lastText = [...messages]
    .reverse()
    .map((message) => compactWhitespace(getMessageText(message)))
    .find(Boolean);

  return lastText ? (lastText.length > 92 ? `${lastText.slice(0, 89)}...` : lastText) : "No messages yet";
}

export function getChatTitle(chat: ChatDoc | null | undefined) {
  const title = chat?.title?.trim();
  if (title) return title;

  const preview = getChatPreview(chat);
  return preview === "No messages yet" ? "Untitled chat" : preview;
}

export function sortByUpdated<T extends { updated_at?: string | null; created_at?: string | null }>(items: T[]) {
  return [...items].sort((a, b) => {
    const aTime = new Date(a.updated_at || a.created_at || 0).getTime();
    const bTime = new Date(b.updated_at || b.created_at || 0).getTime();
    return bTime - aTime;
  });
}

export function buildRunTranscript(messages: Message[], nextUserText: string) {
  const transcript = messages
    .map((message) => `${getMessageRoleLabel(message)}: ${getMessageText(message)}`)
    .concat(`You: ${nextUserText}`)
    .join("\n\n");

  return transcript.trim();
}

export function getLatestActionOutput(actionDoc: ActionDoc | null | undefined) {
  const results = Array.isArray(actionDoc?.results) ? actionDoc.results : [];
  const last = results.at(-1);
  if (!last || !isRecord(last)) return "";

  const extracted = extractContent(last.output);
  if (extracted.text) return extracted.text;

  try {
    return JSON.stringify(last.output, null, 2);
  } catch {
    return String(last.output ?? "");
  }
}

export function getRunStatusVariant(status?: string | null) {
  const value = (status || "").toLowerCase();
  if (value.includes("error") || value.includes("fail")) return "danger" as const;
  if (value.includes("success") || value.includes("done") || value.includes("complete")) return "success" as const;
  if (value.includes("process") || value.includes("running")) return "warning" as const;
  return "default" as const;
}

export function getRunProgressValue(status?: string | null) {
  const value = (status || "").toLowerCase();
  if (value.includes("success") || value.includes("done") || value.includes("complete")) return 100;
  if (value.includes("error") || value.includes("fail")) return 100;
  if (value.includes("process") || value.includes("running")) return 68;
  if (value.includes("wait") || value.includes("queued")) return 22;
  return 8;
}

export function getRunTitle(run: { result?: unknown } | null | undefined) {
  if (!run) return "Action run";
  const result = run.result;
  if (isRecord(result) && typeof result.name === "string" && result.name.trim()) return result.name;
  return "Action run";
}

function extractRunStepInput(step: unknown) {
  if (!isRecord(step)) return "";
  return extractContent(step.input).text;
}

function extractRunStepOutput(step: unknown) {
  if (!isRecord(step)) return "";
  return extractContent(step.output).text;
}

export function mapRunToMessages(run: ActionResultDoc | null | undefined): Message[] {
  if (!run || !isRecord(run.result) || !Array.isArray(run.result.results)) return [];

  const mapped: Message[] = [];
  for (const step of run.result.results) {
    const inputText = compactWhitespace(extractRunStepInput(step));
    const outputText = compactWhitespace(extractRunStepOutput(step));

    if (inputText) mapped.push(createLocalMessage("user", inputText));
    if (outputText) mapped.push(createLocalMessage("assistant", outputText));
  }

  return mapped;
}
