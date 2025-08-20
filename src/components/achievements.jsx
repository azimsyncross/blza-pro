import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from 'react';
import SectionHeader from "./section-header";
import { Award, Users, TrendingUp, Smile } from "lucide-react";
import { useMotionValue } from "framer-motion";
import { useTransform } from "framer-motion";
import { animate } from "framer-motion";

// Animated number component
function AnimatedStat({ to, icon: Icon, label }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            animate(count, to, { duration: 2, ease: "easeOut" });
        }
    }, [isInView, to, count]);

    return (
        <div ref={ref} className="text-center">
            <Icon className="h-12 w-12 text-primary mx-auto mb-4"/>
            <motion.h3 className="text-5xl font-extrabold text-foreground">{rounded}</motion.h3>
            <p className="text-muted-foreground mt-2">{label}</p>
        </div>
    );
}

// NOTE: You need to import `animate`, `useMotionValue`, `useTransform` from framer-motion
// At the top of the file:
// import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";

export default function AchievementsSection() {
    const stats = [
        { to: 98, icon: Smile, label: "Client Satisfaction" },
        { to: 500, icon: Users, label: "Happy Clients" },
        { to: 300, icon: TrendingUp, label: "Growth Percentage" },
        { to: 10, icon: Award, label: "Industry Awards" },
    ];
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto max-w-7xl px-4">
                <SectionHeader tagline="Our Milestones" title="Our Achievements in Numbers" />
                <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map(stat => (
                        <AnimatedStat key={stat.label} to={stat.to} icon={stat.icon} label={stat.label} />
                    ))}
                </div>
            </div>
        </section>
    );
}