import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { GalleryImage } from "../../data/content";

type ImageGridProps = {
  images: GalleryImage[];
};

export function ImageGrid({ images }: ImageGridProps) {
  const [activeFilter, setActiveFilter] = useState<
    "tutte" | GalleryImage["category"]
  >("tutte");
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    if (activeFilter === "tutte") {
      return images;
    }
    return images.filter((image) => image.category === activeFilter);
  }, [activeFilter, images]);

  const slides = filtered.map((image) => ({ src: image.src, alt: image.alt }));

  return (
    <section>
      <div className="mb-6 flex flex-wrap gap-2">
        {(["tutte", "editoriale", "scene", "backstage"] as const).map(
          (filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={[
                "rounded-full border px-4 py-1.5 text-sm font-semibold capitalize transition",
                activeFilter === filter
                  ? "border-transparent bg-petrol-500 text-white dark:bg-peach-300 dark:text-slate-900"
                  : "border-white/40 bg-white/20 text-[color:var(--text-main)] dark:border-white/20 dark:bg-white/10 dark:text-white/90",
              ].join(" ")}
            >
              {filter}
            </button>
          ),
        )}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className="group relative mb-4 w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/30 text-left shadow-soft"
            onClick={() => setOpenIndex(index)}
            aria-label={`Apri immagine: ${image.alt}`}
          >
            <div className="relative w-full bg-gradient-to-br from-base-100 to-base-300/40 dark:from-petrol-900 dark:to-petrol-700/50">
              {!failed[image.id] ? (
                <img
                  src={image.thumb}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                  onError={() =>
                    setFailed((prev) => ({
                      ...prev,
                      [image.id]: true,
                    }))
                  }
                />
              ) : (
                <div className="flex min-h-[220px] items-center justify-center px-6 text-center text-sm font-semibold text-[color:var(--text-muted)]">
                  Inserisci questo file in public/assets/images per vedere
                  l'anteprima.
                </div>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-4 pb-4 pt-10 text-white">
              <p className="text-xs uppercase tracking-[0.14em] text-white/80">
                {image.category}
              </p>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        open={openIndex >= 0}
        index={openIndex}
        close={() => setOpenIndex(-1)}
        slides={slides}
      />
    </section>
  );
}
