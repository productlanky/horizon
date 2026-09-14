"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, HeartHandshake, ShieldCheck } from "lucide-react";

export default function LogoStrip() {
  // We duplicate the logos array to create a seamless infinite scroll loop
  const logos = [
    {
      name: "UNICEF",
      svg: (
        <div className="text-2xl font-black tracking-[-0.05em] lowercase flex items-center gap-1">
          <Globe className="w-5 h-5" strokeWidth={2.5} /> unicef
        </div>
      ),
    },
    {
      name: "Red Crescent",
      svg: (
        <div className="flex items-center gap-2 text-xl font-bold uppercase tracking-wide">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.5,12A9.5,9.5,0,1,1,12,2.5a1,1,0,0,0,0,2,7.5,7.5,0,1,0,7.5,7.5,1,1,0,0,0,2,0Z" />
          </svg>
          Red Crescent
        </div>
      ),
    },
    {
      name: "UNHCR",
      svg: (
        <div className="flex items-center gap-2 text-2xl font-black tracking-tighter">
          <ShieldCheck className="w-6 h-6" strokeWidth={2.5} /> UNHCR
        </div>
      ),
    },
    {
      name: "Doctors Without Borders",
      svg: (
        <div className="text-sm font-black uppercase leading-tight border-l-[3px] border-current pl-2 tracking-widest">
          Doctors
          <br />
          Without
          <br />
          Borders
        </div>
      ),
    },
    {
      name: "Save the Children",
      svg: (
        <div className="text-xl font-extrabold tracking-tight flex items-center gap-2">
          <HeartHandshake className="w-6 h-6" strokeWidth={2} /> Save the
          Children
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full border-y border-[#1A1A1A]/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* --- THE INFINITE SLIDER (Left Side) --- */}
        <div className="flex-1 overflow-hidden py-8 relative">
          {/* Gradient masks to fade out the edges smoothly */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[#F3EFE9] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[#F3EFE9] to-transparent z-10" />

          {/* Framer Motion Marquee */}
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25, // Speed of the slider
                ease: "linear",
              },
            }}
            className="flex items-center gap-16 md:gap-24 w-max px-8"
          >
            {/* Render the logos twice to create a seamless loop */}
            {[...logos, ...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="text-[#1A1A1A] opacity-30 hover:opacity-60 transition-opacity duration-300 flex-shrink-0"
                title={logo.name}
              >
                {logo.svg}
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- STATIC SCROLL INDICATOR (Right Side) --- */}
        <div className="hidden md:flex flex-shrink-0 items-center justify-center px-10 border-l border-[#1A1A1A]/5 h-[80px] bg-[#F3EFE9] z-20">
          <button
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1A1A1A]/60 hover:text-[#1A1A1A] flex items-center gap-3 transition-colors group"
          >
            Scroll Down
            <ArrowRight className="w-4 h-4 rotate-90 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
