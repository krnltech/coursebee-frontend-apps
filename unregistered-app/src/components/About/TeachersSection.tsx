import { ReactNode, MouseEvent } from 'react';
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useTranslation } from 'next-i18next';

function TeachersSection() {
    const { t } = useTranslation('about');
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
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
    <section className="pt-52 px-4">
        <div className="mx-auto max-w md:grid md:grid-cols-3 justify-between items-center gap-y-12 md:gap-12">
            <div className="text-center md:text-start mx-auto">
                <p className="text-bright-orange text-xl pb-1 font-semibold uppercase" data-animate="text" data-delay="0.3">{t('teachers.subheading')}</p>
                <h2 className="font-semibold text-4xl md:text-6xl leading-10" data-animate="text" data-delay="0.6">{t('teachers.heading')}</h2>
                <p className="pt-4 text-dark-gray" data-animate="text" data-delay="0.9">{t('teachers.desc')}</p>
                <div className="pt-10" data-animate="button" data-delay="1.2">
                    <button className="px-12 py-4 text-lg font-bold btn mx-auto md:mx-0">{t('teachers.btn.join')}</button>
                </div>
            </div>

            <div className="col-span-2 relative">
                <div ref={sliderRef} className="keen-slider pt-8">
                    <CarouselItem>
                        <TeacherCard name="Jahid Hasan" department="Science" cover="/images/about/teacher1.png" />
                    </CarouselItem>
                    <CarouselItem>
                        <TeacherCard name="Sara Ahmed" department="Computer Science" cover="/images/about/teacher2.png" imageBgColorClass='bg-yellow-300' />
                    </CarouselItem>
                </div>

                <button onClick={next} className="absolute top-[50%] right-0 shadow p-2 bg-rose-500 rounded text-white" aria-label="Next slide" aria-controls="splide01-track" data-carousel="next">
                    <FaArrowRight size={22} />
                </button>
            </div>
        </div>
    </section>
  )
}

export default TeachersSection

type TeacherCardType = {
    name: string;
    department: string;
    cover: string;
    imageBgColorClass?: string;
}

const TeacherCard = (props:TeacherCardType) => {
    return (
        <>
            <div className="rounded-xl mx-4 shadow overflow-hidden" data-animate="clip-rect">
                <div className={`px-4 pt-4 ${props.imageBgColorClass || 'bg-cyan-500'}`}>
                    <Image
                        width={320}
                        height={320}
                        className="w-full max-w-xs mx-auto aspect-rect"
                        src={props.cover} alt={props.name} />
                </div>
                <div className="px-4 md:px-8 pt-5 md:pt-10 pb-8 md:pb-16">
                    <p className="uppercase text-bright-orange font-semibold"> {props.department} </p>
                    <p className="font-bold text-xl md:text-3xl"> {props.name} </p>
                </div>
            </div>
        </>
    )
}

const CarouselItem = ({children}:{children:ReactNode}) => {
    return (
        <div className="keen-slider__slide min-w-full sm:min-w-0 p-4">{children}</div>
    )
}