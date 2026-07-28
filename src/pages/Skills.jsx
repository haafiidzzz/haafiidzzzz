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
      <section className="relative pt-16 pb-16 max-w-6xl mx-auto px-6">
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[110px] tracking-[6px] select-none pointer-events-none whitespace-nowrap text-ink/[0.03]"
        >
          THE SKILLS
        </span>
        <Reveal>
          <p className="relative z-10 text-xs tracking-[0.28em] uppercase text-paper-dim mb-4">What I Work With</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="relative z-10 font-display uppercase text-4xl md:text-6xl leading-[0.95] max-w-2xl">
            Tools &amp; <span className="text-accent">Skills</span>.
          </h1>
        </Reveal>
      </section>

      <section className="pb-32 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-l border-line">
          {skills.map(({ icon, label }, i) => (
            <Reveal key={icon} delay={i * 0.05} y={16}>
              <div className="group flex flex-col items-center justify-center gap-4 border-r border-b border-line py-12 hover:bg-ink hover:text-paper transition-colors duration-300">
                <img
                  src={`${SI}/${icon}.svg`}
                  alt={label}
                  className="w-10 h-10 opacity-70 group-hover:invert group-hover:opacity-100 transition-all duration-300"
                />
                <span className="text-xs text-paper-dim group-hover:text-accent transition-colors tracking-widest uppercase">
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
