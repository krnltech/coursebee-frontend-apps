import { MouseEvent } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { TbLamp } from 'react-icons/tb';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const feedbacks = [
    { username: "James William", userPhoto: "/images/james_william.png", review: "Flexible online learning with interactive assignments boosts skill application and confidence.", course: "Full-Stack Mastery" },
    { username: "James William", userPhoto: "/images/james_william.png", review: "Exceeds expectations with well-structured, engaging courses that are industry-relevant. Exceptional support ensures a smooth learning journey.", course: "Web Design Unleashed" },
    { username: "Bobby", userPhoto: "/images/james_william.png", review: "Top-notch courses, knowledgeable and supportive instructors, and comprehensive learning materials. It's a career game-changer!", course: "React Revolution" },
    { username: "Charlie", userPhoto: "/images/james_william.png", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt in, assumenda dicta mollitia animi expedita, saepe suscipit, quo id voluptates odit illum! Dolor, non possimus. Voluptatem, ad. Culpa, commodi.", course: "React Revolution" },
]

export default function StudentsFeedback() {

    const { t } = useTranslation();

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        breakpoints: {
            "(min-width: 800px)": {
              slides: { perView: 2 },
            },
            "(min-width: 1000px)": {
              slides: { perView: 3 },
            },
          },
          slides: { perView: 1 },
    },
    [
        (slider) => {
          let timeout:NodeJS.Timeout;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 1500)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ] 
    );

    function prev (e:MouseEvent) {
        e.stopPropagation();
        instanceRef.current?.prev();
    }
    function next (e:MouseEvent) {
        e.stopPropagation();
        instanceRef.current?.next();
    }
    return (
        <section>
            <div className="pt-20">
                <h1
                    data-animate="text"
                    className="text-3xl md:text-[46px] md:leading-[60px] font-medium text-center"
                >
                    {t("studentsFeedback.heading")}
                </h1>
                <p
                    data-animate="text"
                    data-delay="0.5"
                    className="py-[15px] px-4 text-center text-dark-gray mx-auto max-w-[682px] font-normal"
                >
                    {t("studentsFeedback.subheading")}
                </p>
            </div>

            <div className="end_gradiant relative">
                <div className="m-end-auto pt-16">
                    <div ref={sliderRef} className="keen-slider">
                        {
                            feedbacks.map((feedback, i) =>
                                <div className="keen-slider__slide min-w-[420px] max-w-[524px]" key={i + "feedback"}>
                                    <FeedBack {...feedback} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <div
                data-animate="text"
                data-delay="0.6"
                className="relative pt-16"
            >
                <div className="flex justify-center items-center gap-4 text-dark-gray">
                    <button aria-label="Previous slide" onClick={prev}>
                        <FaArrowLeft size={25} />
                    </button>
                    <button aria-label="Next slide" onClick={next}>
                        <FaArrowRight size={25} />
                    </button>
                </div>
            </div>
        </section>
    )
}

interface FeedBackType {
    username: string;
    userPhoto: string;
    review: string;
    course: string;
}

const FeedBack = ({ username, userPhoto, review, course }: FeedBackType) => {
    return (
        <>
            <div data-animate="text" className="py-2 mx-7">
                <div className="box_shadow py-7 px-7 grid items-end">
                    <div className="flex gap-3 items-center">
                        <Image
                            width={45}
                            height={45}
                            src={userPhoto}
                            alt={username}
                            className="w-[45px] rounded-3xl"
                        />
                        <p className="font-normal md:text-lg">{username}</p>
                    </div>
                    <p className="my-5 maxline_3 overflow-hidden"> {review} </p>
                    {
                        course && (
                            <>
                                <hr className="border-t-2 border-light-gray" />
                                <div className="flex items-center gap-3 pt-3">
                                    <TbLamp />
                                    <p>{course}</p>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}