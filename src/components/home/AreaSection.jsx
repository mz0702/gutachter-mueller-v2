import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import { asset } from "@/lib/paths";

const places = [
  { label: "Bei Ihnen zu Hause", note: "Auch am Unfallort" },
  { label: "In Ihrer Werkstatt", note: "Freie Werkstattwahl" },
  { label: "An einem Ort Ihrer Wahl", note: "Termin nach Absprache" },
];

export default function AreaSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="relative overflow-hidden bg-brand-dark text-white py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={asset("/images/cta-hintergrund.webp")}
          alt=""
          className="w-full h-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/70 to-brand-dark" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="gs-reveal inline-flex items-center gap-2 text-sm font-semibold mb-6 text-gray-400">
          <span className="w-2 h-2 rounded-full bg-brand-secondary" />
          Einsatzgebiet
        </div>

        <h2 className="gs-reveal text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.1] tracking-tight max-w-3xl">
          Vor Ort in ganz
          <br />
          <span className="text-brand-secondary">Süddeutschland</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 mt-14 sm:mt-20 border-t border-white/10 pt-10 sm:pt-14">
          {places.map((p) => (
            <div key={p.label} className="gs-reveal">
              <p className="text-lg sm:text-xl font-medium leading-snug mb-2">{p.label}</p>
              <p className="text-sm text-gray-400">{p.note}</p>
            </div>
          ))}
        </div>

        <p className="gs-reveal mt-12 sm:mt-16 text-sm text-gray-500">
          Büro: Am Schafhofgraben 20 · 97346 Iphofen
        </p>
      </div>
    </section>
  );
}
