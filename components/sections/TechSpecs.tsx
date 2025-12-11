"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const specs = [
    { label: "Processing Power", value: "128 Teraflops" },
    { label: "Memory Bandwidth", value: "980 GB/s" },
    { label: "Neural Engine", value: "64-Core" },
    { label: "Fabric Architecture", value: "3nm Process" },
    { label: "Thermal Efficiency", value: "95% Active Cooling" },
    { label: "Quantum Security", value: "AES-256 + PQC" },
];

export function TechSpecs() {
    return (
        <section id="specs" className="py-24 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold tracking-tighter"
                    >
                        Uncompromising Performance.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {specs.map((spec, index) => (
                        <motion.div
                            key={spec.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h4 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-2">
                                {spec.label}
                            </h4>
                            <p className="text-3xl md:text-4xl font-light tracking-tight">{spec.value}</p>
                            <Separator className="mt-6 bg-neutral-800" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 p-8 border border-white/10 rounded-3xl bg-neutral-900/30 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">Download Full Technical Whitepaper</h3>
                            <p className="text-neutral-400">Detailed architecture analysis and benchmarks.</p>
                        </div>
                        <button className="px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors">
                            Download PDF
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
