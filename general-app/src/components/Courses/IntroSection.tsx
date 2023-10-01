import { useTranslation } from "next-i18next";

export default function IntroSection() {
  const { t } = useTranslation("courses");

  return (
    <section className="px-3 mx-auto text-center mt-36 md:mt-56 max-w">
      <h1 className="pb-4 text-4xl font-medium md:text-6xl" data-animate="text">
        {t("intro.heading")}
      </h1>
      <p
        className="max-w-3xl mx-auto text-base lg:text-xl text-ncolor-500"
        data-animate="text"
        data-delay="0.5"
      >
        {t("intro.desc")}
      </p>
    </section>
  );
}
