"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  X,
  Menu,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Zap,
} from "lucide-react";
import { useDonation } from "@/context/DonationContext";
import { useState } from "react";
import Translator from "./Translator";

// ==========================================
// 1. THE RESPONSIVE HEADER
// ==========================================
export function Header() {
  const { openModal } = useDonation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  if (typeof window !== "undefined") {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }

  return (
    <>
      <header className="w-full bg-[#F3EFE9] sticky top-0 z-40">
        <div className="px-6 md:px-8 py-5 md:py-6 flex items-center justify-between max-w-[1400px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group z-50">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 border-[3px] border-[#1A1A1A] rotate-45 rounded-[4px] transition-transform group-hover:rotate-90 duration-500 ease-in-out" />
              <div className="w-2 h-2 bg-[#22C55E] rounded-full z-10" />
            </div>
            <span className="font-black text-[16px] tracking-[0.15em] uppercase text-[#1A1A1A]">
              Horizon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase">
            <Link
              href="/about"
              className="hover:text-[#22C55E] transition-colors"
            >
              Who We Are
            </Link>
            <Link
              href="/impact"
              className="hover:text-[#22C55E] transition-colors"
            >
              What We Do
            </Link>
            <Link
              href="/involved"
              className="hover:text-[#22C55E] transition-colors"
            >
              Get Involved
            </Link>
          </nav>

          {/* Right Actions & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <div className="hidden sm:block">
              <Translator />
            </div>

            <button
              onClick={openModal}
              className="hidden lg:block px-8 py-3 bg-transparent border-2 border-[#1A1A1A]/20 text-[#1A1A1A] text-xs font-bold tracking-widest uppercase rounded-full hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all"
            >
              Donate
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#1A1A1A] hover:bg-black/5 rounded-full transition-colors"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* ==========================================
          FULL SCREEN MOBILE MENU (100dvh)
          ========================================== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-[100dvh] bg-[#F3EFE9] z-[100] lg:hidden flex flex-col"
          >
            {/* Mobile Menu Top Bar */}
            <div className="px-6 py-5 flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="absolute inset-0 border-[3px] border-[#1A1A1A] rotate-45 rounded-[4px]" />
                  <div className="w-2 h-2 bg-[#22C55E] rounded-full z-10" />
                </div>
                <span className="font-black text-[16px] tracking-[0.15em] uppercase text-[#1A1A1A]">
                  Horizon
                </span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 bg-[#1A1A1A]/5 hover:bg-[#1A1A1A]/10 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-[#1A1A1A]" />
              </button>
            </div>

            {/* UPGRADED: Massive Left-Aligned Nav Links */}
            <div className="flex-1 flex flex-col items-start justify-center gap-8 px-8">
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[2.75rem] leading-none font-extrabold text-[#1A1A1A] tracking-tight hover:text-[#22C55E] transition-colors"
              >
                Who We Are.
              </Link>
              <Link
                href="/impact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[2.75rem] leading-none font-extrabold text-[#1A1A1A] tracking-tight hover:text-[#22C55E] transition-colors"
              >
                What We Do.
              </Link>
              <Link
                href="/involved"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[2.75rem] leading-none font-extrabold text-[#1A1A1A] tracking-tight hover:text-[#22C55E] transition-colors"
              >
                Get Involved.
              </Link>
            </div>

            {/* Mobile Menu Bottom Action Area */}
            <div className="p-6 flex flex-col items-center gap-6 pb-12 border-t border-[#1A1A1A]/10">
              <div className="w-full flex justify-center">
                <Translator />
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => openModal(), 300);
                }}
                className="w-full py-5 bg-[#22C55E] text-white text-sm font-bold tracking-widest uppercase rounded-2xl shadow-xl shadow-green-500/20 active:scale-95 transition-all"
              >
                Donate Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ==========================================
// 2. THE FOOTER
// ==========================================
export function Footer() {
  return (
    <footer className="bg-white border-t border-[#1A1A1A]/10 mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 border-[3px] border-[#1A1A1A] rotate-45 rounded-[4px]" />
              <div className="w-2 h-2 bg-[#22C55E] rounded-full z-10" />
            </div>
            <span className="font-black text-[16px] tracking-[0.15em] uppercase text-[#1A1A1A]">
              Horizon
            </span>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-10 text-xs font-bold tracking-widest uppercase text-[#1A1A1A]/50">
            <Link
              href="/about"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              About
            </Link>
            <Link
              href="/impact"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              Impact
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#1A1A1A]/10 text-xs font-bold text-[#1A1A1A]/40">
          <p>© 2026 Horizon Global Relief. All rights reserved.</p>
          <p className="flex items-center gap-2">
            100% Secure Donations{" "}
            <Heart className="w-3 h-3 text-[#22C55E] fill-[#22C55E]" />
          </p>
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// 3. THE UPGRADED APP-GRADE DONATION MODAL
// ==========================================
const CURRENCIES = [
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
  { code: "JPY", symbol: "¥" },
  { code: "CAD", symbol: "CA$" },
  { code: "AUD", symbol: "$" },
];

export function DonationModal() {
  const { isModalOpen, closeModal } = useDonation();
  const [amount, setAmount] = useState<number | string>(50);
  const [isMonthly, setIsMonthly] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [currency, setCurrency] = useState(CURRENCIES[0]);

  const handleDonate = async () => {
    const numericAmount = Number(amount) || 10;
    const baseCurr = currency?.code ? currency.code.toLowerCase() : "usd";

    try {
      const res = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: numericAmount, currency: baseCurr }),
      });

      const data = await res.json();

      if (data.invoiceUrl) {
        window.open(data.invoiceUrl, "_blank", "noopener,noreferrer");
        closeModal();
      } else {
        alert(data.error || "Failed to initialize secure payment gateway.");
      }
    } catch (err) {
      console.error("Network error during checkout initialization", err);
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-[#1A1A1A]/40 backdrop-blur-md z-[60]"
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100) closeModal();
            }}
            className="fixed bottom-0 left-0 w-full md:w-[480px] md:left-1/2 md:-translate-x-1/2 md:bottom-auto md:top-1/2 md:-translate-y-1/2 bg-white z-[70] rounded-t-[2rem] md:rounded-[2.5rem] shadow-2xl flex flex-col max-h-[90dvh] overflow-hidden pb-4 md:pb-0"
          >
            {/* Mobile Drag Indicator */}
            <div className="w-full flex justify-center pt-4 pb-2 md:hidden cursor-grab active:cursor-grabbing">
              <div className="w-12 h-1.5 bg-[#1A1A1A]/10 rounded-full" />
            </div>

            <div className="p-6 md:p-8 overflow-y-auto no-scrollbar">
              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#E8F5E9] text-[#22C55E] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-current" /> Instant Local
                      Fiat Checkout
                    </span>
                  </div>
                  <h2 className="text-3xl font-black text-[#1A1A1A] tracking-tight">
                    Make a Difference
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-[#F8F5F0] hidden md:flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Monthly Toggle */}
              <div className="flex p-1 bg-[#F8F5F0] rounded-full mb-6">
                <button
                  onClick={() => setIsMonthly(false)}
                  className={`flex-1 py-3 text-xs font-bold tracking-widest uppercase rounded-full transition-all ${!isMonthly ? "bg-white shadow-sm text-[#1A1A1A]" : "text-[#1A1A1A]/40"}`}
                >
                  One-Time
                </button>
                <button
                  onClick={() => setIsMonthly(true)}
                  className={`flex-1 py-3 text-xs font-bold tracking-widest uppercase rounded-full transition-all flex items-center justify-center gap-2 ${isMonthly ? "bg-white shadow-sm text-[#1A1A1A]" : "text-[#1A1A1A]/40"}`}
                >
                  Monthly{" "}
                  <Heart
                    className={`w-3 h-3 ${isMonthly ? "text-[#22C55E] fill-[#22C55E]" : ""}`}
                  />
                </button>
              </div>

              {/* Amount & Currency Input */}
              <div className="flex items-center justify-between p-2 pl-4 border-2 border-[#1A1A1A]/10 focus-within:border-[#22C55E] transition-colors rounded-2xl mb-4 bg-white">
                <span className="text-2xl font-bold text-[#1A1A1A]/30 select-none">
                  {currency.symbol}
                </span>

                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0"
                  className="w-full pl-1 mx-4 text-4xl font-black text-[#1A1A1A] bg-transparent outline-none py-2"
                  style={{ WebkitAppearance: "none", margin: 0 }}
                />

                {/* Custom Currency Select */}
                <div className="relative shrink-0">
                  <select
                    className="appearance-none bg-[#F8F5F0] hover:bg-[#EAE5DE] text-[#1A1A1A] font-bold text-sm pl-4 pr-10 py-3.5 rounded-xl outline-none cursor-pointer transition-colors"
                    value={currency.code}
                    onChange={(e) => {
                      const selected = CURRENCIES.find(
                        (c) => c.code === e.target.value,
                      );
                      if (selected) setCurrency(selected);
                    }}
                  >
                    {CURRENCIES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-[#1A1A1A] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Presets */}
              <div className="flex gap-2 mb-8">
                {[25, 50, 100, 250].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAmount(preset)}
                    className={`flex-1 py-3.5 rounded-xl text-sm font-bold border-2 transition-all ${amount === preset || amount === String(preset) ? "border-[#22C55E] bg-[#22C55E]/10 text-[#22C55E]" : "border-[#1A1A1A]/10 text-[#1A1A1A]/60 hover:border-[#1A1A1A]/30"}`}
                  >
                    {currency.symbol} {preset}
                  </button>
                ))}
              </div>

              {/* FIXED: Anonymous Checkbox with explicit state toggle */}
              <div
                onClick={() => setIsAnonymous(!isAnonymous)}
                className="flex items-center gap-3 cursor-pointer mb-8 group w-fit select-none"
              >
                <div
                  className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors border-2 ${isAnonymous ? "bg-[#22C55E] border-[#22C55E]" : "border-[#1A1A1A]/20 group-hover:border-[#1A1A1A]/40"}`}
                >
                  {isAnonymous && (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className="text-sm font-bold text-[#1A1A1A]">
                  Donate Anonymously
                </span>
              </div>

              {/* Submit Button to MoonPay */}
              <button
                onClick={handleDonate}
                className="w-full py-5 bg-[#1A1A1A] text-white rounded-xl font-bold text-sm tracking-widest uppercase shadow-xl shadow-[#1A1A1A]/10 active:scale-[0.98] transition-all flex items-center justify-center gap-3 hover:bg-black"
              >
                Continue to MoonPay{" "}
                {amount ? `(${currency.symbol}${amount})` : ""}{" "}
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[10px] uppercase tracking-widest text-[#1A1A1A]/40 font-bold mt-5 mb-2">
                Secured via MoonPay Local Checkout
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
