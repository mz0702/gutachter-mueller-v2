import Head from "next/head";
import LegalLayout from "@/components/shared/LegalLayout";
import { absoluteUrl } from "@/lib/seo";

const sections = [
  {
    title: "Haftung für Inhalte",
    paragraphs: [
      "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
    ],
  },
  {
    title: "Haftung für Links",
    paragraphs: [
      "Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
    ],
  },
  {
    title: "Urheberrecht",
    paragraphs: [
      "Die durch uns erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung. Soweit die Inhalte auf dieser Website nicht von uns erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie dennoch auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.",
    ],
  },
  {
    title: "Kein Ersatz für individuelle Beratung",
    paragraphs: [
      "Die Inhalte dieser Website dienen der allgemeinen Information über unsere Leistungen. Sie stellen keine rechtliche Beratung dar und ersetzen nicht die individuelle Prüfung Ihres konkreten Schadensfalls durch ein Gutachten oder die Beratung durch einen Rechtsanwalt.",
    ],
  },
];

export default function HaftungsausschlussPage() {
  return (
    <>
      <Head>
        <title>Haftungsausschluss – Sachverständigenbüro Arne Müller</title>
        <meta name="description" content="Haftungsausschluss für Inhalte, Links und Urheberrecht der Website des Sachverständigenbüros Arne Müller." />
        <link rel="canonical" href={absoluteUrl("/haftungsausschluss")} />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <LegalLayout title="Haftungsausschluss" updatedAt="August 2026" sections={sections} breadcrumbLabel="Haftungsausschluss" />
    </>
  );
}
