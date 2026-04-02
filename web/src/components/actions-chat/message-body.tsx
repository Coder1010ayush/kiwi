import React from "react";
import { LinkIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type MessageBodyProps = {
  text: string;
  urls: string[];
  isUser: boolean;
};

type Block =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

function renderUrlLabel(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, "") + parsed.pathname;
  } catch {
    return url;
  }
}

function parseBlocks(text: string): Block[] {
  const lines = text.replace(/\r/g, "").split("\n");
  const blocks: Block[] = [];
  let index = 0;

  while (index < lines.length) {
    const current = lines[index]?.trim() ?? "";
    if (!current) {
      index += 1;
      continue;
    }

    const headingMatch = current.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      blocks.push({ type: "heading", level: headingMatch[1].length, text: headingMatch[2].trim() });
      index += 1;
      continue;
    }

    if (/^[-*]\s+/.test(current) || /^\d+\.\s+/.test(current)) {
      const items: string[] = [];
      while (index < lines.length) {
        const line = lines[index]?.trim() ?? "";
        if (/^[-*]\s+/.test(line)) {
          items.push(line.replace(/^[-*]\s+/, "").trim());
          index += 1;
          continue;
        }
        if (/^\d+\.\s+/.test(line)) {
          items.push(line.replace(/^\d+\.\s+/, "").trim());
          index += 1;
          continue;
        }
        break;
      }
      blocks.push({ type: "list", items });
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length) {
      const line = lines[index] ?? "";
      const trimmed = line.trim();
      if (!trimmed) {
        index += 1;
        break;
      }
      if (/^(#{1,6})\s+/.test(trimmed) || /^[-*]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
        break;
      }
      paragraphLines.push(trimmed);
      index += 1;
    }
    blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
  }

  return blocks;
}

function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-semibold">{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={index}
          className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[0.92em] text-slate-700 dark:bg-slate-800 dark:text-slate-200"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

export function MessageBody({ text, urls, isUser }: MessageBodyProps) {
  const blocks = parseBlocks(text);

  return (
    <div className="mt-2 space-y-3">
      {urls.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {urls.map((url) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex max-w-full items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition",
                isUser
                  ? "border-sky-200 bg-white/80 text-sky-700 hover:bg-white dark:border-sky-800 dark:bg-sky-900/40 dark:text-sky-100 dark:hover:bg-sky-900/55"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800",
              )}
            >
              <LinkIcon className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{renderUrlLabel(url)}</span>
            </a>
          ))}
        </div>
      ) : null}

      <div className="max-h-[320px] overflow-y-auto pr-1">
        <div className="space-y-3 text-sm leading-6">
          {blocks.length === 0 ? (
            <div className="whitespace-pre-wrap">{text}</div>
          ) : (
            blocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h4
                    key={index}
                    className={cn(
                      "font-semibold tracking-tight",
                      block.level <= 2 ? "text-[15px]" : "text-sm",
                    )}
                  >
                    {renderInline(block.text)}
                  </h4>
                );
              }

              if (block.type === "list") {
                return (
                  <ul key={index} className="list-disc space-y-1.5 pl-5">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{renderInline(item)}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={index} className="whitespace-pre-wrap">
                  {renderInline(block.text)}
                </p>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
