"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, User, Mail, Target, Activity, Star } from "lucide-react";
import { motion } from "framer-motion";

export function ApplicationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        goal: "",
        experience: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const subject = `Training Application: ${formData.goal}`;
        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AGoal: ${formData.goal}%0D%0AExperience: ${formData.experience}`;

        window.location.href = `mailto:freaksgym6@gmail.com?subject=${subject}&body=${body}`;

        setTimeout(() => {
            setIsSubmitting(false);
        }, 1000);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="apply" className="py-24 sm:py-32 md:py-40 relative overflow-hidden bg-[#000000] text-white">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#FFBF00]/5 blur-[150px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#FF4500]/5 blur-[150px] -z-10" />

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="max-w-full mx-auto"
                >
                    {/* Header Section */}
                    <div className="text-center mb-16 sm:mb-24 space-y-6">
                        <motion.div variants={itemVariants} className="flex justify-center">
                            <Badge className="px-5 py-2 bg-[#FFBF00]/10 text-[#FFBF00] border-[#FFBF00]/30 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] rounded-full">
                                LIMITED OPENINGS
                            </Badge>
                        </motion.div>
                        <motion.h2 variants={itemVariants} className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-[calc(-0.05em)] leading-[0.85] uppercase">
                            JOIN THE <br />
                            <span className="text-[#FFBF00] drop-shadow-[0_0_30px_rgba(255,191,0,0.4)]">TRANSFORMATION</span>
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-base sm:text-xl text-zinc-500 max-w-3xl mx-auto font-medium leading-relaxed px-4">
                            {`We don't just provide workouts; we build physiques. Fill out the form below for a high-performance training protocol tailored to your evolution.`}
                        </motion.p>
                    </div>

                    {/* Form Layout */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Left Side: Benefits/Social Proof */}
                        <motion.div variants={itemVariants} className="lg:col-span-4 space-y-12 order-2 lg:order-1">
                            <div className="space-y-8">
                                <h3 className="text-2xl font-black uppercase tracking-tighter border-l-4 border-[#FFBF00] pl-4">
                                    Why Join Us?
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        { title: "Bespoke Protocols", desc: "No generic templates. Just data-driven growth." },
                                        { title: "Premium Equipment", desc: "Access to world-class metabolic tools." },
                                        { title: "Elite Community", desc: "Surround yourself with high-achievers." }
                                    ].map((benefit, idx) => (
                                        <li key={idx} className="group">
                                            <div className="flex items-start gap-4 p-4 rounded-2xl border border-[#1A1A1A] bg-[#0A0A0A] hover:border-[#FFBF00]/40 transition-all">
                                                <div className="w-10 h-10 rounded-lg bg-[#FFBF00]/10 flex items-center justify-center text-[#FFBF00] shrink-0">
                                                    <CheckCircle2 className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="font-black uppercase text-xs tracking-widest text-white mb-1">{benefit.title}</p>
                                                    <p className="text-sm text-zinc-500 font-medium">{benefit.desc}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#111] to-[#000] border border-[#222] relative overflow-hidden group">
                                <div className="relative z-10 space-y-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map((n) => (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img 
                                                key={n} 
                                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${n+100}`} 
                                                className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800"
                                                alt="User"
                                            />
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FFBF00] text-[#FFBF00]" />)}
                                        </div>
                                        <span className="text-sm font-black tracking-tight text-white">4.9/5 RATING</span>
                                    </div>
                                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest leading-relaxed">
                                        JOIN 500+ TRANSFORMED PEOPLE IN HONNAVAR
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: The Form */}
                        <motion.div variants={itemVariants} className="lg:col-span-8 order-1 lg:order-2">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-[#FFBF00]/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                
                                <form
                                    onSubmit={handleSubmit}
                                    className="relative bg-[#0A0A0A] border border-[#1A1A1A] p-8 sm:p-12 md:p-16 rounded-[2.5rem] shadow-2xl space-y-10"
                                >
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <Label className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#FFBF00] flex items-center gap-2 opacity-80">
                                                <User className="w-3 h-3" />
                                                FULL NAME
                                            </Label>
                                            <Input
                                                required
                                                placeholder="STEVE ROGERS"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="h-14 sm:h-16 text-base bg-black border-[#262626] focus:border-[#FFBF00] focus:ring-0 rounded-2xl transition-all placeholder:text-zinc-800 font-bold uppercase tracking-wide"
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <Label className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#FFBF00] flex items-center gap-2 opacity-80">
                                                <Mail className="w-3 h-3" />
                                                EMAIL ADDRESS
                                            </Label>
                                            <Input
                                                type="email"
                                                required
                                                placeholder="STEVE@ELITE.COM"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="h-14 sm:h-16 text-base bg-black border-[#262626] focus:border-[#FFBF00] focus:ring-0 rounded-2xl transition-all placeholder:text-zinc-800 font-bold uppercase tracking-wide"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Label className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#FFBF00] flex items-center gap-2 opacity-80">
                                            <Target className="w-3 h-3" />
                                            PRIMARY OBJECTIVE
                                        </Label>
                                        <div className="relative">
                                            <select
                                                required
                                                className="flex h-14 sm:h-16 w-full rounded-2xl border border-[#262626] bg-black px-4 py-2 text-base text-white focus:outline-none focus:border-[#FFBF00] transition-all appearance-none cursor-pointer font-bold uppercase tracking-wide"
                                                value={formData.goal}
                                                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                                            >
                                                <option value="" className="bg-black">SELECT YOUR GOAL</option>
                                                <option value="Fat Loss" className="bg-black">🔥 FAT LOSS & LEAN MASS</option>
                                                <option value="Strength" className="bg-black">💪 HYPERTROPHY & POWER</option>
                                                <option value="Performance" className="bg-black">⚡ ATHLETIC CONDITIONING</option>
                                                <option value="Health" className="bg-black">🎯 GENERAL WELLNESS</option>
                                            </select>
                                            <Activity className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-700 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Label className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#FFBF00] flex items-center gap-2 opacity-80">
                                            <Activity className="w-3 h-3" />
                                            COMBAT EXPERIENCE
                                        </Label>
                                        <div className="relative">
                                            <select
                                                className="flex h-14 sm:h-16 w-full rounded-2xl border border-[#262626] bg-black px-4 py-2 text-base text-white focus:outline-none focus:border-[#FFBF00] transition-all appearance-none cursor-pointer font-bold uppercase tracking-wide"
                                                value={formData.experience}
                                                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                            >
                                                <option value="" className="bg-black">SELECT EXPERIENCE LEVEL</option>
                                                <option value="Beginner" className="bg-black">🌱 RECRUIT (0-1 YEARS)</option>
                                                <option value="Intermediate" className="bg-black">📈 OPERATIVE (1-3 YEARS)</option>
                                                <option value="Advanced" className="bg-black">🏆 VETERAN (3+ YEARS)</option>
                                            </select>
                                            <Send className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-700 pointer-events-none" />
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-16 sm:h-20 text-lg sm:text-xl font-black uppercase tracking-[0.3em] bg-[#FFBF00] text-black hover:bg-[#FFD700] hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 rounded-2xl shadow-[0_10px_40px_-10px_rgba(255,191,0,0.5)]"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 border-4 border-black/20 border-t-black rounded-full animate-spin" />
                                                INITIALIZING...
                                            </div>
                                        ) : (
                                            "BATTLE START"
                                        )}
                                    </Button>

                                    <p className="text-center text-[10px] font-black uppercase tracking-widest text-zinc-600 leading-relaxed max-w-sm mx-auto">
                                        BY SUBMITTING, YOU AGREE TO OUR PROTOCOLS. <br />
                                        RESPONSE TIME: <span className="text-[#FFBF00]">UNDER 24 HOURS</span>
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

