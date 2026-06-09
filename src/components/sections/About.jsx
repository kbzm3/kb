import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

function About() {
  return (
    <section
      id="about"
      className="
  py-28
  bg-white dark:bg-slate-950
  text-slate-900 dark:text-white
  scroll-mt-24
"
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-20
          right-10
          w-72 h-72
          bg-cyan-500/10
          blur-[120px]
          rounded-full
        "
      />

      <Container className="relative z-10">
        <SectionTitle subtitle="Introduction" title="About Me" />

        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3
              className="
                text-3xl
                md:text-4xl
                font-bold
                leading-snug
                text-slate-900
                dark:text-white
                mb-6
              "
            >
              AI Researcher, Educator & Web Developer
            </h3>

            <p
              className="
                text-slate-600
                dark:text-slate-400
                text-lg
                leading-relaxed
                mb-6
              "
            >
              I specialize in Artificial Intelligence, modern web technologies,
              and data-centric systems with a strong focus on research,
              development, and impactful digital experiences.
            </p>

            <p
              className="
                text-slate-600
                dark:text-slate-400
                text-lg
                leading-relaxed
              "
            >
              My work combines academic research, frontend engineering, and
              innovative problem-solving to create scalable and visually
              immersive applications.
            </p>
          </motion.div>

          {/* Right Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              backdrop-blur-xl
              bg-white/10
              dark:bg-white/5
              border
              border-slate-200
              dark:border-white/10
              rounded-3xl
              p-10
              shadow-2xl
            "
          >
            <div
              className="
                grid
                grid-cols-2
                gap-8
              "
            >
              <div>
                <h4
                  className="
                    text-5xl
                    font-bold
                    text-cyan-400
                    mb-2
                  "
                >
                  5+
                </h4>

                <p
                  className="
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  Years Experience
                </p>
              </div>

              <div>
                <h4
                  className="
                    text-5xl
                    font-bold
                    text-cyan-400
                    mb-2
                  "
                >
                  20+
                </h4>

                <p
                  className="
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  Projects Built
                </p>
              </div>

              <div>
                <h4
                  className="
                    text-5xl
                    font-bold
                    text-cyan-400
                    mb-2
                  "
                >
                  10+
                </h4>

                <p
                  className="
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  Technologies
                </p>
              </div>

              <div>
                <h4
                  className="
                    text-5xl
                    font-bold
                    text-cyan-400
                    mb-2
                  "
                >
                  100%
                </h4>

                <p
                  className="
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  Research Driven
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default About;
