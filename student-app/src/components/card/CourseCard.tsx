import Image from "next/image";
import { Button } from "../ui/button";

const CourseCard = () => {
  return (
    <div className="relative block overflow-hidden group w-[400px] border rounded-xl">
      {/* Price */}
      <Button className="absolute py-2 font-medium top-5 right-4">
        &#2547; 4999.99 BDT
      </Button>

      <div className="flex items-center justify-center w-full transition duration-500 bg-offWhite">
        <Image
          src={"/images/course/illustration-3.png"}
          alt="course image"
          width={278}
          height={278}
          priority
          className="object-cover"
        />
      </div>

      <div className="relative p-6 bg-white">
        {/* Title */}
        <p className="font-semibold uppercase text-primary">
          WordPress Wizardry
        </p>
        {/* Subtitle */}
        <h4 className="text-[22px] text-black font-semibold">
          Crafting Dynamic Websites
        </h4>
        {/* Description */}
        <p className="mt-3 text-sm text-neutral-500 line-clamp-3">
          Master the art of crafting dynamic websites that seamlessly blend
          creativity and functionality, combining eye-catching products.
        </p>

        {/* Footer - Date & Button */}
        <div className="flex items-center justify-center mt-8 mb-2">
          <Button size="sm">Course Details</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
