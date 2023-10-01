import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import HeroImageSlider from "../Slider/HeroImageSlider";
import RatingsAndStars from "../RatingsAndStars";

function HeroSection() {
  const { t } = useTranslation("home");
  const { locale } = useRouter();
  return (
    <section className="max-w mx-auto px-4 md:h-[calc(100vh-86px)] mt-[86px] flex items-center justify-center py-10 md:py-0">
      <div className="grid content-center grid-cols-1 gap-8 md:grid-cols-2 lg:gap-20">
        <div className="flex flex-col items-center md:items-start">
          <p
            data-animate="text"
            className="mb-2 text-xs font-semibold text-black md:text-sm"
          >
            {t("title")}
          </p>
          <h2
            data-animate="text"
            data-delay="0.2"
            className="text-2xl font-semibold md:text-4xl lg:text-6xl md:leading-tight"
          >
            {locale == "en" ? (
              <>
                {t("Learn In-Demand")} <br />
                {t("Skills With")}
                <span className="text-bright-orange"> {t("Ease")}</span>.
              </>
            ) : (
              <>{t("heading")}</>
            )}
          </h2>
          <p
            data-animate="text"
            data-delay="0.4"
            className="mt-4 text-sm text-center text-dark-gray md:text-base md:text-left"
          >
            {t("description")}
          </p>

          <div data-animate="text" data-delay="0.6" className="mt-4">
            <button className="py-4 font-semibold btn">
              {t("Explore Courses")}
            </button>
          </div>
          <div className="flex flex-col items-center gap-3 mt-8 lg:flex-row md:items-start">
            <RatingsAndStars />
          </div>
        </div>

        <div className="w-full overflow-hidden rounded-2xl">
          <HeroImageSlider />
          {/* <Image
            width={570}
            height={400}
            data-animate="clip-rect"
            data-delay="1"
            data-direction="rtl"
            alt="learning"
            src="/images/home/hero-section-1.png"
            className="absolute inset-0 object-cover w-full h-full rounded-2xl"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
