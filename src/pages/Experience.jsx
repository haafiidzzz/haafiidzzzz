import Footer from "../components/Footer";

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

      <section className="relative z-10 pt-20 pb-40 max-w-5xl mx-auto px-6">
        <p className="text-purple-400 text-sm tracking-widest mb-4 text-center">Experience &amp; Activities</p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-20 text-center">
          Experiences That Shape My Skills<br />and Professional Growth
        </h1>

        <div className="flex flex-col gap-10">
          {experiences.map(({ img, title, desc }, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 items-start bg-[#141414] rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 transition-colors">
              <div className="w-full md:w-48 flex-shrink-0">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-32 object-cover rounded-xl"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
