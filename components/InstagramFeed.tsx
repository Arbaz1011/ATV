"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BUSINESS } from "@/lib/constants";
import type { InstagramApiResponse, InstagramMedia } from "@/lib/types";
import PremiumGallery from "./PremiumGallery";

function FeedSkeleton() {
  return (
    <div className="bento-grid">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className={`skeleton min-h-[180px] ${i === 0 ? "bento-large" : i === 4 ? "bento-wide" : ""}`}
        />
      ))}
    </div>
  );
}

function MediaCard({ item }: { item: InstagramMedia }) {
  const isVideo =
    item.media_type === "VIDEO" || item.media_type === "CAROUSEL_ALBUM";
  const src = isVideo && item.thumbnail_url ? item.thumbnail_url : item.media_url;

  return (
    <a
      href={item.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block min-h-[200px] overflow-hidden rounded-2xl ring-1 ring-white/10"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={item.caption?.slice(0, 80) ?? "Adventure Wheels Instagram"}
        loading="lazy"
        className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:aspect-square"
      />
      <div className="image-grain pointer-events-none absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      {isVideo && (
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/75 px-2.5 py-1 text-[10px] font-bold uppercase text-white backdrop-blur-sm">
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Reel
        </span>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-xs text-white/90 line-clamp-2">
          {item.caption?.slice(0, 90) ?? "View on Instagram"}
        </p>
      </div>
    </a>
  );
}

export default function InstagramFeed({ showReels = true }: { showReels?: boolean }) {
  const [posts, setPosts] = useState<InstagramMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [useLiveFeed, setUseLiveFeed] = useState(false);

  const fetchFeed = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/instagram");
      const json: InstagramApiResponse = await res.json();

      if (!json.fallback && json.data?.length) {
        setUseLiveFeed(true);
        setPosts(json.data);
      } else {
        setUseLiveFeed(false);
        setPosts([]);
      }
    } catch {
      setUseLiveFeed(false);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFeed();
    const interval = setInterval(fetchFeed, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchFeed]);

  if (loading) return <FeedSkeleton />;

  if (!useLiveFeed) {
    return <PremiumGallery />;
  }

  const reels = posts.filter(
    (p) => p.media_type === "VIDEO" || p.media_type === "CAROUSEL_ALBUM"
  );
  const images = posts.filter((p) => p.media_type === "IMAGE");

  return (
    <div className="space-y-10">
      {showReels && reels.length > 0 && (
        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-white">
            Reels & highlights
          </h3>
          <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-thin sm:mx-0 sm:px-0">
            {reels.map((item) => (
              <motion.div
                key={item.id}
                className="w-44 shrink-0 sm:w-52"
                whileHover={{ scale: 1.02 }}
              >
                <MediaCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold text-white">
            Latest from @{BUSINESS.instagram}
          </h3>
          <button
            type="button"
            onClick={fetchFeed}
            className="rounded-lg border border-[#c9a227]/30 px-3 py-1.5 text-xs text-[#c9a227] transition-colors hover:bg-[#c9a227]/10"
          >
            Refresh
          </button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(images.length ? images : posts).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <MediaCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
