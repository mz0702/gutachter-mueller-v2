import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import Button from "@/components/shared/Button";

const services = [
  {
    number: "01",
    title: "Gutachtenerstellung",
    summary:
      "Unfall- und Schadengutachten für PKW, Wohnmobile, Krafträder, Anhänger, Fahrräder und E-Scooter.",
    detail:
      "Bei einem unverschuldeten Verkehrsunfall mit Ihrem Fahrzeug steht Ihnen nach § 249 BGB ein Schadengutachten sowie eine Rechtsunterstützung kostenfrei zu, um den Schaden gegenüber der gegnerischen Haftpflichtversicherung korrekt zu dokumentieren und die Reparaturkosten zu beziffern. Wir stehen Ihnen bis zur vollständigen Schadensregulierung zur Seite und arbeiten hierbei eng mit Fachanwälten für Verkehrsrecht zusammen.",
  },
  {
    number: "02",
    title: "Fahrzeugbewertung",
    summary:
      "Wir ermitteln den Wert Ihres Fahrzeugs und unterstützen Sie bei Kostenvoranschlägen.",
    detail:
      "Wenn Sie den realistischen Verkaufspreis für Ihr Auto, Motorrad, Wohnmobile etc. ermitteln möchten oder ein Wertgutachten für Ihren Oldtimer zur Vorlage bei der Versicherung benötigen, sind Sie bei uns genau richtig. Auch bei der Bewertung von Leasingfahrzeugen oder der Erstellung von Kostenvoranschlägen bieten wir Ihnen kompetente Unterstützung.",
  },
  {
    number: "03",
    title: "Kundenberatung",
    summary:
      "Wir bieten Ihnen kompetente Beratung zu Ihren Fahrzeugen, wie der Unterstützung bei Gebrauchtwagenkäufen und -verkäufen oder bei Ihrem Flottenmanagement.",
    detail:
      "Wir stehen Ihnen bei der Auswahl sowie dem An- und Verkauf von Gebrauchtwagen zur Seite, helfen Ihnen, den besten Preis zu erzielen und beraten Sie zu allen relevanten Fahrzeugfragen. Darüber hinaus unterstützen wir Sie professionell im Bereich Flottenmanagement, um Ihre Fahrzeuge optimal zu verwalten und Kosten zu minimieren.",
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

              <div className="lg:col-span-8 space-y-3 max-w-2xl">
                <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
                  {service.summary}
                </p>
                <p className="text-sm sm:text-base text-brand-gray/80 leading-relaxed">
                  {service.detail}
                </p>
              </div>
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
