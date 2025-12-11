"use client";

import { useScroll, useVelocity, useTransform, useSpring, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Noise() {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    // Base opacity is 0.03, increases to 0.15 depending on scroll speed
    const opacity = useTransform(smoothVelocity, [-2000, 0, 2000], [0.15, 0.03, 0.15]);

    return (
        <motion.div
            style={{ opacity }}
            className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.03] mix-blend-overlay"
        >
            <svg className="h-full w-full">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </motion.div>
    );
}
