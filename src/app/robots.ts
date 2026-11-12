import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

// Search and AI assistants are explicitly welcome: being cited in ChatGPT, Perplexity,
// Claude and Google AI Overviews is a goal for this site.
const AI_CRAWLERS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "PerplexityBot", "Perplexity-User",
  "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai",
  "Google-Extended", "Applebot-Extended", "Amazonbot", "Meta-ExternalAgent", "CCBot", "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
