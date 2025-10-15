"use client";

import { motion, easeOut, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "@/components/ui/Container";

export function Hero() {
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

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: easeOut
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.5,
        ease: easeOut
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: easeInOut
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: easeOut
      }
    }
  };

  const floatVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 2,
        ease: easeOut
      }
    },
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#0b0c10]"
    >
      <motion.div 
        variants={glowVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(168,85,247,0.18),rgba(11,12,16,0))]"
      />

      <Container className="pt-[100px] pb-[30px] text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1 
            variants={textVariants}
            className="mx-auto max-w-4xl text-[34px] sm:text-[44px] md:text-[60px] leading-[1.1] font-[dm-bold] tracking-tight"
          >
            <span className="text-zinc-300">Lorem</span>{" "}
            <span className="text-white">ipsum dolor sit amet</span>
            <br />
            <span className="text-white">consectetur</span>
          </motion.h1>

          <motion.p 
            variants={textVariants}
            className="mx-auto mt-[12px] max-w-3xl text-[24px] font-[dm] leading-6 text-zinc-300/80"
          >
            Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices est
            vivamus mauris fames et. Sed lacus purus in tellus.
          </motion.p>

          <motion.div 
            variants={buttonVariants}
            className="mt-[40px] flex justify-center"
          >
            <motion.button
              whileHover="hover"
              whileTap="tap"
              className="rounded-full bg-white px-6 py-2 text-[15px] font-[dm-semibold] text-black shadow-[0_1px_0_0_rgba(0,0,0,0.15),0_10px_30px_rgba(255,255,255,0.08)] ring-1 ring-black/5 hover:bg-white transition-all duration-500 ease-out"
            >
              Book a demo
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
      
      <motion.div 
        variants={floatVariants}
        initial="hidden"
        animate={inView ? ["visible", "float"] : "hidden"}
        className="pointer-events-none absolute bottom-[-120px] left-1/2 -z-[1] h-[420px] w-[900px] -translate-x-1/2 rounded-[999px] bg-fuchsia-700/25 blur-[120px]"
      />
    </section>
  );
}