import PageHero from "@/components/shared/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      label="Kontaktieren Sie mich"
      title="Unverbindliches Erstgespräch"
      image="/images/kundenberatung.webp"
      breadcrumb={[{ label: "Start", href: "/" }, { label: "Kontakt" }]}
    />
  );
}
