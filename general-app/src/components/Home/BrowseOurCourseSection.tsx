import { courses_bn, courses_en } from "@/libs/courses"
import Card from "../Card"
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";


function BrowseOurCourseSection() {
  const { t } = useTranslation('home');
  const { locale } = useRouter();
  
  return (
    <section className="max-w mx-auto px-4">
      <div>
        <h2
          data-animate="text"
          className="text-3xl md:text-[45px] text-center md:leading-[60px] font-medium"
        >
          {t('browse.heading')}
        </h2>
        <p
          data-animate="text"
          data-delay="0.4"
          className="py-[15px] text-center text-dark-gray mx-auto max-w-[666px] font-normal"
        >
          {t('browse.subheading')}
        </p>
      </div>

      <div className="w-full">
        <div
          className="grid justify-center items-center pt-12 gap-4 mx-auto px-4 md:px-0 tabpanel-btns max-w-[800px]"
        >
          <div data-animate="button" data-delay="0.8">
            <button
              className="browse_courses_tab hover:opacity-100 transition-all"
            >
              <Image
                width={40}
                height={40}
                src="/icons/all_courses.svg"
                className="w-10 h-10"
                alt="All courses"
              />
              <p className="font-medium md:text-lg leading-7">{t("browse.btn.all")}</p>
            </button>
          </div>
          <div data-animate="button" data-delay="1">
            <button
              className="browse_courses_tab opacity-70 hover:opacity-100 transition-all"
            >
              <Image
                width={40}
                height={40} src="/icons/design.svg" className="w-10 h-10" alt="Trending" />
              <p className="font-medium md:text-lg leading-7">{t("browse.btn.trending")}</p>
            </button>
          </div>
          <div data-animate="button" data-delay="1.2">
            <button
              className="browse_courses_tab opacity-70 hover:opacity-100 transition-all"
            >
              <Image
                width={40}
                height={40}
                src="/icons/development.svg"
                className="w-10 h-10"
                alt="Latest"
              />
              <p className="font-medium md:text-lg leading-7">{t("browse.btn.latest")}</p>
            </button>
          </div>
          <div data-animate="button" data-delay="1.4">
            <button
              className="browse_courses_tab opacity-70 hover:opacity-100 transition-all"
            >
              <Image
                width={40}
                height={40}
                src="/icons/marketing.svg"
                className="w-10 h-10"
                alt="Popular"
              />
              <p className="font-medium md:text-lg leading-7">{t("browse.btn.popular")}</p>
            </button>
          </div>
        </div>
      </div>

      <div className="pt-16 grid justify-center md:grid-cols-2 lg:grid-cols-3 md:justify-center items-center md:items-stretch gap-4 mx-auto">
        {(locale == 'en' ? courses_en : courses_bn).slice(0, 6).map((course, i) => (
          <Card
            key={i + "course"}
            title={course.title}
            description={course.desc}
            price={course.price}
            cover={course.cover}
            subtitle={course.subtitle}
            category={course.category}
          />
        ))}
      </div>

      <div
        data-animate="button"
        className="mx-auto w-full py-[85px] flex items-center justify-center"
      >
        <Link href={"/courses"} className="py-5 px-10 btn font-semibold">
          {t("browse.btn.explore")}
        </Link>
      </div>
    </section>
  );
}

export default BrowseOurCourseSection