import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import SectionHeader from "./section-header";

const testimonialsData = [
  {
    quote:
      "Working withBLZA PRO  was a game-changer. Their SEO strategy doubled our organic traffic in just six months. We couldn't be happier with the results.",
    name: "Sarah Johnson",
    title: "CEO, Urban Kicks",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    quote:
      "The team's expertise in PPC is unmatched. They optimized our ad spend and delivered a 5x return on investment. Highly recommended!",
    name: "Michael Chen",
    title: "Founder, InnovateAI",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
  },
  {
    quote:
      "As a local business, we struggled to get noticed online.BLZA PRO 's local SEO services put us on the map. Our foot traffic has increased by over 70%.",
    name: "Emily Rodriguez",
    title: "Owner, The Corner Cafe",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export default function TestimonialsSection() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const testimonialIndex =
    ((page % testimonialsData.length) + testimonialsData.length) %
    testimonialsData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Auto-play every 5 seconds
    return () => clearInterval(interval);
  }, [page]);

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto max-w-4xl px-4">
        <SectionHeader tagline="Client Voices" title="What Our Partners Say" />

        <div className="mt-12 relative h-80 md:h-64 flex items-center justify-center">
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full px-8"
            >
              <div className="text-center">
                <Quote className="mx-auto h-12 w-12 text-primary/50" />
                <p className="mt-4 text-xl italic text-foreground">
                  "{testimonialsData[testimonialIndex].quote}"
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonialsData[testimonialIndex].avatar}
                    alt={testimonialsData[testimonialIndex].name}
                  />
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonialsData[testimonialIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonialsData[testimonialIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
