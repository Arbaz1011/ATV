import { NextResponse } from "next/server";
import type { InstagramApiResponse, InstagramMedia } from "@/lib/types";

const FIELDS =
  "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
const CACHE_SECONDS = 3600;

export const revalidate = 3600;

async function fetchInstagramMedia(): Promise<InstagramMedia[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const accountId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!token || !accountId) {
    throw new Error("Instagram API credentials not configured");
  }

  const url = new URL(
    `https://graph.facebook.com/v21.0/${accountId}/media`
  );
  url.searchParams.set("fields", FIELDS);
  url.searchParams.set("limit", "12");
  url.searchParams.set("access_token", token);

  const res = await fetch(url.toString(), {
    next: { revalidate: CACHE_SECONDS },
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Instagram API error: ${res.status} ${err}`);
  }

  const json = await res.json();

  if (json.error) {
    throw new Error(json.error.message ?? "Instagram API error");
  }

  return (json.data ?? []) as InstagramMedia[];
}

export async function GET() {
  try {
    const data = await fetchInstagramMedia();

    const response: InstagramApiResponse = { data };

    return NextResponse.json(response, {
      headers: {
        "Cache-Control": `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=86400`,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch Instagram feed";

    return NextResponse.json(
      {
        data: [],
        error: message,
        fallback: true,
      } satisfies InstagramApiResponse,
      { status: 200 }
    );
  }
}
