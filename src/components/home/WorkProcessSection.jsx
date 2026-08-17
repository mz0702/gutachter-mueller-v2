import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useReveal from "@/hooks/useReveal";
import { asset } from "@/lib/paths";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Kontaktaufnahme",
    description: "Schnell und unkompliziert – wir kümmern uns sofort um Ihr Anliegen.",
  },
  {
    number: "02",
    title: "Besichtigung",
    description: "Flexibel vor Ort oder in der Werkstatt – wir prüfen Ihr Fahrzeug genau.",
  },
  {
    number: "03",
    title: "Gutachtenerstellung",
    description: "Unabhängig und professionell – Ihr Schadengutachten in kürzester Zeit.",
  },
  {
    number: "04",
    title: "Rechtsunterstützung",
    description: "Mit einem Verkehrsanwalt setzen wir Ihre Ansprüche durch.",
  },
  {
    number: "05",
    title: "Schadensregulierung",
    description: "Wir stehen an Ihrer Seite – bis zu Ihrer Entschädigungszahlung.",
  },
];

export default function WorkProcessSection() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);
  const nodeRefs = useRef([]);

  useReveal(sectionRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(stepRefs.current, { y: 60, opacity: 0, scale: 0.95 });
      gsap.set(nodeRefs.current, { borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)", scale: 1 });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: `+=${steps.length * 450}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(lineRef.current, { width: "100%", ease: "none", duration: steps.length }, 0);

        steps.forEach((_, index) => {
          tl.to(nodeRefs.current[index], { borderColor: "#b6873c", color: "#b6873c", scale: 1.15, duration: 0.3, ease: "back.out(2)" }, index)
            .to(stepRefs.current[index], { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }, index)
            .to(nodeRefs.current[index], { scale: 1, duration: 0.3 }, index + 0.3);
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(stepRefs.current, { y: 0, opacity: 1, scale: 1 });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="ablauf" ref={sectionRef} lang="de" className="scroll-mt-24 bg-[#0e2540] text-white">
      <div ref={pinRef} className="relative min-h-screen lg:min-h-0 overflow-hidden flex items-center py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none">
          <img src={asset("/images/hero-vor-ort-schaden.webp")} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="mb-14 sm:mb-20 gs-reveal max-w-2xl">
            <div className="inline-flex items-center gap-2 text-sm font-semibold mb-5 text-gray-400">
              <span className="w-2 h-2 rounded-full bg-brand-secondary" />
              Arbeitsablauf
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight">
              Weg zu Ihrer Schadensregulierung
            </h2>
          </div>

          <div className="relative">
            <div className="relative h-12 mb-10 hidden lg:block">
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[2px] bg-white/20" />
              <div ref={lineRef} className="absolute top-1/2 -translate-y-1/2 left-0 h-[2px] bg-brand-secondary w-0" />
              <div className="grid grid-cols-5 gap-4 h-full relative">
                {steps.map((step, index) => (
                  <div key={`node-${index}`} className="flex items-center justify-center h-full">
                    <div
                      ref={(el) => (nodeRefs.current[index] = el)}
                      className="w-11 h-11 rounded-full bg-[#0e2540] border-2 flex items-center justify-center text-sm font-semibold transition-colors"
                    >
                      {step.number}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="lg:hidden flex items-center justify-center mb-4">
                    <div className="w-11 h-11 rounded-full bg-[#0e2540] border-2 border-brand-secondary text-brand-secondary flex items-center justify-center text-sm font-semibold">
                      {step.number}
                    </div>
                  </div>
                  <div
                    ref={(el) => (stepRefs.current[index] = el)}
                    className="p-5 sm:p-6 lg:p-4 xl:p-6 rounded-3xl relative bg-white text-brand-dark h-full"
                  >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white hidden lg:block" />
                    <p className="text-xs font-semibold mb-3 text-brand-gray">Schritt {step.number}</p>
                    <h3 className="text-lg lg:text-sm xl:text-base 2xl:text-lg font-bold mb-2 leading-snug hyphens-auto break-words">
                      {step.title}
                    </h3>
                    <p className="text-brand-gray text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
