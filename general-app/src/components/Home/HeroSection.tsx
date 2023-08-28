import { useTranslation } from "next-i18next";
import RatingsAndStars from "./RatingsAndStars";
import { useRouter } from "next/router";

function HeroSection() {
    const {t} = useTranslation('home');
    const {locale} = useRouter();
  return (
    <section className="max-w mx-auto px-4 md:h-[calc(100vh-86px)] mt-[86px] flex items-center justify-center py-10 md:py-0">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-20 content-center">
        <div className="flex flex-col items-center md:items-start">
          <p
            data-animate="text"
            className="text-black font-semibold mb-2 text-xs md:text-sm"
          >
            {t('title')}
          </p>
          <h2
            data-animate="text"
            data-delay="0.2"
            className="text-2xl font-semibold md:text-4xl lg:text-6xl md:leading-tight"
          >
            {
                locale == 'en' ?
                <>
                    {t("Learn In-Demand")} <br />{t("Skills With")}
                    <span className="text-bright-orange"> {t("Ease")}</span>.
                </>
            :
            <>{t("heading")}</>
            }
          </h2>
          <p
            data-animate="text"
            data-delay="0.4"
            className="mt-4 text-dark-gray text-sm md:text-base text-center md:text-left"
          >
            {t("description")}
          </p>

          <div data-animate="text" data-delay="0.6" className="mt-4">
            <button className="btn py-4 font-semibold">{t("Explore Courses")}</button>
          </div>
          <div className="mt-8 flex flex-col lg:flex-row gap-3 items-center md:items-start">
            <RatingsAndStars/>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[400px] w-full white-gradiant-left overflow-hidden rounded-2xl">
          <img
            data-animate="clip-rect"
            data-delay="1"
            data-direction="rtl"
            alt="learning"
            src="/images/home/hero-section-1.png"
            className="absolute inset-0 h-full w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
