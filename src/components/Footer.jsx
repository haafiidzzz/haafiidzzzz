import Reveal from "./Reveal";

const SI = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons";

export default function Footer() {
  return (
    <footer className="relative mt-32 bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl uppercase leading-[0.95] mb-16">
            Let's build<br />
            something <span className="text-accent">great.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 pt-10 border-t border-white/15">
          <Reveal delay={0.05}>
            <p className="text-xs tracking-[0.28em] uppercase text-paper/50 mb-4">Contact</p>
            <ul className="space-y-2">
              <li>
                <a href="mailto:ulumramadhani5@gmail.com" className="hover:text-accent transition-colors">
                  ulumramadhani5@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/6281225093482" className="hover:text-accent transition-colors">
                  +62 812-2509-3482
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs tracking-[0.28em] uppercase text-paper/50 mb-4">Base</p>
            <p>Taman, Sidoarjo<br />Indonesia</p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-xs tracking-[0.28em] uppercase text-paper/50 mb-4">Social</p>
            <ul className="space-y-2">
              {[
                { href: "https://instagram.com/haafiidzzzz", icon: "instagram", label: "Instagram" },
                { href: "https://linkedin.com/in/hafidz-ulum-ramadhani-377540306", icon: "linkedin", label: "LinkedIn" },
                { href: "https://github.com/haafiidzzz", icon: "github", label: "GitHub" },
              ].map(({ href, icon, label }) => (
                <li key={icon} className="flex items-center gap-2">
                  <img src={`${SI}/${icon}.svg`} className="w-3.5 h-3.5 invert opacity-70" alt="" />
                  <a href={href} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between items-center gap-3 text-paper/50 text-xs tracking-widest uppercase">
          <span>© 2025 Hafidz Ulum Ramadhani</span>
          <span>Designed &amp; Built with Care</span>
        </div>
      </div>
    </footer>
  );
}
