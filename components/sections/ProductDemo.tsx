"use client";

import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Battery, Wifi, Activity, Layers } from "lucide-react";

export function ProductDemo() {
    return (
        <section id="demo" className="py-24 px-6 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Intuitive Control.
                    </motion.h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        A seamless interface designed to adapt to your workflow, not the other way around.
                    </p>
                </div>

                <Tabs defaultValue="dashboard" className="w-full max-w-5xl mx-auto">
                    <div className="flex justify-center mb-8">
                        <TabsList className="bg-gray-100 dark:bg-neutral-900/50 p-1 rounded-full border border-gray-200 dark:border-white/5">
                            <TabsTrigger
                                value="dashboard"
                                className="rounded-full px-6 py-2 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-neutral-800 dark:data-[state=active]:text-white transition-all"
                            >
                                Dashboard
                            </TabsTrigger>
                            <TabsTrigger
                                value="analytics"
                                className="rounded-full px-6 py-2 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-neutral-800 dark:data-[state=active]:text-white transition-all"
                            >
                                Analytics
                            </TabsTrigger>
                            <TabsTrigger
                                value="settings"
                                className="rounded-full px-6 py-2 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-black dark:data-[state=active]:bg-neutral-800 dark:data-[state=active]:text-white transition-all"
                            >
                                Settings
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="relative aspect-video md:aspect-[16/9] lg:aspect-[2/1] rounded-2xl md:rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-neutral-900/30 p-2 md:p-4 shadow-2xl shadow-gray-200/50 dark:shadow-none backdrop-blur-sm">
                        {/* macOS-style Window Controls */}
                        <div className="absolute top-4 left-4 flex gap-2 z-20">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>

                        <div className="w-full h-full bg-white dark:bg-black rounded-xl md:rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden relative">
                            <TabsContent value="dashboard" className="h-full mt-0 p-6 md:p-10">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full"
                                >
                                    <div className="bg-gray-50 dark:bg-neutral-900 rounded-xl p-6 flex flex-col justify-between">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                                <Activity className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium">System Status</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                                                <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-blue-500 rounded-full" />
                                            </div>
                                            <div className="flex justify-between text-xs text-muted-foreground">
                                                <span>Optimal</span>
                                                <span>98%</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-neutral-900 rounded-xl p-6 flex flex-col justify-between">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                                                <Wifi className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium">Connectivity</span>
                                        </div>
                                        <div className="text-2xl font-bold">5.2 Gbps</div>
                                        <div className="text-xs text-muted-foreground">Low Latency Mode Active</div>
                                    </div>
                                </motion.div>
                            </TabsContent>

                            <TabsContent value="analytics" className="h-full mt-0 p-6 md:p-10">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex items-center justify-center h-full"
                                >
                                    <div className="text-center">
                                        <div className="mb-4 inline-flex p-4 rounded-full bg-green-500/10 text-green-500">
                                            <Layers className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Deep Insights</h3>
                                        <p className="text-sm text-muted-foreground">Tracking over 1,000 data points per second.</p>
                                    </div>
                                </motion.div>
                            </TabsContent>

                            <TabsContent value="settings" className="h-full mt-0 p-6 md:p-10">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="space-y-4 max-w-md mx-auto"
                                >
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-neutral-900 rounded-lg">
                                            <span className="text-sm font-medium">Configuration {i}</span>
                                            <div className="w-10 h-6 bg-gray-200 dark:bg-white/10 rounded-full relative">
                                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </TabsContent>
                        </div>
                    </div>
                </Tabs>
            </div>
        </section>
    );
}
