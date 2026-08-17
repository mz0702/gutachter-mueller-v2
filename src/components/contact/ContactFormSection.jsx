import { useRef, useState } from "react";
import Link from "next/link";
import useReveal from "@/hooks/useReveal";
import Button from "@/components/shared/Button";

export default function ContactFormSection() {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  useReveal(ref);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* Left: Contact info */}
          <div className="gs-reveal space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold mb-4 text-brand-gray">
                <span className="w-2 h-2 rounded-full bg-brand-primary" />
                Direkt erreichbar
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-brand-dark mb-4">
                Sprechen Sie mit uns
              </h2>
              <p className="text-brand-gray text-base sm:text-lg leading-relaxed">
                Rufen Sie an, schreiben Sie per WhatsApp oder nutzen Sie das Formular – wir melden uns
                kurzfristig zurück.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-gray mb-1">Anrufen</div>
                  <a href="tel:+4915204919263" className="font-medium text-brand-dark hover:text-brand-primary transition-colors">
                    +49 152 04919263
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256"><path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84Z" /></svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-gray mb-1">WhatsApp</div>
                  <a
                    href="https://wa.me/4915204919263?text=Hallo%20ich%20habe%20eine%20Anfrage%20zu%20Ihren%20KFZ-Dienstleistungen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-brand-dark hover:text-brand-primary transition-colors"
                  >
                    Chat starten
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-gray mb-1">E-Mail</div>
                  <a href="mailto:kontakt@gutachter-mueller.com" className="font-medium text-brand-dark hover:text-brand-primary transition-colors">
                    kontakt@gutachter-mueller.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand-gray mb-1">Büro</div>
                  <div className="font-medium text-brand-dark">Am Schafhofgraben 20<br />97346 Iphofen</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-brand-dark font-medium mb-1">Vor-Ort-Service in ganz Süddeutschland</p>
              <p className="text-brand-gray text-sm">
                Besichtigung bei Ihnen, in der Werkstatt oder an einem Ort Ihrer Wahl.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="gs-reveal bg-brand-dark text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
            {submitted ? (
              <div className="flex flex-col items-center text-center py-10">
                <div className="w-16 h-16 rounded-full bg-brand-secondary text-brand-dark flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Vielen Dank für Ihre Anfrage</h3>
                <p className="text-gray-400 mb-6">
                  Wir haben Ihre Nachricht erhalten und melden uns kurzfristig bei Ihnen zurück.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-brand-secondary text-sm font-semibold">
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl font-semibold">Anfrage senden</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Max Mustermann"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-brand-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">Telefon</label>
                    <input
                      type="tel"
                      placeholder="+49 …"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-brand-secondary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">E-Mail *</label>
                  <input
                    type="email"
                    required
                    placeholder="max@mustermann.de"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-brand-secondary transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">Ihr Anliegen *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Beschreiben Sie kurz Ihren Unfall bzw. Ihr Anliegen…"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-brand-secondary transition-colors resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs text-gray-400">
                  <input type="checkbox" className="mt-0.5 accent-brand-secondary" />
                  Ja, ich möchte Nachrichten über Werbeaktionen erhalten.
                </label>

                <Button type="submit" variant="gold" size="lg" radius="rounded" fullWidth>
                  Anfrage senden
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{" "}
                  <Link href="/datenschutz" className="underline hover:text-brand-secondary">Datenschutzerklärung</Link> zu.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
