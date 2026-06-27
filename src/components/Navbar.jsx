import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/project", label: "Project" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-purple-400 font-medium"
      : "text-gray-400 hover:text-purple-400 transition-colors";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "text-purple-400 font-medium"
      : "text-gray-400 hover:text-purple-400 transition-colors";

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-[22px] font-bold text-purple-700">
            Mas<span className="text-purple-400">Hafidz</span>
          </NavLink>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-7 list-none items-center">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === "/"} className={linkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-white text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-purple-800 ring-2 ring-purple-500"
                      : "bg-purple-600 hover:bg-purple-700"
                  }`
                }
              >
                Contact Me
              </NavLink>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-[72px] left-0 w-full bg-black/95 backdrop-blur border-t border-white/5 md:hidden z-50 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 py-8 list-none">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={mobileLinkClass}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-center px-4 py-2 rounded-lg text-white text-sm font-medium ${
                  isActive ? "bg-purple-800" : "bg-purple-600"
                }`
              }
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Spacer */}
      <div style={{ height: 72 }} />
    </>
  );
}
