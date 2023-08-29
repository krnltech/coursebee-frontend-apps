import Image from "next/image"
import { useTranslation } from "next-i18next"

function AboutCoursebeeSection() {
  const { t } = useTranslation('about');

  return (
    <section className="max-w mx-auto px-4 pt-36 md:pt-52 flex items-center justify-center py-10 text-slate-900">
    <div className="grid md:grid-cols-2 justify-between items-center gap-10">
        <div className="text-center md:text-start">
            <p className="text-bright-orange text-xl pb-1 font-semibold uppercase" data-animate="text">{t('about.subheading')}</p>
            <h2 className="font-semibold text-4xl md:text-6xl leading-10" data-animate="text" data-delay="0.3">{t('about.heading')}</h2>
            <div className="pt-20 md:pt-48">
                <Image width={672} height={672} className="h-auto mx-auto md:mx-0 w-full max-w-2xl" data-animate="clip-rect" data-delay="0.6" src="/images/videodevice.png" alt="Video device"/>
            </div>
        </div>
        <div>
            <p className="font-normal text-base md:text-xl leading-6" data-animate="text" data-delay="0.6">
                {t('about.desc')}
            </p>
            <div className="pt-20">
                <Image width={672} height={672} className="h-auto mx-auto w-full max-w-2xl" data-animate="clip-rect" data-direction="rtl" data-delay="0.6" src="/images/laptop.png" alt="Laptop"/>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutCoursebeeSection