import { motion } from "framer-motion";

function SkillCard({ category, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
        group
        p-6
        rounded-2xl
        bg-slate-100
        dark:bg-white/5
        border
        border-slate-200/10
        dark:border-white/10
        backdrop-blur-xl
        hover:border-cyan-400/40
        transition-all duration-300
        hover:shadow-lg
        hover:shadow-cyan-500/10
      "
    >
      {/* Category */}
      <h3
        className="
          text-xl
          font-semibold
         
          text-cyan-400
          mb-4
          tracking-wide
        "
      >
        {category}
      </h3>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <span
            key={index}
            className="
              px-3 py-1
              text-sm
              rounded-full
              bg-slate-900/60
              dark:bg-slate-600
              text-slate-300
              border
              border-slate-700/40
              group-hover:border-cyan-400/30
              transition
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCard;
