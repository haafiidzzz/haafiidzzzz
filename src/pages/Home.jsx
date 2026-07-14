import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const SI = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons";

const skills = ["html5", "css3", "javascript", "tailwindcss"];

const education = [
  { school: "SMP Negeri 34 Surabaya", level: "Junior High School", year: "2018 – 2021" },
  { school: "SMA Negeri 18 Surabaya", level: "Senior High School", year: "2021 – 2024" },
  { school: "Institut Teknologi Sepuluh Nopember", level: "University", year: "2024 – Now" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-24 md:pt-16 max-w-7xl mx-auto px-6 min-h-[86vh] grid md:grid-cols-2 gap-12 items-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="relative space-y-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-paper-dim text-sm tracking-[0.28em] uppercase"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl leading-[1.05] font-medium"
          >
            Hafidz Ulum<br /><span className="italic text-gold">Ramadhani</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-paper-dim uppercase text-sm tracking-[0.2em]"
          >
            Computer Engineering Student
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-paper-dim leading-relaxed max-w-md"
          >
            I'm a student who has a strong interest in technology and enjoys exploring coding and digital development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 pt-2"
          >
            <a
              href="/file/Hafidz Ulum Ramadhani-resume.pdf"
              className="px-7 py-3 border border-gold text-gold text-sm tracking-[0.14em] uppercase hover:bg-gold hover:text-ink transition-all duration-300"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          <motion.img
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src="/assets/icon/Desain tanpa judul.png"
            alt="Hafidz Ulum Ramadhani"
            className="w-72 md:w-80 drop-shadow-[0_20px_60px_rgba(201,164,99,0.25)]"
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-32 text-center">
          <Reveal>
            <p className="text-sm tracking-[0.28em] text-gold mb-5 uppercase">About Me</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-6">
              Currently, I am learning about<br />web development and exploring<br />
              <span className="italic text-gold">various subjects</span> related to my major.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-paper-dim max-w-3xl mx-auto leading-relaxed">
              Besides that, I have skills in photo and video editing, and I am actively involved in outdoor activities such as hiking as well as various sports.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-16 flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
            {skills.map((s) => (
              <img
                key={s}
                src={`${SI}/${s}.svg`}
                alt={s}
                className="w-12 h-12 invert opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(201,164,99,0.5)]"
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* EDUCATION TIMELINE */}
      <section className="mt-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <Reveal>
            <p className="text-gold text-sm tracking-[0.28em] uppercase mb-4">My Education</p>
            <h2 className="font-display text-4xl font-medium leading-tight mb-6">
              I am currently a student in<br />university.
            </h2>
            <p className="text-paper-dim leading-relaxed mb-4">
              I was born in Ponorogo City on October 17th, 2005, and currently live there. I am interested in web development and editing.
            </p>
            <p className="text-paper-dim leading-relaxed">
              I am currently attending Institut Teknologi Sepuluh Nopember and majoring in Computer Engineering.
            </p>
          </Reveal>
          <div className="relative pl-10 space-y-12">
            <div className="absolute left-2 inset-y-0 w-px bg-gradient-to-b from-gold/60 via-ink-line to-transparent" />
            {education.map(({ school, level, year }, i) => (
              <Reveal key={school} delay={i * 0.12} y={20}>
                <div className="flex gap-6">
                  <div className="relative z-10 mt-1">
                    <div className="w-3 h-3 rounded-full bg-gold shadow-[0_0_15px_rgba(201,164,99,0.6)]" />
                  </div>
                  <div className="bg-ink-soft border border-ink-line p-6 rounded-xl w-full hover:border-gold/40 transition-colors duration-300">
                    <h3 className="font-display text-lg">{school}</h3>
                    <p className="text-sm text-paper-dim mt-1">{level}</p>
                    <span className="text-xs text-gold tracking-widest uppercase">{year}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
