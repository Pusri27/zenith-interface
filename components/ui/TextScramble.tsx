"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TextScrambleProps {
    children: string;
    className?: string;
    duration?: number;
    speed?: number;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

export function TextScramble({
    children,
    className,
    duration = 0.8,
    speed = 0.04
}: TextScrambleProps) {
    const [displayText, setDisplayText] = useState(children);
    const [isScrambling, setIsScrambling] = useState(false);

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                children
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return children[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= children.length) {
                clearInterval(interval);
            }

            iteration += 1 / 2; // Slower reveal
        }, 40);

        return () => clearInterval(interval);
    }, [children]);

    return (
        <span className={className}>
            {displayText}
        </span>
    );
}
