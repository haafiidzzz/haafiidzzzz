import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/project" element={<PageTransition><Project /></PageTransition>} />
        <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
        <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-paper text-ink font-sans min-h-screen overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
