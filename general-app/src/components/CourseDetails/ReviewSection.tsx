import { MouseEvent } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import StudentReview from './StudentReview';
import WriteReview, { openReviewForm } from './WriteReview';

const reviews = [
    { username: "Danny", userPhoto: "/images/james_william.png", review_date: "12 April 2020", review: "Flexible online learning with interactive assignments boosts skill application and confidence.", rating: 4.0 },
    { username: "James William", userPhoto: "/images/james_william.png", review_date: "12 April 2020", review: "Exceeds expectations with well-structured, engaging courses that are industry-relevant. Exceptional support ensures a smooth learning journey.", rating: 5.0 },
    { username: "Andy", userPhoto: "/images/james_william.png", review_date: "12 April 2020", review: "Top-notch courses, knowledgeable and supportive instructors, and comprehensive learning materials. It's a career game-changer!", rating: 5.0 },
    { username: "Bobby", userPhoto: "/images/james_william.png", review_date: "12 April 2020", review: "Top-notch courses, knowledgeable and supportive instructors, and comprehensive learning materials. It's a career game-changer!", rating: 3.0 },
    { username: "Charlie", userPhoto: "/images/james_william.png", review_date: "12 April 2020", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt in, assumenda dicta mollitia animi expedita, saepe suscipit, quo id voluptates odit illum! Dolor, non possimus. Voluptatem, ad. Culpa, commodi.", rating: 5.0 },
]


export default function ReviewSection() {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        slides: {
            origin: "center",
            perView: 'auto',
        }
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
    <>
    <section className="max-w mx-auto px-4 flex flex-col mt-16 md:mt-36">
      <div className="flex items-center justify-between">
        <h2
          data-animate="text"
          className="text-black-v1 font-medium text-3xl md:text-4xl text-center"
        >
          Why This Course?
        </h2>
        <div data-animate="button" data-delay="0.3">
          <button className="btn py-3" onClick={openReviewForm}>Write a review</button>
        </div>
      </div>
      <div className="end_gradiant relative">
                <div className="m-end-auto pt-16">
                    <div ref={sliderRef} className="keen-slider">
                        {
                            reviews.map((review, i) =>
                                <div className="keen-slider__slide min-w-full sm:min-w-[450px] max-w-[524px]" key={i + "review"}>
                                    <StudentReview {...review} />
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
    <WriteReview />
    </>
  )
}
