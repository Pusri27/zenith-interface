"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How does the Neural Engine optimize my workflow?",
        answer: "Our proprietary Neural Engine constantly analyzes your usage patterns to pre-load assets and optimize processing power allocation, ensuring zero latency during creative tasks.",
    },
    {
        question: "Is the hardware compatible with legacy systems?",
        answer: "Yes, we offer full backward compatibility with major OS revisions from the last 5 years, while unlocking exclusive features on modern architecture.",
    },
    {
        question: "What makes the materials 'Aerospace-Grade'?",
        answer: "We use 7000-series aluminum alloy, identical to what is used in modern aircraft construction, providing an optimal strength-to-weight ratio.",
    },
    {
        question: "Do you offer enterprise support plans?",
        answer: "Absolutely. Our Enterprise tier includes dedicated 24/7 priority support, on-site deployment assistance, and custom integration workshops.",
    },
];

export function FAQ() {
    return (
        <section id="faq" className="py-24 px-6 bg-gray-50 dark:bg-neutral-950">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions.</h2>
                </motion.div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
