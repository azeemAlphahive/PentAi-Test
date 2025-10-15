"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

interface Stat {
  value: string;
  caption: string;
}

const DEFAULT_STATS: Stat[] = [
  {
    value: "23%",
    caption:
      "Consequat netus consequat tortor vitae cursus nullam tincidunt urna. Tristique leo",
  },
  {
    value: "23%",
    caption:
      "Consequat netus consequat tortor vitae cursus nullam tincidunt urna. Tristique leo",
  },
  {
    value: "23%",
    caption:
      "Consequat netus consequat tortor vitae cursus nullam tincidunt urna. Tristique leo",
  },
];

interface StatCardProps extends Stat {
  index: number;
  inView: boolean;
}

function StatCard({ value, caption, index, inView }: StatCardProps) {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.2 + 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.2 + 0.5,
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="
          group relative overflow-hidden rounded-2xl
          border border-white/12 ring-1 ring-white/10
          bg-[#282828] backdrop-blur-[1px]
          shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]
        "
      >
        <div
          aria-hidden
          className="
            absolute inset-x-0 bottom-[-30%] -z-20 h-[160%]
            [background:radial-gradient(85%_55%_at_50%_80%,rgba(255,255,255,0.22),rgba(255,255,255,0.10)_45%,transparent_70%)]
            blur-[18px]
            animate-glow-pulse
          "
        />
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src="/images/Union.png"
            alt=""
            fill
            className="object-cover object-bottom opacity-100 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
        </div>

        <div
          aria-hidden
          className="
            absolute inset-0 -z-20
            bg-[radial-gradient(130%_120%_at_50%_120%,rgba(255,255,255,0.06),transparent_55%)]
          "
        />

        <div className="px-6 py-7 sm:px-7 sm:py-8">
          <div className="flex min-h-[138px] items-center justify-center">
            <motion.span
              variants={numberVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="
                text-transparent text-[56px] sm:text-[64px] leading-none font-[dm-bold] tracking-tight
                drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]
              "
              style={{
                background:
                  "linear-gradient(166.07deg, #7E7E7E 16.41%, #FFFFFF 97.61%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {value}
            </motion.span>
          </div>
        </div>
      </motion.div>
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-[10px] text-center font-[dm-bold] text-[13px] leading-relaxed text-zinc-300/85"
      >
        {caption}
      </motion.p>
    </div>
  );
}

interface FeatureStatsProps {
  titleTop?: string;
  titleMain?: string;
  titleBottom?: string;
  stats?: Stat[];
  className?: string;
}

export function FeatureStats({
  titleTop = "Lorem",
  titleMain = "ipsum dolor sit amet",
  titleBottom = "consectetur.",
  stats = DEFAULT_STATS,
  className = "",
}: FeatureStatsProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardsContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className={`relative isolate py-14 sm:py-[114px] ${className}`}>
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 
            variants={titleVariants}
            className="text-[28px] sm:text-[34px] md:text-[42px] font-[dm-semibold] leading-[1.15] font-semibold tracking-tight"
          >
            <span className="text-zinc-300">
              {titleTop}
            </span>{" "}
            <span className="text-white">
              {titleMain}
            </span>
            <br />
            <span className="text-white">
              {titleBottom}
            </span>
          </motion.h2>
        </motion.div>

        {/* cards */}
        <motion.div
          variants={cardsContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-8 grid gap-6 sm:gap-8 sm:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              value={stat.value} 
              caption={stat.caption} 
              index={index} 
              inView={inView} 
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}