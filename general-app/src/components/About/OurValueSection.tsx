import Image from "next/image"
import { useTranslation } from "next-i18next"

function OurValueSection() {
 const { t } = useTranslation('about');
 return (
    <section className="pt-52 px-4">
        <div className="mx-auto max-w md:grid md:grid-cols-3 justify-between items-start gap-12">
            <div className="text-center md:text-start mx-auto">
                <p className="text-bright-orange text-xl pb-1 font-semibold uppercase" data-animate="text">{t('value.subheading')}</p>
                <h2 className="font-semibold text-4xl md:text-6xl leading-10" data-animate="text" data-delay="0.3">{t('value.heading')}</h2>
                <p className="pt-4 text-dark-gray" data-animate="text" data-delay="0.6">{t('value.desc')}</p>
                <div className="pt-10" data-animate="button" data-delay="0.9">
                    <button className="px-12 py-4 text-lg font-bold btn mx-auto md:mx-0">{t('value.btn.explore')}</button>
                </div>
            </div>
            <div className="col-span-2 grid sm:grid-cols-2 gap-6">
                <div>
                    <div className="rounded-lg mt-6 shadow p-6" data-animate="text" data-delay="0.3">
                        <div className="pb-4">
                            <Image width={64} height={64} className="w-16 h-16" src="/icons/about/relevance.svg" alt="Relevance" />
                        </div>
                        <h2 className="font-semibold text-xl pb-2"> {t('value.feature.heading1')} </h2>
                        <p className="text-dark-gray">{t('value.feature.desc1')}</p>
                    </div>
                    <div className="rounded-lg mt-6 shadow p-6" data-animate="text" data-delay="0.6">
                        <div className="pb-4">
                            <Image width={64} height={64} className="w-16 h-16" src="/icons/about/flexibility.svg" alt="Flexibility"/>
                        </div>
                        <h2 className="font-semibold text-xl pb-2"> {t('value.feature.heading2')} </h2>
                        <p className="text-dark-gray">{t('value.feature.desc2')}</p>
                    </div>
                    <div className="rounded-lg mt-6 shadow p-6" data-animate="text" data-delay="0.9">
                        <div className="pb-4">
                            <Image width={64} height={64} className="w-16 h-16" src="/icons/about/excellence.svg" alt="Excellence"/>
                        </div>
                        <h2 className="font-semibold text-xl pb-2"> {t('value.feature.heading3')} </h2>
                        <p className="text-dark-gray">{t('value.feature.desc3')}</p>
                    </div>
                </div>
                <div className="sm:pt-20">
                    <div className="rounded-lg mt-6 shadow p-6" data-animate="text" data-delay="1.2">
                        <div className="pb-4">
                            <Image width={64} height={64} className="w-16 h-16" src="/icons/about/support.svg" alt="Support"/>
                        </div>
                        <h2 className="font-semibold text-xl pb-2">{t('value.feature.heading4')}</h2>
                        <p className="text-dark-gray">{t('value.feature.desc3')}</p>
                    </div>
                    <div className="rounded-lg mt-6 shadow p-6" data-animate="text" data-delay="1.5">
                        <div className="pb-4">
                            <Image width={64} height={64} className="w-16 h-16" src="/icons/about/collaboration.svg" alt="Collaboration" />
                        </div>
                        <h2 className="font-semibold text-xl pb-2"> {t('value.feature.heading5')} </h2>
                        <p className="text-dark-gray">{t('value.feature.desc5')}</p>
                    </div>
                    <div className="rounded-lg mt-6 shadow p-6" data-animate="text" data-delay="1.8">
                        <div className="pb-4">
                            <Image width={64} height={64} className="w-16 h-16" src="/icons/about/empowerment.svg" alt="Empowerment" />
                        </div>
                        <h2 className="font-semibold text-xl pb-2">{t('value.feature.heading6')}</h2>
                        <p className="text-dark-gray">{t('value.feature.desc6')}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurValueSection