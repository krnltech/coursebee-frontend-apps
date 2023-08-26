function InstructorsSection() {
  return (
    <section className="max-w mx-auto px-4 overflow-x-hidden">
      <div
        className="grid md:grid-cols-2 gap-[75px] md:justify-between items-center pt-28 md:pt-40 p-2 mx-auto max-w"
      >
        <div className="text-start md:px-8">
          <h2
            data-animate="text"
            className="text-3xl md:text-[45px] md:leading-[60px] font-medium text-center md:text-start"
          >
            Meet Our Instructors
          </h2>
          <p
            className="pt-[34px] text-dark-gray font-normal"
            data-animate="text"
            data-delay="0.5"
          >
            Meet our exceptional instructors dedicated to your learning success.
            With industry expertise and a passion for teaching, they guide and
            inspire you throughout your journey. Unlock your full potential with
            CourseBee's expert instructors who simplify complex concepts.
          </p>
          <p
            className="pt-[38px] text-dark-gray font-normal"
            data-animate="text"
            data-delay="1"
          >
            Start your learning journey today and receive expert guidance along
            the way.
          </p>
          <div
            data-animate="button"
            data-delay="1.5"
            className="pt-[34px] flex gap-4 flex-col md:flex-row"
          >
            <button className="btn font-semibold py-4">Become an instructor</button>
            <button
              className="btn bg-white text-black shadow border font-semibold py-4"
            >
              Browse All Instructors
            </button>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl">
          <img
            data-animate="clip-rect"
            data-delay="1.5"
            className="w-full max-w-[630px] mx-auto"
            src="/images/instructors.png"
            alt="Instructors"
          />
        </div>
      </div>
    </section>
  )
}

export default InstructorsSection