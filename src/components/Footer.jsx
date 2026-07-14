import Reveal from "./Reveal";

const SI = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons";

export default function Footer() {
  return (
    <footer className="relative mt-40 bg-ink border-t border-ink-line">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
              Get in <span className="italic text-gold">Touch</span>
            </h2>
            <p className="text-paper-dim max-w-md mb-8 leading-relaxed">
              For business inquiries, collaborations, or partnerships, feel free to reach out to me.
            </p>
            <ul className="space-y-4 text-paper/90 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-gold">Phone</span>
                <span className="text-paper-dim">+62 812-2509-3482</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">Mail</span>
                <span className="text-paper-dim">ulumramadhani5@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">Base</span>
                <span className="text-paper-dim">Taman, Sidoarjo</span>
              </li>
            </ul>
            <div className="flex gap-4">
              {[
                { href: "https://instagram.com/haafiidzzzz", icon: "instagram", label: "Instagram" },
                { href: "https://wa.me/6281225093482", icon: "whatsapp", label: "WhatsApp" },
                { href: "https://facebook.com/Hafidz%20Ulum%20Ramadhani", icon: "facebook", label: "Facebook" },
              ].map(({ href, icon, label }) => (
                <a
                  key={icon}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-ink-line hover:border-gold transition-all duration-300 hover:-translate-y-0.5"
                >
                  <img src={`${SI}/${icon}.svg`} className="w-4 h-4 invert opacity-70" alt={label} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="flex md:justify-end">
            <div className="bg-ink-soft border border-ink-line rounded-2xl p-8 w-full md:w-[360px]">
              <h3 className="font-display text-xl mb-3">Let's Work Together</h3>
              <p className="text-paper-dim text-sm mb-8 leading-relaxed">
                Open for freelance, creative projects, and collaborations.
              </p>
              <a
                href="mailto:ulumramadhani5@gmail.com"
                className="inline-block px-6 py-3 border border-gold text-gold text-sm tracking-[0.14em] uppercase hover:bg-gold hover:text-ink transition-all duration-300"
              >
                Email Me
              </a>
            </div>
          </Reveal>
        </div>
        <div className="mt-16 pt-8 border-t border-ink-line flex flex-col sm:flex-row justify-between items-center gap-3 text-paper-dim text-xs tracking-widest uppercase">
          <span>© 2025 Hafidz Ulum Ramadhani</span>
          <span>Designed &amp; Built with Care</span>
        </div>
      </div>
    </footer>
  );
}
