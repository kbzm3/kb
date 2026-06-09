import { motion } from "framer-motion";

function EducationItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        relative
        pl-10
        border-l
        border-cyan-500/30
        pb-10
      "
    >
      {/* Dot */}
      <div
        className="
          absolute
          left-[-7px]
          top-1
          w-3 h-3
          bg-cyan-400
          rounded-full
          shadow-lg
          shadow-cyan-500/50
        "
      />

      {/* Content */}
      <div
        className="
          p-5
          rounded-xl
          bg-slate-100
          dark:bg-white/5
          border
          border-slate-900/10
          dark:border-white/10
          backdrop-blur-xl
          hover:border-cyan-400/30
          transition
        "
      >
        <p className="text-cyan-400 text-sm mb-1">{item.year}</p>

        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {item.degree}
        </h3>

        <p className="mb-2 text-slate-800 dark:text-white">
          {item.institution}
        </p>

        <p className="text-slate-600 dark:text-shadow-white text-sm leading-relaxed">
          {item.details}
        </p>
      </div>
    </motion.div>
  );
}

export default EducationItem;
