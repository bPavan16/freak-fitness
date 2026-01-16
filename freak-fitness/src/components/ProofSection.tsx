"use client";

import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Quote, TrendingUp, Award, Calendar } from "lucide-react";

const transformations = [
  {
    name: "Rohan Naik",
    achievement: "Lost 14kg with consistent gym workouts",
    stat: "-14kg",
    duration: "4 months",
    quote:
      "Regular gym sessions changed my life. I feel stronger, healthier, and more confident every day.",
    badges: ["Fat Loss", "Strength +40%"],
  },
  {
    name: "Amit Shetty",
    achievement: "Deadlifted 180kg after dedicated gym training",
    stat: "Muscle Gain",
    duration: "6 months",
    quote:
      "The gym atmosphere kept me motivated. Lifting heavy and seeing progress made all the difference.",
    badges: ["180kg Deadlift", "Elite Strength"],
  },
  {
    name: "Vikas Mestha",
    achievement: "Complete body transformation through gym",
    stat: "-18kg",
    duration: "5 months",
    quote:
      "The gym became my second home. Dropped 18kg and gained a new perspective on fitness and life.",
    badges: ["Body Recomp", "Transformation"],
  },
];

export function ProofSection() {
  return (
    <section id="proof" className="py-20 sm:py-32 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>



      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
       <div className="text-center mb-16 sm:mb-10 space-y-6">
          <Badge className="px-5 py-2 bg-[#FFBF00]/10 text-[#FFBF00] border-[#FFBF00]/30 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] rounded-full">
            <Award className="w-4 h-4 mr-2" />
            Verified Results
          </Badge>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
            REAL PEOPLE. <br />
            <span className="text-[#FFBF00] drop-shadow-[0_0_20px_rgba(255,191,0,0.3)]">REAL RESULTS.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            {` These aren't just testimonials — they're proof of evolution. Every transformation represents a discipline-driven journey recorded at our facility.`}
          </p>
        </div>

        {/* Transformation Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {transformations.map((person, index) => (
            <div
              key={person.name}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-card rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative overflow-hidden bg-linear-to-br from-primary/10 to-secondary/10">
                  <AspectRatio ratio={4 / 3}>
                    <div className="w-full h-full flex items-center justify-center backdrop-blur-sm">
                      <div className="text-center space-y-3 p-8">
                        <div className="text-6xl font-black text-primary">
                          {person.stat}
                        </div>
                        <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                          in {person.duration}
                        </div>
                      </div>
                    </div>
                  </AspectRatio>

                  {/* Overlay badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {person.badges.map((badge) => (
                      <Badge
                        key={badge}
                        className="bg-background/80 backdrop-blur-sm text-hiwte shadow-lg border-white/10"
                      >
                        <TrendingUp className="w-3 h-3 mr-1 text-primary" />
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      {person.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{person.name}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {person.duration} program
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-4 border-l-2 border-primary/30">
                    <Quote className="absolute -left-2.5 -top-1 w-4 h-4 text-primary" />
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      &quot;{person.quote}&quot;
                    </p>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Avg. Fat Loss", value: "12kg" },
              { label: "Avg. Duration", value: "14 weeks" },
              { label: "Strength Gain", value: "+35%" },
              { label: "Satisfaction", value: "98%" },
            ].map((stat) => (
              <div
          key={stat.label}
          className="text-center p-7 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/10 border border-primary/20 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all duration-300"
              >
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFBF00] mb-2 drop-shadow-[0_0_10px_rgba(255,191,0,0.15)]">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-zinc-500 font-semibold uppercase tracking-wide">
            {stat.label}
          </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
