"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Pricing() {
    return (
        <section id="pricing" className="py-40 px-6 bg-neutral-50 dark:bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-medium tracking-tight mb-6"
                    >
                        Membership.
                    </motion.h2>
                    <p className="text-neutral-500 text-lg font-light">Select your tier of access.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Standard Member */}
                    <div className="p-10 rounded-[2rem] bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-lg font-medium tracking-widest uppercase mb-4 text-neutral-500">Standard</h3>
                            <div className="text-5xl font-light mb-8 text-black dark:text-white">$0</div>
                            <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400 mb-10">
                                {["Access onto Platform", "Community Forum", "Basic Analytics"].map(item => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button variant="outline" className="w-full rounded-full py-6 border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors">
                            Apply for Access
                        </Button>
                    </div>

                    {/* Executive Member - Metallic/Premium */}
                    <div className="relative p-10 rounded-[2rem] bg-gradient-to-b from-neutral-900 to-black text-white shadow-2xl flex flex-col justify-between h-full md:scale-105 border border-white/10 overflow-hidden">
                        {/* Shine Effect */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-medium tracking-widest uppercase text-white/80">Executive</h3>
                                <Badge variant="outline" className="border-white/20 text-white/60 font-light">Most Selected</Badge>
                            </div>
                            <div className="text-5xl font-light mb-2 text-white">$49</div>
                            <p className="text-white/40 text-sm mb-8">per month, billed annually</p>

                            <ul className="space-y-4 text-sm text-white/70 mb-10">
                                {["Full Hardware Integration", "Priority Support Concierge", "Advanced Neural Tools", "Zero-Latency Mode"].map(item => (
                                    <li key={item} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-white" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button className="w-full rounded-full py-6 bg-white text-black hover:bg-neutral-200 transition-colors font-medium">
                            Become a Member
                        </Button>
                    </div>

                    {/* V.I.P. */}
                    <div className="p-10 rounded-[2rem] bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/5 flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-lg font-medium tracking-widest uppercase mb-4 text-neutral-500">Private Client</h3>
                            <div className="text-5xl font-light mb-8 text-black dark:text-white">Custom</div>
                            <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400 mb-10">
                                {["Dedicated Infrastructure", "Raw Data Access", "White Label Options", "24/7 Engineering Team"].map(item => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button variant="outline" className="w-full rounded-full py-6 border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors">
                            Contact Board
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
}
