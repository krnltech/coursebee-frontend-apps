import { useTranslation } from "next-i18next";
import Image from "next/image"

function SocialMediaSection() {
  const { t } = useTranslation('home');

  return (
    <section className="pt-28 md:pt-44 max-w mx-auto px-4">
    <div className="grid md:grid-cols-2 items-center gap-8 md:gap-32">
      <div className="overflow-hidden relative">
        <Image
          width={576}
          height={450}
          data-animate="clip-rect"
          className="max-w-xl w-full mx-auto"
          src="/images/follow_us_social_media_illustration.svg"
          alt="follow_us_social_media_illustration"
        />
      </div>
      <div data-animate="text" data-delay="1" className="text-center">
        <h2 className="font-semibold text-[32px] leading-10 text-bright-orange">
          {t("social.heading")}
        </h2>
        <p
          data-animate="text"
          data-delay="1.5"
          className="pt-2 text-dark-gray text-lg"
        >
          {t("social.subheading")}
        </p>
        <div
          className="pt-14 flex items-center justify-center gap-8 md:gap-16 px-4 mx-auto flex-wrap"
        >
          <button data-animate="text" data-delay="2">
            <Image width={100} height={34} src="/icons/facebook.svg" alt="Facebook" />
          </button>
          <button data-animate="text" data-delay="2.2">
            <Image width={100} height={34} src="/icons/google.svg" alt="Google" />
          </button>
          <button data-animate="text" data-delay="2.4">
            <Image width={100} height={34} src="/icons/youtube.svg" alt="Youtube" />
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SocialMediaSection