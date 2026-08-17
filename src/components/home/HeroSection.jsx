import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "@/components/shared/Button";
import { asset } from "@/lib/paths";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const elemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
      );

      gsap.fromTo(
        elemsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.4 }
      );

      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !elemsRef.current.includes(el)) elemsRef.current.push(el);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] sm:min-h-screen pb-12 pt-32 sm:pt-36 md:pt-40 flex items-end overflow-hidden bg-brand-dark"
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          ref={bgRef}
          src={asset("/images/hero-vor-ort-schaden.webp")}
          alt="Arne Müller bei der Schadensaufnahme an einem beschädigten Fahrzeug"
          className="w-full h-full object-cover object-[62%_center] opacity-0 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl text-white">
          <div ref={addToRefs} className="inline-flex items-center gap-2 text-sm font-medium mb-4 sm:mb-6 text-white/90">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
            Unabhängiger Kfz-Sachverständiger
          </div>
          <h1
            ref={addToRefs}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-medium leading-[1.1] tracking-tight mb-6"
          >
            Kfz-Gutachter Arne Müller
          </h1>
          <p ref={addToRefs} className="text-lg sm:text-xl text-gray-200 mb-3 leading-relaxed max-w-xl">
            Sie sind Geschädigter bei einem Verkehrsunfall?
          </p>
          <p ref={addToRefs} className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-xl">
            Dann haben Sie ein Recht auf ein unabhängiges Gutachten. Wir helfen Ihnen!
          </p>

          <div ref={addToRefs} className="flex flex-wrap items-center gap-4">
            <Button href="/kontakt" variant="primary" size="lg" radius="rounded">
              Unverbindlich anfragen
            </Button>
            <a
              href="https://wa.me/4915204919263?text=Hallo%20ich%20habe%20eine%20Anfrage%20zu%20Ihren%20KFZ-Dienstleistungen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-white font-medium border border-white/30 rounded-xl px-6 py-2.5 hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,215l11.48-34.4a8,8,0,0,0-.67-6.54A88,88,0,1,1,128,216Z" /></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
