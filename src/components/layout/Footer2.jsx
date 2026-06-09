import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer2() {
  return (
    <footer
      className="
        bg-slate-950
        text-slate-400
        border-t
        border-white/10
        py-10
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-6
          "
        >
          {/* Left Branding */}
          <div>
            <h2 className="text-white text-xl font-semibold">
              <span className="text-red-600"> Dr. </span> Khursheed Ahmad Bhat
            </h2>
            {/* <p className="text-sm text-slate-500 mt-1">
              Assistant Professor • AI Researcher • Developer
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

          {/* Middle Links */}
          {/* <div className="flex gap-6 text-sm">
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#research" className="hover:text-cyan-400 transition">
              Research
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div> */}

          <div className="flex gap-6 text-sm">
            <h2
              className="text-white text-xl font-semibold text-center "
              style={{ fontFamily: "'Roboto', cursive" }}
            >
              “As long as the dice is still rolling, you will get your six.{" "}
              <br />
              For now, we clap for others and show love.”
            </h2>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <a
              href="#"
              className="hover:text-cyan-400 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:khursheed.bhat@ddn.upes.ac.in"
              className="hover:text-cyan-400 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6"></div>

        {/* Bottom Section */}
        <div
          className="
            text-center
            text-xs
            text-slate-500
          "
        >
          © {new Date().getFullYear()} Dr. Khursheed Ahmad Bhat. All rights
          reserved.
        </div>
        {/* Scroll To Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="
    fixed bottom-6 right-6
    w-12 h-12
    rounded-full
    cursor-pointer
    bg-cyan-500
    hover:bg-cyan-500
    text-white
    flex items-center justify-center
    shadow-lg shadow-cyan-500/30
    hover:scale-110
    transition duration-300
    z-50
  "
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer2;
