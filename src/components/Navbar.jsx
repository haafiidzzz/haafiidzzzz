import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/project", label: "Project" },
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
    `relative py-1 text-[13px] tracking-[0.18em] uppercase transition-colors ${
      isActive ? "text-paper" : "text-paper-dim hover:text-paper"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `text-2xl font-display transition-colors ${
      isActive ? "text-gold" : "text-paper-dim hover:text-paper"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/85 backdrop-blur-md border-b border-ink-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <NavLink to="/" className="font-display text-[22px] tracking-wide text-paper">
            Hafidz<span className="text-gold">.</span>
          </NavLink>

          <ul className="hidden md:flex gap-9 list-none items-center">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === "/"} className={linkClass}>
                  {({ isActive }) => (
                    <span className="relative inline-block">
                      {label}
                      <span
                        className={`absolute left-0 -bottom-1.5 h-px bg-gold transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-5 py-2 border text-[13px] tracking-[0.18em] uppercase transition-all duration-300 ${
                    isActive
                      ? "bg-gold text-ink border-gold"
                      : "border-gold/50 text-paper hover:bg-gold hover:text-ink hover:border-gold"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <button
            className="md:hidden text-paper focus:outline-none z-50 relative"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="w-7 flex flex-col gap-[6px]">
              <span className={`h-px bg-paper transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`h-px bg-paper transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`h-px bg-paper transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-ink z-40 md:hidden flex items-center justify-center"
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
                  className="mt-2 inline-block px-6 py-2.5 border border-gold text-gold text-sm tracking-[0.18em] uppercase"
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
