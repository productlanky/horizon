"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useDonation } from "@/context/DonationContext";

export default function HeroSection() {
  const { openModal } = useDonation();

  // --- Animation Choreography ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      // The 'as const' tells TS this is exactly "spring", not a generic string
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const pillVariants: Variants = {
    hidden: { width: "0px", opacity: 0 },
    visible: {
      width: "var(--pill-width)",
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    // min-h-[calc(100vh-100px)] ensures it perfectly centers in the viewport
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-[1200px] mx-auto px-6 min-h-[calc(100vh-120px)] flex flex-col justify-center text-center pb-20 pt-10"
    >
      {/* 
        To get the ultra-thick look:
        1. Use font-black (weight 900)
        2. Use tracking-[-0.05em] to tightly pack the letters
      */}
      <motion.h1
        variants={textVariants}
        className="text-[4rem] leading-[1.05] md:text-[8.5rem] md:leading-[0.95] font-black tracking-[-0.05em] text-[#1A1A1A] flex flex-wrap items-center justify-center gap-x-2 md:gap-x-6"
      >
        <span>Hope</span>

        {/* The Animated Image Pill */}
        <motion.span
          variants={pillVariants}
          // We use inline styles to pass the target width to Framer Motion based on screen size
          style={{ "--pill-width": "max(120px, 280px)" } as React.CSSProperties}
          className="inline-block align-middle h-[60px] md:h-[130px] rounded-full overflow-hidden relative shadow-inner md:[--pill-width:280px] [--pill-width:120px]"
        >
          <motion.img
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/hands.jpg"
            alt="Support"
            className="w-full h-full object-cover"
          />
        </motion.span>

        <span>Rise</span>
        <span className="w-full mt-2 md:mt-0">is Support.</span>
      </motion.h1>

      <motion.p
        variants={textVariants}
        className="mt-8 text-lg md:text-xl font-medium text-[#1A1A1A]/60 max-w-2xl mx-auto leading-relaxed"
      >
        Join our global mission to provide immediate humanitarian relief and lay
        the foundation for a rebuilt future.
      </motion.p>

      {/* The Action Buttons */}
      <motion.div
        variants={textVariants}
        className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button
          onClick={openModal}
          className="w-full sm:w-auto px-10 py-5 bg-[#22C55E] text-white rounded-full font-bold text-sm tracking-widest uppercase shadow-xl shadow-green-500/20 hover:bg-[#16a34a] active:scale-95 transition-all"
        >
          Make an Impact
        </button>

        <button
          onClick={openModal}
          className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-[#1A1A1A]/20 text-[#1A1A1A] rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:border-[#1A1A1A] transition-all"
        >
          I Need Help <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>
    </motion.section>
  );
}
