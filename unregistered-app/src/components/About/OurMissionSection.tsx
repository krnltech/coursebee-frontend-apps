import Image from "next/image"
import { useTranslation } from "next-i18next"

function OurMissionSection() {
  const { t } = useTranslation('about');
  
  return (
    <section className="bg-lb-circle" data-animate="background-pos" data-delay="1.5">
        <div className="max-w mx-auto px-4 pt-36 flex items-center justify-center py-10 text-slate-900">
            <div className="grid md:grid-cols-2 justify-between items-start gap-10">
                <div className="text-center md:text-start">
                    <p className="text-bright-orange text-xl pb-1 font-semibold uppercase" data-animate="text">{t('mission.subheading')}</p>
                    <h2 className="font-semibold text-4xl md:text-6xl leading-10" data-animate="text" data-delay="0.3">{t('mission.heading')}</h2>
                    <div className="pt-20 md:pt-48">
                        <Image width={576} height={576} className="h-auto mx-auto md:mx-0 w-full max-w-xl" data-animate="clip-rect" data-delay="0.9" src="/images/mac.png" alt="Mac"/>
                    </div>
                </div>
                <div>
                    <p className="font-normal text-base md:text-xl leading-6">
                        <span data-animate="text" data-delay="0.6">{t('mission.desc1')}</span>
                        <br/>
                        <br/>
                        <br/>
                        <span data-animate="text" data-delay="0.9">{t('mission.desc2')}</span>
                    </p>
                    <div className="pt-20">
                        <Image width={576} height={576} className="h-auto mx-auto w-full max-w-xl" data-animate="clip-rect" data-direction="rtl" data-delay="0.9" src="/images/meeting.png" alt="Meeting"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurMissionSection