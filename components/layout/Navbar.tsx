"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";

const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Story", href: "#story" },
    { name: "Specs", href: "#specs" },
    { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY;
        setLastScrollY(latest);

        // Check if scrolled down for floating effect
        if (latest > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        // Hide/Show logic on scroll direction
        if (latest > previous && latest > 150) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -20, opacity: 0 },
            }}
            animate={isHidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
        >
            {/* Floating Glass Pill */}
            <motion.div
                initial={{ width: "95%" }}
                animate={{ width: isScrolled ? "fit-content" : "95%" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "pointer-events-auto flex items-center justify-between transition-all duration-500 rounded-full",
                    isScrolled
                        ? "bg-white/70 dark:bg-black/70 backdrop-blur-xl shadow-2xl border border-white/20 dark:border-white/10 px-6 py-2"
                        : "bg-transparent py-2 max-w-7xl mx-auto w-full"
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group mr-8">
                    <span className="text-lg font-bold tracking-tighter text-black dark:text-white group-hover:opacity-70 transition-opacity">
                        LUXURY TECH.
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 group/nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-black dark:hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4 ml-8">
                    <Link href="#pricing" className={cn("text-sm font-medium hover:text-black dark:hover:text-white transition-colors", isScrolled ? "hidden lg:block" : "")}>
                        Sign In
                    </Link>
                    <Button
                        size="sm"
                        className="rounded-full px-6 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all font-medium"
                    >
                        Pre-order
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center">
                    <Button
                        size="sm"
                        className="rounded-full px-4 bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all font-medium mr-2"
                    >
                        Buy
                    </Button>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Menu className="w-5 h-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="w-full h-full bg-white dark:bg-black border-none p-0">
                            <SheetTitle className="sr-only">Menu</SheetTitle>
                            <div className="flex flex-col h-full items-center justify-center relative">
                                <SheetClose className="absolute top-6 right-6">
                                    <X className="w-6 h-6" />
                                </SheetClose>
                                <div className="flex flex-col gap-8 text-center">
                                    {navLinks.map((link) => (
                                        <SheetClose key={link.name} asChild>
                                            <Link
                                                href={link.href}
                                                className="text-4xl font-light tracking-tight hover:italic transition-all"
                                            >
                                                {link.name}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </motion.div>
        </motion.header>
    );
}
