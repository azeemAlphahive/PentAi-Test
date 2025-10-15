"use client";

import { motion, easeOut, easeIn } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

interface DashboardShowcaseProps {
  imageSrc: string;
  imageAlt?: string;
  titleTop?: string;
  titleMain?: string;
  titleBottom?: string;
  description?: string;
}

export function DashboardShowcase({
  imageSrc,
  imageAlt = "Product dashboard",
  titleTop = "Lorem",
  titleMain = "ipsum dolor sit amet",
  titleBottom = "consectetur.",
  description = "Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla",
}: DashboardShowcaseProps) {
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

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut }
    }
  };

  const descriptionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        delay: 0.3,
        duration: 0.5, 
        ease: easeOut 
      }
    }
  };

  const imageContainerVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.7,
        ease: easeOut
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
        ease: easeIn
      }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: easeOut
      }
    }
  };

  return (
    <div className="py-[80px]">
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
            className="text-[30px] sm:text-[36px] md:text-[48px] leading-[1.15] font-[dm-semibold] tracking-tight"
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
          
          <motion.p 
            variants={descriptionVariants}
            className="mx-auto mt-3 max-w-2xl text-[18px] font-[dm-medium] text-[#ECEDEE]"
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div 
          variants={imageContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative mx-auto mt-8 w-full max-w-5xl"
        >
          <motion.div 
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
            className="rounded-2xl border-none p-px shadow-[0_40px_120px_-20px_rgba(0,0,0,0.55)]"
          >
            <div className="overflow-hidden rounded-xl bg-zinc-900">
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={1240}
                  height={760}
                  className="h-auto w-full"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Subtle glow effect */}
          <motion.div 
            variants={glowVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="absolute inset-0 -z-10 mx-auto w-[90%] rounded-2xl bg-purple-500/10 blur-3xl"
          />
        </motion.div>
      </Container>
    </div>
  );
}