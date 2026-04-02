# Kiwi Frontend (Next.js) — Project Notes

## Goal
Build a polished, production-ready Next.js frontend for the Autobots backend described by the provided OpenAPI spec (`autobots_specification.json`).

## High-level scope (v1)
- App shell (sidebar/topbar), responsive UI, dark mode
- Auth/config: backend base URL + API key/JWT token input
- Ingestion module: upload + list ingested files (first end-to-end vertical slice)
- Typed API layer generated from OpenAPI

## Key assumptions
- Frontend will talk to an existing backend over HTTP(S) (CORS enabled for local dev).
- We will start by supporting API key auth (header/query/cookie) and optionally JWT (password flow) as per spec.

## Repo layout
- `web/` : Next.js app
- `AutoCode/` : project knowledge base

## Known tool constraints
- Long-running `npm install` in foreground is flaky with the terminal tool, so installs are run as a background process and then verified.
