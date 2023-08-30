/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

function BannerSection() {
  return (
    <section className="max-w mt-32 md:mt-40 my-20 px-4">
      <div className="overflow-hidden relative bg-course-details-banner bg-cover bg-center bg-no-repeat h-auto md:h-[500px] rounded-lg">
        <GradiantImageBackground />
        <div className="flex items-center justify-center h-full flex-col gap-6 md:gap-12">
          <h1
            data-animate="text"
            className="text-3xl md:text-5xl font-bold text-white [word-spacing:2px] text-center py-8 px-4 md:py-0 md:px-0"
          >
            Entering into the field of UX/UI
          </h1>
          <div className="flex md:flex-row flex-col items-center gap-8 md:gap-20">
            <div className="flex items-center flex-col gap-2">
              <p
                data-animate="text"
                data-delay="0.3"
                className="text-black-v1 text-sm font-medium"
              >
                Starts From
              </p>
              <p
                data-animate="text"
                data-delay="0.4"
                className="text-2xl md:text-3xl font-semibold text-white"
              >
                24 June
              </p>
            </div>
            <div className="flex items-center flex-col gap-2">
              <p
                data-animate="text"
                data-delay="0.5"
                className="text-black-v1 text-sm font-medium"
              >
                Course Duration
              </p>
              <p
                data-animate="text"
                data-delay="0.6"
                className="text-2xl md:text-3xl font-semibold text-white"
              >
                24 Weeks
              </p>
            </div>
            <div className="flex items-center flex-col gap-2">
              <p
                data-animate="text"
                data-delay="0.7"
                className="text-black-v1 text-sm font-medium"
              >
                Course Fee
              </p>
              <p
                data-animate="text"
                data-delay="0.8"
                className="text-2xl md:text-3xl font-semibold text-white"
              >
                4999.99 <span className="text-sm">BDT</span>
              </p>
            </div>
            <div className="flex items-center flex-col gap-2">
              <p
                data-animate="text"
                data-delay="0.9"
                className="text-black-v1 text-sm font-medium"
              >
                Student Count
              </p>
              <p
                data-animate="text"
                data-delay="1"
                className="text-2xl md:text-3xl font-semibold text-white"
              >
                79
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-full md:w-auto p-4 md:p-0 gap-4 mt-4 md:mt-14">
            <button
              data-animate="button"
              data-delay="1.3"
              className="py-4 px-10 bg-white text-bright-orange rounded-lg font-semibold"
            >
              Enroll now
            </button>
            <button
              data-animate="button"
              data-delay="1.6"
              className="py-4 px-10 bg-[#1F293D] text-white border-[#1F293D] rounded-lg font-semibold"
            >
              Enroll for next batch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;

const GradiantImageBackground = () => {
  return (
    <>
      <img
        alt="gradiant-bg"
        data-animate="image-position"
        data-top="-65px"
        src="/images/courses/banner/rect-top.svg"
        className="blur-[6px] absolute top-0 left-0 opacity-40"
      />
      <img
        alt="gradiant-bg"
        data-animate="image-position"
        data-top="-220px"
        src="/images/courses/banner/rect-top-right.svg"
        className="blur-[6px] absolute top-0 right-0 opacity-60"
      />
      <img
        alt="gradiant-bg"
        data-animate="image-position"
        data-right="-100px"
        src="/images/courses/banner/rect-right.svg"
        className="blur-[6px] absolute top-10 right-0 opacity-40"
      />
      <img
        alt="gradiant-bg"
        data-animate="image-position"
        data-bottom="-50px"
        src="/images/courses/banner/rect-bottom.svg"
        className="blur-[6px] absolute bottom-0 right-0 opacity-40"
      />
      <img
        alt="gradiant-bg"
        data-animate="image-position"
        data-left="-100px"
        src="/images/courses/banner/rect-left.svg"
        className="blur-[6px] absolute bottom-10 left-0 opacity-40"
      />
      <img
        alt="gradiant-bg"
        data-animate="image-position"
        data-top="450px"
        src="/images/courses/banner/rect-left-2.svg"
        className="blur-[6px] absolute bottom-0 left-0 opacity-75"
      />
    </>
  );
};
