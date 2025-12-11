"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500); // Delay fade out
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Adjust speed here

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }} // Slide up reveal
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-black text-white"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter opacity-10 tabular-nums">
                            {counter}
                        </span>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            className="h-1 bg-white mt-8 rounded-full"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
