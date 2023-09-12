import Image from "next/image";
import { useTranslation } from "next-i18next";

function InstructorsSection() {
  const { t } = useTranslation("home");

  return (
    <section className="px-4 mx-auto overflow-x-hidden max-w">
      <div className="grid md:grid-cols-2 gap-[75px] md:justify-between pt-28 md:pt-40 p-2 mx-auto max-w">
        <div className="text-start md:px-8">
          <h2
            data-animate="text"
            className="text-3xl md:text-[45px] md:leading-[60px] font-medium text-center md:text-start"
          >
            {t("instructors.heading")}
          </h2>
          <p
            className="pt-[34px] text-dark-gray font-normal"
            data-animate="text"
            data-delay="0.5"
          >
            {t("instructors.subheading1")}
          </p>
          <p
            className="pt-[38px] text-dark-gray font-normal"
            data-animate="text"
            data-delay="1"
          >
            {t("instructors.subheading2")}
          </p>
          <div className="pt-[34px] flex flex-col md:flex-row gap-8">
            <div data-animate="button" data-delay="1.5">
              <button className="py-4 font-semibold btn">
                {t("instructors.btn.join")}
              </button>
            </div>
            <div data-animate="button" data-delay="2">
              <button className="py-4 font-semibold text-black bg-white border shadow btn">
                {t("instructors.btn.view")}
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl">
          <Image
            data-animate="clip-rect"
            data-delay="1.5"
            width={630}
            height={630}
            className="w-full max-w-[630px] mx-auto"
            src="/images/instructors.png"
            alt="Instructors"
          />
        </div>
      </div>
    </section>
  );
}

export default InstructorsSection;
