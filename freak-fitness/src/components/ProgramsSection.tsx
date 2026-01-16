"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Flame,
  Dumbbell,
  Zap,
  Target,
  Clock,
  Users,
  TrendingUp,
  ChevronRight,
  MoveRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const programs = [
  {
    icon: Flame,
    title: "Fat Loss Program",
    tagline: "Burn Fat, Keep Muscle",
    description:
      "Our science-backed approach combines targeted resistance training with metabolic conditioning to ensure you lose fat sustainably while preserving, or even building, lean muscle.",
    whoFor: "Busy professionals, parents, or anyone looking to lose 10-30kg and build a stronger, leaner physique.",
    outcome: "Sustainable fat loss, improved daily energy, significant body recomposition, and enhanced metabolic health.",
    time: "3-5 days/week",
    duration: "45-60 min",
    color: "orange",
  },
  {
    icon: Dumbbell,
    title: "Strength Building",
    tagline: "Build Serious Power",
    description:
      "This program is built on the principles of progressive overload, focusing on compound movements and structured periodization to help you achieve dramatic gains in raw strength.",
    whoFor: "Intermediate lifters, powerlifting enthusiasts, and athletes aiming to break through plateaus and build foundational power.",
    outcome: "Significant increases in 1-rep max, muscle hypertrophy, and improved performance in strength-focused sports.",
    time: "4-6 days/week",
    duration: "60-90 min",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Athletic Performance",
    tagline: "Train Like An Athlete",
    description:
      "Develop explosive power, speed, and agility. This program integrates plyometrics, Olympic lifts, and sport-specific drills to translate your gym efforts into real-world performance.",
    whoFor: "Competitive athletes, sports enthusiasts, and individuals seeking to maximize their functional fitness and athletic potential.",
    outcome: "Enhanced explosive power, superior speed and agility, and sport-specific conditioning that gives you an edge.",
    time: "4-5 days/week",
    duration: "60-75 min",
    color: "green",
  },
  {
    icon: Target,
    title: "Body Recomposition",
    tagline: "Muscle Up, Lean Down",
    description:
      "A strategic protocol designed to help you build muscle and lose fat simultaneously. This avoids drastic bulking and cutting phases for a more linear, sustainable transformation.",
    whoFor: "Intermediate trainees wanting to achieve the dual goal of gaining muscle while shedding body fat for a defined physique.",
    outcome: "Visible lean muscle gain, a lower body fat percentage, and a dramatically improved, well-defined physique.",
    time: "4-5 days/week",
    duration: "60 min",
    color: "purple",
  },
];

const colorClasses = {
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    text: "text-orange-400",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-600",
    glow: "shadow-orange-500/30",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    gradientFrom: "from-blue-500",
    gradientTo: "to-purple-600",
    glow: "shadow-blue-500/30",
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    text: "text-green-400",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-600",
    glow: "shadow-green-500/30",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-600",
    glow: "shadow-purple-500/30",
  },
};

interface ProgramsSectionProps {
  onNavigate: (id: string) => void;
}

