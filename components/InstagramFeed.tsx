"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BUSINESS, FALLBACK_GALLERY } from "@/lib/constants";
import type { InstagramApiResponse, InstagramMedia } from "@/lib/types";
import GalleryGrid from "./GalleryGrid";

function FeedSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className={`skeleton ${i % 3 === 0 ? "h-72" : "h-52"}`} />
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
      className="group relative block overflow-hidden rounded-2xl"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={item.caption?.slice(0, 80) ?? "Instagram post"}
        loading="lazy"
        className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {isVideo && (
        <span className="absolute right-3 top-3 rounded-full bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase text-white">
          Reel
        </span>
      )}
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
        <span className="text-xs text-white/90 line-clamp-2">
          {item.caption?.slice(0, 100) ?? "View on Instagram"}
        </span>
      </div>
    </a>
  );
}

export default function InstagramFeed({ showReels = true }: { showReels?: boolean }) {
  const [posts, setPosts] = useState<InstagramMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [fallback, setFallback] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFeed = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/instagram");
      const json: InstagramApiResponse = await res.json();

      if (json.fallback || !json.data?.length) {
        setFallback(true);
        setPosts([]);
        if (json.error) setError(json.error);
      } else {
        setFallback(false);
        setPosts(json.data);
      }
    } catch {
      setFallback(true);
      setError("Unable to load Instagram feed");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFeed();
    const interval = setInterval(fetchFeed, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchFeed]);

  const reels = posts.filter(
    (p) => p.media_type === "VIDEO" || p.media_type === "CAROUSEL_ALBUM"
  );
  const images = posts.filter((p) => p.media_type === "IMAGE");

  if (loading) return <FeedSkeleton />;

  if (fallback) {
    return (
      <div>
        {error && (
          <p className="mb-6 rounded-2xl border border-[#c9a227]/20 bg-[#1a3d2e]/30 px-4 py-3 text-sm text-white/60">
            Showing gallery preview. Connect Instagram API in{" "}
            <code className="text-[#c9a227]">.env.local</code> for live feed.
          </p>
        )}
        <GalleryGrid
          images={FALLBACK_GALLERY.map((src, i) => ({
            src,
            alt: `Adventure Wheels Lonavala ${i + 1}`,
            href: BUSINESS.instagramUrl,
          }))}
        />
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {showReels && reels.length > 0 && (
        <div>
          <h3 className="mb-6 font-display text-xl font-semibold text-white">
            Reels & Highlights
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
            {reels.map((item) => (
              <motion.div
                key={item.id}
                className="w-48 shrink-0 sm:w-56"
                whileHover={{ scale: 1.03 }}
              >
                <MediaCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-display text-xl font-semibold text-white">
            Latest from @{BUSINESS.instagram}
          </h3>
          <button
            type="button"
            onClick={fetchFeed}
            className="text-xs text-[#c9a227] hover:underline"
          >
            Refresh
          </button>
        </div>
        <div className="masonry-grid">
          {(images.length ? images : posts).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="masonry-item"
            >
              <MediaCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
