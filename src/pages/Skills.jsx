import Footer from "../components/Footer";

const SI = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons";

const skills = [
  { icon: "html5", label: "HTML5" },
  { icon: "css3", label: "CSS3" },
  { icon: "javascript", label: "JavaScript" },
  { icon: "python", label: "Python" },
  { icon: "figma", label: "Figma" },
  { icon: "microsoftexcel", label: "Excel" },
  { icon: "affinitydesigner", label: "Affinity Designer" },
  { icon: "visualstudiocode", label: "VS Code" },
];

export default function Skills() {
  return (
    <>
      <section className="relative pt-32 pb-20 text-center">
        {/* Watermark */}
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-extrabold tracking-[6px] select-none pointer-events-none whitespace-nowrap"
          style={{ color: "rgba(255,255,255,0.04)" }}
        >
          THE SKILLS
        </span>
        <h1 className="relative z-10 text-4xl font-bold">Tools and Skills</h1>
      </section>

      <section className="pb-40">
        <div className="grid grid-cols-4 gap-12 max-w-[520px] mx-auto px-6 place-items-center">
          {skills.map(({ icon, label }) => (
            <div key={icon} className="flex flex-col items-center gap-2 group">
              <img
                src={`${SI}/${icon}.svg`}
                alt={label}
                className="w-16 h-16 invert opacity-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(124,58,237,0.7)]"
              />
              <span className="text-xs text-gray-500 group-hover:text-purple-400 transition-colors">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
