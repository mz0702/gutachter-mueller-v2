import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import Button from "@/components/shared/Button";

const services = [
  {
    number: "01",
    title: "Gutachtenerstellung",
    summary:
      "Unfall- und Schadengutachten für PKW, Wohnmobile, Krafträder, Anhänger, Fahrräder und E-Scooter.",
    tags: ["Schadengutachten", "3D-Achsvermessung", "Begleitung bis zur Regulierung"],
  },
  {
    number: "02",
    title: "Fahrzeugbewertung",
    summary:
      "Der realistische Wert Ihres Fahrzeugs – vom Gebrauchtwagen bis zum Oldtimer.",
    tags: ["Wertgutachten Oldtimer", "Leasingfahrzeuge", "Kostenvoranschlag"],
  },
  {
    number: "03",
    title: "Kundenberatung",
    summary:
      "Beratung rund um Ihr Fahrzeug – vom Gebrauchtwagenkauf bis zum Flottenmanagement.",
    tags: ["An- und Verkauf", "Preisfindung", "Flottenmanagement"],
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="leistungen" ref={ref} className="scroll-mt-24 py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-2xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-semibold mb-5 text-brand-gray">
            <span className="w-2 h-2 rounded-full bg-brand-primary" />
            Dienstleistungen
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark leading-tight">
            Professionelle Begutachtungsdienste
          </h2>
        </div>

        <div className="border-t border-gray-200">
          {services.map((service) => (
            <div
              key={service.title}
              className="gs-reveal group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start border-b border-gray-200 py-10 sm:py-14 lg:py-16"
            >
              <div className="lg:col-span-4 flex items-baseline gap-4">
                <span className="text-sm font-semibold text-brand-secondary">{service.number}</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-brand-dark leading-tight group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
              </div>

              <p className="lg:col-span-5 text-base sm:text-lg text-brand-gray leading-relaxed max-w-xl">
                {service.summary}
              </p>

              <ul className="lg:col-span-3 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-[#eef1f4] text-brand-dark text-xs sm:text-sm px-4 py-2"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gs-reveal mt-12 sm:mt-16">
          <Button href="/kontakt" variant="primary" size="lg" radius="pill">
            Leistung anfragen
          </Button>
        </div>
      </div>
    </section>
  );
}