export function ProgramsSection({ onNavigate }: ProgramsSectionProps) {
  const [desktopActiveProgram, setDesktopActiveProgram] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [carouselCurrent, setCarouselCurrent] = useState(0);

  const selectedProgram = programs[desktopActiveProgram];
  const selectedColors = colorClasses[selectedProgram.color as keyof typeof colorClasses];
  const Icon = selectedProgram.icon;

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCarouselCurrent(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCarouselCurrent(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  return (
    <section id="programs" className="py-20 sm:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-white/[0.05] mask-[linear-gradient(to_bottom,transparent,black,transparent)]" />

      {/* Desktop background glows */}
      <div className={`hidden lg:block absolute inset-0 -top-1/4 -left-1/4 w-1/2 h-1/2 bg-linear-to-br ${selectedColors.gradientFrom} ${selectedColors.gradientTo} opacity-10 blur-3xl rounded-full transition-all duration-700`} />
      <div className={`hidden lg:block absolute inset-0 top-1/4 right-0 w-1/2 h-1/2 bg-linear-to-tl ${selectedColors.gradientFrom} ${selectedColors.gradientTo} opacity-10 blur-3xl rounded-full transition-all duration-700`} />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary-foreground border-secondary/20">
            <Target className="w-4 h-4 mr-2 inline text-secondary" />
            Personalized Programs
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter">
            Choose Your{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Transformation Path
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every program is meticulously designed for specific, life-changing goals. Find the one that matches your journey.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Column: Program Selector */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {programs.map((program, index) => {
              const ProgramIcon = program.icon;
              const colors = colorClasses[program.color as keyof typeof colorClasses];
              return (
                <button
                  key={program.title}
                  onClick={() => setDesktopActiveProgram(index)}
                  className={cn(
                    "group relative text-left p-6 rounded-2xl border-2 transition-all duration-300 w-full",
                    desktopActiveProgram === index
                      ? `${colors.bg} ${colors.border} shadow-2xl ${colors.glow}`
                      : "bg-card/50 border-white/10 hover:bg-card/80 hover:border-white/20"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("p-2 rounded-lg transition-colors", desktopActiveProgram === index ? `bg-linear-to-br ${colors.gradientFrom} ${colors.gradientTo}` : 'bg-muted')}>
                      <ProgramIcon className={cn("w-6 h-6 transition-colors", desktopActiveProgram === index ? 'text-white' : 'text-muted-foreground group-hover:text-foreground')} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground">{program.title}</h4>
                      <p className={cn("text-sm transition-colors", desktopActiveProgram === index ? colors.text : 'text-muted-foreground')}>{program.tagline}</p>
                    </div>
                  </div>
                  {desktopActiveProgram === index && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2">
                      <div className={`h-8 w-8 rounded-full bg-linear-to-br ${colors.gradientFrom} ${colors.gradientTo} flex items-center justify-center`}>
                        <MoveRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Featured Program Card */}
          <div className="lg:col-span-2">
            <div className={`relative h-full p-8 rounded-3xl border-2 ${selectedColors.border} ${selectedColors.bg} backdrop-blur-sm transition-all duration-500 shadow-2xl ${selectedColors.glow} overflow-hidden`}>
              <div className="relative animate-fade-in" key={desktopActiveProgram}>
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${selectedColors.gradientFrom} ${selectedColors.gradientTo} shadow-lg ${selectedColors.glow}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-3xl font-black mb-2 text-foreground">{selectedProgram.title}</h3>
                    <p className={`text-md font-semibold ${selectedColors.text}`}>{selectedProgram.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed mt-4">{selectedProgram.description}</p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid md:grid-cols-2 gap-6 pt-6">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold mb-1 text-foreground">Who It&apos;s For</div>
                        <div className="text-sm text-muted-foreground">{selectedProgram.whoFor}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold mb-1 text-foreground">Expected Outcome</div>
                        <div className="text-sm text-muted-foreground">{selectedProgram.outcome}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 pt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-foreground">{selectedProgram.time}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{selectedProgram.duration} sessions</div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6">
                    <Button
                      onClick={() => onNavigate("apply")}
                      size="lg"
                      className={`w-full group/btn bg-linear-to-r ${selectedColors.gradientFrom} ${selectedColors.gradientTo} text-white hover:shadow-xl ${selectedColors.glow}`}
                    >
                      Apply for this program
                      <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Carousel Layout */}
        <div className="lg:hidden">
          <Carousel setApi={setCarouselApi} className="w-full max-w-md mx-auto">
            <CarouselContent>
              {programs.map((program, index) => {
                const ProgramIcon = program.icon;
                const colors = colorClasses[program.color as keyof typeof colorClasses];
                return (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className={`relative h-full p-8 rounded-3xl border-2 ${colors.border} ${colors.bg} backdrop-blur-sm transition-all duration-500 shadow-2xl ${colors.glow} overflow-hidden`}>
                        <div className="relative">
                          {/* Icon */}
                          <div className="relative mb-6">
                            <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${colors.gradientFrom} ${colors.gradientTo} shadow-lg ${colors.glow}`}>
                              <ProgramIcon className="w-8 h-8 text-white" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-3xl font-black mb-2 text-foreground">{program.title}</h3>
                              <p className={`text-md font-semibold ${colors.text}`}>{program.tagline}</p>
                              <p className="text-muted-foreground leading-relaxed mt-4">{program.description}</p>
                            </div>

                            {/* Details Grid */}
                            <div className="grid sm:grid-cols-2 gap-6 pt-6">
                              <div className="flex items-start gap-3">
                                <Users className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <div>
                                  <div className="text-sm font-semibold mb-1 text-foreground">{`Who It's For`}</div>
                                  <div className="text-sm text-muted-foreground">{program.whoFor}</div>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <TrendingUp className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <div>
                                  <div className="text-sm font-semibold mb-1 text-foreground">Expected Outcome</div>
                                  <div className="text-sm text-muted-foreground">{program.outcome}</div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-6 pt-4">
                              <div className="flex items-center gap-2 text-sm">
                                <Clock className="w-4 h-4 text-primary" />
                                <span className="font-semibold text-foreground">{program.time}</span>
                              </div>
                              <div className="text-sm text-muted-foreground">{program.duration} sessions</div>
                            </div>

                            {/* CTA */}
                            <div className="pt-6">
                              <Button
                                onClick={() => onNavigate("apply")}
                                size="lg"
                                className={`w-full group/btn bg-linear-to-r ${colors.gradientFrom} ${colors.gradientTo} text-white hover:shadow-xl ${colors.glow}`}
                              >
                                Apply for this program
                                <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
          <div className="py-4 text-center text-sm text-muted-foreground">
            Slide {carouselCurrent + 1} of {programs.length}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">Not sure which program is right for you?</p>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onNavigate("apply")}
            className="shadow-lg hover:shadow-primary/20 transition-all border-white/20 hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
