function CareerSection() {
  return (
    <section className="pt-28 md:pt-44 max-w mx-auto px-4 overflow-x-hidden">
      <div className="grid md:grid-cols-2 items-center justify-between mx-auto">
        <div
          data-animate="text"
          className="w-full p-4 flex flex-col items-center justify-center md:items-start"
        >
          <h2
            data-animate="text"
            data-delay="0.3"
            className="font-medium text-3xl md:text-4xl leading-10 text-center md:text-start"
          >
            Grow your career! Start learning with CourseBee.
          </h2>
          <p
            data-animate="text"
            data-delay="0.6"
            className="font-normal leading-6 text-dark-gray py-[30px] text-center md:text-start"
          >
            Ignite your career growth with Academy. <br />
            Start your learning journey today.
          </p>
          <div data-animate="button" data-delay="0.9">
            <button className="btn py-4 px-12 rounded-md font-semibold">
              Browse Jobs
            </button>
          </div>
        </div>
        <div className="relative flex justify-end mt-10 md:mt-0 overflow-hidden">
          <img
            data-animate="clip-rect"
            data-delay="1.5"
            className="w-full md:w-[90%]"
            src="/images/panel_illustration.svg"
            alt="Panel illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default CareerSection;
