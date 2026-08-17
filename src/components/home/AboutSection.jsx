import { useRef } from "react";
import useReveal from "@/hooks/useReveal";
import Button from "@/components/shared/Button";
import { asset } from "@/lib/paths";

const credentials = [
  {
    title: "Sachverständigentätigkeit im Privatauftrag",
    meta: "Weiterbildung · IfS, 2024",
  },
  {
    title: "Rechtliches Umfeld der Sachverständigentätigkeit",
    meta: "IfS / IHK-Akademie München, 2024",
  },
  {
    title: "Zertifizierter Schweißer",
    meta: "DIN EN ISO 9606-1 · SLV Fellbach",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section
      id="qualifikation"
      ref={ref}
      className="scroll-mt-24 py-20 sm:py-24 lg:py-32 bg-brand-light"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="gs-reveal relative">
            <img
              src={asset("/images/arne-mueller-portrait.webp")}
              alt="Arne Müller, Kfz-Sachverständiger"
              className="rounded-3xl w-full h-[420px] sm:h-[560px] object-cover object-top"
            />
            <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur rounded-2xl px-5 py-3">
              <p className="font-semibold text-brand-dark leading-tight">Arne Müller</p>
              <p className="text-xs text-brand-gray">Kfz-Sachverständiger</p>
            </div>
          </div>

          <div>
            <div className="gs-reveal inline-flex items-center gap-2 text-sm font-semibold mb-5 text-brand-gray">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              Über mich
            </div>
            <h2 className="gs-reveal text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark leading-tight mb-8">
              Qualifikationen und Erfahrung
            </h2>

            <p className="gs-reveal text-lg sm:text-xl text-brand-dark leading-relaxed mb-5 max-w-lg">
              Technische Berufsausbildung, Maschinenbau-Studium.
            </p>
            <p className="gs-reveal text-base sm:text-lg text-brand-gray leading-relaxed mb-10 max-w-lg">
              Dazu Erfahrung aus Entwicklung, Produktion und Werkstatt – und die Leidenschaft für
              Fahrzeuge.
            </p>

            <div className="gs-reveal">
              <Button href="/kontakt" variant="primary" size="lg" radius="pill">
                Termin anfragen
              </Button>
            </div>
          </div>
        </div>

        {/* Qualifications get their own breathing room */}
        <div className="mt-20 sm:mt-28 lg:mt-32">
          <div className="gs-reveal text-xs uppercase tracking-[0.2em] text-brand-gray mb-8 sm:mb-10">
            Weiterbildungen und Zertifikate
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {credentials.map((c, i) => (
              <div
                key={c.title}
                className="gs-reveal bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between min-h-[200px]"
              >
                <span className="text-sm font-semibold text-brand-secondary">0{i + 1}</span>
                <div className="mt-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-brand-dark leading-snug mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-brand-gray">{c.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
