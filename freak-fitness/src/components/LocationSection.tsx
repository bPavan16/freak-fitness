"use client";

import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const AnimatedHeader = () => (
  <motion.div
    variants={fadeIn}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12 sm:mb-16 relative"
  >
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#FFBF00]/10 blur-[100px] -z-10" />
    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
      LOCATE YOUR <br className="hidden sm:block" />
      <span className="text-[#FFBF00] drop-shadow-[0_0_15px_rgba(255,191,0,0.3)]">MOTIVATION</span>
    </h2>
    <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-medium px-4">
{`      Step into Freak's Gym and start your transformation today. We're situated right where you need us.
`}    </p>
  </motion.div>
);

const AnimatedMap = () => (
  <motion.div
    variants={fadeIn}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="relative group h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] rounded-3xl overflow-hidden shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] border border-[#FFBF00]/20"
  >
    <div className="absolute inset-0 bg-[#FFBF00]/5 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500" />
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.901192255634!2d74.443654314845!3d14.2831069902969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe80d53f555555%3A0x533b52d5b5a40c0c!2sFreak's%20Gym!5e0!3m2!1sen!2sin!4v1678886462495!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      className="grayscale invert contrast-125 brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100 group-hover:contrast-100"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20">
      <div className="bg-black/90 backdrop-blur-md p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 shadow-xl flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFBF00] rounded-full flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </div>
          <div className="min-w-0">
            <p className="text-xs sm:text-base font-black text-white tracking-tight truncate">{`Freak's Gym`}</p>
            <p className="text-[10px] sm:text-sm text-zinc-400 truncate">{`Honnavar, Karnataka`}</p>
          </div>
        </div>
        <a 
          href="https://maps.app.goo.gl/Xm6CZ8vCs6GW6hQQ9" 
          target="_blank" 
          className="text-[11px] sm:text-sm font-black bg-[#FFBF00] text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl hover:scale-105 active:scale-95 transition-all whitespace-nowrap shadow-[0_4px_20px_rgba(255,191,0,0.3)]"
        >
          GET DIRECTIONS
        </a>
      </div>
    </div>
  </motion.div>
);

export function LocationSection() {
  return (
    <section id="location" className="py-20 sm:py-32 md:py-40 bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-[#FFBF00]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-[#FF4500]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedHeader />
        
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          <div className="lg:col-span-7 xl:col-span-8">
            <AnimatedMap />
          </div>
          
          <div className="lg:col-span-5 xl:col-span-4 space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
              <AnimatedInfoCard
                icon={<MapPin className="w-6 h-6" />}
                title="Our Location"
                content="Honnavar, Karnataka 581334"
                delay={0.3}
              />
              <AnimatedInfoCard
                icon={<Clock className="w-6 h-6" />}
                title="Training Hours"
                content={
                  <div className="space-y-1 sm:text-sm lg:text-base">
                    <p className="flex justify-between items-center sm:block lg:flex">
                      <span className="text-zinc-400">Mon - Sat:</span> 
                      <span className="text-[#FFBF00] font-black tracking-tight">5AM-10AM, 4PM-10PM</span>
                    </p>
                    <p className="flex justify-between items-center sm:block lg:flex">
                      <span className="text-zinc-400">Sunday:</span> 
                      <span className="text-red-500 font-black tracking-tight">CLOSED</span>
                    </p>
                  </div>
                }
                delay={0.4}
              />
              <AnimatedInfoCard
                icon={<Phone className="w-6 h-6" />}
                title="Direct Line"
                content={
                  <a href="tel:09910938414" className="text-xl sm:text-2xl font-black hover:text-[#FFBF00] transition-colors tracking-tighter text-white">
                    +91 99109 38414
                  </a>
                }
                delay={0.5}
              />
              <AnimatedInfoCard
                icon={<Instagram className="w-6 h-6" />}
                title="Social Growth"
                content={
                  <a 
                    href="https://www.instagram.com/Freaks_gym_honnavar/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 group/link text-base sm:text-lg font-bold text-white"
                  >
                    <span className="bg-[#FFBF00]/10 px-4 py-1.5 rounded-lg border border-[#FFBF00]/20 group-hover/link:bg-[#FFBF00] group-hover/link:text-black transition-all">
                      @Freaks_gym_honnavar
                    </span>
                  </a>
                }
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface AnimatedInfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  delay: number;
}

const AnimatedInfoCard = ({ icon, title, content, delay }: AnimatedInfoCardProps) => (
    <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay }}
        className="group"
    >
        <div className="flex flex-row items-center gap-5 p-6 sm:p-8 bg-[#0A0A0A] rounded-2xl border border-[#262626] hover:border-[#FFBF00]/40 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(255,191,0,0.2)] relative overflow-hidden">
            <div className="w-12 h-12 bg-[#FFBF00]/10 rounded-xl flex items-center justify-center text-[#FFBF00] group-hover:scale-110 group-hover:bg-[#FFBF00] group-hover:text-black transition-all duration-500 shrink-0">
                {icon}
            </div>
            <div className="flex flex-col min-w-0">
                <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#FFBF00] mb-1 opacity-80">{title}</h3>
                <div className="text-white min-w-0">{content}</div>
            </div>
        </div>
    </motion.div>
);


// We'll use a local Button component or just a styled link to avoid dependency issues if it's not exported
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
function Button({ children, className, asChild, size, ...props }: any) {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp 
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-8 py-4 text-lg ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

