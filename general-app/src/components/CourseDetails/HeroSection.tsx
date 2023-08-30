import RatingsAndStars from "../RatingsAndStars"

function HeroSection() {
  return (
    <section className="max-w mx-auto px-4 mt-36 flex items-center justify-center">
      <div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-20 content-center"
      >
        <div className="flex flex-col items-center md:items-start">
          <p
            data-animate="text"
            className="text-bright-orange font-semibold mb-2 text-sm md:text-base"
          >
            USER-CENTRIC DESIGN
          </p>
          <h2
            data-animate="text"
            data-delay="0.2"
            className="text-2xl font-semibold md:text-5xl md:leading-tight text-center md:text-start"
          >
            Entering into the field of UX/UI
          </h2>
          <p
            data-animate="text"
            data-delay="0.4"
            className="mt-4 text-dark-gray text-sm md:text-base text-center md:text-left max-w-xl lg:w-full"
          >
            Unlock the World of User Experience Design. Gain in-demand skills,
            create stunning interfaces, and launch your career in less than 6
            months.
          </p>

          <p
            className="mt-7 text-black-v1 text-lg"
            data-animate="text"
            data-delay="0.6"
          >
            Instructor: 
            <span className="text-bright-orange"> Ifaz Ahmed Aflan</span>
          </p>

          <div
            data-sal="slide-right"
            data-sal-delay="600"
            className="mt-7 flex flex-col lg:flex-row gap-3 items-center md:items-start"
          >
            <RatingsAndStars />
          </div>

          <div data-animate="text" data-delay="0.6" className="mt-8">
            <button className="btn py-4 text-base px-8 font-semibold rounded-lg">
              Enroll now
            </button>
          </div>
        </div>

        <div
            data-animate="clip-rect"
            data-delay="1"
            data-direction="rtl"
            className="relative h-[300px] md:h-[420px] w-full white-gradiant-left">
          <img
            alt="learning"
            src="/images/heroImage.png"
            className="absolute inset-0 h-full w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>  )
}

export default HeroSection