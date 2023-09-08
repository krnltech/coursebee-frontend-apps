import Image from "next/image"

function CourseInfo() {
  return (
    <section
      className="max-w mx-auto px-4 mt-12 gap-8 flex flex-col md:flex-row justify-center"
    >
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-5 sm:gap-10 mt-1">
        <div>
          <p data-animate="text" className="text-dark-gray text-sm font-bold">
            Course Details
          </p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-4">
              <Image
                width={20}
                height={20}
                data-animate="text"
                data-delay="0.2"
                className="w-4 sm:w-5 h-4 sm:h-5"
                src="/icons/course-details/level.svg"
                alt="beginner level"
              />
              <p
                className="text-sm sm:text-base ml-0.5"
                data-animate="text"
                data-delay="0.3"
              >
                Level: <span className="font-semibold">Beginner</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                width={20}
                height={20}
                data-animate="text"
                data-delay="0.4"
                className="w-4 sm:w-5 h-4 sm:h-5"
                src="/icons/course-details/Delivery Time.png"
                alt="duration"
              />
              <p
                className="text-sm sm:text-base"
                data-animate="text"
                data-delay="0.5"
              >
                Duration: <span className="font-semibold">24 weeks</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                width={20}
                height={20}
                data-animate="text"
                data-delay="0.6"
                className="w-4 sm:w-5 h-4 sm:h-5"
                src="/icons/course-details/Tuition.png"
                alt=""
              />
              <p
                className="text-sm sm:text-base"
                data-animate="text"
                data-delay="0.7"
              >
                Delivery: <span className="font-semibold">Online</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                width={20}
                height={20}
                data-animate="text"
                data-delay="0.8"
                className="w-4 sm:w-5 h-4 sm:h-5"
                src="/icons/course-details/Clipboard.png"
                alt="projects"
              />
              <p
                data-animate="text"
                data-delay="0.9"
                className="text-sm sm:text-base"
              >
                Projects: <span className="font-semibold">12</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                width={20}
                height={20}
                data-animate="text"
                data-delay="1"
                className="w-4 sm:w-5 h-4 sm:h-5"
                src="/icons/course-details/CashCoin.svg"
                alt="fee"
              />
              <p
                className="text-sm sm:text-base"
                data-animate="text"
                data-delay="1.1"
              >
                Fee:
                <span className="font-medium text-bright-orange">4999.99 BDT</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p
            className="text-dark-gray text-sm font-bold"
            data-animate="text"
            data-delay="1.2"
          >
            Batch Details
          </p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-4">
              <Image
                width={20}
                height={20}
                data-animate="text"
                data-delay="1.3"
                className="w-4 sm:w-5 h-4 sm:h-5"
                src="/icons/course-details/People.svg"
                alt="total"
              />
              <p
                className="text-sm sm:text-base ml-0.5"
                data-animate="text"
                data-delay="1.4"
              >
                Total: <span className="font-medium text-bright-orange">200</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                width={20}
                height={20}
                data-animate="text"
                data-delay="1.5"
                className="w-4 sm:w-5 h-4 sm:h-5"
                src="/icons/course-details/PersonPlus.svg"
                alt="Remaining"
              />
              <p
                className="text-sm sm:text-base ml-0.5"
                data-animate="text"
                data-delay="1.6"
              >
                Remaining:
                <span className="font-medium text-bright-orange">121</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Image
                width={20}
                height={20}
                data-animate="text"
                data-delay="1.7"
                className="w-4 h-4"
                src="/icons/course-details/time.svg"
                alt="Time"
              />
              <p
                className="text-sm sm:text-base sm:ml-1.5 grid sm:flex items-end"
                data-animate="text"
                data-delay="1.8"
              >
                Time Remaining:
                <span className="font-medium text-bright-orange"> 23:04:15</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <span
          className="text-sm text-dark-gray font-bold"
          data-animate="text"
          data-delay="2"
          >Course Summary</span>
        <p
          className="text-black-v1 mt-2 text-base"
          data-animate="text"
          data-delay="2.2"
        >
          Students who complete this course should have a solid foundation in
          UX/UI design and be able to apply their knowledge and abilities to
          construct efficient and user-friendly websites and mobile
          applications.
        </p>
      </div>
    </section>

  )
}

export default CourseInfo