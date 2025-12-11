"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

gsap.registerPlugin(ScrollTrigger);

const storySteps = [
    {
        title: "Precision Milled",
        description: "Aerospace-grade aluminum, CNC machined to 0.01mm tolerance.",
        image: "bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-800 dark:to-gray-950",
    },
    {
        title: "Neural Core",
        description: "The world's first bio-mimetic processor designed for creative flow.",
        image: "bg-gradient-to-br from-indigo-200 to-purple-400 dark:from-indigo-900 dark:to-purple-950",
    },
    {
        title: "Ecologically Sound",
        description: "100% recycled rare earth magnets and carbon neutral manufacturing.",
        image: "bg-gradient-to-br from-emerald-200 to-teal-400 dark:from-emerald-900 dark:to-teal-950",
    },
];

export function VisualStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const [activeChapter, setActiveChapter] = useState(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pin the right side content while scrolling through the steps
            ScrollTrigger.create({
                trigger: triggerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: ".story-visual",
                scrub: true,
            });

            // Animate text sections opacity
            const sections = gsap.utils.toArray(".story-text-section");
            sections.forEach((section: any) => {
                gsap.fromTo(
                    section,
                    { opacity: 0.2, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: section,
                            start: "top center",
                            end: "bottom center",
                            scrub: true,
                            toggleActions: "play reverse play reverse",
                        },
                    }
                );
            });

            // Change visual colors based on scroll position - simplified approach
            storySteps.forEach((step, i) => {
                ScrollTrigger.create({
                    trigger: `.story-text-${i}`,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => setActiveChapter(i),
                    onEnterBack: () => setActiveChapter(i),
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="story" className="relative bg-white dark:bg-black">
            <div ref={triggerRef} className="flex flex-col md:flex-row">
                {/* Left Side: Scrolling Text */}
                <div className="w-full md:w-1/2 py-24 md:py-0">
                    <div className="flex flex-col">
                        {storySteps.map((step, index) => (
                            <div
                                key={index}
                                className={`story-text-section story-text-${index} h-screen flex flex-col justify-center px-8 md:px-20`}
                            >
                                <span className="text-sm font-mono text-muted-foreground mb-4">0{index + 1}</span>
                                <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">{step.title}</h3>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Sticky Visual */}
                <div className="hidden md:flex story-visual w-1/2 h-screen sticky top-0 bg-gray-50 dark:bg-neutral-900 border-l border-gray-100 dark:border-white/5 items-center justify-center overflow-hidden">
                    {/* Chapter Visuals */}
                    <div className="sticky top-0 h-screen w-full flex items-center justify-center p-8">
                        <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden border border-neutral-200 dark:border-white/10 shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeChapter}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0"
                                >
                                    {/* Using ParallaxImage for depth within the chapter visual */}
                                    <ParallaxImage
                                        src={`/placeholders/story-${activeChapter}.jpg`}
                                        alt={`Chapter ${activeChapter}`}
                                        className="bg-neutral-100 dark:bg-neutral-800"
                                    />
                                    {/* Overlay Text for context */}
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <h3 className="text-9xl font-bold text-black/5 dark:text-white/5 tracking-tighter">
                                            0{activeChapter + 1}
                                        </h3>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
