"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StickyCtaProps {
  onNavigate: (id: string) => void;
}

export function StickyCta({ onNavigate }: StickyCtaProps) {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowStickyCTA(scrolled > 800);
      setShowScrollTop(scrolled > 1500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence mode="wait">
        {showScrollTop && (
          <motion.div
            key="scroll-to-top"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="pointer-events-auto"
          >
            <Button
              size="icon"
              variant="outline"
              className="rounded-full w-12 h-12 bg-[#0A0A0A]/80 backdrop-blur-xl border-white/10 text-white hover:bg-[#FFBF00] hover:text-black hover:border-[#FFBF00] shadow-2xl transition-all group"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        )}

        {showStickyCTA && (
          <motion.div
            key="join-now-cta"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="pointer-events-auto"
          >
            <Button
              size="lg"
              className="relative group overflow-hidden rounded-2xl bg-[#FFBF00] text-black font-black px-8 h-14 shadow-[0_10px_40px_-5px_rgba(255,191,0,0.4)] hover:shadow-[0_10px_50px_-5px_rgba(255,191,0,0.6)] transition-all duration-300 active:scale-95 border border-white/10"
              onClick={() => onNavigate("apply")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="flex items-center gap-2 relative z-10 text-lg tracking-tight">
                JOIN NOW
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
