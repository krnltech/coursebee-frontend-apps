import { courses_bn } from "@/libs/courses"
import Card from "../Card"

function BrowseOurCourseSection() {
  return (
    <section className="max-w mx-auto px-4">
      <div>
        <h2
          data-animate="text"
          className="text-3xl md:text-[45px] text-center md:leading-[60px] font-medium"
        >
          Browse our popular courses
        </h2>
        <p
          data-animate="text"
          data-delay="0.4"
          className="py-[15px] text-center text-dark-gray mx-auto max-w-[666px] font-normal"
        >
          Join thousands of learners for a brighter future. Start browsing now
          and explore a world of knowledge and growth.
        </p>
      </div>

      <div className="w-full">
        <div
          data-animate="button"
          data-delay="0.8"
          className="grid justify-center items-center pt-12 gap-4 mx-auto px-4 md:px-0 tabpanel-btns max-w-[800px]"
        >
          <button
            className="browse_courses_tab hover:opacity-100 transition-all"
            data-coursebutton="All"
          >
            <img
              src="/icons/all_courses.svg"
              className="w-10 h-10"
              alt="All courses"
            />
            <p className="font-medium md:text-lg leading-7">ALL</p>
          </button>
          <button
            className="browse_courses_tab opacity-70 hover:opacity-100 transition-all"
            data-coursebutton="Trending"
          >
            <img src="/icons/design.svg" className="w-10 h-10" alt="Trending" />
            <p className="font-medium md:text-lg leading-7">Trending</p>
          </button>
          <button
            className="browse_courses_tab opacity-70 hover:opacity-100 transition-all"
            data-coursebutton="Latest"
          >
            <img
              src="/icons/development.svg"
              className="w-10 h-10"
              alt="Latest"
            />
            <p className="font-medium md:text-lg leading-7">Latest</p>
          </button>
          <button
            className="browse_courses_tab opacity-70 hover:opacity-100 transition-all"
            data-coursebutton="Popular"
          >
            <img
              src="/icons/marketing.svg"
              className="w-10 h-10"
              alt="Popular"
            />
            <p className="font-medium md:text-lg leading-7">Popular</p>
          </button>
        </div>
      </div>

      <div className="pt-16 grid justify-center md:grid-cols-2 lg:grid-cols-3 md:justify-center items-center md:items-stretch gap-4 mx-auto">
        {courses_bn.slice(0, 6).map((course, i) => (
          <Card
            key={i + "course"}
            title={course.title}
            description={course.desc}
            price={course.price}
            cover={course.cover}
            subtitle={course.subtitle}
            category={course.category}
          />
        ))}
      </div>

      <div
        data-animate="button"
        className="mx-auto w-full py-[85px] flex items-center justify-center"
      >
        <button className="py-5 px-10 btn font-semibold">
          Explore All Courses
        </button>
      </div>
    </section>
  );
}

export default BrowseOurCourseSection