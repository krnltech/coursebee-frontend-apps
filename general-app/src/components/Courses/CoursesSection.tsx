import { categories, courses_bn, courses_en } from "@/libs/courses";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import Card from "../Card";
import { useTranslation } from 'next-i18next';

const sortButtons = [
  { en_label: "Default", bn_label: "ডিফল্ট", type: "default" },
  { en_label: "Trending", bn_label: "ট্রেন্ডিং", type: "trending" },
  { en_label: "Price", bn_label: "দাম", type: "price" },
  { en_label: "Rating", bn_label: "রেটিং", type: "rating" },
];

function Courses() {
  const { locale } = useRouter();
  const { t } = useTranslation('courses');
  return (
    <section className="mx-auto max-w pt-36 px-3">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center pb-10 md:pb-20">
        <div className="text-center md:text-start">
          <h2 className="font-medium text-4xl text-ncolor-800">{t('courses.heading')}</h2>
          <p className="text-dark-gray">{t('courses.subheading')}</p>
        </div>
        <div className="flex gap-4 items-center flex-wrap justify-center text-sm md:text-base">
          {sortButtons.map((sortButton, i) => (
            <button
              className={`rounded-xl shadow-sm px-5 py-3 md:px-7 md:py-4 btn-white ${i == 0 ? "active" : ""}`}
              key={i + "sort button"}
            >
              {locale == "en" ? sortButton.en_label : sortButton.bn_label}
            </button>
          ))}
        </div>
      </div>
      <SearchBar />
      <CourseCategoryButton />
      <div className="pt-24 grid gap-6 justify-center items-center md:grid-cols-2 lg:grid-cols-3">
        {(locale == 'en' ? courses_en : courses_bn).map((course, i) => (
          <Card
            key={i + ". course-card"}
            delay={0.1 * (i)%3 + 0.1 }
            title={course.title}
            subtitle={course.subtitle}
            category={course.category}
            cover={course.cover}
            description={course.desc}
            price={course.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Courses;

function SearchBar() {
  const { t } = useTranslation('courses');
  
  return (
    <div className="flex justify-between items-center shadow border rounded-lg p-1 pl-4">
      <input
        className="outline-none w-full rounded-lg"
        placeholder={t('courses.input.placeholder')}
        type="search"
        name="search course"
        id="searchbar"
      />
      <button className="font-medium text-bright-orange bg-bright-orange bg-opacity-20 px-3 py-3 md:px-4 md:min-w-[160px] rounded-md shadow-sm">
        <span className="hidden md:block">{t('courses.input.btn')}</span>
        <FiSearch className="block md:hidden" />
      </button>
    </div>
  );
}

function CourseCategoryButton() {
  const { locale } = useRouter();
  return (
    <div className="inline-block pt-6 text-center">
      {Array.from(categories.keys()).map((category, i) => (
        <button
          key={i + "category"}
          className="min-w-[128px] border rounded-lg mb-2 mx-2 py-2 text-sm transition-all hover:bg-bright-orange hover:text-white"
        >
          {locale == "en"
            ? categories.get(category)?.en
            : categories.get(category)?.bn}
        </button>
      ))}
    </div>
  );
}
