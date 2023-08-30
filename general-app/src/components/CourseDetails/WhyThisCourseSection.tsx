/* eslint-disable @next/next/no-img-element */
import React from 'react'

function WhyThisCourseSection() {
  return (
    <section className="max-w mx-auto px-4 flex flex-col mt-16 md:mt-36">
    <h2
      className="text-black-v1 font-medium text-3xl md:text-4xl text-center"
      data-animate="text"
    >
      Why This Course?
    </h2>
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 md:mt-20 items-start"
    >
      <div
        className="space-y-6 text-black-v1 flex items-center justify-center flex-col relative"
      >
        {/* <!-- Curved Line--> */}
        <img
          src="/images/curvedLine.svg"
          alt="line"
          className="hidden md:block absolute top-10 -right-48"
        />
        <span
          data-animate="scroll-bg-color"
          data-delay="0.3"
          className="text-xl bg-bright-orange h-14 w-14 rounded-full grid place-content-center text-white font-bold transition-all"
          >1</span>
        <h3
          className="text-xl font-semibold"
          data-animate="text"
          data-delay="0.6"
        >
          Personal Growth
        </h3>
        <p
          data-animate="text"
          data-delay="0.9"
          className="max-w-[280px] text-center"
        >
          Even if you do not want to pursue a profession in design, mastering
          UX/UI design is an essential skill for anyone who wants to create
          user friendly and entertaining products.
        </p>
      </div>
      <div
        className="space-y-6 text-black-v1 flex items-center justify-center flex-col relative"
      >
        {/* <!-- Curved Line--> */}
        <img
          src="/images/curvedLine.svg"
          alt="line"
          className="hidden lg:block absolute top-10 -right-48"
        />
        <span
          data-animate="scroll-bg-color"
          data-delay="0.4"
          data-end="top 40%"
          data-start="top 70%"
          className="text-xl bg-bright-orange h-14 w-14 rounded-full grid place-content-center text-white font-bold transition-all"
          >2</span>
        <h3
          data-animate="text"
          data-delay="0.7"
          className="text-xl font-semibold"
        >
          Creativity
        </h3>
        <p
          data-animate="text"
          data-delay="1"
          className="max-w-[280px] text-center"
        >
          UX/UI design is a creative field in which you may utilize your
          design skills to tackle real-world problems and improve people&apos;s
          lives.
        </p>
      </div>

      <div
        className="space-y-6 text-black-v1 flex items-center justify-center flex-col relative mt-4"
      >
        <span
          data-animate="scroll-bg-color"
          data-delay="0.5"
          data-end="top 0%"
          data-start="top 40%"
          className="text-xl bg-bright-orange h-14 w-14 rounded-full grid place-content-center text-white font-bold transition-all"
          >3</span>
          <h3
          data-animate="text"
          data-delay="0.8"
          className="text-xl font-semibold"
        >
          Demand In Industry
        </h3>
        <p
          data-animate="text"
          data-delay="1.1"
          className="max-w-[280px] text-center"
        >
          UX/UI design is a fast-expanding discipline with a high demand for
          qualified people. Taking a class might help you stand out in the job
          market and position yourself for success.
        </p>
      </div>
    </div>
  </section>

  )
}

export default WhyThisCourseSection