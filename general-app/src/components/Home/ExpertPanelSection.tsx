import { useTranslation } from "next-i18next"
import Counter from "./Counter"
import Image from "next/image";

function ExpertPanelSection() {
  const { t } = useTranslation('home');

  return (
    <section className="max-w mx-auto px-4">
    <div className="pt-[120px]">
      <h2
        data-animate="text"
        className="text-3xl text-center md:text-[45px] md:leading-[60px] font-medium"
      >
        {t("expert.heading")}
      </h2>
      <p
        data-animate="text"
        data-delay="0.2"
        className="pt-[34px] text-center text-dark-gray font-normal mx-auto max-w-[830px]"
      >
        {t("expert.subheading1")} <br /><br />{t("expert.subheading2")}
      </p>
      <div className="pt-16 md:pt-32 overflow-hidden">
        <Image
          data-animate="clip-rect"
          data-delay="0.3"
          width={1290}
          height={780}
          className="w-full mx-auto max-w"
          src="/images/expert_panel.png"
          alt="Expert Panel"
        />
      </div>

      <div
        data-animate="text"
        className="pt-20 md:pt-36 flex flex-col md:flex-row justify-center items-center gap-4 stats-level"
      >
        <div
          className="text-center md:border-r max-w-[330px] w-full border-black"
        >
          <p
            className="text-3xl md:text-[42px] font-bold text-bright-orange stats"
          >
            <Counter end={98}/>
          </p>
          <p className="pb-4 font-normal text-[18px] mt-2">{t("expert.counter.nps")}</p>
        </div>

        <div
          className="text-center md:border-r max-w-[330px] w-full border-black"
        >
          <p
            className="text-3xl md:text-[42px] font-bold text-bright-orange stats"
          >
            <Counter end={3000}/>
          </p>
          <p className="pb-4 font-normal text-[18px] mt-2">{t("expert.counter.alumni")}</p>
        </div>

        <div
          className="text-center md:border-r max-w-[330px] w-full border-black"
        >
          <p
            className="text-3xl md:text-[42px] font-bold text-bright-orange stats"
          >
            <Counter end={6000}/>
          </p>
          <p className="pb-4 font-normal text-[18px] mt-2">
          {t("expert.counter.hours")}
          </p>
        </div>

        <div className="text-center max-w-[330px] w-full">
          <p
            className="text-3xl md:text-[42px] font-bold text-bright-orange stats"
          >
            <Counter end={50}/>
          </p>
          <p className="pb-4 font-normal text-[18px] mt-2">{t("expert.counter.newjoiners")}</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ExpertPanelSection