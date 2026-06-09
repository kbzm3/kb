import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-950
        via-black
        to-slate-950
        border-t border-white/10
      "
    >
      {/* Glow Effects */}
      <div
        className="
          absolute top-0 left-1/4
          w-72 h-72
          bg-blue-500/20
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          absolute bottom-0 right-1/4
          w-72 h-72
          bg-indigo-500/20
          blur-[120px]
          rounded-full
        "
      />

      {/* Main Footer Content */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6 py-20
          grid md:grid-cols-3
          gap-12
        "
      >
        {/* Left Section */}
        <div>
          <h2
            className="
              text-4xl
              font-bold
              text-white
              mb-3
            "
          >
            Dr. <span className="text-cyan-500">K. A. Bhat</span>
          </h2>

          {/* <p
            className="
              text-slate-400
              leading-relaxed
              max-w-md
            "
          >
            Familiarity breeds contempt.
          </p> */}
          <p
            className="
    text-cyan-400
    text-lg
    mt-6
    leading-relaxed
    font-medium
  "
            style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
          >
            {/* علم چھُ گاش */}
            علم، تحقیق، اور تخلیق کا سفر جاری ہے
          </p>
        </div>

        {/* Quick Links */}

        {/* Social Section */}
        <div>
          <h3
            className="
              text-xl
              font-semibold
              text-white
              mb-6
            "
          >
            Connect
          </h3>

          <div className="flex gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-14 h-14
                rounded-2xl
                bg-white/5
                border border-white/10
                backdrop-blur-md
                flex items-center justify-center
                text-white text-xl
                hover:bg-blue-500/20
                hover:border-blue-500/30
                hover:scale-110
                transition duration-300
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-14 h-14
                rounded-2xl
                bg-white/5
                border border-white/10
                backdrop-blur-md
                flex items-center justify-center
                text-white text-xl
                hover:bg-blue-500/20
                hover:border-blue-500/30
                hover:scale-110
                transition duration-300
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ksdbhat99@gmail.com"
              className="
                w-14 h-14
                rounded-2xl
                bg-white/5
                border border-white/10
                backdrop-blur-md
                flex items-center justify-center
                text-white text-xl
                hover:bg-blue-500/20
                hover:border-blue-500/30
                hover:scale-110
                transition duration-300
              "
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="
          relative z-10
          border-t border-white/10
          px-6 py-6
        "
      >
        <div
          className="
            max-w-7xl mx-auto
            flex flex-col md:flex-row
            items-center justify-between
            gap-5
          "
        >
          <p className="text-slate-500 text-sm text-center md:text-center">
            © 2026 Dr. Khursheed Ahmad Bhat. All rights reserved.
          </p>

          {/* Scroll To Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
              w-12 h-12
              cursor-pointer
              rounded-full
              bg-cyan-400
              hover:bg-cyan-500
              text-white
              flex items-center justify-center
              shadow-lg shadow-blue-500/30
              hover:scale-110
              transition duration-300
            "
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
