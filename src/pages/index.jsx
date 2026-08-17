import Head from "next/head";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import WorkProcessSection from "@/components/home/WorkProcessSection";
import ServicesSection from "@/components/home/ServicesSection";
import CostsSection from "@/components/home/CostsSection";
import AboutSection from "@/components/home/AboutSection";
import AreaSection from "@/components/home/AreaSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaBanner from "@/components/shared/CtaBanner";
import { absoluteUrl } from "@/lib/seo";

const title = "Kfz-Gutachter Arne Müller – Sachverständigenbüro Iphofen";
const description =
  "Unabhängige Kfz-Schadengutachten nach Verkehrsunfällen in Süddeutschland. Kostenfrei für Unfallgeschädigte nach § 249 BGB, kurzfristige Termine, Vor-Ort-Service.";

const schema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "Sachverständigenbüro Arne Müller",
  url: absoluteUrl("/"),
  telephone: "+49-152-04919263",
  email: "kontakt@gutachter-mueller.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Am Schafhofgraben 20",
    postalCode: "97346",
    addressLocality: "Iphofen",
    addressCountry: "DE",
  },
  areaServed: "Süddeutschland",
  employee: {
    "@type": "Person",
    name: "Arne Müller",
    jobTitle: "Kfz-Sachverständiger",
  },
  sameAs: [
    "https://linkedin.com/in/arne-müller-517584167/",
    "https://instagram.com/gutachter_mueller/",
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={absoluteUrl("/")} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={absoluteUrl("/")} />
        <meta property="og:image" content={absoluteUrl("/images/hero-vor-ort-schaden.webp")} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      </Head>
      <HeroSection />
      <TrustStrip />
      <WorkProcessSection />
      <ServicesSection />
      <CostsSection />
      <AboutSection />
      <AreaSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner
        label="Jetzt anfragen"
        title={"Unfall gehabt?\nWir helfen Ihnen weiter."}
        description="Unverbindliches Erstgespräch – wir melden uns kurzfristig zurück."
        buttonLabel="Unverbindlich anfragen"
        buttonHref="/kontakt"
        image="/images/cta-hintergrund.webp"
      />
    </>
  );
}
