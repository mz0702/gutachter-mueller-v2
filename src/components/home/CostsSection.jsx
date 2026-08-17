import { useRef } from "react";
import useReveal from "@/hooks/useReveal";

const costs = [
  "Reparaturkosten / Wertminderung",
  "Gutachten inkl. 3D Achsvermessung",
  "Gerichts- und Rechtsanwaltkosten",
  "Nutzungsausfall / Mietwagen",
  "Schmerzensgeld / Arztkosten",
  "Abschleppkosten / Entsorgungskosten",
];

export default function CostsSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="py-20 sm:py-24 lg:py-32 bg-brand-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="gs-reveal inline-flex items-center gap-2 text-sm font-semibold mb-5 text-white/60">
            <span className="w-2 h-2 rounded-full bg-brand-secondary" />
            Kostenübernahme
          </div>
          <h2 className="gs-reveal text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
            Erstattungsfähige Kosten durch die gegnerische Haftpflichtversicherung
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {costs.map((item) => (
            <li
              key={item}
              className="gs-reveal flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 px-5 py-5 sm:px-6 sm:py-6"
            >
              <svg
                className="w-5 h-5 mt-0.5 shrink-0 text-brand-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
