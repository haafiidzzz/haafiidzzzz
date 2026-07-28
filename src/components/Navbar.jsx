import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/project", label: "Work" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative py-1 text-[13px] tracking-[0.14em] uppercase font-medium transition-colors ${
      isActive ? "text-ink" : "text-paper-dim hover:text-ink"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `text-3xl font-display uppercase transition-colors ${
      isActive ? "text-ink" : "text-paper-dim hover:text-ink"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-paper transition-all duration-300 border-b ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <NavLink to="/" className="font-display text-lg tracking-tight text-ink">
            HAFIDZ<span className="text-accent">.</span>
          </NavLink>

          <ul className="hidden md:flex gap-9 list-none items-center">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === "/"} className={linkClass}>
                  {({ isActive }) => (
                    <span className="relative inline-block">
                      {label}
                      <span
                        className={`absolute left-0 -bottom-1.5 h-[2px] bg-accent transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <NavLink
              to="/contact"
              className="hidden sm:inline-block px-5 py-2 text-[13px] tracking-[0.14em] uppercase font-medium border border-ink text-ink hover:bg-ink hover:text-paper transition-all duration-300"
            >
              Contact
            </NavLink>
            <NavLink
              to="/contact"
              aria-label="Contact"
              className="w-11 h-11 rounded-full bg-accent text-ink flex items-center justify-center hover:bg-ink hover:text-accent transition-all duration-300 shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </NavLink>

            <button
              className="md:hidden text-ink focus:outline-none z-50 relative"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-[5px]">
                <span className={`h-[2px] bg-ink transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`h-[2px] bg-ink transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
                <span className={`h-[2px] bg-ink transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-paper z-40 md:hidden flex items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8 list-none">
              {navLinks.map(({ to, label }, i) => (
                <motion.li
                  key={to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <NavLink to={to} end={to === "/"} className={mobileLinkClass} onClick={() => setOpen(false)}>
                    {label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * navLinks.length, duration: 0.4 }}
              >
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-block px-6 py-2.5 bg-accent text-ink text-sm tracking-[0.14em] uppercase font-medium"
                >
                  Contact
                </NavLink>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ height: 72 }} />
    </>
  );
}
