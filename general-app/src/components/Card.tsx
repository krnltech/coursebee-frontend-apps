import Image from "next/image";
import { useTranslation } from "next-i18next";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface Props {
  price: string;
  title: string;
  subtitle: string;
  cover: string;
  description: string;
  category: (string | undefined)[];
  delay?: string | number;
}

function Card(props: Props) {
  const { t } = useTranslation();
  return (
    <>
      <div data-category="Coding,Job Based,Practical">
        <div
          className="max-w-sm pb-4 mx-auto overflow-hidden border rounded-lg shadow"
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
            <p className="text-sm font-bold text-bright-orange md:text-base">
              {props.title}
            </p>
            <p className="font-bold md:text-lg">{props.subtitle}</p>
            <p className="maxline_3 text-ncolor-600">{props.description}</p>
            <p className="pt-10 pb-2 text-xl font-semibold text-neutral-600">
              ৳{props.price} {t("bdt")}
            </p>
            <Link
              href={`/courses/${props.title
                .toLowerCase()
                .replace(/[\s']/g, "-")}`}
            >
              <button className="flex items-center justify-center w-full gap-4 py-3 mx-auto font-medium rounded-md bg-bright-orange bg-opacity-10 text-bright-orange">
                <span>{t("card.btn.coursedetails")}</span>
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
