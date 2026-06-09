import { motion } from "framer-motion";

function ExperienceItem({ item, index }) {
  const isCurrent = item.type === "current";

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
      {/* Timeline Dot */}
      <div
        className={`
          absolute left-[-7px] top-1
          w-3 h-3 rounded-full
          ${
            isCurrent
              ? "bg-green-400 shadow-green-400/50"
              : "bg-cyan-500 shadow-cyan-500/90"
          }
          shadow-lg
        `}
      />

      {/* Card */}
      <div
        className={`
          p-6
          rounded-xl
          backdrop-blur-xl
          border
          transition
          hover:border-cyan-400/40
          ${
            isCurrent
              ? "bg-cyan-500/10 border-cyan-400/30"
              : "bg-slate-100 dark:bg-white/5 border-white/10"
          }
        `}
      >
        {/* Period */}
        <p className="text-cyan-400 text-sm mb-1">{item.period}</p>

        {/* Role */}
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
          {item.role}
        </h3>

        {/* Organization */}
        <p className="text-slate-700 dark:text-slate-200 mt-1">
          {item.organization}
        </p>

        {/* Location */}
        <p className="text-slate-600 dark:text-white text-sm mt-1">
          {item.location}
        </p>

        {/* Email (only for current) */}
        {item.email && (
          <p className="text-slate-500 dark:text-cyan-300 text-sm mt-2">
            {item.email}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default ExperienceItem;
