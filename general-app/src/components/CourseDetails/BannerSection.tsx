/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

function BannerSection() {
  return (
    <section className="px-4 my-20 mt-32 max-w md:mt-40">
      <div className="overflow-hidden relative bg-course-details-banner bg-cover bg-center bg-no-repeat h-auto md:h-[500px] rounded-lg">
        <GradiantImageBackground />
        <div className="flex flex-col items-center justify-center h-full gap-6 md:gap-12">
          <h1
            data-animate="text"
            className="text-3xl max-w-4xl md:text-[45px] font-semibold text-white [word-spacing:2px] text-center py-8 px-4 md:py-0 md:px-0 leading-snug"
          >
            Complete Digital Entrepreneurship Business Guideline
          </h1>
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-20">
            <div className="flex flex-col items-center gap-2">
              <p
                data-animate="text"
                data-delay="0.3"
                className="text-sm font-medium text-white"
              >
                Starts From
              </p>
              <p
                data-animate="text"
                data-delay="0.4"
                className="text-2xl font-semibold text-white md:text-3xl"
              >
                1 January
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p
                data-animate="text"
                data-delay="0.5"
                className="text-sm font-medium text-white"
              >
                Course Duration
              </p>
              <p
                data-animate="text"
                data-delay="0.6"
                className="text-2xl font-semibold text-white md:text-3xl"
              >
                42 Hours
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p
                data-animate="text"
                data-delay="0.7"
                className="text-sm font-medium text-white"
              >
                Course Fee
              </p>
              <p
                data-animate="text"
                data-delay="0.8"
                className="text-2xl font-semibold text-white md:text-3xl"
              >
                4999.99 <span className="text-sm">BDT</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p
                data-animate="text"
                data-delay="0.9"
                className="text-sm font-medium text-white"
              >
                Student Count
              </p>
              <p
                data-animate="text"
                data-delay="1"
                className="text-2xl font-semibold text-white md:text-3xl"
              >
                79
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 p-4 md:flex-row md:w-auto md:p-0">
            <button
              data-animate="button"
              data-delay="1.3"
              className="px-8 py-3 font-semibold bg-white rounded-lg text-bright-orange"
            >
              Enroll now
            </button>
            <button
              data-animate="button"
              data-delay="1.6"
              className="py-3 px-8 bg-[#1F293D] text-white border-[#1F293D] rounded-lg font-semibold"
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
