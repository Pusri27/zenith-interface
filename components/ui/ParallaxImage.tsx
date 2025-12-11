"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
}

export function ParallaxImage({ src, alt, className }: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.2, 1.1]);

    return (
        <div
            ref={ref}
            className={cn("relative overflow-hidden w-full h-full", className)}
        >
            <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-full">
                <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800 animate-pulse flex items-center justify-center text-neutral-400">
                    {/* Placeholder for actual image if src is not provided or valid */}
                    <span className="text-xs uppercase tracking-widest">Image: {alt}</span>
                </div>
            </motion.div>
        </div>
    );
}
