export const env = {
  autobotsApiBaseUrl:
    process.env.NEXT_PUBLIC_AUTOBOTS_API_BASE_URL?.replace(/\/$/, "") || "https://api.meetkiwi.ai",
  autobotsApiKey: process.env.NEXT_PUBLIC_AUTOBOTS_API_KEY || "",
} as const;
