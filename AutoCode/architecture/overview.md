# Architecture Overview

## Frontend
- Framework: Next.js App Router + TypeScript
- Styling: Tailwind CSS (v4)
- Data fetching/cache: TanStack Query
- State/config: Zustand (persisted in localStorage)

## API integration
- OpenAPI types generated via `web/scripts/gen-api.mjs` into `web/src/lib/api/schema.d.ts`.
- API client: `openapi-fetch` with a custom `fetch` that injects `Authorization` and enables cookies.

## Auth model
The OpenAPI spec defines apiKey schemes named `Authorization` (query/header/cookie) and an OAuth2 password flow at `/v1/auth/token`.

In v1, Kiwi supports:
- `authMode=apiKey`: sends `Authorization: <value>` (as-is)
- `authMode=bearer`: sends `Authorization: Bearer <token>`

## Routes
- `/` landing
- `/dashboard`
- `/ingestion`
- `/knowledge-bases`
- `/settings`
