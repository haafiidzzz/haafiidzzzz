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

const work = [
  { img: "/assets/icon/MENU AWAL FIX.png", title: "Car Game", desc: "Branding / Game" },
  { img: "/assets/icon/Desktop - 1.svg", title: "Coffee Parking", desc: "Web / UI/UX" },
  { img: "/assets/icon/Thumbnail.png", title: "Mobile UI", desc: "UI/UX / Mobile" },
  { img: "/assets/icon/Desktop .svg", title: "Web Design", desc: "UI / Competition" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-10 grid md:grid-cols-2 gap-14 items-center overflow-hidden">
        <div className="relative">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-accent text-ink text-xs tracking-[0.15em] uppercase font-semibold mb-7"
          >
            Computer Engineering Student
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display uppercase text-6xl sm:text-7xl md:text-8xl leading-[0.88] mb-8"
          >
            I<br />Design<br />What<br /><span className="text-accent">Works</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-paper-dim leading-relaxed max-w-sm mb-8"
          >
            Hafidz Ulum Ramadhani — a student who blends design, code, and
            curiosity to build thoughtful digital work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/project"
              className="inline-flex items-center gap-2 px-7 py-3 bg-ink text-paper text-sm tracking-[0.1em] uppercase font-medium hover:bg-accent hover:text-ink transition-all duration-300"
            >
              See My Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/file/Hafidz Ulum Ramadhani-resume.pdf"
              className="inline-flex items-center px-7 py-3 border border-ink text-ink text-sm tracking-[0.1em] uppercase font-medium hover:bg-ink hover:text-paper transition-all duration-300"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-[42%_58%_63%_37%/48%_42%_58%_52%] bg-gradient-to-br from-fuchsia-500 via-violet-600 to-accent opacity-70 blur-2xl"
          />
          <div className="absolute top-4 right-2 md:right-10 w-16 h-16 rounded-full border border-dashed border-ink/30" />
          <span className="absolute -bottom-2 right-4 md:right-0 font-display text-xs tracking-[0.2em] text-paper-dim">
            01 — 05
          </span>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 md:w-80 aspect-[3/4] overflow-hidden border-4 border-paper shadow-[0_25px_50px_rgba(10,10,10,0.25)]"
          >
            <img
              src="/assets/icon/hiking-summit.jpg"
              alt="Hafidz Ulum Ramadhani"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT / STRATEGY */}
      <section className="max-w-7xl mx-auto px-6 mt-24 md:mt-32 grid md:grid-cols-12 gap-10 items-center">
        <Reveal className="md:col-span-3">
          <div className="aspect-[4/5] overflow-hidden bg-ink/5">
            <img
              src="/assets/icon/hiking-log.jpg"
              alt="Hafidz"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-6">
          <h2 className="font-display uppercase text-4xl md:text-5xl leading-[0.95]">
            Code Meets
            <br />
            <span className="bg-accent px-2 inline-block -rotate-1">Creativity.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="md:col-span-3">
          <p className="text-paper-dim leading-relaxed mb-6">
            I'm learning web development while exploring UI/UX, photo and video editing,
            and enjoy outdoor activities like hiking in my free time.
          </p>
          <a
            href="/skills"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-ink text-ink text-sm tracking-[0.1em] uppercase font-medium hover:bg-ink hover:text-paper transition-all duration-300"
          >
            View Skills
          </a>
        </Reveal>
      </section>

      <Reveal delay={0.3} className="max-w-7xl mx-auto px-6 mt-20 flex flex-wrap gap-10 md:gap-16">
        {skills.map((s) => (
          <img
            key={s}
            src={`${SI}/${s}.svg`}
            alt={s}
            className="w-9 h-9 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300"
          />
        ))}
      </Reveal>

      {/* EDUCATION */}
      <section className="mt-28 md:mt-40 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <Reveal>
            <p className="text-xs tracking-[0.28em] uppercase text-paper-dim mb-4">My Education</p>
            <h2 className="font-display uppercase text-3xl md:text-4xl leading-tight mb-6">
              Currently a student<br />in university.
            </h2>
            <p className="text-paper-dim leading-relaxed mb-4">
              I was born in Ponorogo City on October 17th, 2005, and currently live there.
              I am interested in web development and editing.
            </p>
            <p className="text-paper-dim leading-relaxed">
              I am currently attending Institut Teknologi Sepuluh Nopember, majoring in
              Computer Engineering.
            </p>
          </Reveal>
          <div className="flex flex-col">
            {education.map(({ school, level, year }, i) => (
              <Reveal key={school} delay={i * 0.1} y={20}>
                <div className="flex items-start gap-6 py-6 border-t border-line last:border-b">
                  <span className="font-display text-2xl text-line">0{i + 1}</span>
                  <div>
                    <h3 className="font-medium text-lg">{school}</h3>
                    <p className="text-sm text-paper-dim mt-1">{level}</p>
                    <span className="text-xs text-accent-dim tracking-widest uppercase font-semibold">{year}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="mt-28 md:mt-40 max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display uppercase text-2xl md:text-3xl flex items-center gap-3">
              Selected Work <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block" />
            </h2>
            <a
              href="/project"
              className="hidden sm:inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase font-medium hover:text-accent-dim transition-colors"
            >
              View All Work
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {work.map(({ img, title, desc }, i) => (
            <Reveal key={title + i} delay={i * 0.08} y={24}>
              <a href="/project" className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-ink/5">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-xs text-paper-dim tracking-widest uppercase mt-1">{desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
