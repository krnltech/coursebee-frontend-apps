import AboutCoursebeeSection from "@/components/About/AboutCoursebeeSection";
import OurMissionSection from "@/components/About/OurMissionSection";
import OurValueSection from "@/components/About/OurValueSection";
import TeachersSection from "@/components/About/TeachersSection";
import NewsletterSection from "@/components/NewsletterSection";
import { GetStaticProps } from "next"
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Head from "next/head";

function About() {
  return (
  <>
    <Head>
      <title>About - Coursebee</title>
    </Head>
    <AboutCoursebeeSection/>
    <OurMissionSection />
    <OurValueSection/>
    <TeachersSection />
    <NewsletterSection />
  </>
  )
}

export default About

export const getStaticProps:GetStaticProps = async ({ locale }) => {
    if (process.env.NODE_ENV === "development") {
      await i18n?.reloadResources();
    }
  
    return { props: {
      ...(await serverSideTranslations(locale || "en", ['common', 'about',]))
    }
    }
  }