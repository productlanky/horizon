"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Lock, EyeOff, FileText, ArrowRight } from "lucide-react";
import { useDonation } from "@/context/DonationContext";

export default function PrivacyPage() {
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
          1. HERO HEADER
          ========================================== */}
      <section className="pt-24 md:pt-32 pb-16 px-6 max-w-[1000px] mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeUpVariant}
            className="inline-block px-4 py-1.5 bg-[#E8F5E9] text-[#22C55E] rounded-full text-xs font-bold tracking-widest uppercase mb-8"
          >
            Data Protection & Trust
          </motion.span>

          <motion.h1
            variants={fadeUpVariant}
            className="text-[3.5rem] leading-[1.05] md:text-[5.5rem] md:leading-[0.95] font-black tracking-[-0.04em] text-[#1A1A1A] mb-8"
          >
            Privacy Policy.
          </motion.h1>

          <motion.p
            variants={fadeUpVariant}
            className="text-xl text-[#1A1A1A]/60 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Because we operate across sensitive global conflict zones,
            protecting your identity and donation metadata is not just
            compliance—it is a matter of physical safety.
          </motion.p>
        </motion.div>
      </section>

      {/* ==========================================
          2. CORE PRIVACY PILLARS
          ========================================== */}
      <section className="max-w-[1000px] mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="bg-white p-8 rounded-[2rem] border border-[#1A1A1A]/5 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-[#F8F5F0] flex items-center justify-center mb-6">
              <EyeOff className="w-6 h-6 text-[#1A1A1A]" />
            </div>
            <h3 className="text-xl font-black text-[#1A1A1A] mb-3">
              Anonymous First
            </h3>
            <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
              Our donation gateway includes a native anonymous toggle. If
              selected, zero personally identifiable information is stored on
              our servers.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="bg-white p-8 rounded-[2rem] border border-[#1A1A1A]/5 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-[#F8F5F0] flex items-center justify-center mb-6">
              <Lock className="w-6 h-6 text-[#1A1A1A]" />
            </div>
            <h3 className="text-xl font-black text-[#1A1A1A] mb-3">
              Zero-Log Architecture
            </h3>
            <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
              We do not track IP addresses, sell analytics data, or maintain
              marketing profiles on our donors or visitors.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="bg-white p-8 rounded-[2rem] border border-[#1A1A1A]/5 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-[#F8F5F0] flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-[#1A1A1A]" />
            </div>
            <h3 className="text-xl font-black text-[#1A1A1A] mb-3">
              Encrypted Routing
            </h3>
            <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
              All fiat currency transfers are processed through isolated,
              encrypted payment rails designed to prevent interception or
              tracking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          3. DETAILED POLICY SECTIONS
          ========================================== */}
      <section className="max-w-[1000px] mx-auto px-6 pb-32">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-[#1A1A1A]/5 shadow-sm space-y-12">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#22C55E] mb-2 block">
              Section 01
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] mb-4 tracking-tight">
              Information We Collect
            </h2>
            <p className="text-[#1A1A1A]/70 font-medium leading-relaxed">
              Horizon operates on a minimalist data collection model. We only
              collect information strictly required to process your transaction
              (such as payment details handled by secure processors) or
              communicate updates if you explicitly opt-in. We never tie your
              browsing behavior to your real-world identity.
            </p>
          </div>

          <div className="border-t border-[#1A1A1A]/5 pt-8">
            <span className="text-xs font-bold tracking-widest uppercase text-[#22C55E] mb-2 block">
              Section 02
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] mb-4 tracking-tight">
              Local Currency & Fiat Transactions
            </h2>
            <p className="text-[#1A1A1A]/70 font-medium leading-relaxed">
              When you donate using your local currency (USD, EUR, GBP, NGN),
              your bank or card issuer processes the transaction through secure
              banking protocols. Horizon does not store raw credit card numbers,
              CVVs, or banking credentials on our database servers.
            </p>
          </div>

          <div className="border-t border-[#1A1A1A]/5 pt-8">
            <span className="text-xs font-bold tracking-widest uppercase text-[#22C55E] mb-2 block">
              Section 03
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] mb-4 tracking-tight">
              Protection in Conflict Zones
            </h2>
            <p className="text-[#1A1A1A]/70 font-medium leading-relaxed">
              Given the heightened surveillance surrounding humanitarian aid
              directed toward Palestine and Ukraine, our infrastructure is
              hardened against subpoena requests demanding donor rosters. If we
              don't log the data, we cannot hand it over.
            </p>
          </div>

          <div className="border-t border-[#1A1A1A]/5 pt-8">
            <span className="text-xs font-bold tracking-widest uppercase text-[#22C55E] mb-2 block">
              Section 04
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#1A1A1A] mb-4 tracking-tight">
              Contact & Data Inquiries
            </h2>
            <p className="text-[#1A1A1A]/70 font-medium leading-relaxed mb-6">
              If you have any questions regarding our data privacy protocols or
              wish to verify our security measures, you can reach out directly
              to our engineering and legal collective.
            </p>
            <div className="p-6 bg-[#F8F5F0] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-bold text-[#1A1A1A] text-sm">
                privacy@horizon-relief.org
              </span>
              <button
                onClick={openModal}
                className="px-6 py-3 bg-[#1A1A1A] text-white rounded-xl text-xs font-bold tracking-widest uppercase hover:bg-black transition-colors"
              >
                Support The Mission
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
