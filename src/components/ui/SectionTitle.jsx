import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <p
        className="
          text-cyan-400
          uppercase
          tracking-[0.3em]
          text-sm
          mb-4
        "
      >
        {subtitle}
      </p>

      <h2
        className="
          text-4xl
          md:text-5xl
          font-bold
          text-slate-900
          dark:text-white
        "
      >
        {title}
      </h2>
    </motion.div>
  );
}

export default SectionTitle;
