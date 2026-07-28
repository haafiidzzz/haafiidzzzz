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
      <section className="pt-16 pb-32 max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs tracking-[0.28em] uppercase text-paper-dim mb-4">Experience &amp; Activities</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display uppercase text-4xl md:text-6xl leading-[0.95] mb-16 max-w-3xl">
            Experiences that shape my <span className="text-accent">growth</span>.
          </h1>
        </Reveal>

        <div className="flex flex-col">
          {experiences.map(({ img, title, desc }, i) => (
            <Reveal key={i} delay={i * 0.08} y={24}>
              <div className="flex flex-col md:flex-row gap-8 items-start py-10 border-t border-line last:border-b">
                <span className="font-display text-2xl text-line shrink-0 hidden md:block">0{i + 1}</span>
                <div className="w-full md:w-56 flex-shrink-0 overflow-hidden bg-ink/5 aspect-[4/3]">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">{title}</h3>
                  <p className="text-paper-dim leading-relaxed text-sm max-w-xl">{desc}</p>
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
