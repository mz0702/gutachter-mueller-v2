import Head from "next/head";
import LegalLayout from "@/components/shared/LegalLayout";
import { absoluteUrl } from "@/lib/seo";

const sections = [
  {
    title: "Überblick",
    paragraphs: [
      "Diese Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
      "Wir verarbeiten personenbezogene Daten der Nutzer dieser Website grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.",
    ],
  },
  {
    title: "Verantwortliche Stelle",
    paragraphs: [
      "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
      "Arne Müller, Sachverständigenbüro Arne Müller, Am Schafhofgraben 20, 97346 Iphofen",
      "Telefon: +49 152 04919263, E-Mail: kontakt@gutachter-mueller.com",
    ],
  },
  {
    title: "Hosting",
    paragraphs: [
      "Diese Website wird über GitHub Pages gehostet, ein Angebot von GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA (Teil von Microsoft Corporation). Beim Aufruf dieser Website erhebt GitHub automatisch technische Daten (u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Browsertyp) in Server-Logfiles. Dies dient der sicheren und störungsfreien Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO). Da GitHub, Inc. ein US-Unternehmen ist, kann es dabei zu einer Datenübertragung in die USA kommen; GitHub verweist hierzu auf Standardvertragsklauseln der EU-Kommission als Garantie eines angemessenen Datenschutzniveaus. Weitere Informationen: GitHub Privacy Statement, https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement.",
    ],
  },
  {
    title: "Keine Analyse- oder Tracking-Cookies",
    paragraphs: [
      "Diese Website verwendet keine Analyse- oder Tracking-Dienste wie Google Analytics und setzt keine Cookies zu Werbe- oder Analysezwecken. Es werden ausschließlich technisch notwendige Daten verarbeitet.",
    ],
  },
  {
    title: "Schriftarten",
    paragraphs: [
      "Die auf dieser Website verwendete Schriftart (Manrope) wird beim Build der Website lokal eingebunden und beim Seitenaufruf direkt von unserem eigenen Server ausgeliefert. Es findet keine Verbindung zu Servern von Google oder anderen Schriftart-Anbietern statt, es werden also auch keine Daten dorthin übertragen.",
    ],
  },
  {
    title: "Kartendarstellung (OpenStreetMap)",
    paragraphs: [
      "Auf der Kontaktseite binden wir eine Karte des Anbieters OpenStreetMap Foundation, St John's Innovation Centre, Cowley Road, Cambridge, CB4 0WS, Vereinigtes Königreich ein. Beim Aufruf der Kontaktseite wird Ihre IP-Adresse an Server von OpenStreetMap übertragen, um die Karte darzustellen. Rechtsgrundlage ist unser berechtigtes Interesse an einer anschaulichen Standortangabe (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen: https://osmfoundation.org/wiki/Privacy_Policy.",
    ],
  },
  {
    title: "WhatsApp-Kontakt",
    paragraphs: [
      "Wir bieten Ihnen die Möglichkeit, uns über einen WhatsApp-Button zu kontaktieren. Beim Anklicken öffnet sich ein Chat mit unserer Nummer in WhatsApp bzw. Ihrem Browser; es wird keine Verbindung zu WhatsApp hergestellt, solange Sie den Button nicht aktiv anklicken. Anbieter ist WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland. Für die dabei von WhatsApp verarbeiteten Daten gilt die Datenschutzerklärung von WhatsApp: https://www.whatsapp.com/legal/privacy-policy-eea.",
    ],
  },
  {
    title: "Soziale Netzwerke",
    paragraphs: [
      "Im Footer und im Menü verlinken wir auf unsere Profile bei LinkedIn und Instagram. Es handelt sich um einfache Verlinkungen, keine eingebundenen Social-Media-Plugins. Beim bloßen Aufruf dieser Website wird daher keine Verbindung zu diesen Diensten hergestellt; erst wenn Sie einen Link aktiv anklicken, verlassen Sie unsere Seite und es gilt die Datenschutzerklärung des jeweiligen Anbieters.",
    ],
  },
  {
    title: "Kontaktformular",
    paragraphs: [
      "Wenn Sie uns per Kontaktformular, E-Mail, Telefon oder WhatsApp Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO (Vertragsanbahnung bzw. berechtigtes Interesse an der Bearbeitung Ihrer Anfrage). Ihre Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung widerrufen oder der Zweck der Datenspeicherung entfällt.",
    ],
  },
  {
    title: "SSL- bzw. TLS-Verschlüsselung",
    paragraphs: [
      "Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt.",
    ],
  },
  {
    title: "Ihre Rechte",
    paragraphs: [
      "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft, Empfänger und den Zweck der Datenverarbeitung (Art. 15 DSGVO) sowie ein Recht auf Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO).",
      "Haben Sie in eine Datenverarbeitung eingewilligt, können Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Ihnen steht zudem ein Beschwerderecht bei der zuständigen Datenschutz-Aufsichtsbehörde zu.",
      "Für alle Fragen zum Datenschutz erreichen Sie uns unter den oben genannten Kontaktdaten.",
    ],
  },
];

export default function DatenschutzPage() {
  return (
    <>
      <Head>
        <title>Datenschutzerklärung – Sachverständigenbüro Arne Müller</title>
        <meta name="description" content="Datenschutzerklärung des Sachverständigenbüros Arne Müller gemäß DSGVO." />
        <link rel="canonical" href={absoluteUrl("/datenschutz")} />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <LegalLayout title="Datenschutzerklärung" updatedAt="August 2026" sections={sections} breadcrumbLabel="Datenschutz" />
    </>
  );
}
