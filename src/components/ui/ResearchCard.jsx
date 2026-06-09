import { motion } from "framer-motion";

function ResearchCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        p-6
        rounded-2xl
        bg-slate-100
        dark:bg-white/5
        border
        border-slate-200/10
        dark:border-white/10
        backdrop-blur-xl
        hover:border-cyan-400/40
        transition
        hover:shadow-lg
        hover:shadow-cyan-500/10
      "
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-slate-700 dark:text-white mb-2">
        {item.title}
      </h3>

      {/* Authors */}
      <p className="text-slate-400 text-sm mb-1">{item.authors}</p>

      {/* Journal / Publisher */}
      <p className="text-cyan-400 text-sm mb-1">
        {item.journal || item.publisher}
      </p>

      {/* Year / Type */}
      <div className="flex justify-between text-sm text-slate-500 mt-3">
        <span>{item.year}</span>
        {item.type && <span>{item.type}</span>}
      </div>
    </motion.div>
  );
}

export default ResearchCard;
