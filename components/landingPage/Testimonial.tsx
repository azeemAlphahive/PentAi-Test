"use client";

import Image from "next/image";
import { useMemo, useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";

type Testimonial = {
  id: string | number;
  name: string;
  avatar: string;    
  role?: string;
  quote: string;
};

type Props = {
  title?: string;
  items?: Testimonial[];
  className?: string;
  autoScrollInterval?: number;
};

export function Testimonials({
  title = "Tons of others love using PentAI.",
  items,
  className = "",
  autoScrollInterval = 3000,
}: Props) {

  const safeItems = items ?? [];

  const [rowA, rowB,] = useMemo(() => {
    const a: Testimonial[] = [];
    const b: Testimonial[] = [];
    safeItems.forEach((t, i) => (i % 2 === 0 ? a : b).push(t));
    return [a, b];
  }, [safeItems]);

  return (
    <section className={`relative isolate py-14 sm:py-[64px] ${className}`}>
      <Container>
        <h2 className="text-center text-[28px] text-[#ECEDEE] sm:text-[34px] md:text-[48px] font-[dm-semibold] tracking-tight">
          {title}
        </h2>

        <div className="h-[330px] overflow-hidden mt-[36px] flex gap-[16px]">
          <ScrollRow 
            items={rowA} 
            ariaLabel="Testimonial row A" 
            autoScroll 
            scrollInterval={autoScrollInterval}
          />
          <ScrollRow 
            items={rowA} 
            ariaLabel="Testimonial row B" 
            autoScroll 
            scrollInterval={autoScrollInterval}
            reverse
          />
          <ScrollRow 
            items={rowB} 
            ariaLabel="Testimonial row A" 
            autoScroll 
            scrollInterval={autoScrollInterval}
          />
          <ScrollRow 
            items={rowB} 
            ariaLabel="Testimonial row B" 
            reverse 
            autoScroll 
            scrollInterval={autoScrollInterval}
          />
        </div>
      </Container>
    </section>
  );
}

function ScrollRow({
  items,
  reverse = false,
  ariaLabel,
  autoScroll = false,
  scrollInterval = 3000,
}: {
  items: Testimonial[];
  reverse?: boolean;
  ariaLabel: string;
  autoScroll?: boolean;
  scrollInterval?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);

  const nudge = (dir: "up" | "down") => {
    const el = ref.current;
    if (!el) return;
    
    const amount = Math.min(30, el.clientHeight * 0.9); // Adjust for vertical scroll
    const scrollAmount = dir === "down" ? amount : -amount;
    
    el.scrollBy({ top: scrollAmount, behavior: "smooth" });
  };

  const autoScrollNext = () => {
    if (!ref.current || isScrollingRef.current) return;
    
    isScrollingRef.current = true;
    nudge(reverse ? "up" : "down");
    
    // Reset the flag after scroll completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 500);
  };

  // Handle infinite scroll effect for vertical scrolling
  const handleScroll = () => {
    const el = ref.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    
    // If scrolled to the bottom, reset to top
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setTimeout(() => {
        if (el) {
          el.scrollTop = 0;
        }
      }, 300);
    }
    // If scrolled to the top (for reverse), reset to bottom
    else if (scrollTop <= 10 && reverse) {
      setTimeout(() => {
        if (el) {
          el.scrollTop = scrollHeight - clientHeight;
        }
      }, 300);
    }
  };

  useEffect(() => {
    const el = ref.current;
    if (!el || !autoScroll) return;

    // Set up auto-scroll interval
    scrollIntervalRef.current = setInterval(autoScrollNext, scrollInterval);

    // Add scroll event listener for infinite scroll
    el.addEventListener('scroll', handleScroll);

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      el.removeEventListener('scroll', handleScroll);
    };
  }, [autoScroll, scrollInterval, reverse]);

  // Duplicate items for seamless infinite scroll
  const duplicatedItems = useMemo(() => {
    return [...items, ...items, ...items];
  }, [items]);

  return (
    <div className="relative flex-1 min-w-0">
      {/* Top gradient overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 sm:h-16 bg-gradient-to-b from-[#0b0c10] to-transparent z-10" />
      {/* Bottom gradient overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-[#0b0c10] to-transparent z-10" />
  
      <div
        ref={ref}
        role="region"
        aria-label={ariaLabel}
        className={[
          "flex flex-col gap-4 sm:gap-[37px] overflow-y-auto scrollbar-hidden",
          " h-full",
          reverse ? "flex-col-reverse" : "flex-col",
        ].join(" ")}
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
        {duplicatedItems.map((t, index) => (
          <article
            key={`${t.id}-${index}`}
            className="flex-shrink-0 w-full rounded-2xl border border-white/10 bg-zinc-900/55 p-4 sm:p-[32px] backdrop-blur-sm ring-1 ring-white/5 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.7)]"
          >
            <header className="mb-3 flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/10">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
                <div className="min-w-0 truncate text-[18px] font-[dm-bold] text-[#ECEDEE]">
                  {t.name}
              </div>
            </header>

            <p className="text-[16px] leading-relaxed font-[dm-medium] text-[#A0A0A0]">
              {t.quote}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}