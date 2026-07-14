import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const experiences = [
  {
    img: "/assets/icon/1735628896062.jpg",
    title: "Latihan Keterampilan Mahasiswa Wirausaha",
    desc: "Participated in training focused on developing entrepreneurial management skills, including business planning, leadership, decision-making, and teamwork.",
  },
  {
    img: "/assets/icon/1739562096640.jpg",
    title: "Latihan Keterampilan Mahasiswa Manajerial",
    desc: "Participated in a training program focused on developing foundational managerial skills for students, including leadership, communication, teamwork, and basic organizational management.",
  },
  {
    img: "/assets/icon/Completion Certificate for Intro to UI_UX (1).svg",
    title: "Completion Course Intro to UI/UX",
    desc: "Completed an Intro to UI/UX course that introduced fundamental concepts of user interface and user experience design, including layout composition, color usage, and basic design system practices.",
  },
  {
    img: "/assets/icon/W.jpg",
    title: "Hiking in Mount Buthak",
    desc: "Successfully hiked Mount Buthak, demonstrating physical endurance, mental resilience, and teamwork skills in navigating challenging terrain.",
  },
];

export default function Experience() {
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

      <section className="relative z-10 pt-20 pb-40 max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-gold text-sm tracking-[0.28em] uppercase mb-4 text-center">Experience &amp; Activities</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-3xl md:text-5xl font-medium leading-tight mb-20 text-center">
            Experiences That Shape My Skills<br />and <span className="italic text-gold">Professional Growth</span>
          </h1>
        </Reveal>

        <div className="flex flex-col gap-10">
          {experiences.map(({ img, title, desc }, i) => (
            <Reveal key={i} delay={i * 0.08} y={24}>
              <div className="flex flex-col md:flex-row gap-6 items-start bg-ink-soft rounded-2xl p-6 border border-ink-line hover:border-gold/40 transition-colors duration-300">
                <div className="w-full md:w-48 flex-shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-32 object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500 hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2">{title}</h3>
                  <p className="text-paper-dim leading-relaxed text-sm">{desc}</p>
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
