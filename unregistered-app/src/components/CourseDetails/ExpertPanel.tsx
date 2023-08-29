import { MouseEvent } from 'react';
import Image from "next/image"
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { FaArrowRight } from "react-icons/fa";

type ExpertPropsType = {
    name: string;
    photo: string;
    profession: string;
    delay?: string | number;
    colorClass?: string;
}
const experts:ExpertPropsType[] = [
    {name: "Jahid Hasan", photo: "/images/about/teacher1.png", profession: "CEO of Telco LTD.", colorClass: "bg-cyan-500"},
    {name: "Namira Khan", photo: "/images/about/teacher3.png", profession: "Speaker at Motives United", colorClass: "bg-purple-500"},
    {name: "Sarah Ahmed", photo: "/images/about/teacher2.png", profession: "UI Designer at Robi", colorClass: "bg-yellow-300"},
]

export default function ExpertPanel() {
    const [sliderRef, instanceRef] = useKeenSlider({
        mode: "snap",
        slides: {
            // origin: "center",
            perView: 'auto',
        }
    });
    
    function next (e:MouseEvent) {
        e.stopPropagation();
        instanceRef.current?.next();
    }

  return (
    <section className="max-w mx-auto px-4 flex flex-col mt-16 md:mt-36">
      <h2
        className="text-black-v1 font-medium text-3xl md:text-4xl text-center"
        data-animate="text"
      >
        Expert Panel
      </h2>
      <div className="relative mt-12">
        <div ref={sliderRef} className="keen-slider">
            {
                experts.map((expert, i) => (
                    <ExpertCard key={i+"expert"} {...expert} delay={(i+1) * 0.3}/>
                ))
            }
        </div>

        <button
          onClick={next}
          className="absolute top-[40%] right-1 shadow p-2 bg-rose-500 rounded text-white"
          aria-label="Next slide"
        >
            <FaArrowRight size={22} />
        </button>
      </div>
    </section>

  )
}


const ExpertCard = (props:ExpertPropsType) => {
    return (
        <div className="keen-slider__slide m-2 min-w-[300px] max-w-[410px] overflow-hidden shadow rounded-xl">
        <div
          className="rounded-x overflow-hidden"
          data-animate="clip-rect"
          data-delay={props.delay || "0.3"}
        >
          <div className={`px-4 pt-4 ${props.colorClass}`}>
            <Image
              width={320}
              height={340}
              className="w-full max-w-xs mx-auto aspect-rect"
              src={props.photo}
              alt={props.name}
            />
          </div>
          <div className="px-4 md:px-8 pt-5 md:pt-10 pb-8 md:pb-12">
            <p className="font-medium text-xl md:text-2xl">{props.name}</p>
            <p className="mt-1 text-lg">{props.profession}</p>
          </div>
        </div>
      </div>       
    )
}