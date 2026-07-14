import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const projects = [
  { img: "/assets/icon/MENU AWAL FIX.png", title: "Car Game", desc: "Using C++ and SFML · Game Project" },
  { img: "/assets/icon/Desktop - 1.svg", title: "Coffee Parking", desc: "Web Design · UI/UX" },
  { img: "/assets/icon/Thumbnail.png", title: "Mobile UI", desc: "UI/UX · Mobile App" },
  { img: "/assets/icon/Desktop .svg", title: "Web Design", desc: "UI Design · Competition Project" },
  { img: "/assets/icon/Thumbnail i.png", title: "Poster", desc: "Poster Design" },
  { img: "/assets/icon/Thumbnail2.png", title: "Mobile UI", desc: "UI/UX · Mobile App" },
];

export default function Project() {
  return (
    <>
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at top center, rgba(201,164,99,0.14), transparent 65%),
            linear-gradient(to right, rgba(201,164,99,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(201,164,99,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        }}
      />

      <section className="relative z-10 pt-28 pb-40 max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-gold text-sm tracking-[0.28em] uppercase mb-4">Featured Work</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-3xl md:text-5xl font-medium leading-tight mb-20">
            Projects I've Worked On<br />That Have Helped Me <span className="italic text-gold">Grow</span>
          </h1>
        </Reveal>

        <div className="flex flex-col gap-6 mt-6">
          {projects.map(({ img, title, desc }, i) => (
            <Reveal key={i} delay={i * 0.08} y={36}>
              <div className="relative rounded-[4px] overflow-hidden bg-ink-soft border border-ink-line group">
                <div className="overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full aspect-video object-cover transition-transform duration-700 ease-out grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="px-5 py-4 text-left flex items-baseline justify-between border-t border-ink-line">
                  <h3 className="font-display text-base">{title}</h3>
                  <p className="text-xs text-gold tracking-widest uppercase">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
