import { Html, Head, Main, NextScript } from "next/document";
import { asset } from "@/lib/paths";

export default function Document() {
  return (
    <Html lang="de" className="scroll-smooth">
      <Head>
        <link rel="icon" type="image/png" href={asset("/favicon-512.png")} />
        <link rel="apple-touch-icon" href={asset("/apple-touch-icon.png")} />
      </Head>
      <body className="antialiased selection:bg-brand-secondary selection:text-brand-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
