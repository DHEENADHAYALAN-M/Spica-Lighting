import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  center?: boolean;
}

export function SectionHeading({ title, subtitle, center = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${center ? "text-center" : "text-left"}`}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4 block"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-display font-light text-white leading-tight"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`h-px bg-gradient-to-r from-primary/50 to-transparent mt-8 ${
          center ? "mx-auto w-24" : "w-24"
        }`}
      />
    </div>
  );
}
