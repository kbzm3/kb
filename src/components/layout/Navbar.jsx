import { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";
// import logo from "../../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md
        border-b
       
        bg-white dark:bg-slate-900/80
        border-slate-200 dark:border-slate-800
        transition-all duration-300
        font-medium
        text-lg md:text-xl
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-6 py-4
          flex justify-between items-center
        "
      >
        {/* Logo */}
        {/* <h1
          className="
            text-3xl md:text-4xl
            text-cyan-400
            cursor-pointer
            hover:scale-105
            transition
          "
          style={{ fontFamily: "Great Vibes" }}
        >
          Khursheed Bhat
        </h1> */}
        <div
          className="
            flex
            items-center gap-8
          "
        >
          <img
            src="logo.png"
            alt="website logo"
            className="
    h-12 md:h-14
    w-auto
    cursor-pointer
    hover:scale-105
    transition duration-300
  "
          />
        </div>

        <div
          className="
            flex
            items-center gap-8
          "
        >
          <h3
            className="
    text-cyan-400
    text-lg
    leading-relaxed
    font-medium
  "
            style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
          >
            علم چھُ گاش
          </h3>
        </div>
        {/* Desktop Menu */}
        <div
          className="
            hidden md:flex
            items-center gap-8
          "
        >
          <a
            href="#home"
            className="
    relative
    text-slate-900 dark:text-white
    hover:text-cyan-400
    transition duration-300
    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:w-0
    after:h-[2px]
    after:bg-cyan-400
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
          >
            Home
          </a>
          <a
            href="#about"
            className="
              relative
    text-slate-900 dark:text-white
    hover:text-cyan-400
    transition duration-300
    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:w-0
    after:h-[2px]
    after:bg-cyan-400
    after:transition-all
    after:duration-300
    hover:after:w-full
            "
          >
            About
          </a>

          <a
            href="#education"
            className="
             relative
    text-slate-900 dark:text-white
    hover:text-cyan-400
    transition duration-300
    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:w-0
    after:h-[2px]
    after:bg-cyan-400
    after:transition-all
    after:duration-300
    hover:after:w-full
            "
          >
            Education
          </a>
          <a
            href="#experience"
            className="
             relative
    text-slate-900 dark:text-white
    hover:text-cyan-400
    transition duration-300
    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:w-0
    after:h-[2px]
    after:bg-cyan-400
    after:transition-all
    after:duration-300
    hover:after:w-full
            "
          >
            Experience
          </a>
          <a
            href="#research"
            className="
             relative
    text-slate-900 dark:text-white
    hover:text-cyan-400
    transition duration-300
    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:w-0
    after:h-[2px]
    after:bg-cyan-400
    after:transition-all
    after:duration-300
    hover:after:w-full
            "
          >
            Research
          </a>
          <a
            href="#skills"
            className="
             relative
    text-slate-900 dark:text-white
    hover:text-cyan-400
    transition duration-300
    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:w-0
    after:h-[2px]
    after:bg-cyan-400
    after:transition-all
    after:duration-300
    hover:after:w-full
            "
          >
            Skills
          </a>

          <a
            href="#contact"
            className="
             relative
    text-slate-900 dark:text-white
    hover:text-cyan-400
    transition duration-300
    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:w-0
    after:h-[2px]
    after:bg-cyan-400
    after:transition-all
    after:duration-300
    hover:after:w-full
            "
          >
            Contact
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`
              w-16 h-8
              flex items-center
              rounded-full
              p-1
              transition-all duration-300
              cursor-pointer
              ${darkMode ? "bg-slate-700" : "bg-yellow-400"}
            `}
          >
            <div
              className={`
                w-6 h-6
                rounded-full
                bg-white
                flex items-center justify-center
                shadow-md
                transform transition-all duration-300
                ${darkMode ? "translate-x-8" : ""}
              `}
            >
              {darkMode ? (
                <Moon size={14} className="text-slate-800" />
              ) : (
                <Sun size={14} className="text-yellow-500" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Controls */}
        <div
          className="
            md:hidden
            flex items-center gap-4
          "
        >
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`
              w-16 h-8
              flex items-center
              rounded-full
              p-1
              transition-all duration-300
              cursor-pointer
              ${darkMode ? "bg-slate-700" : "bg-yellow-400"}
            `}
          >
            <div
              className={`
                w-6 h-6
                rounded-full
                bg-white
                flex items-center justify-center
                shadow-md
                transform transition-all duration-300
                ${darkMode ? "translate-x-8" : ""}
              `}
            >
              {darkMode ? (
                <Moon size={14} className="text-slate-800" />
              ) : (
                <Sun size={14} className="text-yellow-500" />
              )}
            </div>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              text-2xl
              text-slate-900 dark:text-white
              cursor-pointer
            "
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            md:hidden
            bg-white dark:bg-slate-900
            border-t
            border-slate-200 dark:border-slate-800
            px-6 py-6
            flex flex-col gap-6
          "
        >
          <a
            href="#home"
            className="
              text-slate-900 dark:text-white
              hover:text-cyan-400
            "
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="
              text-slate-900 dark:text-white
              hover:text-cyan-400
            "
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#education"
            className="
              text-slate-900 dark:text-white
              hover:text-cyan-400
            "
            onClick={() => setMenuOpen(false)}
          >
            Education
          </a>
          <a
            href="#experience"
            className="
              text-slate-900 dark:text-white
              hover:text-cyan-400
            "
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>

          <a
            href="#research"
            className="
              text-slate-900 dark:text-white
              hover:text-cyan-400
            "
            onClick={() => setMenuOpen(false)}
          >
            Research
          </a>
          <a
            href="#skills"
            className="
              text-slate-900 dark:text-white
              hover:text-cyan-400
            "
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>

          <a
            href="#contact"
            className="
              text-slate-900 dark:text-white
              hover:text-cyan-400
            "
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
