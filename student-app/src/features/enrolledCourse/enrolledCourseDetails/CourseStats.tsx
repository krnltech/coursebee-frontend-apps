import CourseStateItem from "./CourseStateItem";

function CourseStats() {
  return (
    <section className="flex flex-col justify-center gap-8 px-4 mx-auto mt-20 max-w md:flex-row">
      <div className="grid w-full grid-cols-2 gap-5 mt-1 md:w-1/2 sm:gap-10">
        <div>
          <p data-animate="text" className="text-sm font-bold text-neutral-700">
            Course Details
          </p>
          <div className="mt-4 space-y-3">
            <CourseStateItem
              url="/icons/course-details/level.svg"
              label="Level"
              value="Beginner"
            />
            <CourseStateItem
              url="/icons/course-details/Delivery Time.png"
              label="Duration"
              value="24 weeks"
            />
            <CourseStateItem
              url="/icons/course-details/Tuition.png"
              label="Delivery"
              value="Online"
            />
            <CourseStateItem
              url="/icons/course-details/Clipboard.png"
              label="Projects"
              value="12"
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-neutral-700">Batch Details</p>
          <div className="mt-4 space-y-3">
            <CourseStateItem
              url="/icons/course-details/People.svg"
              label="Enrolled Students"
              value="200"
              isBatch
            />
            <CourseStateItem
              url="/icons/course-details/PersonPlus.svg"
              label="Time Remaining"
              value="6 days"
              isBatch
            />
            <CourseStateItem
              url="/icons/course-details/CashCoin.svg"
              label="Fee"
              value="4999.99 BDT"
              isBatch
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <span className="text-sm font-bold text-neutral-700">
          Course Summary
        </span>
        <p className="mt-2 text-base text-neutral-700-v1">
          Students who complete this course should have a solid foundation in
          UX/UI design and be able to apply their knowledge and abilities to
          construct efficient and user-friendly websites and mobile
          applications.
        </p>
      </div>
    </section>
  );
}

export default CourseStats;
