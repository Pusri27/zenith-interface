"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { StaggeredText } from "@/components/ui/StaggeredText";

const testimonials = [
    {
        quote: "The workflow integration is simply seamless. It has completely transformed how our design team collaborates.",
        author: "Sarah Jenkins",
        role: "Product Director @ TechFlow",
        initials: "SJ"
    },
    {
        quote: "I've never used a piece of hardware that felt this alive. The haptics and response times are in a league of their own.",
        author: "Marcus Chen",
        role: "Lead Engineer @ Vertex",
        initials: "MC"
    },
    {
        quote: "Finally, technology that gets out of your way and lets you focus on pure creation. An absolute masterpiece.",
        author: "Elena Rodriguez",
        role: "Creative Director @ Artistry",
        initials: "ER"
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 px-6 bg-white dark:bg-black border-t border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        <StaggeredText stagger={0.03}>Trusted by Visionaries.</StaggeredText>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group"
                        >
                            <Card className="h-full border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/50 shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="p-8 flex flex-col justify-between h-full">
                                    <div className="mb-6">
                                        <div className="text-4xl text-neutral-300 dark:text-neutral-700 font-serif leading-none mb-4">“</div>
                                        <p className="text-lg leading-relaxed">{t.quote}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center font-bold text-sm">
                                            {t.initials}
                                        </div>
                                        <div>
                                            <div className="font-semibold">{t.author}</div>
                                            <div className="text-sm text-muted-foreground">{t.role}</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
