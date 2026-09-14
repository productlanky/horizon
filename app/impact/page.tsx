"use client";

import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Activity,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { useDonation } from "@/context/DonationContext";
import Image from "next/image";

export default function ImpactPage() {
  const { openModal } = useDonation();

  // --- Animation Configurations ---
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  return (
    <div className="w-full bg-[#F3EFE9] min-h-screen selection:bg-[#22C55E]/30">
      {/* ==========================================
          1. HERO HEADER: Bold & Action-Oriented
          ========================================== */}
      <section className="pt-24 md:pt-32 pb-20 px-6 max-w-[1200px] mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeUpVariant}
            className="inline-block px-4 py-1.5 bg-[#1A1A1A] text-white rounded-full text-xs font-bold tracking-widest uppercase mb-8"
          >
            Proof of Impact
          </motion.span>

          <motion.h1
            variants={fadeUpVariant}
            className="text-[3.5rem] leading-[1.05] md:text-[7rem] md:leading-[0.95] font-black tracking-[-0.04em] text-[#1A1A1A] mb-8"
          >
            Words don't save lives. <br className="hidden md:block" />
            <span className="text-[#22C55E]">Action does.</span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariant}
            className="text-xl text-[#1A1A1A]/60 font-medium max-w-2xl mx-auto leading-relaxed mb-12"
          >
            We bypass traditional red tape by utilizing secure digital gateways
            and funding local, vetted civilian networks directly on the ground
            in Palestine and Ukraine.
          </motion.p>
        </motion.div>
      </section>

      {/* ==========================================
          2. THE LOGISTICS PIPELINE (How it works)
          ========================================== */}
      <section className="max-w-[1200px] mx-auto px-6 pb-32">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-[#1A1A1A]/5 shadow-sm">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#1A1A1A]">
              The Horizon Pipeline
            </h2>
            <p className="text-[#1A1A1A]/50 mt-4 font-bold tracking-widest uppercase text-xs">
              0% Bureaucracy. 100% Efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-[#1A1A1A]/5" />

            {/* Step 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="relative z-10 text-center group"
            >
              <div className="w-24 h-24 mx-auto bg-[#F8F5F0] rounded-full flex items-center justify-center mb-6 border-4 border-white group-hover:border-[#22C55E] transition-colors duration-500">
                <Lock className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                1. Secure Ingestion
              </h3>
              <p className="text-[#1A1A1A]/60 font-medium text-sm leading-relaxed px-4">
                Global fiat donations are securely processed and shielded to
                protect donor identity and bypass blocked traditional banking
                routes.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="relative z-10 text-center group"
            >
              <div className="w-24 h-24 mx-auto bg-[#F8F5F0] rounded-full flex items-center justify-center mb-6 border-4 border-white group-hover:border-[#22C55E] transition-colors duration-500">
                <Activity className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                2. Local Allocation
              </h3>
              <p className="text-[#1A1A1A]/60 font-medium text-sm leading-relaxed px-4">
                Funds are instantly distributed to pre-vetted, localized
                civilian volunteer networks operating directly in the conflict
                zones.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="relative z-10 text-center group"
            >
              <div className="w-24 h-24 mx-auto bg-[#1A1A1A] rounded-full flex items-center justify-center mb-6 border-4 border-white group-hover:scale-110 transition-transform duration-500">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                3. Direct Delivery
              </h3>
              <p className="text-[#1A1A1A]/60 font-medium text-sm leading-relaxed px-4">
                Because supplies are sourced locally by operatives on the
                ground, aid reaches families in hours, not weeks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. FINANCIAL TRANSPARENCY (Data Vis)
          ========================================== */}
      <section className="bg-[#1A1A1A] rounded-t-[3rem] pt-24 pb-32 overflow-hidden relative">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#22C55E]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Left: Copy */}
            <div className="w-full lg:w-1/2 space-y-8">
              <span className="inline-block px-4 py-1.5 bg-[#22C55E]/20 text-[#22C55E] rounded-full text-xs font-bold tracking-widest uppercase">
                Financial Transparency
              </span>
              <h2 className="text-[3rem] md:text-[4.5rem] leading-[1.05] font-black tracking-tight text-white">
                Where every <br /> dollar goes.
              </h2>
              <p className="text-white/60 font-medium text-lg leading-relaxed">
                We believe in radical transparency. Unlike massive NGOs that
                consume millions in administrative overhead and marketing, we
                operate lean. Your money goes to the frontline.
              </p>

              <button
                onClick={openModal}
                className="mt-4 px-8 py-4 bg-[#22C55E] text-white rounded-full font-bold text-sm tracking-widest uppercase shadow-lg hover:bg-[#16a34a] active:scale-95 transition-all flex items-center gap-3"
              >
                Fund The Treasury <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: The Breakdown Bars */}
            <div className="w-full lg:w-1/2 space-y-8">
              {/* Bar 1 */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-white font-bold text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#22C55E]" /> Direct
                    Relief & Aid
                  </span>
                  <span className="text-3xl font-black text-[#22C55E]">
                    88%
                  </span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "88%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-[#22C55E] rounded-full"
                  />
                </div>
                <p className="text-white/40 text-xs font-bold tracking-wider mt-2 uppercase">
                  Food, Medical, Shelter, Extraction
                </p>
              </div>

              {/* Bar 2 */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-white font-bold text-lg flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-white/60" /> Secure
                    Logistics
                  </span>
                  <span className="text-3xl font-black text-white">9%</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "9%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                    className="h-full bg-white/80 rounded-full"
                  />
                </div>
                <p className="text-white/40 text-xs font-bold tracking-wider mt-2 uppercase">
                  Transport routing & Encrypted Comms
                </p>
              </div>

              {/* Bar 3 */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-white font-bold text-lg flex items-center gap-2">
                    <Activity className="w-5 h-5 text-white/60" /> Platform
                    Operations
                  </span>
                  <span className="text-3xl font-black text-white">3%</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "3%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                    className="h-full bg-white/40 rounded-full"
                  />
                </div>
                <p className="text-white/40 text-xs font-bold tracking-wider mt-2 uppercase">
                  Server hosting & Gateway Fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. IMAGE / METRICS GRID
          ========================================== */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Visual Callout */}
            <div className="rounded-[2rem] overflow-hidden h-[400px] relative group">
              <Image
                sizes="100%"
                height={400}
                width={400}
                src="/help.avif"
                alt="Aid boxes"
                className="w-full h-full object-cover filter grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-3xl font-black text-white mb-2">12,500+</h3>
                <p className="text-white/80 font-bold uppercase tracking-widest text-xs">
                  Meals Delivered This Month
                </p>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-6">
              <div className="bg-[#F8F5F0] rounded-[2rem] p-10 flex flex-col justify-center items-start group hover:bg-[#22C55E] transition-colors duration-500 cursor-default">
                <h3 className="text-4xl font-black text-[#1A1A1A] group-hover:text-white transition-colors">
                  450+
                </h3>
                <p className="text-[#1A1A1A]/50 group-hover:text-white/80 font-bold uppercase tracking-widest text-xs mt-2 transition-colors">
                  Families Relocated to Safe Zones
                </p>
              </div>
              <div className="bg-[#1A1A1A] rounded-[2rem] p-10 flex flex-col justify-center items-start">
                <h3 className="text-4xl font-black text-white">8,200</h3>
                <p className="text-white/50 font-bold uppercase tracking-widest text-xs mt-2">
                  Trauma Kits Distributed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
