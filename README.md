# Kiwi

A modern Next.js frontend for the Autobots backend (OpenAPI-driven).

## Repo layout
- `web/` — Next.js app
- `AutoCode/` — project knowledge base (requirements, architecture notes, decisions)

## Quickstart

### 1) Install
```bash
cd web
npm install
```

### 2) Configure
Copy env example:
```bash
cd web
copy .env.example .env
```
Then set `NEXT_PUBLIC_AUTOBOTS_API_BASE_URL`.

### 3) Generate API types
```bash
cd web
npm run gen:api
```

### 4) Run
```bash
cd web
npm run dev
```

Open the app, then go to **Settings** to configure the API base URL and Authorization.

## Notes
- OpenAPI types are generated to `web/src/lib/api/schema.d.ts`.
