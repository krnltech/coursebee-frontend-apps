import RatingsAndStars from "../RatingsAndStars";

function HeroSection() {
  return (
    <section className="flex items-center justify-center px-4 mx-auto max-w mt-36">
      <div className="grid content-center grid-cols-1 gap-8 md:grid-cols-2 lg:gap-20">
        <div className="flex flex-col items-center md:items-start">
          <p
            data-animate="text"
            className="mb-2 text-sm font-semibold text-bright-orange md:text-base"
          >
            Idea to Establish Your Business Online
          </p>
          <h2
            data-animate="text"
            data-delay="0.2"
            className="text-2xl font-medium text-center md:text-5xl md:leading-tight md:text-start"
          >
            Complete Digital Entrepreneurship Business Guideline
          </h2>
          <p
            data-animate="text"
            data-delay="0.4"
            className="max-w-xl mt-4 text-sm text-center text-dark-gray md:text-base md:text-left lg:w-full"
          >
            Learn more about how to start an online business through this
            course.We have designed our course in such a way that as you learn
            each module, you can apply it in practice.
          </p>

          <p
            className="text-lg mt-7 text-black-v1"
            data-animate="text"
            data-delay="0.6"
          >
            Instructor:
            <span className="text-bright-orange"> Ifaz Ahmed Aflan</span>
          </p>

          <div
            data-sal="slide-right"
            data-sal-delay="600"
            className="flex flex-col items-center gap-3 mt-7 lg:flex-row md:items-start"
          >
            <RatingsAndStars />
          </div>

          <div data-animate="text" data-delay="0.6" className="mt-8">
            <button className="px-8 py-4 text-base font-semibold rounded-lg btn">
              Enroll now
            </button>
          </div>
        </div>

        <div
          data-animate="clip-rect"
          data-delay="1"
          data-direction="rtl"
          className="relative h-[300px] md:h-[420px] w-full white-gradiant-left"
        >
          <img
            alt="learning"
            src="/images/heroImage.png"
            className="absolute inset-0 object-cover w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
