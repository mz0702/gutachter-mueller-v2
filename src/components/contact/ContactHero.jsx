import PageHero from "@/components/shared/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      label="Kontakt"
      title="Kontaktieren Sie mich"
      description="Unverbindliches Erstgespräch – schildern Sie uns kurz Ihr Anliegen, wir melden uns kurzfristig zurück."
      image="/images/kundenberatung.webp"
      breadcrumb={[{ label: "Start", href: "/" }, { label: "Kontakt" }]}
    />
  );
}
