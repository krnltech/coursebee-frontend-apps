import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function EnrollSection() {
  const { t } = useTranslation("home");

  return (
    <section className="overflow-x-hidden pt-36">
      <div className="text-white bg-bright-orange">
        <div className="px-4 py-4 bg_circle_gradiant md:py-14">
          <div className="grid md:grid-cols-2 justify-center items-center max-w-[1000px] gap-6 mx-auto py-6">
            <div className="flex flex-col items-center justify-center mb-4 md:items-start">
              <h2
                data-animate="text"
                className="font-semibold text-[32px] leading-10 text-center md:text-start"
              >
                {t("enroll.heading")}
              </h2>
              <p
                data-animate="text"
                data-delay="0.5"
                className="pt-6 max-w-[494px]"
              >
                {t("enroll.subheading1")}
              </p>
              <div className="py-6" data-animate="button" data-delay="1">
                <button
                  data-animate="text"
                  data-delay="1.2"
                  className="text-black bg-white rounded-[5px] border py-3 px-10 text-lg font-semibold mb-10 hover:outline-black transition"
                >
                  {t("enroll.btn.enroll")}
                </button>
              </div>
              <div className="flex flex-col items-center gap-4 md:flex-row">
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
                    className="w-10 -ml-2 border-2 border-white rounded-full"
                    alt="Avatar"
                  />
                  <Image
                    width={40}
                    height={40}
                    data-animate="text"
                    data-delay="1.7"
                    src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                    className="w-10 -ml-2 border-2 border-white rounded-full"
                    alt="Avatar"
                  />
                  <Image
                    width={40}
                    height={40}
                    data-animate="text"
                    data-delay="1.8"
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    className="w-10 -ml-2 border-2 border-white rounded-full"
                    alt="Avatar"
                  />
                </div>
                <p data-animate="text" data-delay="2">
                  {t("enroll.subheading2")}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center overflow-hidden rounded-sm">
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
  );
}
