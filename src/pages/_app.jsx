import { Manrope } from "next/font/google";
import "@/styles/globals.css";
import MainLayout from "@/layouts/MainLayout";
import SmoothScroll from "@/components/shared/SmoothScroll";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return (
    <div className={`${manrope.variable} font-sans`}>
      <SmoothScroll>
        {getLayout(<Component {...pageProps} />)}
      </SmoothScroll>
    </div>
  );
}
