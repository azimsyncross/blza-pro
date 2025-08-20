import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-violet-700 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/path/to/your/pattern.svg')] opacity-10"></div>
            
            <motion.div
                className="container mx-auto max-w-4xl px-4 text-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
                }}
            >
                <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    Ready to Amplify Your Brand?
                </h2>
                <p className="mt-6 text-lg text-violet-200">
                    Let's build a strategy that drives real growth. Your journey to digital dominance starts with a single click.
                </p>
                <div className="mt-10">
                    <Link
                        to="/contact-us"
                        className="group inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-base font-bold text-primary shadow-lg transition-transform hover:scale-105"
                    >
                        Get Your Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}