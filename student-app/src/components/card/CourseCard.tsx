import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CourseCard = () => {
  return (
    <div className="relative block overflow-hidden group max-w-[420px] border rounded-xl">
      <div className="flex items-center justify-center w-full transition duration-500 bg-orange-50">
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
        <p className="font-bold text-orange-400 uppercase">
          WordPress Wizardry
        </p>
        {/* Subtitle */}
        <h4 className="font-semibold text-black text-title">
          Crafting Dynamic Websites
        </h4>
        {/* Description */}
        <p className="mt-2 text-neutral-700 line-clamp-3">
          Master the art of crafting dynamic websites that seamlessly blend
          creativity and functionality, combining eye-catching products.
        </p>

        {/* Footer - Date & Button */}
        <div className="mt-8 mb-2">
          <p className="text-title text-neutral-700 font-semibold mb-1.5">
            &#2547;4999.99 BDT
          </p>
          <Button className="w-full py-6 font-bold rounded-lg" variant="light">
            Course Details
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
