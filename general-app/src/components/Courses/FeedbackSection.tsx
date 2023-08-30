import Image from "next/image";
import { useTranslation } from "next-i18next";

function FeedbackSection() {
  const { t } = useTranslation('courses');
  return (
    <>
    <section className="max-w mx-auto pt-52 px-3">
      <div className="max-w-6xl mx-auto grid justify-between items-center md:grid-cols-2">
        <div>
          <h2 className="font-medium text-4xl" data-animate="text">
            {t('feedback.heading')}
          </h2>
          <p
            className="py-6 text-dark-gray"
            data-animate="text"
            data-delay="0.5"
          >
            {t('feedback.subheading')}
          </p>
          <button
            className="shadow bg-bright-orange text-white rounded-md px-9 py-4"
            data-animate="button"
            data-delay="0.7"
          >
            {t('feedback.btn.contact')}
          </button>
        </div>
        <div className="overflow-hidden relative">
          <Image
            width={512}
            height={512}
            className="w-full max-w-lg md:m-end-auto p-[1px]"
            src="/images/courses/Feedback.svg"
            alt="Feedback"
          />
          <div
            data-animate="image"
            data-delay="0.3"
            className="mask-anime"
          ></div>
        </div>
      </div>
    </section>
    </>
  );
}

export default FeedbackSection;
