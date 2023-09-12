import { useTranslation } from "next-i18next";
import UserRating from "./UserRating";

function BannerSection() {
  const { t } = useTranslation("home");

  return (
    <section className="max-w mx-auto px-4 h-[690px] my-16">
      <div
        data-animate="clip-rect"
        data-delay="0.3"
        data-scale="1"
        data-direction="rtl"
        className="relative bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url(/images/home/hero_new_ai_course_2.png)] bg-cover bg-center bg-no-repeat h-full rounded-lg"
      >
        <div className="h-full">
          <div className="relative flex flex-col items-center justify-center h-full max-w-screen-xl md:flex-row md:justify-start">
            <div className="max-w-2xl px-4 text-center text-white sm:px-8 md:px-16 font-inter md:text-left">
              <p
                data-animate="text"
                data-delay="1"
                className="text-base font-bold sm:text-xl/loose"
              >
                {t("banner.announcement")}
              </p>
              <p
                dangerouslySetInnerHTML={{ __html: t("banner.heading") }}
                data-animate="text"
                data-delay="1.2"
                className="mt-2 text-2xl font-semibold md:text-4xl"
              />
              <p
                data-animate="text"
                data-delay="1.4"
                className="mt-4 text-white/90"
              >
                {t("banner.paragraph")}
              </p>

              <div className="flex flex-col items-center gap-6 mt-8 text-center md:flex-row">
                <div data-animate="button" data-delay="1.6">
                  <button className="py-4 btn">{t("banner.button")}</button>
                </div>
                <div className="flex flex-col items-center gap-2 md:flex-row">
                  <div className="flex">
                    <UserRating className="w-8 rounded-full" />
                  </div>
                  <p
                    data-animate="text"
                    data-delay="2.2"
                    className="text-xs font-medium text-white/90"
                  >
                    {t("banner.review")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
