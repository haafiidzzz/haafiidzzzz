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
      <section className="pt-16 pb-32 max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.28em] uppercase text-paper-dim mb-4">Featured Work</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display uppercase text-4xl md:text-6xl leading-[0.95] mb-16 max-w-3xl">
            Projects I've worked on that helped me <span className="text-accent">grow</span>.
          </h1>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ img, title, desc }, i) => (
            <Reveal key={i} delay={i * 0.06} y={28}>
              <div className="group">
                <div className="aspect-[4/3] overflow-hidden bg-ink/5">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="pt-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-xs text-accent-dim tracking-widest uppercase text-right shrink-0">{desc}</p>
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
