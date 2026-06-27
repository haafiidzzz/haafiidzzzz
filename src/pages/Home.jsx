import Footer from "../components/Footer";

const SI = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons";

const skills = ["html5", "css3", "javascript", "tailwindcss"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="pt-16 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-gray-400">Hello Buds</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            I am <span className="text-purple-500">Hafidz Ulum Ramadhani</span>
          </h1>
          <p className="text-purple-400">Computer Engineering Student</p>
          <p className="text-gray-400 leading-relaxed">
            I'm a student who has a strong interest in technology and enjoys exploring coding and digital development.
          </p>
          <div className="flex gap-4">
            <a
              href="/file/Hafidz Ulum Ramadhani-resume.pdf"
              className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/icon/Desain tanpa judul.png"
            alt="Hero"
            className="w-74 drop-shadow-[0_0_40px_rgba(124,58,237,0.35)]"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative bg-[#0b0b0b] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/20 blur-[180px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 pt-48 pb-32 text-center">
          <p className="text-sm tracking-widest text-purple-400 mb-4">ABOUT ME</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">
            Currently, I am learning about <br />web development and exploring <br />various subjects related to my major.
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Besides that, I have skills in photo and video editing, and I am actively involved in outdoor activities such as hiking as well as various sports.
          </p>
          <div className="mt-16 flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
            {skills.map((s) => (
              <img
                key={s}
                src={`${SI}/${s}.svg`}
                alt={s}
                className="w-14 h-14 invert opacity-80 hover:opacity-100 hover:scale-110 transition hover:drop-shadow-[0_0_15px_rgba(124,58,237,0.6)]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION TIMELINE */}
      <section className="mt-40 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <p className="text-purple-400 text-sm tracking-widest mb-3">MY EDUCATION</p>
            <h2 className="text-4xl font-bold leading-tight mb-6">
              I am currently a student in<br />university.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I was born in Ponorogo City on October 17th, 2005, and currently live there. I am interested in web development and editing.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I am currently attending INSTITUT TEKNOLOGI SEPULUH NOPEMBER and majoring in Computer Engineering.
            </p>
          </div>
          <div className="relative pl-10 space-y-12">
            <div className="absolute left-2 inset-y-0 w-[2px] bg-gradient-to-b from-purple-500/50 to-transparent" />
            {[
              { school: "SMP Negeri 34 Surabaya", level: "Junior High School", year: "2018 – 2021" },
              { school: "SMA Negeri 18 Surabaya", level: "Senior High School", year: "2021 – 2024" },
              { school: "Institut Teknologi Sepuluh Nopember", level: "University", year: "2024 – Now" },
            ].map(({ school, level, year }) => (
              <div key={school} className="flex gap-6">
                <div className="relative z-10 mt-1">
                  <div className="w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_#7c3aed]" />
                </div>
                <div className="bg-[#141414] p-6 rounded-xl w-full hover:scale-[1.02] transition">
                  <h3 className="font-semibold">{school}</h3>
                  <p className="text-sm text-gray-400">{level}</p>
                  <span className="text-xs text-purple-400">{year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
