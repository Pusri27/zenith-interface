"use client";

import { motion } from "framer-motion";

interface StaggeredTextProps {
    children: string;
    className?: string;
    delay?: number;
    stagger?: number;
}

export function StaggeredText({
    children,
    className,
    delay = 0,
    stagger = 0.05
}: StaggeredTextProps) {
    const letters = children.split("");

    return (
        <span className={className}>
            {letters.map((letter, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: delay + (i * stagger),
                        ease: [0.2, 0.65, 0.3, 0.9]
                    }}
                    className="inline-block"
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </span>
    );
}
