"use client";

import { useMemo, useState } from "react";
import { Bot, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { ActionFamily } from "@/lib/actions-chat/helpers";
import { cn } from "@/lib/utils";
import {
  createActionPayload,
  FAMILY_LABELS,
  getPresetByActionType,
  getPresetsForFamily,
  type ActionCreatePayload,
} from "@/lib/actions-chat/presets";

type CreateActionDialogProps = {
  onOpenChange: (open: boolean) => void;
  onSubmit: (payload: ActionCreatePayload) => Promise<void>;
  isSubmitting: boolean;
  errorMessage?: string | null;
};

type FormState = {
  family: ActionFamily;
  actionType: string;
  name: string;
  description: string;
  userManual: string;
  model: string;
  systemPrompt: string;
  temperature: string;
  maxTokens: string;
  stream: "true" | "false";
};

function createInitialFormState(): FormState {
  return {
    family: "openai",
    actionType: "text2text_llm_chat_openai",
    name: "OpenAI Assistant",
    description: "Reusable OpenAI chat assistant.",
    userManual: "",
    model: "gpt-4.1-mini",
    systemPrompt: "You are a helpful AI assistant. Be concise, accurate, and practical.",
    temperature: "0.7",
    maxTokens: "8192",
    stream: "false",
  };
}

function getDefaultModel(family: ActionFamily) {
  switch (family) {
    case "claude":
      return "claude-sonnet-4-5";
    case "gemini":
      return "gemini-2.5-pro";
    case "grok":
      return "grok-4-fast-reasoning";
    default:
      return "gpt-4.1-mini";
  }
}

function buildConfig(form: FormState) {
  const temperature = Number(form.temperature) || 0.7;
  const maxTokens = Number(form.maxTokens) || 8192;
  const stream = form.stream === "true";
  const presetBase = getPresetByActionType(form.actionType)?.createConfig() || {};

  switch (form.actionType) {
    case "text2text_llm_chat_openai":
      return {
        ...presetBase,
        provider: "openai",
        model: form.model.trim(),
        stream,
        temperature,
        max_tokens: maxTokens,
        messages: form.systemPrompt.trim()
          ? [
              {
                role: "system",
                content: form.systemPrompt.trim(),
              },
            ]
          : [],
      };

    case "text2text_llm_chat_claude":
      return {
        ...presetBase,
        provider: "anthropic",
        model: form.model.trim(),
        system: form.systemPrompt.trim(),
        stream,
        temperature,
        max_tokens: maxTokens,
        messages: [],
      };

    case "gemini":
      return {
        ...presetBase,
        model: form.model.trim(),
        contents: [
          {
            role: "user",
            parts: [
              {
                text: form.systemPrompt.trim() || "You are a helpful AI assistant.",
              },
            ],
          },
        ],
        config: {
          temperature,
          top_p: 0.95,
          top_k: 40,
          max_output_tokens: maxTokens,
        },
      };

    case "text2text_llm_chat_grok":
      return {
        ...presetBase,
        model: form.model.trim(),
        stream,
        messages: [
          {
            role: "system",
            content: form.systemPrompt.trim() || "You are a helpful AI assistant.",
            attachments: [],
          },
        ],
        generation: {
          temperature,
          max_tokens: maxTokens,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          stop: [],
          response_format: null,
        },
      };

    case "openai":
      return {
        ...presetBase,
        model: form.model.trim(),
        instructions: form.systemPrompt.trim(),
        input: [
          {
            role: "system",
            content: form.systemPrompt.trim() || "You are a helpful AI assistant.",
            attachments: [],
          },
        ],
        generation: {
          temperature,
          max_tokens: maxTokens,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          stop: [],
          response_format: null,
        },
      };

    case "claude":
      return {
        ...presetBase,
        model: form.model.trim(),
        system: form.systemPrompt.trim(),
        stream,
        temperature,
        max_tokens: maxTokens,
        messages: [],
      };

    case "text2text_llm_chat_gemini":
      return {
        ...presetBase,
        model: form.model.trim(),
        system_instruction: form.systemPrompt.trim(),
        stream,
        temperature,
        max_output_tokens: maxTokens,
        messages: [],
      };

    case "grok":
      return {
        ...presetBase,
        model: form.model.trim(),
        stream,
        temperature,
        messages: [
          {
            role: "system",
            content: form.systemPrompt.trim() || "You are a helpful AI assistant.",
          },
        ],
      };

    default:
      return presetBase;
  }
}

export function CreateActionDialog({ onOpenChange, onSubmit, isSubmitting, errorMessage }: CreateActionDialogProps) {
  const [form, setForm] = useState<FormState>(() => createInitialFormState());

  const familyPresets = useMemo(() => getPresetsForFamily(form.family), [form.family]);
  const currentPreset = useMemo(() => getPresetByActionType(form.actionType), [form.actionType]);
  const isValid = useMemo(() => form.name.trim().length > 0 && form.model.trim().length > 0, [form]);

  async function handleSubmit() {
    if (!isValid || isSubmitting) return;

    await onSubmit(
      createActionPayload({
        name: form.name,
        description: form.description,
        userManual: form.userManual,
        actionType: form.actionType,
        config: buildConfig(form),
        isSaved: true,
      }),
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
      <Card className="max-h-[92vh] w-full max-w-5xl overflow-hidden border-slate-200/80 shadow-2xl dark:border-slate-800/80">
        <CardHeader className="border-b border-slate-200/80 bg-gradient-to-r from-sky-50 via-white to-emerald-50 dark:border-slate-800/80 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 dark:border-sky-900/70 dark:bg-sky-950/50 dark:text-sky-300">
                <Sparkles className="h-3.5 w-3.5" />
                Guided action builder
              </div>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Bot className="h-5 w-5 text-sky-500" /> Create action
              </CardTitle>
              <CardDescription>
                A clean form-based builder for OpenAI, Claude, Gemini, and Grok actions.
              </CardDescription>
            </div>

            <Button variant="ghost" size="sm" onClick={() => onOpenChange(false)} aria-label="Close create action dialog">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="max-h-[calc(92vh-120px)] overflow-y-auto p-6">
          <div className="space-y-6">
            <div className="space-y-3">
              <Label>Provider family</Label>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {(["openai", "claude", "gemini", "grok"] as ActionFamily[]).map((family) => {
                  const isActive = form.family === family;
                  return (
                    <button
                      key={family}
                      type="button"
                      onClick={() => {
                        const nextPreset = getPresetsForFamily(family)[0];
                        setForm((current) => ({
                          ...current,
                          family,
                          actionType: nextPreset.actionType,
                          name: nextPreset.defaultName,
                          description: nextPreset.description,
                          model: getDefaultModel(family),
                        }));
                      }}
                      className={cn(
                        "rounded-2xl border px-4 py-4 text-left transition",
                        isActive
                          ? "border-sky-300 bg-sky-50 shadow-sm dark:border-sky-700 dark:bg-sky-950/30"
                          : "border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700",
                      )}
                    >
                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">{FAMILY_LABELS[family]}</div>
                      <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">Clean starter preset</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="action-type">Action type</Label>
                  <Select
                    id="action-type"
                    value={form.actionType}
                    onChange={(event) => setForm((current) => ({ ...current, actionType: event.target.value }))}
                  >
                    {familyPresets.map((preset) => (
                      <option key={preset.actionType} value={preset.actionType}>
                        {preset.label}
                      </option>
                    ))}
                  </Select>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{currentPreset?.description}</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="action-name">Action name</Label>
                  <Input
                    id="action-name"
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                    placeholder="Research Copilot"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="action-description">Description</Label>
                  <Textarea
                    id="action-description"
                    className="min-h-24"
                    value={form.description}
                    onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
                    placeholder="What this action does and how it should be used."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="action-manual">User manual / notes</Label>
                  <Textarea
                    id="action-manual"
                    className="min-h-24"
                    value={form.userManual}
                    onChange={(event) => setForm((current) => ({ ...current, userManual: event.target.value }))}
                    placeholder="Optional operating notes for future users of this action."
                  />
                </div>
              </div>

              <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="action-model">Model</Label>
                    <Input
                      id="action-model"
                      value={form.model}
                      onChange={(event) => setForm((current) => ({ ...current, model: event.target.value }))}
                      placeholder={getDefaultModel(form.family)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="action-temperature">Temperature</Label>
                    <Input
                      id="action-temperature"
                      type="number"
                      step="0.1"
                      value={form.temperature}
                      onChange={(event) => setForm((current) => ({ ...current, temperature: event.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="action-max-tokens">Max tokens</Label>
                    <Input
                      id="action-max-tokens"
                      type="number"
                      value={form.maxTokens}
                      onChange={(event) => setForm((current) => ({ ...current, maxTokens: event.target.value }))}
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="action-stream">Streaming mode</Label>
                    <Select
                      id="action-stream"
                      value={form.stream}
                      onChange={(event) =>
                        setForm((current) => ({ ...current, stream: event.target.value as "true" | "false" }))
                      }
                    >
                      <option value="false">Off</option>
                      <option value="true">On</option>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="action-system-prompt">System prompt / behavior</Label>
                  <Textarea
                    id="action-system-prompt"
                    className="min-h-56"
                    value={form.systemPrompt}
                    onChange={(event) => setForm((current) => ({ ...current, systemPrompt: event.target.value }))}
                    placeholder="Describe how this action should behave, respond, and reason."
                  />
                </div>

                <div className="rounded-2xl border border-dashed border-slate-200 p-4 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
                  <div className="font-semibold text-slate-900 dark:text-slate-100">Creation flow</div>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>• Save a provider-aware action using the form above.</li>
                    <li>• Kiwi will auto-select it and open a conversation.</li>
                    <li>• If backend saved chats are unavailable for that type, Kiwi falls back to a runtime session.</li>
                  </ul>
                </div>
              </div>
            </div>

            {errorMessage ? <div className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">{errorMessage}</div> : null}

            <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:justify-end dark:border-slate-800">
              <Button variant="secondary" onClick={() => onOpenChange(false)} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button onClick={handleSubmit} disabled={!isValid || isSubmitting}>
                {isSubmitting ? "Creating action…" : "Create action"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
