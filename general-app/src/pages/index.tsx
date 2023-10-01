import Articles from "@/components/Home/Articles";
import BannerSection from "@/components/Home/BannerSection";
import BrowseOurCourseSection from "@/components/Home/BrowseOurCourseSection";
import CareerSection from "@/components/Home/CareerSection";
import EnrollSection from "@/components/Home/EnrollSection";
import ExpertPanelSection from "@/components/Home/ExpertPanelSection";
import FeaturedSection from "@/components/Home/FeaturedSection";
import HeroSection from "@/components/Home/HeroSection";
import InstructorsSection from "@/components/Home/InstructorsSection";
import NewsletterSection from "@/components/Home/NewsletterSection";
import SocialMediaSection from "@/components/Home/SocialMediaSection";
import StudentsFeedback from "@/components/Home/StudentsFeedback";
import { GetStaticProps } from "next";
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CourseBee</title>
      </Head>

      <HeroSection />
      <BannerSection />
      <FeaturedSection />
      <BrowseOurCourseSection />
      <StudentsFeedback />
      <InstructorsSection />
      <ExpertPanelSection />
      <CareerSection />
      <Articles />
      <SocialMediaSection />
      <EnrollSection />
      <NewsletterSection />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (process.env.NODE_ENV === "development") {
    await i18n?.reloadResources();
  }

  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common", "home"])),
    },
  };
};
