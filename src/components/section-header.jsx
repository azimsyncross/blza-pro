import { motion } from "framer-motion";

export default function SectionHeader({ tagline, title, description }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="text-center max-w-3xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {tagline && (
        <motion.p
          variants={itemVariants}
          className="text-primary font-semibold tracking-wider uppercase"
        >
          {tagline}
        </motion.p>
      )}
      <motion.h2
        variants={itemVariants}
        className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={itemVariants}
          className="mt-4 text-lg text-muted-foreground"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}