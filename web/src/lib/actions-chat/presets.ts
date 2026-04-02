import type { components } from "@/lib/api/schema";
import type { ActionFamily } from "@/lib/actions-chat/helpers";

export type ActionCreatePayload = components["schemas"]["ActionCreate"];

export type ActionPreset = {
  family: ActionFamily;
  actionType: string;
  label: string;
  description: string;
  defaultName: string;
  createConfig: () => unknown;
};

export const ACTION_PRESETS: ActionPreset[] = [
  {
    family: "openai",
    actionType: "text2text_llm_chat_openai",
    label: "OpenAI chat action",
    description: "Simple chat-style OpenAI action with system instructions and message history.",
    defaultName: "OpenAI Assistant",
    createConfig: () => ({
      provider: "openai",
      model: "gpt-4.1-mini",
      stream: false,
      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant. Be concise, accurate, and practical.",
        },
      ],
      temperature: 0.7,
      top_p: 1,
      timeout: 180,
    }),
  },
  {
    family: "openai",
    actionType: "openai",
    label: "OpenAI agent",
    description: "Advanced OpenAI action with instructions, tool slots, and agent-style execution.",
    defaultName: "OpenAI Agent",
    createConfig: () => ({
      model: "gpt-4.1-mini",
      instructions: "You are a helpful AI assistant. Solve the user’s task clearly and safely.",
      tools: [],
      include: [],
      context_management: [
        {
          type: "compaction",
          compact_threshold: 200000,
        },
      ],
      input: [
        {
          role: "system",
          content: "You are a helpful AI assistant.",
          attachments: [],
        },
      ],
      generation: {
        temperature: 0.7,
        max_tokens: 4096,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: [],
        response_format: null,
      },
      server_tools: {
        web_search: false,
        x_search: false,
        code_execution: false,
      },
      attachments: {
        use_file_grok: false,
        delete_files_on_complete: false,
        file_urls: [],
        file_ids: [],
        local_paths: [],
        image_urls: [],
        image_file_ids: [],
        image_local_paths: [],
      },
      allow_side_effects: false,
      max_rounds: 10,
      max_parallel_tools: 1,
    }),
  },
  {
    family: "claude",
    actionType: "text2text_llm_chat_claude",
    label: "Claude chat action",
    description: "Anthropic Claude text-to-text chat action with system prompt support.",
    defaultName: "Claude Assistant",
    createConfig: () => ({
      model: "claude-sonnet-4-5",
      provider: "anthropic",
      system: "You are a helpful AI assistant. Give precise and accurate responses.",
      messages: [
        {
          role: "user",
          content: "Introduce yourself in one sentence.",
        },
      ],
      stream: true,
      temperature: 0.7,
      max_tokens: 8192,
      tools: [],
      top_p: 1,
      top_k: 1,
      timeout: 180,
      citations: true,
      thinking: {
        type: "disabled",
      },
      auto_resume_paused_compaction: true,
      tool_output_text_to_file_char_limit: 300000,
    }),
  },
  {
    family: "claude",
    actionType: "claude",
    label: "Claude agent",
    description: "General Claude action template with content payload and config block.",
    defaultName: "Claude Agent",
    createConfig: () => ({
      model: "claude-sonnet-4-5",
      system: "You are a helpful Claude assistant.",
      messages: [
        {
          role: "user",
          content: "Introduce yourself briefly.",
        },
      ],
      stream: true,
      temperature: 0.7,
      max_tokens: 8192,
      tools: [],
      timeout: 180,
    }),
  },
  {
    family: "gemini",
    actionType: "gemini",
    label: "Gemini action",
    description: "Gemini action using contents + config blocks similar to Gemini API structure.",
    defaultName: "Gemini Assistant",
    createConfig: () => ({
      model: "gemini-2.5-pro",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: "You are a helpful AI assistant.",
            },
          ],
        },
      ],
      config: {
        temperature: 0.7,
        top_p: 0.95,
        top_k: 40,
        max_output_tokens: 8192,
      },
      tool_output_text_to_file_char_limit: 300000,
    }),
  },
  {
    family: "gemini",
    actionType: "text2text_llm_chat_gemini",
    label: "Gemini chat action",
    description: "Gemini chat-flavored action preset for text conversations.",
    defaultName: "Gemini Chat Assistant",
    createConfig: () => ({
      model: "gemini-2.5-pro",
      system_instruction: "You are a helpful Gemini assistant.",
      messages: [
        {
          role: "user",
          content: "Introduce yourself briefly.",
        },
      ],
      stream: true,
      temperature: 0.7,
      top_p: 0.95,
      top_k: 40,
      max_output_tokens: 8192,
    }),
  },
  {
    family: "grok",
    actionType: "text2text_llm_chat_grok",
    label: "Grok chat action",
    description: "Grok text chat action with system prompt and conversation messages.",
    defaultName: "Grok Assistant",
    createConfig: () => ({
      model: "grok-4-fast-reasoning",
      stream: true,
      include: ["verbose_streaming"],
      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant. Be direct, clear, and practical.",
          attachments: [],
        },
      ],
      generation: {
        temperature: 0.7,
        max_tokens: 8192,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: [],
        response_format: null,
      },
      server_tools: {
        web_search: false,
        x_search: false,
        code_execution: false,
      },
      attachments: {
        use_file_grok: false,
        delete_files_on_complete: false,
        file_urls: [],
        file_ids: [],
        local_paths: [],
        image_urls: [],
        image_file_ids: [],
        image_local_paths: [],
      },
      allow_side_effects: false,
      max_rounds: 10,
      max_parallel_tools: 1,
    }),
  },
  {
    family: "grok",
    actionType: "grok",
    label: "Grok agent",
    description: "General Grok action template for agent-style runs.",
    defaultName: "Grok Agent",
    createConfig: () => ({
      model: "grok-4-fast-reasoning",
      stream: true,
      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant.",
        },
      ],
      temperature: 0.7,
      top_p: 1,
    }),
  },
];

export const FAMILY_LABELS: Record<ActionFamily, string> = {
  openai: "OpenAI",
  claude: "Claude",
  gemini: "Gemini",
  grok: "Grok",
  custom: "Custom",
};

export function getPresetsForFamily(family: ActionFamily) {
  return ACTION_PRESETS.filter((preset) => preset.family === family);
}

export function getPresetByActionType(actionType: string) {
  return ACTION_PRESETS.find((preset) => preset.actionType === actionType) || null;
}

export function createActionPayload(args: {
  name: string;
  description: string;
  userManual: string;
  actionType: string;
  config: unknown;
  isSaved?: boolean;
}) {
  return {
    name: args.name.trim(),
    description: args.description.trim(),
    user_manual: args.userManual.trim(),
    type: args.actionType.trim(),
    config: args.config,
    is_saved: args.isSaved ?? true,
  } as ActionCreatePayload;
}
