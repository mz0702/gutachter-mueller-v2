import { useState, useRef } from "react";
import useReveal from "@/hooks/useReveal";
import { asset } from "@/lib/paths";

const faqs = [
  {
    question: "Wer bezahlt das Gutachten nach einem Unfall?",
    answer:
      "Waren Sie nicht Unfallverursacher, trägt die gegnerische Haftpflichtversicherung die Kosten nach § 249 BGB. Für Sie entstehen keine Kosten.",
  },
  {
    question: "Wie schnell erhalte ich mein Gutachten?",
    answer:
      "In der Regel innerhalb weniger Tage nach der Besichtigung. Kurzfristige Termine sind auf Anfrage möglich.",
  },
  {
    question: "Wo findet die Besichtigung meines Fahrzeugs statt?",
    answer:
      "Dort, wo es für Sie passt: bei Ihnen vor Ort, in einer Werkstatt oder an einem anderen Ort Ihrer Wahl in Süddeutschland.",
  },
  {
    question: "Was ist, wenn die gegnerische Versicherung kürzt?",
    answer:
      "Wir arbeiten eng mit Fachanwälten für Verkehrsrecht zusammen. Bei Bedarf setzen diese Ihre Ansprüche durch – auch gerichtlich.",
  },
  {
    question: "Welche Fahrzeuge begutachten Sie?",
    answer:
      "PKW, Wohnmobile, Krafträder, Anhänger, Fahrräder und E-Scooter. Wertgutachten für Oldtimer auf Anfrage.",
  },
  {
    question: "Kann ich die Werkstatt frei wählen?",
    answer:
      "Ja. Nach einem unverschuldeten Unfall haben Sie freie Werkstattwahl. Unser Gutachten ist davon unabhängig.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  const ref = useRef(null);
  useReveal(ref);

  const toggleFaq = (index) => setOpenIndex(openIndex === index ? -1 : index);

  return (
    <section ref={ref} className="py-20 sm:py-24 lg:py-32 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="gs-reveal inline-flex items-center gap-2 text-sm font-semibold mb-5 text-brand-gray">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              Häufige Fragen
            </div>
            <h2 className="gs-reveal text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark leading-tight mb-10 sm:mb-12">
              Fragen &amp; Antworten
            </h2>
            <img
              src={asset("/images/fahrzeugbewertung-oldtimer.webp")}
              alt="Oldtimer-Fahrzeugbewertung"
              className="gs-reveal rounded-3xl w-full h-[260px] sm:h-[340px] lg:h-[420px] object-cover"
            />
          </div>

          <div className="gs-reveal">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300/70 first:border-t">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                  className="w-full text-left flex justify-between items-center gap-6 py-6 sm:py-7 group"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-medium text-brand-dark group-hover:text-brand-primary transition-colors">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-brand-primary transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-brand-gray text-sm sm:text-base leading-relaxed pb-7 pr-8 max-w-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
