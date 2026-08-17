import Head from "next/head";
import Link from "next/link";
import Button from "@/components/shared/Button";
import { asset } from "@/lib/paths";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Seite nicht gefunden – Sachverständigenbüro Arne Müller</title>
        <meta name="description" content="Diese Seite existiert nicht (mehr). Zurück zur Startseite des Sachverständigenbüros Arne Müller." />
        <meta name="robots" content="noindex" />
      </Head>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0">
          <img src={asset("/images/hero-vor-ort-schaden.webp")} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/60" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-sm font-semibold mb-6 justify-center text-gray-300">
              <span className="w-2 h-2 rounded-full bg-brand-secondary" />
              Fehler 404
            </div>

            <p aria-hidden="true" className="text-[30vw] sm:text-[22vw] md:text-[18vw] lg:text-[220px] font-bold leading-none text-brand-secondary tracking-tighter mb-4">
              404
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
              Diese Seite existiert nicht
            </h1>
            <p className="text-gray-300 mb-10 max-w-lg mx-auto text-base sm:text-lg">
              Die gesuchte Seite wurde verschoben, umbenannt oder existiert nicht mehr.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/" variant="primary" size="lg" radius="pill">
                Zur Startseite
              </Button>
              <Link
                href="/kontakt"
                className="text-sm font-semibold text-white border-b border-white/30 pb-1 hover:text-brand-secondary hover:border-brand-secondary transition-colors"
              >
                Oder Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
