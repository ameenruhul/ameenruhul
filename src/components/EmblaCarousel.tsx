"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";

type EmblaCarouselProps = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };

  const scrollPrev = () => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  };

  return (
    <section className="relative">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] max-w-full"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows + dots */}
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={scrollPrev}
          className="inline-flex items-center justify-center rounded-full border px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          ‹ Prev
        </button>

        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === selectedIndex
                  ? "bg-zinc-900 dark:bg-zinc-100"
                  : "bg-zinc-300 dark:bg-zinc-600"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={scrollNext}
          className="inline-flex items-center justify-center rounded-full border px-3 py-1 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          Next ›
        </button>
      </div>
    </section>
  );
};

export default EmblaCarousel;
