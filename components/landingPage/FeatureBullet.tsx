"use client";

import { useState } from "react";
import { motion, AnimatePresence, easeOut, easeIn } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export type Feature = {
  id: string | number;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

type FeatureBulletsShowcaseProps = {
  heading?: string;
  features: Feature[];
  defaultImageSrc: string;
  defaultImageAlt?: string;
  className?: string;
};

export function FeatureBulletsShowcase({
  heading = "Lorem ipsum dolor",
  features,
  defaultImageSrc,
  defaultImageAlt = "Product screenshot",
  className = "",
}: FeatureBulletsShowcaseProps) {
  const [active, setActive] = useState(features[0]?.id ?? 0);
  const activeFeature = features.find((f) => f.id === active) ?? features[0];

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const headingVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const featureItemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  const imageContainerVariants = {
    hidden: { x: 30, opacity: 0, scale: 0.95 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: easeOut
      }
    }
  };

  // ...existing code...

  const activeFeatureVariants = {
    inactive: { 
      scale: 1,
      transition: { duration: 0.2 }
    },
    active: { 
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className={`relative isolate py-12 sm:py-16 ${className}`}>
      <Container>
        <motion.h2 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingVariants}
          className="text-center text-[32px] sm:text-[48px] font-[dm-semibold] tracking-tight text-[#ECEDEE]"
        >
          {heading}
        </motion.h2>

        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-8 grid gap-[32px] lg:grid-cols-2"
        >
          {/* Left feature list */}
          <div className="mx-auto w-full max-w-xl">
            <ul className="flex flex-col gap-4">
              {features.map((feature, index) => {
                const isActive = feature.id === active;
                return (
                  <motion.li 
                    key={feature.id}
                    variants={featureItemVariants}
                    custom={index}
                  >
                    <motion.button
                      type="button"
                      onClick={() => setActive(feature.id)}
                      className={[
                        "group w-full rounded-[6px] px-[16px] py-[8.33px] text-left transition-all duration-300 relative overflow-hidden",
                        "backdrop-blur-sm",
                        isActive
                          ? "bg-[#282828] shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]"
                          : "bg-zinc-900/50 hover:bg-[#1C1C1C] border border-white/10 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.6)]",
                      ].join(" ")}
                      aria-current={isActive ? "true" : undefined}
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Gradient border using pseudo-element */}
                      <div
                        className={`absolute inset-0 rounded-[6px] transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                        style={{
                          background: "linear-gradient(304.54deg, #8E4EC8 -0.44%, #B77DDD 35.09%, #F7ECFC 72%)",
                          padding: "1px",
                          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      />
                      
                      <div className="relative z-10 rounded-[10px] h-full">
                        <motion.div 
                          className="text-[20px] font-[dm-semibold] text-white"
                          animate={isActive ? { color: "#FFFFFF" } : { color: "#E4E4E7" }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature.title || `Feature ${index + 1}`}
                        </motion.div>
                        <motion.p 
                          className="mt-1 text-[16px] font-[dm-medium] leading-relaxed text-zinc-300/85"
                          animate={isActive ? { opacity: 1 } : { opacity: 0.85 }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature.description}
                        </motion.p>
                      </div>
                    </motion.button>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Right screenshot */}
          <motion.div 
            variants={imageContainerVariants}
            className="mx-auto w-full max-w-2xl"
          >
            <motion.div 
              variants={activeFeatureVariants}
              animate={inView ? "active" : "inactive"}
              className="relative w-full aspect-[16/9] overflow-hidden rounded-xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <Image
                    src={activeFeature?.imageSrc ?? defaultImageSrc}
                    alt={activeFeature?.imageAlt ?? defaultImageAlt}
                    fill
                    priority
                    className="object-fill object-center"
                  />
                </motion.div>
              </AnimatePresence>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_50%,transparent_50%,rgba(0,0,0,0.35))]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}