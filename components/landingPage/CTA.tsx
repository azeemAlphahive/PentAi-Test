"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const descriptionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <section className="relative py-10 sm:py-[64px]">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
            className="
              relative overflow-hidden rounded-2xl
              border border-white/12 bg-zinc-900/50
              ring-1 ring-white/10 backdrop-blur-sm
              shadow-[0_30px_120px_-30px_rgba(0,0,0,0.6)]
            "
          >
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22]">
              <Image
                src="/images/Union.png"
                alt=""
                fill
                priority
                className="object-cover object-center"
              />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(140%_120%_at_50%_40%,transparent_50%,rgba(0,0,0,0.25))]"
            />

            <div className="mx-auto max-w-3xl px-6 py-10 sm:px-10 sm:py-[64px] text-center">
              <motion.h2 
                variants={titleVariants}
                className="text-[28px] sm:text-[48px] font-[dm-semibold] tracking-tight"
              >
                <span className="text-zinc-300">Ready</span>{" "}
                <span className="text-white">to get started</span>
                <span className="text-white">?</span>
              </motion.h2>

              <motion.p 
                variants={descriptionVariants}
                className="mx-auto mt-[24px] max-w-2xl font-[dm-medium] text-[18px] leading-6 text-zinc-300/85"
              >
                Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla
                netus sollicitudin. In enim tortor sed libero velit lectus. Egestas
                facilisi neque a arcu vitae dignissim. Sit lobortis orci risus
                volutpat eu habitasse.
              </motion.p>

              <motion.div 
                variants={buttonVariants}
                className="mt-[24px]"
              >
                <motion.div
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    href="#"
                    className="
                      inline-flex items-center justify-center rounded-full
                      px-[24px] py-[12px] text-[15px] font-[dm-semibold] text-zinc-100
                      bg-gradient-to-b bg-[#42225a] hover:bg-[#5a2d7a]
                      shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset,0_10px_30px_-10px_rgba(168,85,247,0.45)]
                      ring-1 ring-white/10 hover:brightness-110 transition
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/50
                    "
                  >
                    Book a demo
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}