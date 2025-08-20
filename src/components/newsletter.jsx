import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, Loader2 } from "lucide-react";

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [formState, setFormState] = useState('idle'); // idle | loading | success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormState('loading');
        // Dummy delay to simulate API call
        await new Promise(res => setTimeout(res, 3000));
        setFormState('success');
    };

    return (
        <section className="py-16 md:py-24 bg-secondary/20">
            <div className="container mx-auto max-w-3xl px-4 text-center">
                <div className="flex justify-center mb-4">
                    <Mail className="h-12 w-12 text-primary" />
                </div>
                <h2 className="text-3xl font-extrabold text-foreground">Stay Ahead of the Curve</h2>
                <p className="mt-3 text-lg text-muted-foreground">Subscribe to our newsletter for the latest digital marketing insights, tips, and trends.</p>

                <div className="mt-8">
                    <AnimatePresence mode="wait">
                    {formState === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center justify-center gap-2 text-lg font-medium text-green-400"
                        >
                            <CheckCircle />
                            <span>Thanks for subscribing!</span>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            onSubmit={handleSubmit}
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full flex-grow px-4 py-3 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                                disabled={formState === 'loading'}
                            />
                            <button
                                type="submit"
                                disabled={formState === 'loading'}
                                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed"
                            >
                                {formState === 'loading' ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    'Subscribe'
                                )}
                            </button>
                        </motion.form>
                    )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}