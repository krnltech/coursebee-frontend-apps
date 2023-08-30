import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import Footer from "@/components/Footer";
import { animate, registerGsapPlugin } from "@/libs/animation";
import FullScreenLoader from "@/components/Loader";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect, useRef, useState } from "react";

function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const { locale, asPath } = useRouter();
  const ref = useRef();

  useEffect(() => {
    try {
      const handleRouteStart = () => NProgress.start();
      const handleRouteDone = () => NProgress.done();
      Router.events.on('routeChangeStart', handleRouteStart);
      Router.events.on('routeChangeComplete', handleRouteDone);
      Router.events.on('routeChangeError', handleRouteDone);
  
      return () => {
        // Make sure to remove the event handler on unmount!
        Router.events.off('routeChangeStart', handleRouteStart);
        Router.events.off('routeChangeComplete', handleRouteDone);
        Router.events.off('routeChangeError', handleRouteDone);
      };
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    registerGsapPlugin();
    const ctx = animate(ref);
    setLoading(false);
    console.log(asPath)
    return () => ctx.revert();
  }, [asPath])

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


