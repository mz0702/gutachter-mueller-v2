import { useRef } from "react";
import useReveal from "@/hooks/useReveal";

// Auszüge aus echten Google-Rezensionen – gekürzt, gekennzeichnet durch […]
const testimonials = [
  {
    name: "Tim Ackermann",
    initials: "TA",
    quote:
      "Er hat ein faires Gutachten gemacht und war super schnell in der Bearbeitung. […] Sorgenfreie Aufarbeitung, kompetente Beratung und immer gut erreichbar.",
  },
  {
    name: "Zbigniew Wiśniewski",
    initials: "ZW",
    quote:
      "Der Gutachter hat den Schaden nach dem Unfall präzise und umfassend beurteilt. […] Ich kann ihn uneingeschränkt empfehlen.",
  },
  {
    name: "Yusuf Monaf",
    initials: "YM",
    quote:
      "Outstanding professionalism and outstanding results! […] Thanks to their professional work, I received full compensation without unnecessary delays.",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="bewertungen" ref={ref} className="scroll-mt-24 py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal max-w-2xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-semibold mb-5 text-brand-gray">
            <span className="w-2 h-2 rounded-full bg-brand-primary" />
            Bewertungen
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark leading-tight">
            Was Mandanten sagen
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="gs-reveal flex flex-col bg-brand-light rounded-3xl p-7 sm:p-9"
            >
              <div className="flex gap-0.5 mb-6 text-brand-secondary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.363 1.118l1.287 3.958c.3.922-.755 1.688-1.539 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.784.57-1.838-.196-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.062 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.958z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-base sm:text-lg text-brand-dark leading-relaxed flex-grow mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-6 border-t border-black/5">
                <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-brand-dark">{t.name}</p>
                  <p className="text-xs text-brand-gray">Google Rezension</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
