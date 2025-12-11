"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextScramble } from "@/components/ui/TextScramble";

export function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden bg-white dark:bg-black">
            {/* Subtle Gradient Spotlights */}
            <div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] bg-neutral-200/40 dark:bg-neutral-800/20 rounded-full blur-[160px] pointer-events-none mix-blend-overlay" />

            <div className="container relative z-10 flex flex-col items-center text-center px-4 mt-20">
                {/* Animated Badge - Minimalist */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-10"
                >
                    <span className="px-4 py-1.5 rounded-full border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 font-medium">
                        Generation II
                    </span>
                </motion.div>

                {/* Main Heading - Editorial Style */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-[0.9] text-black dark:text-white mb-10"
                >
                    Timeless <br className="hidden md:block" />
                    <span className="text-neutral-400 dark:text-neutral-600">
                        <TextScramble className="font-light">Precision.</TextScramble>
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl font-light text-neutral-600 dark:text-neutral-400 max-w-lg mb-14 leading-relaxed"
                >
                    An instrument of pure focus. Crafted from aerospace titanium and sapphire glass.
                </motion.p>

                {/* CTA Buttons - Magnetic Feel */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <MagneticButton className="rounded-full px-10 h-14 text-sm uppercase tracking-widest bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all shadow-2xl">
                        Reserve Yours
                    </MagneticButton>
                    <MagneticButton className="flex items-center text-sm uppercase tracking-widest text-neutral-500 hover:text-black dark:hover:text-white transition-colors group px-6 py-4">
                        Watch Film <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Hero Product Visual Placeholder - Abstract & Moody */}
            <motion.div
                style={{ y, opacity }}
                className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-white dark:from-black via-white/80 dark:via-black/80 to-transparent z-20 pointer-events-none"
            />
        </section>
    );
}
