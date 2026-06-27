import Footer from "../components/Footer";

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
      {/* Grid BG */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at top center, rgba(124,58,237,0.28), transparent 65%),
            linear-gradient(to right, rgba(124,58,237,0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124,58,237,0.16) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        }}
      />

      <section className="relative z-10 pt-28 pb-40 max-w-5xl mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm tracking-widest mb-4">FEATURED WORK</p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-20">
          Projects I've Worked On<br />That Have Helped Me Grow
        </h1>

        <div className="flex flex-col gap-6 mt-6">
          {projects.map(({ img, title, desc }, i) => (
            <div
              key={i}
              className="relative rounded-[18px] overflow-hidden bg-[#1a1a1a] group"
            >
              <img
                src={img}
                alt={title}
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="px-5 py-4 text-left bg-[#1a1a1a]">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="text-xs text-purple-300 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
