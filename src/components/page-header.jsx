import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHeader({ title, breadcrumbs }) {
  return (
    <div className="relative bg-secondary/20 py-16 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 to-transparent"></div>
      <motion.div
        className="container mx-auto max-w-7xl px-4 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {breadcrumbs && (
          <div className="mt-4 flex items-center justify-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center">
                <ChevronRight className="h-4 w-4 mx-1" />
                {crumb.link ? (
                  <Link to={crumb.link} className="hover:text-primary transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}