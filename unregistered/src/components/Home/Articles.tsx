const articles = [
    {title: "How to getting started with CourseBee with three simple steps!", date: "May 24, 2022", cover: "/images/article_placeholder.png"},
    {title: "Engage into our social platform to win prizes!", date: "May 24, 2022", cover: "/images/article_placeholder.png"},
    {title: "Meet our new instructor for our brand new AI course", date: "May 24, 2022", cover: "/images/article_placeholder.png"},
]
function Articles() {
  return (
    <section className="pt-28 md:pt-44 max-w mx-auto px-4 overflow-x-hidden">
    <div className="mx-auto">
      <div
        className="flex items-center justify-center md:justify-between pb-[30px]"
      >
        <h3
          data-animate="text"
          className="text-3xl md:text-4xl md:leading-[60px] font-medium text-center md:text-start"
        >
          Read our latest articles
        </h3>
        <div data-animate="button" data-delay="0.5">
          <button
            className="hidden md:block py-3 px-6 md:py-5 md:px-12 btn leading- font-semibold rounded-md"
          >
            Browse All Articles
          </button>
        </div>
      </div>

      <div
        className="pt-[30px] gap-4 grid md:grid-cols-2 lg:grid-cols-3 justify-center md:justify-between justify-items-center items-stretch"
      >
       {
        articles.map((article, i) => (
            <Article title={article.title} cover={article.cover} date={article.date} key={i+"article"}/>
        ))
       }
      </div>

      <div
        data-animate="button"
        data-delay="0.3"
        className="flex items-center justify-center pt-10"
      >
        <button
          className="md:hidden py-4 px-6 bg-bright-orange text-white leading-5 font-semibold rounded-[5px]"
        >
          Browse all articles
        </button>
      </div>
    </div>
  </section>
  )
}

export default Articles

interface ArticlePropsType {
    title: string;
    cover: string;
    date: string;
}

const Article = ({title, cover, date}:ArticlePropsType) => {
    return (
        <>
        <div
          data-animate="card"
          className="max-w-[410px] box_shadow overflow-hidden"
        >
          <img
            className="w-full"
            src={cover}
            alt="Articles"
          />
          <div className="px-11 py-[53px]">
            <div className="flex gap-6 items-center">
              <button
                className="py-3 px-[20px] border text-bright-orange border-bright-orange rounded-[5px] text-sm font-medium hover:bg-bright-orange hover:text-white transition"
              >
                Guide
              </button>
              <time className="text-dark-gray font-semibold"> {date} </time>
            </div>
            <p className="pt-[22px] font-medium text-xl leading-8 blog_title">{title}</p>
          </div>
        </div>
        </>
    )
}