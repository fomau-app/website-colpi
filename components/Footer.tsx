"use client";
import Image from "next/image";

type LinkItem = { label: string; href: string; external?: boolean };

const links: Record<string, LinkItem[]> = {
  Produit: [
    { label: "L'app", href: "#" },
    { label: "Les jeux", href: "#jeux" },
  ],
  Contact: [
    { label: "contact@colpi.fr", href: "mailto:contact@colpi.fr" },
    { label: "Instagram", href: "https://www.instagram.com/colpi_app/", external: true },
    { label: "TikTok", href: "https://www.tiktok.com/@colpi_app", external: true },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-block mb-1">
              <Image
                src="/logo-colpi2.png"
                alt="COLPI"
                width={120}
                height={36}
                className="h-9 w-auto"
                style={{ mixBlendMode: "screen" }}
              />
            </a>
            <p className="text-xs text-white/30 mb-4 flex items-center gap-1">
              by{" "}
              <a
                href="https://fomau.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block opacity-50 hover:opacity-90 transition-opacity duration-200"
              >
                <Image src="/logo-fomau.png" alt="fomau" width={60} height={18} className="h-[1em] w-auto" style={{ mixBlendMode: "screen" }} />
              </a>
            </p>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-[200px]">
              Les meilleurs jeux de soirée dans ton téléphone.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-white/20">© 2025 Colpi. Tous droits réservés.</p>
          <p className="text-xs text-white/20">Fait avec ❤️ en France</p>
        </div>
      </div>
    </footer>
  );
}
