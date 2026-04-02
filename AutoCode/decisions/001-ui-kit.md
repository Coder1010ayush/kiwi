# Decision 001 — Lightweight UI kit (Tailwind) instead of shadcn CLI

## Context
We want a polished UI quickly, but the environment is sensitive to interactive CLI commands.

## Decision
Implement a small internal UI kit under `web/src/components/ui/*` using Tailwind + `clsx` + `tailwind-merge`.

## Consequences
- Pros: no interactive scaffolding; fully controlled styles; easy to extend.
- Cons: fewer prebuilt complex components (dialogs, popovers) compared to shadcn/radix templates.

## Follow-up
If you want, we can later introduce shadcn components manually or add Radix UI primitives for richer interactions.
