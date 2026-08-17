import { useRef } from "react";
import useReveal from "@/hooks/useReveal";

const facts = [
  {
    title: "Kostenfrei für Geschädigte",
    text: "Nach § 249 BGB zahlt die gegnerische Haftpflicht.",
  },
  {
    title: "100 % unabhängig",
    text: "Keine Bindung an Versicherung oder Werkstatt.",
  },
  {
    title: "Vor-Ort-Service in Süddeutschland",
    text: "Besichtigung bei Ihnen oder in der Werkstatt.",
  },
  {
    title: "Kurzfristige Termine",
    text: "Ihr Gutachten in wenigen Tagen.",
  },
];

export default function TrustStrip() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="bg-brand-light py-14 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 lg:gap-x-12">
          {facts.map((f) => (
            <div key={f.title} className="gs-reveal">
              <span className="block w-10 h-px bg-brand-secondary mb-5" />
              <h3 className="text-lg sm:text-xl font-semibold text-brand-dark leading-snug mb-2">
                {f.title}
              </h3>
              <p className="text-sm sm:text-base text-brand-gray leading-relaxed max-w-[24ch]">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
