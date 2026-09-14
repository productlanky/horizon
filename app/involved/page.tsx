"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowRight,
  Users,
  Globe,
  Share2,
  HeartHandshake,
  Check,
} from "lucide-react";
import { useDonation } from "@/context/DonationContext";

export default function InvolvedPage() {
  const { openModal } = useDonation();
  const [volunteerStatus, setVolunteerStatus] = useState<"idle" | "success">(
    "idle",
  );
  const [partnerStatus, setPartnerStatus] = useState<"idle" | "success">(
    "idle",
  );
  const [copied, setCopied] = useState(false);

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
          1. HERO HEADER
          ========================================== */}
      <section className="pt-24 md:pt-32 pb-20 px-6 max-w-[1200px] mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeUpVariant}
            className="inline-block px-4 py-1.5 bg-[#E8F5E9] text-[#22C55E] rounded-full text-xs font-bold tracking-widest uppercase mb-8"
          >
            Community & Action
          </motion.span>

          <motion.h1
            variants={fadeUpVariant}
            className="text-[3.5rem] leading-[1.05] md:text-[7rem] md:leading-[0.95] font-black tracking-[-0.04em] text-[#1A1A1A] mb-8"
          >
            There are more ways <br className="hidden md:block" />
            <span className="text-[#1A1A1A]/40">to help than just giving.</span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariant}
            className="text-xl text-[#1A1A1A]/60 font-medium max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Whether you have technical skills, linguistic expertise, or a
            digital footprint to share, your time and voice can amplify our
            global relief mission.
          </motion.p>
        </motion.div>
      </section>

      {/* ==========================================
          2. THE ACTION CARDS GRID
          ========================================== */}
      <section className="max-w-[1200px] mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Volunteer */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-[#1A1A1A]/5 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-500"
          >
            <div>
              <div className="w-16 h-16 rounded-full bg-[#F8F5F0] flex items-center justify-center mb-8 group-hover:bg-[#22C55E] transition-colors duration-500">
                <Users className="w-7 h-7 text-[#1A1A1A] group-hover:text-white" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#22C55E] mb-2 block">
                Global Network
              </span>
              <h3 className="text-3xl font-black text-[#1A1A1A] mb-4 tracking-tight">
                Join the Field Team
              </h3>
              <p className="text-[#1A1A1A]/60 font-medium leading-relaxed mb-8">
                We are actively looking for translators
                (Arabic/Ukrainian/English), digital logisticians, and regional
                coordinators to help streamline our communications and relief
                tracking.
              </p>
            </div>

            <button
              onClick={() => setVolunteerStatus("success")}
              disabled={volunteerStatus === "success"}
              className={`w-full py-4 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-3 ${
                volunteerStatus === "success"
                  ? "bg-[#22C55E] text-white cursor-default"
                  : "bg-[#F8F5F0] group-hover:bg-[#1A1A1A] group-hover:text-white text-[#1A1A1A]"
              }`}
            >
              {volunteerStatus === "success" ? (
                <>
                  Application Pipeline Coming Soon <Check className="w-4 h-4" />
                </>
              ) : (
                <>
                  Apply as Volunteer <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.div>

          {/* Card 2: Amplify / Spread the Word */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-[#1A1A1A]/5 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-500"
          >
            <div>
              <div className="w-16 h-16 rounded-full bg-[#F8F5F0] flex items-center justify-center mb-8 group-hover:bg-[#22C55E] transition-colors duration-500">
                <Share2 className="w-7 h-7 text-[#1A1A1A] group-hover:text-white" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#22C55E] mb-2 block">
                Advocacy
              </span>
              <h3 className="text-3xl font-black text-[#1A1A1A] mb-4 tracking-tight">
                Amplify Our Reach
              </h3>
              <p className="text-[#1A1A1A]/60 font-medium leading-relaxed mb-8">
                Algorithms often suppress humanitarian content. By sharing our
                mission across your social networks, writing articles, or
                posting about Horizon, you help bypass media blackouts.
              </p>
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.origin);
                setCopied(true);
                setTimeout(() => setCopied(false), 2500);
              }}
              className={`w-full py-4 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-3 ${
                copied
                  ? "bg-[#22C55E] text-white"
                  : "bg-[#F8F5F0] group-hover:bg-[#1A1A1A] group-hover:text-white text-[#1A1A1A]"
              }`}
            >
              {copied ? (
                <>
                  Link Copied to Clipboard <Check className="w-4 h-4" />
                </>
              ) : (
                <>
                  Copy Platform Link <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.div>

          {/* Card 3: Institutional Partners */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-[#1A1A1A]/5 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-500"
          >
            <div>
              <div className="w-16 h-16 rounded-full bg-[#F8F5F0] flex items-center justify-center mb-8 group-hover:bg-[#22C55E] transition-colors duration-500">
                <Globe className="w-7 h-7 text-[#1A1A1A] group-hover:text-white" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#22C55E] mb-2 block">
                Organizations
              </span>
              <h3 className="text-3xl font-black text-[#1A1A1A] mb-4 tracking-tight">
                Institutional Aid
              </h3>
              <p className="text-[#1A1A1A]/60 font-medium leading-relaxed mb-8">
                Are you part of an NGO, university group, or corporate
                foundation looking to establish a secure, verified institutional
                relief pipeline?
              </p>
            </div>

            <button
              onClick={() => setPartnerStatus("success")}
              disabled={partnerStatus === "success"}
              className={`w-full py-4 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-3 ${
                partnerStatus === "success"
                  ? "bg-[#22C55E] text-white cursor-default"
                  : "bg-[#F8F5F0] group-hover:bg-[#1A1A1A] group-hover:text-white text-[#1A1A1A]"
              }`}
            >
              {partnerStatus === "success" ? (
                <>
                  Portal Opening Soon <Check className="w-4 h-4" />
                </>
              ) : (
                <>
                  Partner With Us <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.div>

          {/* Card 4: Financial Contribution */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="bg-[#1A1A1A] p-10 md:p-14 rounded-[2.5rem] shadow-xl flex flex-col justify-between text-white group"
          >
            <div>
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 group-hover:bg-[#22C55E] transition-colors duration-500">
                <HeartHandshake className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#22C55E] mb-2 block">
                Direct Support
              </span>
              <h3 className="text-3xl font-black mb-4 tracking-tight">
                Fund the Frontline
              </h3>
              <p className="text-white/60 font-medium leading-relaxed mb-8">
                The fastest way to make a tangible impact today is by
                contributing to our secure emergency treasury for Palestine and
                Ukraine.
              </p>
            </div>

            <button
              onClick={openModal}
              className="w-full py-4 bg-[#22C55E] text-white rounded-2xl font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-3 hover:bg-[#16a34a]"
            >
              Open Donation Modal <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
