import Footer from "../components/Footer";

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
          <p className="text-sm tracking-widest text-purple-400 mb-4">GET IN TOUCH</p>
          <h1 className="text-4xl font-bold mb-16">Connect With Me</h1>
          <div className="flex flex-wrap justify-center gap-8">
            {contacts.map(({ href, icon, label }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-[#141414] border border-white/10 group-hover:border-purple-500 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(124,58,237,0.5)]">
                  <img
                    src={`${SI}/${icon}.svg`}
                    alt={label}
                    className="w-9 h-9 invert opacity-70 group-hover:opacity-100 transition"
                  />
                </div>
                <span className="text-xs text-gray-500 group-hover:text-purple-400 transition-colors">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
