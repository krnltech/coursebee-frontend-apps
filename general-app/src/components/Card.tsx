import Image from "next/image";
import { useTranslation } from "next-i18next";
import {FaArrowRight} from 'react-icons/fa'
import Link from "next/link";

interface Props {
  price: string;
  title: string;
  subtitle: string;
  cover: string;
  description: string;
  category: (string|undefined)[];
  delay?: string|number;
}

function Card(props: Props) {
  const { t } = useTranslation();
  return (
    <>
      <div data-category="Coding,Job Based,Practical">
        <div
          className="shadow rounded-lg overflow-hidden border max-w-sm mx-auto pb-4"
          data-animate="card"
          data-duration="1.2"
          data-delay="0.1"
        >
          <div className="relative">
            <Image
              width={382}
              height={259}
              className="w-full"
              src={props.cover}
              alt={props.title}
              loading="lazy"
            />
          </div>
          <div className="p-4 md:p-6">
            <p className="text-bright-orange font-bold text-sm md:text-base">
              {props.title}
            </p>
            <p className="font-bold md:text-lg">{props.subtitle}</p>
            <p className="maxline_3 text-ncolor-600">
                {props.description}
            </p>
            <p className="text-xl font-semibold text-neutral-600 pt-10 pb-2">৳{props.price} BDT</p>
            <Link href={`/courses/${props.title.toLowerCase().replace(/[\s']/g, '-')}`}>
              <button className="flex justify-center items-center gap-4 font-medium w-full bg-bright-orange bg-opacity-10 mx-auto py-3 text-bright-orange rounded-md">
                <span>{t('card.btn.coursedetails')}</span>
                <FaArrowRight/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
