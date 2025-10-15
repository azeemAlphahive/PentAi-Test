"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Feature = {
  icon: string;
  label: string;
};

const features: Feature[] = [
  { icon: "/Images/lock/LockLaminated.svg", label: "Lorem Ipsum Dollar" },
  { icon: "/Images/lock/SecurityCamera.svg", label: "Lorem Ipsum Dollar" },
  { icon: "/Images/lock/Fingerprint.svg", label: "Lorem Ipsum Dollar" },
  { icon: "/Images/lock/ShieldWarning.svg", label: "Lorem Ipsum Dollar" },
  { icon: "/Images/lock/ShieldCheck.svg", label: "Lorem Ipsum Dollar" },
  { icon: "/Images/lock/wall.svg", label: "Lorem Ipsum Dollar" },
];

export function SecurityFeatures() {
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative isolate py-16 md:py-20">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-[23px] lg:grid-cols-2"
        >
          {/* left text + lock */}
          <div className="relative max-w-lg">
            {/* spotlight */}
            <div
              aria-hidden
              className="
                pointer-events-none absolute -z-10
                left-1/3 top-[56%] h-[420px] w-[520px] -translate-x-1/2 -translate-y-1/2
                [background:radial-gradient(60%_60%_at_50%_60%,rgba(255,255,255,0.22),rgba(255,255,255,0.10)_45%,transparent_80%)]
                blur-[24px]
              "
            />

            <motion.h2 
              variants={itemVariants}
              className="text-[48px] leading-[1.1] font-[dm-semibold]"
            >
              <span className="text-zinc-300">Lorem</span>{" "}
              <span className="text-white">Ipsum</span>
              <br />
              <span className="text-white">Dollar</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="mt-[30px] max-w-md font-[dm] text-[16px] text-white"
            >
              Consequat netus consequat tortor vitae cursus.
              <br />
              Tristique leo consequat
              <br />
              Consequat netus consequat tortor vitae cursus.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="relative mt-12 h-56 w-48 sm:h-60 sm:w-52"
            >
              <Image
                src="/images/lock_front.png"
                alt="Security Lock"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* right side icons */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 w-full md:auto-rows-[150px]">
            {/* row 1 */}
            <motion.div variants={itemVariants}>
              <FeatureCard feature={features[0]} />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FeatureCard
                feature={features[1]}
                className="lg:col-span-2 h-[200px] md:h-[150px]"
              />
            </motion.div>

            {/* row 2 */}
            <motion.div variants={itemVariants}>
              <FeatureCard
                feature={features[2]}
                className="lg:col-span-2 lg:row-span-1 w-[288px]"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FeatureCard
                feature={features[3]}
                className="lg:col-span-1 lg:row-span-2 min-h-[320px]"
              />
            </motion.div>

            {/* row 3 */}
            <motion.div variants={itemVariants}>
              <FeatureCard feature={features[4]} />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <FeatureCard feature={features[5]} className="" />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function FeatureCard({
  feature,
  className = "",
}: {
  feature: Feature;
  className?: string;
}) {
  return (
 <motion.div
  whileHover={{ 
    y: -8, 
    transition: { duration: 0.2 } 
  }}
  className={[
    "relative overflow-hidden rounded-2xl",
    "backdrop-blur-[5.233px]",
    "border border-transparent",
    "bg-[#282828]",
    "shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]",
    "flex flex-col items-center justify-center text-center px-6 min-h-[150px]",
    "bg-gradient-to-br from-[#282828] to-[#282828]",
    "before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:p-[1.31px] before:bg-gradient-to-br before:from-[#3D3D3D] before:to-[#A0A0A0]/[0.04] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:pointer-events-none",
    className,
  ].join(" ")}
  style={{
    borderImage: 'linear-gradient(239.29deg, #3D3D3D 9.45%, rgba(160, 160, 160, 0.04) 66.55%) 1',
    borderWidth: '1.31px',
    borderStyle: 'solid',
  }}
>
  <Image
    src={feature.icon}
    alt={feature.label}
    width={40}
    height={40}
    className="mb-3 h-10 w-10 relative z-10"
  />
  <div className="text-sm text-white font-[dm-semibold] leading-tight relative z-10">
    {feature.label}
  </div>
</motion.div>
  );
}