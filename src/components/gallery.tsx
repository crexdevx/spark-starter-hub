import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

import { SHOTS, type Shot } from "../data/gallery";

type GalleryProps = {
  /** How many photos to show. Omit to show every shot. */
  limit?: number;
  /** Show the "View more" link to the full gallery page. */
  showViewMore?: boolean;
  eyebrow?: string;
  heading?: string;
  description?: string;
};

/**
 * "Gallery" section — a scattered cluster of photos that reads as a grouped
 * pile. Tapping any shot opens a full-screen lightbox with next/prev and Esc.
 */
export function Gallery({
  limit,
  showViewMore = false,
  eyebrow = "Inside The Club",
  heading = "Gallery",
  description = "A glimpse of the floor — tap any photo to view it full screen.",
}: GalleryProps) {
  const shots: Shot[] = limit ? SHOTS.slice(0, limit) : SHOTS;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) =>
        current === null
          ? current
          : (current + delta + shots.length) % shots.length
      );
    },
    [shots.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [openIndex, close, step]);

  const active = openIndex === null ? null : shots[openIndex];

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="bg-surface-pure text-on-pure"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <header className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold sm:text-base">
            {eyebrow}
          </p>
          <h2
            id="gallery-heading"
            className="mt-3 font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {heading}
          </h2>
          <div aria-hidden="true" className="mx-auto mt-6 h-1 w-20 bg-gold" />
          <p className="mx-auto mt-5 max-w-xl text-sm font-medium text-on-pure/70 sm:text-base">
            {description}
          </p>
        </header>

        {/* Plain photo grid */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {shots.map((shot, index) => (
            <button
              key={shot.url}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative block overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={`View photo: ${shot.alt}`}
            >
              <img
                src={shot.url}
                alt={shot.alt}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-pure/70 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-20"
              />
            </button>
          ))}
        </div>

        {showViewMore && SHOTS.length > shots.length ? (
          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center rounded-full border-2 border-gold px-8 py-3 text-sm font-bold uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-surface-pure focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-surface-pure"
            >
              View more photos
            </Link>
          </div>
        ) : null}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery photo viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-pure/95 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo"
            className="absolute right-4 top-4 rounded-full border border-on-pure/20 px-4 py-2 text-sm font-bold uppercase tracking-widest text-on-pure hover:border-gold hover:text-gold"
          >
            Close
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-on-pure/20 px-3 py-2 text-lg text-on-pure hover:border-gold hover:text-gold sm:left-6"
          >
            &#8249;
          </button>

          <img
            src={active.url}
            alt={active.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]"
          />

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-on-pure/20 px-3 py-2 text-lg text-on-pure hover:border-gold hover:text-gold sm:right-6"
          >
            &#8250;
          </button>

          <span
            aria-hidden="true"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-on-pure/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-on-pure/80"
          >
            {(openIndex ?? 0) + 1} / {shots.length}
          </span>
        </div>
      ) : null}
    </section>
  );
}
