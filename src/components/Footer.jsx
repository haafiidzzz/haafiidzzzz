const SI = "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons";

export default function Footer() {
  return (
    <footer className="mt-40 bg-[#0b0b0b] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Get in <span className="text-purple-500">Touch</span>
            </h2>
            <p className="text-gray-400 max-w-md mb-6">
              For business inquiries, collaborations, or partnerships, feel free to reach out to me.
            </p>
            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-purple-400">📞</span>
                <span>+62 812-2509-3482</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-400">✉️</span>
                <span>ulumramadhani5@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-400">📍</span>
                <span>Taman, Sidoarjo</span>
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
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-purple-500 transition hover:shadow-[0_0_20px_rgba(124,58,237,0.6)]"
                >
                  <img src={`${SI}/${icon}.svg`} className="w-5 h-5 invert opacity-80" alt={label} />
                </a>
              ))}
            </div>
          </div>
          <div className="flex md:justify-end">
            <div className="bg-[#141414] border border-white/10 rounded-2xl p-8 w-full md:w-[360px]">
              <h3 className="font-semibold mb-4">Let's Work Together</h3>
              <p className="text-gray-400 text-sm mb-6">
                Open for freelance, creative projects, and collaborations.
              </p>
              <a
                href="mailto:ulumramadhani5@gmail.com"
                className="inline-block px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center text-gray-500 text-sm">
          © 2025 Hafidz Ulum Ramadhani
        </div>
      </div>
    </footer>
  );
}
