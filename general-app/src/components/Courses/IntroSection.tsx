import { useTranslation } from "next-i18next"

export default function IntroSection() {
  const { t } = useTranslation('courses');

  return (
    <section className="text-center max-w mx-auto mt-56 px-3">
      <h1 className="text-4xl md:text-6xl font-medium pb-4" data-animate="text">
        {t('intro.heading')}
      </h1>
      <p
        className="text-lg text-dark-gray max-w-4xl mx-auto" data-animate="text" data-delay="0.5">
          {t('intro.desc')}
      </p>
    </section>
  )
}
