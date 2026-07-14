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
      <section className="pt-32 pb-40">
        <div className="max-w-xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-sm tracking-[0.28em] text-gold uppercase mb-4">Get In Touch</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl font-medium mb-16">
              Connect With <span className="italic text-gold">Me</span>
            </h1>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-8">
            {contacts.map(({ href, icon, label }, i) => (
              <Reveal key={icon} delay={0.15 + i * 0.06} y={16}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-ink-soft border border-ink-line group-hover:border-gold transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(201,164,99,0.25)]">
                    <img
                      src={`${SI}/${icon}.svg`}
                      alt={label}
                      className="w-9 h-9 invert opacity-60 group-hover:opacity-100 transition"
                    />
                  </div>
                  <span className="text-xs text-paper-dim group-hover:text-gold transition-colors tracking-wide">{label}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
