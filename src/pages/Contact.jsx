import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const SI = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons";

const contacts = [
  { href: "mailto:ulumramadhani5@gmail.com", icon: "gmail", label: "Gmail" },
  { href: "https://instagram.com/haafiidzzzz", icon: "instagram", label: "Instagram" },
  { href: "https://facebook.com/Hafidz%20Ulum%20Ramadhani", icon: "facebook", label: "Facebook" },
  { href: "https://linkedin.com/in/hafidz-ulum-ramadhani-377540306", icon: "linkedin", label: "LinkedIn" },
  { href: "https://github.com/haafiidzzz", icon: "github", label: "GitHub" },
];

export default function Contact() {
  return (
    <>
      <section className="pt-20 pb-32 max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.28em] uppercase text-paper-dim mb-4">Get In Touch</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display uppercase text-4xl md:text-6xl leading-[0.95] mb-16">
            Connect with <span className="text-accent">me</span>.
          </h1>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map(({ href, icon, label }, i) => (
            <Reveal key={icon} delay={0.15 + i * 0.06} y={16}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-3"
              >
                <div className="w-20 h-20 flex items-center justify-center border border-line group-hover:border-ink group-hover:bg-ink transition-all duration-300 group-hover:-translate-y-1">
                  <img
                    src={`${SI}/${icon}.svg`}
                    alt={label}
                    className="w-8 h-8 opacity-60 group-hover:invert group-hover:opacity-100 transition"
                  />
                </div>
                <span className="text-xs text-paper-dim group-hover:text-ink transition-colors tracking-widest uppercase">
                  {label}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
