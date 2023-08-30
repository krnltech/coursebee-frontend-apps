import Image from "next/image";
import { ReactNode } from "react";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

function AnnouncementSection() {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        slides: {
            // origin: "center",
            perView: 'auto',
        }
    });

  return (
    <section className="pt-8 max-w mx-auto relative px-3">
      <div ref={sliderRef} className="keen-slider">
        <CarouselItem>
            <Announcement/>
        </CarouselItem>
      </div>
    </section>
  );
}

export default AnnouncementSection;

const Announcement = () => {
    return (
        <div className="shadow rounded-lg px-5 py-9 grid md:grid-cols-2 justify-between items-end gap-7">
        <div className="relative overflow-hidden">
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
        <div>
          <div className="flex gap-3" data-animate="text" data-delay="0.7">
            <span className="bg-ncolor-300 rounded-lg px-2 py-1">
              Trending
            </span>
            <span className="text-white bg-bright-orange rounded-lg px-2 py-1">
              Coding
            </span>
          </div>
          <p
            className="pt-10 font-inter text-bright-orange font-bold"
            lang="en"
            data-animate="text"
            data-delay="1"
          >
            Python Powerhouse
          </p>
          <h2
            className="pt-1 text-ncolor-800 text-3xl md:text-4xl font-medium font-inter"
            lang="en"
            data-animate="text"
            data-delay="1.2"
          >
            Unlocking Its Full Potential
          </h2>
          <p
            className="pt-2 pb-14 text-dark-gray"
            data-animate="text"
            data-delay="1.4"
          >
            Unleash Python&apos;s power: Build robust applications and solve
            complex problems with this versatile programming language.
          </p>
          <div
            data-animate="button"
            data-delay="1.6"
            className="origin-center max-w-fit"
          >
            <button className="rounded-md text-lg font-medium px-7 py-4 btn">
              ৳4999.99 BDT
            </button>
          </div>
        </div>
      </div>
    )
}

const CarouselItem = ({children}:{children:ReactNode}) => {
    return (
        <div className="keen-slider__slide max-w-6xl mx-auto min-w-full sm:min-w-0 p-2">{children}</div>
    )
}