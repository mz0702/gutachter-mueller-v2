import Head from "next/head";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import MapSection from "@/components/contact/MapSection";
import { absoluteUrl } from "@/lib/seo";

const title = "Kontakt – Sachverständigenbüro Arne Müller";
const description =
  "Unverbindliches Erstgespräch zu Ihrem Kfz-Schadengutachten. Telefon, WhatsApp oder Formular – wir melden uns kurzfristig zurück.";

export default function KontaktPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={absoluteUrl("/kontakt")} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={absoluteUrl("/kontakt")} />
        <meta property="og:image" content={absoluteUrl("/images/kundenberatung.webp")} />
      </Head>
      <ContactHero />
      <ContactFormSection />
      <MapSection />
    </>
  );
}
