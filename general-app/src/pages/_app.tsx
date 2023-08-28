import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import Footer from "@/components/Footer";

function App({ Component, pageProps }: AppProps) {
  const {locale} = useRouter();
  return (
    <>
    <div lang={locale =="en" ? "en" : "bn"}>
      <Navbar/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
    </>
  );
}
export default appWithTranslation(App);


