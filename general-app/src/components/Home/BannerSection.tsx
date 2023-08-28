import UserRating from "./UserRating"

const users = [
    {avatar: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"},
    {avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},
    {avatar: "https://tecdn.b-cdn.net/img/new/avatars/2.webp"},
    {avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"},
]

function BannerSection() {
  return (
    <section className="max-w mx-auto px-4 h-[690px] my-16">
    <div
      className="relative bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url(/images/home/hero_new_ai_course_2.png)] bg-cover bg-center bg-no-repeat h-full rounded-lg"
    >
      <div
        data-animate="image"
        data-delay="0.3"
        data-direction="rtl"
        className="absolute top-0 bottom-0 left-0 right-0 bg-white -translate-x-full"
      ></div>
      <div className="absolute inset-0">
        <div
          className="relative max-w-screen-xl flex flex-col justify-center md:flex-row md:justify-start items-center h-full"
        >
          <div
            className="max-w-2xl text-white px-4 sm:px-8 md:px-16 font-inter text-center md:text-left"
          >
            <p
              data-animate="text"
              data-delay="1"
              className="text-base sm:text-xl/loose font-bold"
            >
              NEW AI COURSE IS OUT!
            </p>
            <p
              data-animate="text"
              data-delay="1.2"
              className="mt-2 text-2xl md:text-4xl font-semibold"
            >
              AI-Powered Future Ahead, Enroll in
              <span className="font-light">CourseBee&apos;s </span> New AI Course
              Today!
            </p>

            <p
              data-animate="text"
              data-delay="1.4"
              className="mt-4 text-white/90"
            >
              Gain hands-on experience and a comprehensive understanding of AI
              with latest AI course. Learn from industry experts and unlock
              your potential.
            </p>

            <div
              className="mt-8 flex flex-col md:flex-row gap-6 text-center items-center"
            >
              <div data-animate="button" data-delay="1.6">
                <button className="btn py-4">Join Today</button>
              </div>
              <div className="flex items-center gap-2 flex-col md:flex-row">
                <div className="flex">
                    <UserRating className="w-8 rounded-full" />
                </div>
                <p
                  data-animate="text"
                  data-delay="2.2"
                  className="text-white/90 text-xs font-medium"
                >
                  Trusted by over 10.000 students
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BannerSection