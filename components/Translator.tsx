"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import { Globe, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

// All ~133 Google Translate supported languages
const LANGUAGES = [
  { code: "af", name: "Afrikaans", short: "AF", flag: "🇿🇦" },
  { code: "sq", name: "Albanian", short: "SQ", flag: "🇦🇱" },
  { code: "am", name: "Amharic", short: "AM", flag: "🇪🇹" },
  { code: "ar", name: "Arabic", short: "AR", flag: "🇸🇦" },
  { code: "hy", name: "Armenian", short: "HY", flag: "🇦🇲" },
  { code: "as", name: "Assamese", short: "AS", flag: "🇮🇳" },
  { code: "ay", name: "Aymara", short: "AY", flag: "🇧🇴" },
  { code: "az", name: "Azerbaijani", short: "AZ", flag: "🇦🇿" },
  { code: "bm", name: "Bambara", short: "BM", flag: "🇲🇱" },
  { code: "eu", name: "Basque", short: "EU", flag: "🇪🇸" },
  { code: "be", name: "Belarusian", short: "BE", flag: "🇧🇾" },
  { code: "bn", name: "Bengali", short: "BN", flag: "🇧🇩" },
  { code: "bho", name: "Bhojpuri", short: "BHO", flag: "🇮🇳" },
  { code: "bs", name: "Bosnian", short: "BS", flag: "🇧🇦" },
  { code: "bg", name: "Bulgarian", short: "BG", flag: "🇧🇬" },
  { code: "ca", name: "Catalan", short: "CA", flag: "🇪🇸" },
  { code: "ceb", name: "Cebuano", short: "CEB", flag: "🇵🇭" },
  { code: "ny", name: "Chichewa", short: "NY", flag: "🇲🇼" },
  { code: "zh-CN", name: "Chinese (Simplified)", short: "ZH", flag: "🇨🇳" },
  { code: "zh-TW", name: "Chinese (Traditional)", short: "ZH", flag: "🇹🇼" },
  { code: "co", name: "Corsican", short: "CO", flag: "🇫🇷" },
  { code: "hr", name: "Croatian", short: "HR", flag: "🇭🇷" },
  { code: "cs", name: "Czech", short: "CS", flag: "🇨🇿" },
  { code: "da", name: "Danish", short: "DA", flag: "🇩🇰" },
  { code: "dv", name: "Dogri", short: "DV", flag: "🇮🇳" },
  { code: "nl", name: "Dutch", short: "NL", flag: "🇳🇱" },
  { code: "en", name: "English", short: "EN", flag: "🇬🇧" },
  { code: "eo", name: "Esperanto", short: "EO", flag: "🌍" }, // Constructed language
  { code: "et", name: "Estonian", short: "ET", flag: "🇪🇪" },
  { code: "ee", name: "Ewe", short: "EE", flag: "🇬🇭" },
  { code: "tl", name: "Filipino", short: "TL", flag: "🇵🇭" },
  { code: "fi", name: "Finnish", short: "FI", flag: "🇫🇮" },
  { code: "fr", name: "French", short: "FR", flag: "🇫🇷" },
  { code: "fy", name: "Frisian", short: "FY", flag: "🇳🇱" },
  { code: "gl", name: "Galician", short: "GL", flag: "🇪🇸" },
  { code: "ka", name: "Georgian", short: "KA", flag: "🇬🇪" },
  { code: "de", name: "German", short: "DE", flag: "🇩🇪" },
  { code: "el", name: "Greek", short: "EL", flag: "🇬🇷" },
  { code: "gn", name: "Guarani", short: "GN", flag: "🇵🇾" },
  { code: "gu", name: "Gujarati", short: "GU", flag: "🇮🇳" },
  { code: "ht", name: "Haitian Creole", short: "HT", flag: "🇭🇹" },
  { code: "ha", name: "Hausa", short: "HA", flag: "🇳🇬" },
  { code: "haw", name: "Hawaiian", short: "HAW", flag: "🇺🇸" },
  { code: "iw", name: "Hebrew", short: "HE", flag: "🇮🇱" },
  { code: "hi", name: "Hindi", short: "HI", flag: "🇮🇳" },
  { code: "hmn", name: "Hmong", short: "HMN", flag: "🇨🇳" },
  { code: "hu", name: "Hungarian", short: "HU", flag: "🇭🇺" },
  { code: "is", name: "Icelandic", short: "IS", flag: "🇮🇸" },
  { code: "ig", name: "Igbo", short: "IG", flag: "🇳🇬" },
  { code: "ilo", name: "Ilocano", short: "ILO", flag: "🇵🇭" },
  { code: "id", name: "Indonesian", short: "ID", flag: "🇮🇩" },
  { code: "ga", name: "Irish", short: "GA", flag: "🇮🇪" },
  { code: "it", name: "Italian", short: "IT", flag: "🇮🇹" },
  { code: "ja", name: "Japanese", short: "JA", flag: "🇯🇵" },
  { code: "jw", name: "Javanese", short: "JW", flag: "🇮🇩" },
  { code: "kn", name: "Kannada", short: "KN", flag: "🇮🇳" },
  { code: "kk", name: "Kazakh", short: "KK", flag: "🇰🇿" },
  { code: "km", name: "Khmer", short: "KM", flag: "🇰🇭" },
  { code: "rw", name: "Kinyarwanda", short: "RW", flag: "🇷🇼" },
  { code: "gom", name: "Konkani", short: "GOM", flag: "🇮🇳" },
  { code: "ko", name: "Korean", short: "KO", flag: "🇰🇷" },
  { code: "kri", name: "Krio", short: "KRI", flag: "🇸🇱" },
  { code: "ku", name: "Kurdish (Kurmanji)", short: "KU", flag: "🇮🇶" },
  { code: "ckb", name: "Kurdish (Sorani)", short: "CKB", flag: "🇮🇶" },
  { code: "ky", name: "Kyrgyz", short: "KY", flag: "🇰🇬" },
  { code: "lo", name: "Lao", short: "LO", flag: "🇱🇦" },
  { code: "la", name: "Latin", short: "LA", flag: "🏛️" }, // No official flag for Latin
  { code: "lv", name: "Latvian", short: "LV", flag: "🇱🇻" },
  { code: "ln", name: "Lingala", short: "LN", flag: "🇨🇩" },
  { code: "lt", name: "Lithuanian", short: "LT", flag: "🇱🇹" },
  { code: "lg", name: "Luganda", short: "LG", flag: "🇺🇬" },
  { code: "lb", name: "Luxembourgish", short: "LB", flag: "🇱🇺" },
  { code: "mk", name: "Macedonian", short: "MK", flag: "🇲🇰" },
  { code: "mai", name: "Maithili", short: "MAI", flag: "🇮🇳" },
  { code: "mg", name: "Malagasy", short: "MG", flag: "🇲🇬" },
  { code: "ms", name: "Malay", short: "MS", flag: "🇲🇾" },
  { code: "ml", name: "Malayalam", short: "ML", flag: "🇮🇳" },
  { code: "mt", name: "Maltese", short: "MT", flag: "🇲🇹" },
  { code: "mi", name: "Maori", short: "MI", flag: "🇳🇿" },
  { code: "mr", name: "Marathi", short: "MR", flag: "🇮🇳" },
  { code: "mni-Mtei", name: "Meiteilon (Manipuri)", short: "MNI", flag: "🇮🇳" },
  { code: "lus", name: "Mizo", short: "LUS", flag: "🇮🇳" },
  { code: "mn", name: "Mongolian", short: "MN", flag: "🇲🇳" },
  { code: "my", name: "Myanmar (Burmese)", short: "MY", flag: "🇲🇲" },
  { code: "ne", name: "Nepali", short: "NE", flag: "🇳🇵" },
  { code: "no", name: "Norwegian", short: "NO", flag: "🇳🇴" },
  { code: "or", name: "Odia (Oriya)", short: "OR", flag: "🇮🇳" },
  { code: "om", name: "Oromo", short: "OM", flag: "🇪🇹" },
  { code: "ps", name: "Pashto", short: "PS", flag: "🇦🇫" },
  { code: "fa", name: "Persian", short: "FA", flag: "🇮🇷" },
  { code: "pl", name: "Polish", short: "PL", flag: "🇵🇱" },
  { code: "pt", name: "Portuguese", short: "PT", flag: "🇵🇹" },
  { code: "pa", name: "Punjabi", short: "PA", flag: "🇮🇳" },
  { code: "qu", name: "Quechua", short: "QU", flag: "🇵🇪" },
  { code: "ro", name: "Romanian", short: "RO", flag: "🇷🇴" },
  { code: "ru", name: "Russian", short: "RU", flag: "🇷🇺" },
  { code: "sm", name: "Samoan", short: "SM", flag: "🇼🇸" },
  { code: "sa", name: "Sanskrit", short: "SA", flag: "🇮🇳" },
  { code: "gd", name: "Scots Gaelic", short: "GD", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
  { code: "nso", name: "Sepedi", short: "NSO", flag: "🇿🇦" },
  { code: "sr", name: "Serbian", short: "SR", flag: "🇷🇸" },
  { code: "st", name: "Sesotho", short: "ST", flag: "🇱🇸" },
  { code: "sn", name: "Shona", short: "SN", flag: "🇿🇼" },
  { code: "sd", name: "Sindhi", short: "SD", flag: "🇵🇰" },
  { code: "si", name: "Sinhala", short: "SI", flag: "🇱🇰" },
  { code: "sk", name: "Slovak", short: "SK", flag: "🇸🇰" },
  { code: "sl", name: "Slovenian", short: "SL", flag: "🇸🇮" },
  { code: "so", name: "Somali", short: "SO", flag: "🇸🇴" },
  { code: "es", name: "Spanish", short: "ES", flag: "🇪🇸" },
  { code: "su", name: "Sundanese", short: "SU", flag: "🇮🇩" },
  { code: "sw", name: "Swahili", short: "SW", flag: "🇰🇪" },
  { code: "sv", name: "Swedish", short: "SV", flag: "🇸🇪" },
  { code: "tg", name: "Tajik", short: "TG", flag: "🇹🇯" },
  { code: "ta", name: "Tamil", short: "TA", flag: "🇮🇳" },
  { code: "tt", name: "Tatar", short: "TT", flag: "🇷🇺" },
  { code: "te", name: "Telugu", short: "TE", flag: "🇮🇳" },
  { code: "th", name: "Thai", short: "TH", flag: "🇹🇭" },
  { code: "ti", name: "Tigrinya", short: "TI", flag: "🇪🇷" },
  { code: "ts", name: "Tsonga", short: "TS", flag: "🇿🇦" },
  { code: "tr", name: "Turkish", short: "TR", flag: "🇹🇷" },
  { code: "tk", name: "Turkmen", short: "TK", flag: "🇹🇲" },
  { code: "tw", name: "Twi", short: "TW", flag: "🇬🇭" },
  { code: "uk", name: "Ukrainian", short: "UK", flag: "🇺🇦" },
  { code: "ur", name: "Urdu", short: "UR", flag: "🇵🇰" },
  { code: "ug", name: "Uyghur", short: "UG", flag: "🇨🇳" },
  { code: "uz", name: "Uzbek", short: "UZ", flag: "🇺🇿" },
  { code: "vi", name: "Vietnamese", short: "VI", flag: "🇻🇳" },
  { code: "cy", name: "Welsh", short: "CY", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿" },
  { code: "xh", name: "Xhosa", short: "XH", flag: "🇿🇦" },
  { code: "yi", name: "Yiddish", short: "YI", flag: "✡️" },
  { code: "yo", name: "Yoruba", short: "YO", flag: "🇳🇬" },
  { code: "zu", name: "Zulu", short: "ZU", flag: "🇿🇦" },
];

export default function Translator() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const [searchQuery, setSearchQuery] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // 1. Sync Cookie State & Auto-Detect Browser Language
  useEffect(() => {
    const cookieMatch = document.cookie.match(/(?:^|;)\s*googtrans=([^;]+)/);
    if (cookieMatch) {
      const currentCode = cookieMatch[1].split("/")[2];
      const currentLang = LANGUAGES.find((l) => l.code === currentCode);
      if (currentLang) setSelectedLang(currentLang.name);
      return;
    }

    const hasAutoTranslated = localStorage.getItem("hasAutoTranslated");
    if (!hasAutoTranslated) {
      const browserLangCode = navigator.language.split("-")[0];
      const targetLang = LANGUAGES.find((l) => l.code === browserLangCode);

      if (targetLang && targetLang.code !== "en") {
        const checkExist = setInterval(() => {
          const selectElement = document.querySelector(
            ".goog-te-combo",
          ) as HTMLSelectElement;
          if (selectElement) {
            clearInterval(checkExist);
            selectElement.value = targetLang.code;
            selectElement.dispatchEvent(new Event("change"));
            setSelectedLang(targetLang.name);
          }
        }, 500);
        setTimeout(() => clearInterval(checkExist), 10000);
      }
      localStorage.setItem("hasAutoTranslated", "true");
    }
  }, []);

  // 2. Handle Clicking Outside to Close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 3. Auto-focus Search Bar
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    } else {
      setSearchQuery("");
    }
  }, [isOpen]);

  const handleLanguageSelect = (langCode: string, langName: string) => {
    setSelectedLang(langName);
    setIsOpen(false);

    const selectElement = document.querySelector(
      ".goog-te-combo",
    ) as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event("change"));
    }
  };

  const filteredLanguages = LANGUAGES.filter((lang) =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

return (
    <div className="relative notranslate z-[90]" ref={dropdownRef}>
      
      {/* Hidden Google Translate Target */}
      <div id="google_translate_element" className="absolute opacity-0 w-0 h-0 overflow-hidden pointer-events-none" />

      <Script
        id="google-translate-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'en', autoDisplay: false },
                'google_translate_element'
              );
            }
          `,
        }}
      />
      <Script
        id="google-translate-lib"
        strategy="afterInteractive"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      />

      {/* --- UPGRADED BUTTON UI --- 
          Changed from bg-white to bg-transparent to match the Donate button.
      */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#1A1A1A]/20 bg-transparent hover:bg-[#1A1A1A]/5 transition-all text-xs font-bold tracking-widest uppercase text-[#1A1A1A]"
      >
        <Globe size={16} className="text-[#1A1A1A]/70" />
        <span className="hidden sm:inline-block">{selectedLang}</span>
        {/* On mobile, show an abbreviation to save space */}
        <span className="sm:hidden">{selectedLang.substring(0, 3)}</span>
        <ChevronDown size={14} className={`text-[#1A1A1A]/50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Animated Dropdown Menu with Search */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            // Changed bg-white to bg-[#F8F5F0] to blend better with the theme
            className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 md:bottom-auto md:top-full md:mb-0 md:mt-3 md:left-auto md:-translate-x-0 md:right-0 w-[260px] bg-[#F8F5F0] rounded-2xl shadow-2xl border border-[#1A1A1A]/10 flex flex-col z-[100] overflow-hidden"
          >
            {/* Sticky Search Bar */}
            <div className="p-3 border-b border-[#1A1A1A]/5 bg-[#F8F5F0] sticky top-0 z-10">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search language..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  // Search input stays white for contrast inside the off-white menu
                  className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#1A1A1A]/10 rounded-xl text-[16px] sm:text-sm font-bold text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#1A1A1A]/30 transition-all"
                />
              </div>
            </div>

            {/* Scrollable Language List */}
            <div className="max-h-[40vh] overflow-y-auto no-scrollbar p-2">
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageSelect(lang.code, lang.name)}
                    className={`w-full text-left px-3 py-3 rounded-xl text-sm font-bold transition-colors flex items-center justify-between ${
                      selectedLang === lang.name 
                        ? 'bg-[#E8F5E9] text-[#22C55E]' 
                        : 'text-[#1A1A1A]/60 hover:bg-[#1A1A1A]/5 hover:text-[#1A1A1A]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-lg">{lang.flag}</span>
                      {lang.name}
                    </span>
                    {selectedLang === lang.name && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] flex-shrink-0" />
                    )}
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-sm font-bold text-[#1A1A1A]/40">
                  No languages found.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
