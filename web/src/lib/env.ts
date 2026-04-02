export const env = {
  autobotsApiBaseUrl:
    process.env.NEXT_PUBLIC_AUTOBOTS_API_BASE_URL?.replace(/\/$/, "") || "http://localhost:8000",
  autobotsApiKey: process.env.NEXT_PUBLIC_AUTOBOTS_API_KEY || "",
} as const;
