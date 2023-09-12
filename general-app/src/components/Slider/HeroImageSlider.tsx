import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const HeroImageSlider = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <Image
              height="0"
              width="0"
              sizes="100vw"
              priority
              alt="learning"
              data-animate="clip-rect"
              data-delay="1"
              data-direction="rtl"
              src="/images/home/hero-section-1.png"
              className="object-cover rounded-2xl w-full h-[275px] sm:h-[325px] lg:h-[400px] aspect-square"
            />
          </div>
          <div className="keen-slider__slide number-slide2">
            <Image
              height="0"
              width="0"
              sizes="100vw"
              priority
              alt="learning"
              data-animate="clip-rect"
              data-delay="1"
              data-direction="rtl"
              src="/images/heroImage.png"
              className="object-cover rounded-2xl w-full h-[275px] sm:h-[325px] lg:h-[400px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImageSlider;
