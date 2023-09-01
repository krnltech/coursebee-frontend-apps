import Image from "next/image";
import { useTranslation } from "next-i18next";

export default function FeaturedSection() {
    const { t } =  useTranslation('home');

    return (
        <section className="max-w mx-auto px-4 pt-10 md:pt-20 pb-20 md:pb-28">
            <div className="flex w-full flex-col md:flex-row gap-10 md:gap-0">
                <div className="w-full md:w-2/5 space-y-2 pr-4">
                    <h2 className="text-2xl font-semibold" data-animate="text">{t('featured.h1')}</h2>
                    <p className="text-xs" data-animate="text" data-delay="0.2">
                    {t('featured.s1')}
                    </p>
                    <p
                        className="text-sm text-dark-gray"
                        data-animate="text"
                        data-delay="0.4"
                    >
                        {t('featured.d1')}
                    </p>
                </div>
                <div
                    className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:pl-16"
                >
                    <div>
                        <div className="flex items-start gap-4">
                            <Image width={20} height={20}
                                src="/icons/people.svg"
                                alt="people" className="w-5 h-5 mt-1" data-animate="text" data-delay="0.4"
                            />

                            <div>
                                <h2 className="text-lg font-bold" data-animate="text" data-delay="0.6"
                                >
                                    {t('featured.h2')}
                                </h2>

                                <p className="mt-1 text-sm text-dark-gray" data-animate="text" data-delay="0.7"
                                >
                                    {t('featured.d2')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-start gap-4">
                            <Image width={20} height={20} className="w-5 h-5 mt-1" data-animate="text" src="/icons/certificate.svg" alt="people" data-delay="0.7"
                            />

                            <div>
                                <h2 className="text-lg font-bold" data-animate="text" data-delay="0.8"
                                >
                                    {t('featured.h5')}
                                </h2>
                                <p className="mt-1 text-sm text-dark-gray" data-animate="text" data-delay="0.9"
                                >
                                    {t('featured.d5')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-start gap-4">
                            <Image width={20} height={20} src="/icons/chat.svg" alt="people" className="w-5 h-5 mt-1" data-animate="text" data-delay="0.9"
                            />
                            <div>
                                <h2 className="text-lg font-bold" data-animate="text" data-delay="1">
                                {t('featured.h3')}
                                </h2>
                                <p className="mt-1 text-sm text-dark-gray" data-animate="text" data-delay="1.1"
                                >{t('featured.d3')}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-start gap-4">
                            <Image width={20} height={20}
                                src="/icons/check.svg" alt="people" className="w-5 h-5 mt-1" data-animate="text" data-delay="1.1"
                            />

                            <div>
                                <h2 className="text-lg font-bold" data-animate="text" data-delay="1.2"
                                >
                                    {t('featured.h6')}
                                </h2>

                                <p className="mt-1 text-sm text-dark-gray" data-animate="text" data-delay="1.3"
                                >
                                    {t('featured.d6')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-start gap-4">
                            <Image width={20} height={20}
                                src="/icons/download.svg"
                                alt="people" className="w-5 h-5 mt-1" data-animate="text" data-delay="1.3"
                            />
                            <div>
                                <h2 className="text-lg font-bold" data-animate="text" data-delay="1.4"
                                >
                                    {t('featured.h4')}
                                </h2>

                                <p className="mt-1 text-sm text-dark-gray" data-animate="text" data-delay="1.5"
                                >
                                    {t('featured.d4')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-start gap-4">
                            <Image width={20} height={20}
                                src="/icons/video.svg"
                                alt="people" className="w-5 h-5 mt-1" data-animate="text" data-delay="1.6"
                            />
                            <div>
                                <h2 className="text-lg font-bold" data-animate="text" data-delay="1.7"
                                >
                                    {t('featured.h7')}
                                </h2>

                                <p className="mt-1 text-sm text-dark-gray" data-animate="text" data-delay="1.8"
                                >
                                    {t('featured.d7')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

