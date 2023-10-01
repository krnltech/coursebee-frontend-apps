import CardBg from "@/components/CardBg";
import AnnouncementSection from "@/components/Courses/AnnouncementSection";
import CoursesSection from "@/components/Courses/CoursesSection";
import FeedbackSection from "@/components/Courses/FeedbackSection";
import IntroSection from "@/components/Courses/IntroSection";
import NewsletterSection from "@/components/NewsletterSection";
import { GetStaticProps } from "next";
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

function Courses() {
  return (
    <>
      <Head>
        <title>Courses - CourseBee</title>
      </Head>
      <div className="relative pb-24 md:pb-36 md:mb-4">
        <IntroSection />
        <AnnouncementSection />
        <CardBg className="absolute w-4/5 -translate-x-1/2 left-1/2 right-1/2 bottom-16 -z-10" />
      </div>
      <CoursesSection />
      <FeedbackSection />
      <NewsletterSection />
    </>
  );
}

export default Courses;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (process.env.NODE_ENV === "development") {
    await i18n?.reloadResources();
  }

  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common", "courses"])),
    },
  };
};
