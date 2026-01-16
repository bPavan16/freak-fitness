"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavbarProps {
  onNavigate: (id: string) => void;
}

const SITE = {
  HEADER: "FREAK'S GYM",
};

export function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Location", id: "location" },
    { label: "Programs", id: "programs" },
    { label: "Results", id: "proof" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <button
            onClick={() => onNavigate("hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-[#FFBF00] rounded-lg flex items-center justify-center font-black text-black group-hover:rotate-12 transition-transform">F</div>
            <span className="text-3xl sm:text-4xl font-black tracking-tighter text-white">
              {SITE.HEADER}
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-sm font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-[#FFBF00] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#FFBF00] transition-all group-hover:w-full" />
              </button>
            ))}
            <Button
              onClick={() => onNavigate("apply")}
              className="bg-[#FFBF00] hover:bg-[#FFD700] text-black font-black uppercase tracking-widest text-xs px-8 h-12 rounded-xl shadow-[0_4px_20px_rgba(255,191,0,0.3)] hover:scale-105 active:scale-95 transition-all"
            >
              Start Training
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black border-l-[#1A1A1A] p-0 overflow-y-auto">
              <div className="flex flex-col h-full">
                <div className="p-8 border-b border-[#1A1A1A]">
                   <div className="text-2xl font-black text-white px-2 mb-2">MENU</div>
                </div>
                <div className="flex flex-col p-8 gap-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => onNavigate(link.id)}
                      className="text-3xl font-black uppercase tracking-tighter text-left py-2 text-zinc-600 hover:text-[#FFBF00] transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                  <div className="mt-8">
                    <Button
                      onClick={() => onNavigate("apply")}
                      className="w-full h-16 bg-[#FFBF00] hover:bg-[#FFD700] text-black font-black uppercase tracking-[0.2em] text-sm rounded-2xl"
                    >
                      BATTLE START
                    </Button>
                  </div>
                </div>
                
                <div className="mt-auto p-8 border-t border-[#1A1A1A] space-y-4">
                   <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">
                    © {new Date().getFullYear()} {`FREAK'S GYM HONNAVAR \n
                    ELEVATE YOUR POTENTIAL`}
                   </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
