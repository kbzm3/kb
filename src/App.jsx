// import { useState } from "react";
// import Navbar from "./components/layout/Navbar";

// function App() {
//   const [darkMode, setDarkMode] = useState(true);

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white transition-all duration-300">
//         <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

//         <div className="pt-32 text-center">
//           <h1 className="text-5xl font-bold">Hello World</h1>

//           <p className="mt-4 text-slate-600 dark:text-slate-300">
//             Dark mode is working now.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import Footer from "./components/layout/Footer";
import Footer2 from "./components/layout/Footer2";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Research from "./components/sections/Research";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <div
      className="
        bg-white dark:bg-slate-950
        transition-colors duration-300
      "
    >
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Research />
      <Skills />
      <Contact />
      <Footer2 />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
