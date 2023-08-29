import BannerSection from '@/components/CourseDetails/BannerSection'
import HeroSection from '@/components/CourseDetails/HeroSection'
import React from 'react'
import { GetStaticPaths, GetStaticProps } from "next";
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Course, courses_en } from '@/libs/courses';
import CourseInfo from '@/components/CourseDetails/CourseInfo';
import LearningSection from '@/components/CourseDetails/LearningSection';
import CourseModule from '@/components/CourseDetails/CourseModule';
import WhyThisCourseSection from '@/components/CourseDetails/WhyThisCourseSection';
import ReviewSection from '@/components/CourseDetails/ReviewSection';
import Head from 'next/head';
import ExpertPanel from '@/components/CourseDetails/ExpertPanel';
import SimilarCoursesSection from '@/components/CourseDetails/SimilarCourses';
import FAQSection from '@/components/CourseDetails/FAQSection';

type Props = {
    course: Course;
}

function Course(props:Props) {

    return (
    <>
        <Head>
            <title> {props.course ? props.course.title : "Loading"} </title>
        </Head>
        <BannerSection/>
        <HeroSection />
        <CourseInfo />
        <LearningSection />
        <CourseModule />
        <WhyThisCourseSection />
        <ReviewSection />
        <ExpertPanel />
        <SimilarCoursesSection />
        <FAQSection />
    </>
  )
}

export default Course;

export const getStaticProps:GetStaticProps = async ({ locale, params }) => {
    if (process.env.NODE_ENV === "development") {
      await i18n?.reloadResources();
    }
    let course;
    if (params)
        course = courses_en.find(_course => _course.title.toLowerCase().replace(/[\s']/g, '-') == params.title )
    
    return { props: {
      course,
      ...(await serverSideTranslations(locale || "en", ['common', 'courses',]))
    }
    }
  }


type CourseProps = {
    title: string
}
export const getStaticPaths: GetStaticPaths<CourseProps> = async ({locales}) => {
    let paths = [];
    if (locales) {
        for (const locale of locales) {
            for (const course of courses_en) {
                paths.push({
                    params: { title: course.title.toLowerCase().replace(/[\s']/g, '-') },
                    locale,
                  })
            }
        }
    }
    return {
        paths,
        fallback: false
    }
}