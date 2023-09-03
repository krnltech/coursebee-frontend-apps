"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
// import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  sliderData: any[];
  height?: number;
  width?: number;
}

const SingleElementSlider = ({ sliderData, height, width }: Props) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider">
        {sliderData.map((slide, index) => (
          <div className={`keen-slider__slide w-full mb-2`} key={index}>
            {loaded && (
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={slide.url}
                  alt="illustration"
                  width={width ?? 100}
                  height={height ?? 100}
                  className="rounded-full bg-primary/10"
                  priority={false}
                />
                <p className="mt-6 text-center title text-neutral-700">
                  {slide.text}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SingleElementSlider;
