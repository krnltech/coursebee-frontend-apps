import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function EnrollSection() {
    const { t } = useTranslation('home');

    return (
        <section className="pt-36 overflow-x-hidden">
            <div className="bg-bright-orange text-white">
                <div className="bg_circle_gradiant py-4 md:py-14 px-4">
                    <div className="grid md:grid-cols-2 justify-center items-center max-w-[1000px] gap-6 mx-auto py-6"
                    >
                        <div className="flex flex-col items-center justify-center md:items-start mb-4"
                        >
                            <h2
                                data-animate="text"
                                className="font-semibold text-[32px] leading-10 text-center md:text-start"
                            >
                                {t("enroll.heading")}
                            </h2>
                            <p
                                data-animate="text"
                                data-delay="0.5"
                                className="pt-6 pb-8 max-w-[494px]"
                            >
                                {t("enroll.subheading1")}
                            </p>
                            <div className="w-full text-center" data-animate="button" data-delay="1">
                                <button
                                    data-animate="text"
                                    data-delay="1.2"
                                    className="text-bright-orange bg-white rounded-[5px] border py-3 max-w-[308px] font-semibold w-full text-xl mb-10 hover:bg-bright-orange hover:text-white transition"
                                >
                                    {t("enroll.btn.enroll")}
                                </button>
                            </div>
                            <div className="flex items-center flex-col md:flex-row gap-4">
                                <div className="flex">
                                    <Image
                                        width={40}
                                        height={40}
                                        data-animate="text"
                                        data-delay="1.5"
                                        src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                                        className="w-10 rounded-full"
                                        alt="Avatar"
                                    />
                                    <Image
                                        width={40}
                                        height={40}
                                        data-animate="text"
                                        data-delay="1.6"
                                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                                        className="w-10 rounded-full border-2 border-white -ml-2"
                                        alt="Avatar"
                                    />
                                    <Image
                                        width={40}
                                        height={40}
                                        data-animate="text"
                                        data-delay="1.7"
                                        src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                                        className="w-10 rounded-full border-2 border-white -ml-2"
                                        alt="Avatar"
                                    />
                                    <Image
                                        width={40}
                                        height={40}
                                        data-animate="text"
                                        data-delay="1.8"
                                        src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        className="w-10 rounded-full border-2 border-white -ml-2"
                                        alt="Avatar"
                                    />
                                </div>
                                <p data-animate="text" data-delay="2">
                                    {t("enroll.subheading2")}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center rounded-sm justify-center overflow-hidden">
                            <Image
                                width={422}
                                height={422}
                                data-animate="clip-rect"
                                data-delay="2.2"
                                className="m-end-auto md:max-w-[422px] w-full"
                                src="/images/heroImage.png"
                                alt="A person using her computer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
