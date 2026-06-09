import { motion } from "framer-motion";
import portrait from "../../assets/images/portrait.png";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        h-screen
        overflow-hidden
        
      "
    >
      {/* Background Image */}
      <div
        className="
          absolute inset-0
          top-15
          w-full h-full
        "
      >
        <img
          src={portrait}
          alt="Portrait"
          className="
            w-full h-full
            object-cover
            object-center
            scale-100
          "
        />
      </div>

      {/* Dark Overlay */}
      <div
        className="
          absolute inset-0
          bg-black/60
        "
      />

      {/* Gradient Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/80
          via-black/40
          to-transparent
        "
      />

      {/* Hero Content */}
      <div
        className="
          relative z-10
          h-full
          max-w-7xl
          mx-auto
          px-6
          flex items-center
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          {/* Small Intro */}
          <p
            className="
              text-cyan-400
              text-lg md:text-xl
              mb-4
              tracking-widest
              uppercase
              drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]
            "
          >
            Learning to be a<span className="text-red-600"> good</span> teacher
          </p>

          {/* Main Heading */}
          <h1
            className="
              text-4xl
              md:text-5xl
              font-bold
              leading-tight
              tracking-wider
              text-white
              
              
            "
          >
            Khursheed Ahmad Bhat <br />
            <span className="text-cyan-400 tracking-widest ">
              {" "}
              <span className="text-red-600"> CS </span> Engineer...
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              text-lg md:text-xl
              text-slate-300
              leading-relaxed
              max-w-2xl
            "
          >
            Educator, AI Researcher, Web Developer, and Technology Enthusiast.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-10
              flex flex-wrap gap-5
            "
          >
            <button
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="
                px-8 py-4
                bg-cyan-500
                hover:bg-cyan-400
                text-white
                rounded-full
                font-medium
                transition
                duration-300
                shadow-lg
                hover:scale-105
                cursor-pointer
              "
            >
              Know More
            </button>

            {/* <button
              className="
                px-8 py-4
                border border-white/40
                hover:bg-white/10
                text-white
                rounded-full
                font-medium
                backdrop-blur-md
                transition
                duration-300
                hover:scale-105
              "
            >
              Download Resume
            </button> */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
    px-8 py-4
    border border-white/40
    hover:bg-white/10
    text-white
    rounded-full
    font-medium
    backdrop-blur-md
    transition
    duration-300
    hover:scale-105
    inline-block
  "
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="
          absolute bottom-10 left-1/2
          -translate-x-1/2
          z-10
        "
      >
        <div
          className="
            w-8 h-14
            border-2 border-white/60
            rounded-full
            flex justify-center
            p-2
          "
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="
              w-2 h-2
              bg-red-600
              rounded-full
            "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
