import { useTranslation } from "next-i18next";
import UserRating from "./Home/UserRating";
import Image from "next/image";


function RatingsAndStars() {
    const {t} = useTranslation();
    
  return (
    <>
      <div className="flex">
        <UserRating className="w-10 rounded-full border-2 border-white " />
      </div>
      <div className="flex flex-col items-center md:items-start">
        <div className="flex gap-0.5">
          <Image
            width={16}
            height={16}
            data-animate="text"
            data-delay="1.4"
            src="/icons/star.svg"
            alt="star"
          />
          <Image
            width={16}
            height={16}
            data-animate="text"
            data-delay="1.5"
            src="/icons/star.svg"
            alt="star"
          />
          <Image
            width={16}
            height={16}
            data-animate="text"
            data-delay="1.6"
            src="/icons/star.svg"
            alt="star"
          />
          <Image
            width={16}
            height={16}
            data-animate="text"
            data-delay="1.7"
            src="/icons/star.svg"
            alt="star"
          />
          <Image
            width={16}
            height={16}
            data-animate="text"
            data-delay="1.8"
            src="/icons/star-half.svg"
            alt="star"
          />
        </div>
        <p
          className="text-xs text-dark-gray font-medium mt-2 md:mt-1"
          data-animate="text"
          data-delay="1.8"
        >
          {t("rating-details")}
        </p>
      </div>
    </>
  );
}

export default RatingsAndStars;
