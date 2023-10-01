import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";
import CardBg from "../CardBg";
function AnnouncementSection() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      // origin: "center",
      perView: "auto",
    },
  });

  return (
    <section className="relative px-3 pt-8 mx-auto max-w">
      <div ref={sliderRef} className="keen-slider">
        <CarouselItem>
          <Announcement />
        </CarouselItem>
      </div>
    </section>
  );
}

export default AnnouncementSection;

const Announcement = () => {
  return (
    <div className="relative grid justify-between gap-10 p-4 bg-white border shadow md:p-8 rounded-2xl md:grid-cols-2">
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          width={511}
          height={356}
          className="max-w-2xl w-full mx-auto object-cover p-[1px]"
          src="/images/courses/carousel-1.png"
          alt="Announcement"
          data-animate="clip-rect"
          data-delay="1"
          data-direction="rtl"
        />
      </div>
      <div className="flex flex-col justify-center">
        <p
          className="text-sm font-medium uppercase font-inter text-bright-orange md:text-sm"
          lang="en"
          data-animate="text"
          data-delay="1"
        >
          Idea to Establish Your Business Online
        </p>
        <h2
          className="pt-1 text-2xl font-semibold line-clamp-2 text-ncolor-800 md:text-4xl"
          lang="en"
          data-animate="text"
          data-delay="1.2"
        >
          Digital Entrepreneurship Business Guideline
        </h2>
        <div
          className="flex gap-3 pt-2 text-sm md:text-base"
          data-animate="text"
          data-delay="0.7"
        >
          <span className="px-4 py-1 text-black border rounded-[20px] bg-light-orange border-bright-orange font-semibold">
            Trending
          </span>
          <span className="px-4 py-1 text-black border rounded-[20px] bg-light-orange border-bright-orange font-semibold">
            Business
          </span>
        </div>
        <p
          className="pt-2 text-sm text-dark-gray md:text-base md:line-clamp-3"
          data-animate="text"
          data-delay="1.4"
        >
          Learn more about how to start an online business through this course.
          We have designed our course in such a way that as you learn each
          module, you can apply it in practice.
        </p>
        <p
          data-animate="text"
          data-delay="1.6"
          className="text-black text-lg md:text-[22px] font-semibold pt-8 pb-2"
        >
          {" "}
          ৳4999.99 BDT
        </p>
        <Link href="/courses/digital-entrepreneurship-business">
          <button
            data-animate="button"
            data-delay="1.8"
            className="flex items-center justify-center w-full gap-2 px-6 py-3 text-sm font-semibold rounded-lg md:w-fit md:text-base bg-secondary-orange text-bright-orange"
          >
            <p>Course Details</p> <FaArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );
};

const CarouselItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-6xl min-w-full p-2 mx-auto keen-slider__slide sm:min-w-0">
      {children}
    </div>
  );
};
