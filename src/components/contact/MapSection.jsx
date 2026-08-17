import { useRef } from "react";
import useReveal from "@/hooks/useReveal";

export default function MapSection() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section ref={ref} className="pb-20 sm:pb-24 lg:pb-28 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gs-reveal rounded-3xl overflow-hidden h-[380px] sm:h-[480px] relative">
          <iframe
            title="Standort Sachverständigenbüro Arne Müller, Iphofen"
            src="https://www.openstreetmap.org/export/embed.html?bbox=10.2380%2C49.6890%2C10.2700%2C49.7060&layer=mapnik&marker=49.6975,10.2540"
            className="w-full h-full border-0"
            loading="lazy"
          />
          <div className="absolute top-6 left-6 bg-brand-dark text-white rounded-2xl p-5 max-w-xs shadow-xl">
            <div className="text-xs uppercase tracking-wider text-brand-secondary mb-2">Büro</div>
            <div className="font-semibold mb-1">Sachverständigenbüro Arne Müller</div>
            <div className="text-sm text-gray-300">Am Schafhofgraben 20, 97346 Iphofen</div>
          </div>
        </div>
      </div>
    </section>
  );
}
