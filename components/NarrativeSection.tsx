"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, HeartHandshake, ShieldAlert } from "lucide-react";
import { useDonation } from "@/context/DonationContext";

export default function NarrativeSection() {
  const { openModal } = useDonation();

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <section className="bg-white rounded-t-[3rem] mt-[-2px] pt-24 pb-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* --- 1. SECTION HEADER --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <motion.span
            variants={fadeUpVariant}
            className="inline-block px-4 py-1.5 bg-[#E8F5E9] text-[#22C55E] rounded-full text-xs font-bold tracking-widest uppercase mb-8"
          >
            The Mission
          </motion.span>

          <motion.h2
            variants={fadeUpVariant}
            className="text-[2.5rem] md:text-[4.5rem] leading-[1.05] font-black tracking-tight text-[#1A1A1A]"
          >
            Providing Hope & Help <br className="hidden md:block" />
            <span className="text-[#1A1A1A]/40">During Challenging Times.</span>
          </motion.h2>

          <motion.button
            variants={fadeUpVariant}
            className="mt-12 px-8 py-4 rounded-full border-2 border-[#1A1A1A]/10 text-xs font-bold tracking-widest uppercase flex items-center gap-3 mx-auto hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all group"
          >
            Read Our Full Story
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* --- 2. DUAL COLUMN LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT: Emotional Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.p
              variants={fadeUpVariant}
              className="text-2xl md:text-3xl font-bold text-[#1A1A1A] leading-tight tracking-tight"
            >
              We are raising funds to support those impacted by the ongoing war
              in Palestine.
            </motion.p>

            <motion.div
              variants={fadeUpVariant}
              className="w-12 h-1 bg-[#22C55E] rounded-full"
            />

            <motion.p
              variants={fadeUpVariant}
              className="text-[#1A1A1A]/70 font-medium text-lg leading-relaxed"
            >
              Your donations help provide emergency shelter, food rations, clean
              water, and critical mental health support to displaced families
              who have lost everything. Every dollar you give transcends
              borders—it sends a message of compassion and solidarity.
            </motion.p>

            {/* Emphasized Quote Block */}
            <motion.div
              variants={fadeUpVariant}
              className="pl-6 border-l-4 border-[#1A1A1A]/10 py-2 my-8"
            >
              <p className="text-xl font-bold italic text-[#1A1A1A]/90">
                "Our mission is to ensure the safety and dignity of those
                displaced by conflict. Funds cover immediate evacuation,
                transportation, and trauma medical assistance."
              </p>
            </motion.div>

            <motion.p
              variants={fadeUpVariant}
              className="text-[#1A1A1A]/70 font-medium text-lg leading-relaxed pb-4"
            >
              Whether large or small, your donation makes a lasting impact. We
              are working directly with vetted teams on the ground to ensure
              your support reaches those who need it most immediately.{" "}
              <span className="font-bold text-[#1A1A1A]">
                Thank you for standing with Palestine.
              </span>
            </motion.p>
          </motion.div>

          {/* RIGHT: The 3 Action Cards (Framer Motion Staggered) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid gap-5"
          >
            {/* Card 1: Donate */}
            <motion.div
              variants={fadeUpVariant}
              onClick={openModal}
              className="p-8 rounded-[2rem] border border-[#1A1A1A]/10 hover:border-[#22C55E]/50 hover:shadow-2xl hover:shadow-[#22C55E]/10 transition-all cursor-pointer bg-white group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#22C55E]/5 to-transparent rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-500" />

              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#F3EFE9] flex items-center justify-center group-hover:bg-[#22C55E] group-hover:text-white transition-colors">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A]">
                  Make a Donation
                </h3>
              </div>
              <p className="text-[#1A1A1A]/60 text-sm mb-8 leading-relaxed relative z-10">
                Contribute today to help fund frontline treatments, extraction
                coordination, and essential support services.
              </p>
              <div className="flex items-center justify-between text-xs font-bold text-[#1A1A1A]/40 uppercase tracking-widest relative z-10 group-hover:text-[#22C55E] transition-colors">
                <span>Secure Options</span>
                <div className="w-8 h-8 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center group-hover:bg-[#22C55E] group-hover:border-[#22C55E] transition-colors">
                  <ArrowRight className="w-3 h-3 group-hover:text-white" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: Support */}
            <motion.div
              variants={fadeUpVariant}
              className="p-8 rounded-[2rem] border border-[#1A1A1A]/10 hover:shadow-xl transition-shadow cursor-pointer bg-white group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#F3EFE9] flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">
                  Get Support
                </h3>
              </div>
              <p className="text-[#1A1A1A]/60 text-sm mb-8 leading-relaxed">
                Access vital resources, financial aid, and counseling for
                displaced families in their time of need.
              </p>
              <div className="flex items-center justify-between text-[10px] font-bold text-[#1A1A1A]/40 uppercase tracking-widest">
                <span># Aid # Relocation</span>
                <div className="w-8 h-8 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center group-hover:bg-[#1A1A1A] transition-colors">
                  <ArrowRight className="w-3 h-3 group-hover:text-white" />
                </div>
              </div>
            </motion.div>

            {/* Card 3: Volunteer */}
            <motion.div
              variants={fadeUpVariant}
              className="p-8 rounded-[2rem] border border-[#1A1A1A]/10 hover:shadow-xl transition-shadow cursor-pointer bg-white group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#F3EFE9] flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">
                  Become a Volunteer
                </h3>
              </div>
              <p className="text-[#1A1A1A]/60 text-sm mb-8 leading-relaxed">
                Join our logistics team to coordinate supplies, translation, and
                community outreach.
              </p>
              <div className="flex items-center justify-between text-[10px] font-bold text-[#1A1A1A]/40 uppercase tracking-widest">
                <span>Join Our Team</span>
                <div className="w-8 h-8 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center group-hover:bg-[#1A1A1A] transition-colors">
                  <ArrowRight className="w-3 h-3 group-hover:text-white" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
