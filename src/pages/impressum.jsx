import Head from "next/head";
import LegalLayout from "@/components/shared/LegalLayout";
import { absoluteUrl } from "@/lib/seo";

const sections = [
  {
    title: "Angaben gemäß § 5 DDG",
    paragraphs: [
      "Sachverständigenbüro Arne Müller",
      "Inhaber: Arne Müller",
      "Am Schafhofgraben 20",
      "97346 Iphofen",
      "Deutschland",
    ],
  },
  {
    title: "Kontakt",
    paragraphs: [
      "Telefon: +49 152 04919263",
      "E-Mail: kontakt@gutachter-mueller.com",
    ],
  },
  {
    title: "Umsatzsteuer-Identifikationsnummer",
    paragraphs: [
      "[Platzhalter: Umsatzsteuer-Identifikationsnummer nach § 27a UStG. Bitte vor Live-Gang ergänzen, sofern vorhanden.]",
    ],
  },
  {
    title: "Berufshaftpflichtversicherung",
    paragraphs: [
      "[Platzhalter: Name, Anschrift und räumlicher Geltungsbereich der Berufshaftpflichtversicherung. Bitte vor Live-Gang durch das Sachverständigenbüro ergänzen.]",
    ],
  },
  {
    title: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
    paragraphs: [
      "Arne Müller",
      "Am Schafhofgraben 20, 97346 Iphofen",
    ],
  },
  {
    title: "EU-Streitschlichtung",
    paragraphs: [
      "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum.",
    ],
  },
  {
    title: "Verbraucherstreitbeilegung",
    paragraphs: [
      "Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    ],
  },
  {
    title: "Haftung für Inhalte",
    paragraphs: [
      "Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir dennoch keine Gewähr. Sie ersetzen keine rechtliche oder versicherungsrechtliche Beratung im Einzelfall.",
    ],
  },
];

export default function ImpressumPage() {
  return (
    <>
      <Head>
        <title>Impressum – Sachverständigenbüro Arne Müller</title>
        <meta name="description" content="Impressum und Anbieterkennzeichnung des Sachverständigenbüros Arne Müller, Iphofen." />
        <link rel="canonical" href={absoluteUrl("/impressum")} />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <LegalLayout title="Impressum" updatedAt="August 2026" sections={sections} breadcrumbLabel="Impressum" />
    </>
  );
}
