import { courses_en } from "@/libs/courses";
import Card from "../Card";

export default function SimilarCoursesSection() {
  return (
    <section className="max-w mx-auto px-4 flex flex-col mt-16 md:mt-36">
      <h2
        className="text-black-v1 font-medium text-3xl md:text-4xl text-center"
        data-animate="text"
      >
        Similar Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {
            courses_en.slice(0,3).map((course, i) => (
                <Card {...course} description={course.desc} delay={(i+1)*0.3} key={i+"Course"} />
            ))
        }
      </div>
    </section>

  )
}
