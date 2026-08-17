import Link from "next/link";
import { asset } from "@/lib/paths";

const navLinks = [
  { label: "Start", href: "/" },
  { label: "Arbeitsablauf", href: "/#ablauf" },
  { label: "Dienstleistungen", href: "/#leistungen" },
  { label: "Qualifikation", href: "/#qualifikation" },
  { label: "Kontakt", href: "/kontakt" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Haftungsausschluss", href: "/haftungsausschluss" },
];

export default function Footer() {
  const handleBackToTop = () => {
    if (typeof window !== "undefined" && window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-dark text-white pt-20 sm:pt-24 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <img src={asset("/images/logo-full-white.png")} alt="Sachverständigenbüro Arne Müller" className="h-10 w-auto mb-5" />
            <p className="text-gray-400 text-sm max-w-xs mb-6 leading-relaxed">
              Unabhängige Kfz-Schadengutachten nach Verkehrsunfällen.
              <br />
              Vor-Ort-Service in Süddeutschland.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/4915204919263?text=Hallo%20ich%20habe%20eine%20Anfrage%20zu%20Ihren%20KFZ-Dienstleistungen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-dark hover:border-brand-secondary transition-all"
              >
                <svg className="w-4.5 h-4.5" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,215l11.48-34.4a8,8,0,0,0-.67-6.54A88,88,0,1,1,128,216Z" /></svg>
              </a>
              <a
                href="https://linkedin.com/in/arne-müller-517584167/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-dark hover:border-brand-secondary transition-all"
              >
                <svg className="w-4.5 h-4.5" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z" /></svg>
              </a>
              <a
                href="https://instagram.com/gutachter_mueller/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-dark hover:border-brand-secondary transition-all"
              >
                <svg className="w-4.5 h-4.5" width="18" height="18" fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" /></svg>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Navigation</h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Rechtliches</h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-secondary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pb-12">
            <div className="space-y-1">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Anrufen</p>
              <a href="tel:+4915204919263" className="text-lg hover:text-brand-secondary transition-colors block">+49 152 04919263</a>
              <a href="mailto:kontakt@gutachter-mueller.com" className="text-gray-400 hover:text-brand-secondary transition-colors">
                kontakt@gutachter-mueller.com
              </a>
            </div>

            <div className="space-y-1">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Büro</p>
              <p className="text-lg">Am Schafhofgraben 20</p>
              <p className="text-gray-400">97346 Iphofen</p>
            </div>

            <div className="flex md:justify-end">
              <button
                onClick={handleBackToTop}
                className="group flex items-center gap-3 px-5 py-3 rounded-full border border-white/20 hover:border-brand-secondary hover:bg-brand-secondary hover:text-brand-dark transition-all"
                aria-label="Nach oben"
              >
                <span className="text-sm font-medium">Nach oben</span>
                <svg className="w-4 h-4 transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wordmark — aria-hidden, not a heading */}
      <div className="w-full flex justify-center overflow-hidden leading-none mt-4 px-4" aria-hidden="true">
        <p className="text-brand-secondary/90 font-bold tracking-tight whitespace-nowrap leading-[0.85] text-[clamp(2rem,12vw,11rem)] pt-[0.15em]">
          ARNE MÜLLER
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 mt-8 pt-6 border-t border-white/5 gap-4">
          <p>&copy; {new Date().getFullYear()} Sachverständigenbüro Arne Müller</p>
        </div>
      </div>
    </footer>
  );
}
