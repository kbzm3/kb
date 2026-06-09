import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-16 h-8 flex items-center rounded-full p-1
        transition duration-300
        ${darkMode ? "bg-cyan-500" : "bg-slate-400"}
      `}
    >
      <div
        className={`
          bg-white w-6 h-6 rounded-full shadow-md
          transform transition duration-300
          ${darkMode ? "translate-x-8" : ""}
        `}
      />
    </button>
  );
}

export default ThemeToggle;
