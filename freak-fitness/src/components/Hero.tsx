"use client";

import { Badge } from "@/components/ui/badge";
import { Trophy, Users } from "lucide-react";

interface HeroProps {
  onNavigate: (id: string) => void;
}

export function Hero({ }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.2),transparent_40%)]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="animate-fade-in">
            <Badge
              variant="secondary"
              className="px-6 py-2 text-sm font-semibold shadow-lg bg-secondary/10 text-secondary-foreground border border-secondary/20"
            >
              <Trophy className="w-4 h-4 mr-2 inline text-secondary" />
              #1 Transformation-Focused Gym
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] animate-fade-in-up">
            <span className="block mb-2">TRANSFORM YOUR</span>
            <span
              className="block bg-linear-to-r from-[#FFBF00] via-[#FF8C00] to-[#FF4500] bg-clip-text pb-5 text-transparent uppercase"
            >
              Body & Mind
            </span>
          </h1>

          {/* Description */}
            <p className="text-base sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 px-4">
              Experience the best gym in <><span className="text-yellow-300 font-black">Honnavar</span></>, dedicated to helping you achieve your fitness goals.
            </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-0 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
            <div className="p-4 sm:p-6 rounded-2xl bg-[#0A0A0A] border border-[#262626] hover:border-[#FFBF00]/50 transition-all hover:shadow-[0_0_20px_-5px_rgba(255,191,0,0.3)]">
              <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFBF00]" />
                <div className="text-2xl sm:text-4xl font-black text-white">500+</div>
                <div className="text-[10px] sm:text-sm text-zinc-500 font-bold uppercase tracking-widest">
                  Active Members
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-[#0A0A0A] border border-[#262626] hover:border-[#FFBF00]/50 transition-all hover:shadow-[0_0_20px_-5px_rgba(255,191,0,0.3)]">
              <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFBF00]" />
                <div className="text-2xl sm:text-4xl font-black text-white">100+</div>
                <div className="text-[10px] sm:text-sm text-zinc-500 font-bold uppercase tracking-widest">
                  Transformations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
}
