import Counter from "./Counter"

function ExpertPanelSection() {
  return (
    <section className="max-w mx-auto px-4">
    <div className="pt-[120px]">
      <h2
        data-animate="text"
        className="text-3xl text-center md:text-[45px] md:leading-[60px] font-medium"
      >
        Meet Our Expert Panel
      </h2>
      <p
        data-animate="text"
        data-delay="0.2"
        className="pt-[34px] text-center text-dark-gray font-normal mx-auto max-w-[830px]"
      >
        Discover our esteemed Expert Panel, guiding the structure, strategy,
        and outcomes of our courses. With their vast knowledge and experience,
        they uphold the integrity and quality of our education. Our diverse
        Expert Panel collaborates with our team, ensuring our courses meet
        high standards and industry trends. Their insights create a robust
        learning experience for students. <br /><br />
        From evaluating content to providing recommendations, our Expert Panel
        continuously enhances course quality. Join us to access courses
        thoughtfully designed and evaluated by industry experts. Start your
        learning journey with CourseBee today.
      </p>
      <div className="pt-16 md:pt-32 overflow-hidden">
        <img
          data-animate="clip-rect"
          data-delay="0.3"
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
          <p className="pb-4 font-normal text-[18px] mt-2">NPS Score</p>
        </div>

        <div
          className="text-center md:border-r max-w-[330px] w-full border-black"
        >
          <p
            className="text-3xl md:text-[42px] font-bold text-bright-orange stats"
          >
            <Counter end={3000}/>
          </p>
          <p className="pb-4 font-normal text-[18px] mt-2">Satisfied alumni</p>
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
            Hours of recorded courses
          </p>
        </div>

        <div className="text-center max-w-[330px] w-full">
          <p
            className="text-3xl md:text-[42px] font-bold text-bright-orange stats"
          >
            <Counter end={50}/>
          </p>
          <p className="pb-4 font-normal text-[18px] mt-2">Newjoiners weekly</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ExpertPanelSection