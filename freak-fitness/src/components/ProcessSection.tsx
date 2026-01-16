"use client";

import { Badge } from "@/components/ui/badge";
import { MessageSquare, ClipboardCheck, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: "Reach Out",
    description:
      "Fill out our application form with your goals, experience, and what you want to achieve. It takes less than 2 minutes.",
    details: ["Quick 2-min form", "Tell us your goals", "No commitment required"],
  },
  {
    number: 2,
    icon: ClipboardCheck,
    title: "Assessment",
    description:
      "We'll schedule a free consultation to understand your fitness level, lifestyle, and specific needs in detail.",
    details: ["Free 30-min consultation", "Fitness assessment", "Personalized recommendations"],
  },
  {
    number: 3,
    icon: Rocket,
    title: "Start Training",
    description:
      "Get your personalized program and start your transformation with expert coaching and ongoing support.",
    details: ["Custom training plan", "Expert coaching", "24/7 support"],
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-32 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-black rounded-full blur-3xl animate-float" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-10 space-y-6">
          <Badge variant="secondary" className="mb-4 bg-secondary/10 text-secondary-foreground border-secondary/20">
            <Rocket className="w-4 h-4 mr-2 inline text-secondary" />
            Simple Process
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter">
            Your Journey{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Three simple steps from your first contact to achieving your fitness goals.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-back/ via-black to-black -translate-y-1/2" />

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className="relative group animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Card */}
                    <div className="relative bg-card rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 h-full">
                      {/* Number Badge */}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/30">
                          {step.number}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center mb-6 mt-4">
                        <div className="p-4 rounded-2xl bg-primary/10 group-hover:scale-110 transition-transform">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center space-y-4">
                        <h3 className="text-2xl font-black">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>

                        {/* Details List */}
                        <div className="pt-4 space-y-2">
                          {step.details.map((detail) => (
                            <div
                              key={detail}
                              className="flex items-center gap-2 text-sm text-muted-foreground justify-center"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 rounded-3xl" />
                    </div>

                    {/* Arrow for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                        <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-white/10 shadow-lg">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-semibold">
              Average time from application to first session: 48 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
