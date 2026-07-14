import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

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
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[110px] tracking-[6px] select-none pointer-events-none whitespace-nowrap"
          style={{ color: "rgba(243,239,230,0.035)" }}
        >
          THE SKILLS
        </span>
        <Reveal>
          <p className="relative z-10 text-gold text-sm tracking-[0.28em] uppercase mb-4">What I Work With</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="relative z-10 font-display text-4xl md:text-5xl font-medium">
            Tools and <span className="italic text-gold">Skills</span>
          </h1>
        </Reveal>
      </section>

      <section className="pb-40">
        <div className="grid grid-cols-4 gap-12 max-w-[520px] mx-auto px-6 place-items-center">
          {skills.map(({ icon, label }, i) => (
            <Reveal key={icon} delay={i * 0.05} y={16}>
              <div className="flex flex-col items-center gap-3 group">
                <img
                  src={`${SI}/${icon}.svg`}
                  alt={label}
                  className="w-14 h-14 invert opacity-55 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_18px_rgba(201,164,99,0.6)]"
                />
                <span className="text-xs text-paper-dim group-hover:text-gold transition-colors tracking-wide">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
