"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, Heart, Droplets, Home, ChevronDown } from "lucide-react";
import { useDonation } from "@/context/DonationContext";
import Image from "next/image";

export default function AboutPage() {
  const { openModal } = useDonation();

  // 1. Scroll tracking for the main narrative container
  const storyContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: storyContainerRef,
    offset: ["start start", "end end"],
  });

  // 2. Cinematic Parallax & Filter Effects based on scroll position
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const imageBrightness = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["brightness(90%)", "brightness(60%)", "brightness(40%)"],
  );

  // 3. Staggered Entrance Animations
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="w-full bg-[#F3EFE9] min-h-screen selection:bg-[#22C55E]/30 relative">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 bg-[#22C55E] z-50 origin-left"
        style={{ scaleX: scrollYProgress, width: "100%" }}
      />

      {/* ==========================================
          1. THE HERO HEADER
          ========================================== */}
      <section className="pt-24 md:pt-32 pb-12 px-6 max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
          <span className="inline-block px-4 py-1.5 bg-[#E8F5E9] text-[#22C55E] rounded-full text-xs font-bold tracking-widest uppercase mb-8">
            Beyond the Headlines
          </span>
          <h1 className="text-[3.5rem] leading-[1.05] md:text-[6.5rem] md:leading-[0.95] font-black tracking-[-0.04em] text-[#1A1A1A] mb-8">
            A unified stand <br className="hidden md:block" />
            <span className="text-[#1A1A1A]/40">for humanity.</span>
          </h1>
          <p className="text-xl text-[#1A1A1A]/60 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
            We are not politicians. We are a decentralized collective of
            humanitarians, engineers, and volunteers committed to bypassing
            bureaucratic friction to deliver direct aid.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex justify-center text-[#1A1A1A]/30"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* ==========================================
          2. THE IMMERSIVE SCROLLYTELLING
          ========================================== */}
      <section ref={storyContainerRef} className="relative w-full">
        <div className="max-w-[1400px] mx-auto relative flex flex-col lg:flex-row">
          {/* STICKY VISUAL (Background on Mobile, Left Column on Desktop) */}
          <div className="sticky top-0 lg:top-32 w-full h-[100dvh] lg:h-[70vh] lg:w-1/2 lg:pl-6 z-0 overflow-hidden lg:rounded-r-[3rem] lg:rounded-l-[3rem]">
            <motion.div
              style={{ scale: imageScale, filter: imageBrightness }}
              className="w-full h-full origin-center"
            >
              <Image
                sizes="100%"
                width={500}
                height={500}
                src="/child.jpg"
                alt="Humanitarian Crisis"
                className="w-full h-full object-cover filter grayscale-[30%] contrast-125"
              />
            </motion.div>

            {/* Gradient overlays to ensure text readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent lg:hidden" />
            <div className="absolute inset-0 bg-black/20 hidden lg:block" />
          </div>

          {/* SCROLLING TEXT BLOCKS */}
          <div className="relative z-10 w-full lg:w-1/2 lg:pl-16 px-6 lg:pr-6 pb-[15vh] lg:pb-[20vh] -mt-[85vh] lg:mt-0">
            {/* Block 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.8 }}
              className="min-h-[85vh] lg:min-h-[60vh] flex flex-col justify-end lg:justify-center mb-[15vh] lg:mb-0"
            >
              {/* Glassmorphism wrapper for mobile readability */}
              <div className="bg-[#1A1A1A]/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-8 lg:p-0 rounded-[2rem] border border-white/10 lg:border-none">
                <h2 className="text-4xl md:text-5xl font-black text-white lg:text-[#1A1A1A] tracking-tight leading-tight mb-6">
                  When the sirens sound, <br className="hidden md:block" /> the
                  world stops.
                </h2>
                <p className="text-lg md:text-xl text-white/80 lg:text-[#1A1A1A]/70 leading-relaxed font-medium">
                  In Palestine and Ukraine, families are waking up to a reality
                  no one should face. Homes reduced to rubble in seconds. The
                  frantic search for safety. The terrifying realization that
                  there is nowhere left to run.
                </p>
              </div>
            </motion.div>

            {/* Block 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.8 }}
              className="min-h-[85vh] lg:min-h-[60vh] flex flex-col justify-end lg:justify-center mb-[15vh] lg:mb-0"
            >
              <div className="bg-[#1A1A1A]/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-8 lg:p-0 rounded-[2rem] border border-white/10 lg:border-none">
                <h2 className="text-4xl md:text-5xl font-black text-white lg:text-[#1A1A1A] tracking-tight leading-tight mb-6">
                  Winter does not wait <br className="hidden md:block" /> for
                  ceasefires.
                </h2>
                <p className="text-lg md:text-xl text-white/80 lg:text-[#1A1A1A]/70 leading-relaxed font-medium">
                  Millions of displaced mothers, fathers, and children are
                  sleeping in makeshift tents. Without reliable heating or clean
                  water, the cold becomes as deadly as the conflict itself.
                </p>
              </div>
            </motion.div>

            {/* Block 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.8 }}
              className="min-h-[85vh] lg:min-h-[60vh] flex flex-col justify-end lg:justify-center"
            >
              <div className="bg-[#22C55E]/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-8 lg:p-0 lg:pl-8 rounded-[2rem] lg:rounded-none border border-white/20 lg:border-none lg:border-l-4 lg:border-l-[#22C55E]">
                <h2 className="text-4xl md:text-5xl font-black text-white lg:text-[#1A1A1A] tracking-tight leading-tight mb-6">
                  But resilience remains.
                </h2>
                <p className="text-lg md:text-xl text-white/90 lg:text-[#1A1A1A]/70 leading-relaxed font-medium">
                  Every day, frontline medics pull miracles from the debris.
                  Local volunteers share their last rations. Humanity persists
                  in the darkest corners of these warzones—and they are asking
                  for our help to keep going.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. THE INTERACTIVE IMPACT GRID
          ========================================== */}
      <section className="bg-white mt-10 rounded-t-[2.5rem] md:rounded-t-[4rem] pt-24 pb-32 relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#1A1A1A]">
              A little aid goes a long way.
            </h2>
            <p className="text-[#1A1A1A]/50 mt-4 font-bold tracking-widest uppercase text-xs">
              Direct Impact Metrics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                price: "$25",
                title: "Trauma Kit",
                desc: "Provides essential bandages, antiseptics, and painkillers for frontline volunteers.",
              },
              {
                icon: Droplets,
                price: "$50",
                title: "Rations & Water",
                desc: "Secures enough high-calorie dry food and purified water for a family of four.",
              },
              {
                icon: Home,
                price: "$150",
                title: "Thermal Shelter",
                desc: "Supplies heavy-duty winterized tents and thermal blankets for displaced families.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#F8F5F0] p-10 rounded-[2rem] text-center group hover:bg-[#1A1A1A] transition-colors duration-500 cursor-default"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center mb-6 group-hover:bg-[#22C55E] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="w-6 h-6 text-[#1A1A1A] group-hover:text-white" />
                </div>
                <h3 className="text-4xl font-black mb-2 group-hover:text-white transition-colors duration-500">
                  {item.price}
                </h3>
                <p className="font-bold text-sm uppercase tracking-widest mb-4 opacity-50 group-hover:text-white transition-colors duration-500">
                  {item.title}
                </p>
                <p className="text-sm font-medium opacity-80 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Magnetic CTA Button Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-20 flex justify-center"
          >
            <button
              onClick={openModal}
              className="group relative px-10 py-5 bg-[#22C55E] text-white rounded-full font-bold text-sm tracking-widest uppercase shadow-2xl shadow-green-500/30 active:scale-95 transition-all flex items-center gap-4 overflow-hidden"
            >
              {/* Button Shimmer Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10">Fund The Mission</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
