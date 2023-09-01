import { useTranslation } from "next-i18next";
import UserRating from "./UserRating"

const users = [
    {avatar: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"},
    {avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
    {avatar: "https://tecdn.b-cdn.net/img/new/avatars/2.webp"},
    {avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
]

function BannerSection() {
  const {t} = useTranslation('home');

  return (
    <section className="max-w mx-auto px-4 h-[690px] my-16">
    <div
      data-animate = "clip-rect"
      data-delay = "0.3"
      data-scale = "1"
      data-direction = "rtl"
      className="relative bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url(/images/home/hero_new_ai_course_2.png)] bg-cover bg-center bg-no-repeat h-full rounded-lg"
    >
      <div
        className="h-full"
        >
        <div
          className="relative max-w-screen-xl flex flex-col justify-center md:flex-row md:justify-start items-center h-full"
          >
          <div
            className="max-w-2xl text-white px-4 sm:px-8 md:px-16 font-inter text-center md:text-left"
          >
            <p
              data-animate="text"
              data-delay="1"
              className="text-base sm:text-xl/loose font-bold"
            >
              {t('banner.announcement')}
            </p>
            <p
              dangerouslySetInnerHTML={{__html: t('banner.heading')}}
              data-animate="text"
              data-delay="1.2"
              className="mt-2 text-2xl md:text-4xl font-semibold"
            />
            <p
              data-animate="text"
              data-delay="1.4"
              className="mt-4 text-white/90"
            >
              {t('banner.paragraph')}
            </p>

            <div
              className="mt-8 flex flex-col md:flex-row gap-6 text-center items-center"
              >
              <div data-animate="button" data-delay="1.6">
                <button className="btn py-4">{t('banner.button')}</button>
              </div>
              <div className="flex items-center gap-2 flex-col md:flex-row">
                <div className="flex">
                    <UserRating className="w-8 rounded-full" />
                </div>
                <p
                  data-animate="text"
                  data-delay="2.2"
                  className="text-white/90 text-xs font-medium"
                  >
                  {t('banner.review')}
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  </section>
  )
}

export default BannerSection