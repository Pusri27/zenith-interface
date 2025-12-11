"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Globe, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Global Sync",
        description: "Real-time synchronization across all devices with zero latency.",
        icon: Globe,
        className: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
        title: "Vault Security",
        description: "End-to-end encryption ensures your data remains yours.",
        icon: Shield,
        className: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
        title: "Neural Core",
        description: "Powered by our proprietary engine for unmatched speed.",
        icon: Cpu,
        className: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
        title: "Instant Response",
        description: "Optimized for speed, delivering sub-millisecond reactions.",
        icon: Zap,
        className: "col-span-1 md:col-span-2 lg:col-span-2",
    },
];

export function Features() {
    return (
        <section id="features" className="py-40 px-6 bg-neutral-50 dark:bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 md:flex justify-between items-end">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1]"
                    >
                        Capabilities <br /> <span className="text-neutral-400">Redefined.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-neutral-500 max-w-sm mt-8 md:mt-0 text-lg font-light"
                    >
                        Engineered to exceed every expectation. Combining raw power with intuitive intelligence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                        <SpotlightCard key={index} className={feature.className}>
                            <div className="relative z-10 flex flex-col h-full justify-between p-8">
                                <div className="w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center mb-6 text-black dark:text-white">
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-medium mb-3 tracking-tight">{feature.title}</h3>
                                    <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 overflow-hidden",
                className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
                }}
            />
            {children}
        </div>
    );
}
