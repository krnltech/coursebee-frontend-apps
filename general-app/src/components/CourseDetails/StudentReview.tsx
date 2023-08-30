import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

interface ReviewType {
  username: string;
  userPhoto: string;
  review: string;
  rating: number;
  review_date: string;
}

const StudentReview = ({ username, userPhoto, review, rating, review_date }: ReviewType) => {
  return (
    <>
      <div data-animate="text" className="py-2 mx-7">
        <div className="box_shadow border py-7 px-7 grid items-end">
          <div className="flex gap-3 items-center">
            <Image
              width={45}
              height={45}
              src={userPhoto}
              alt={username}
              className="w-[45px] rounded-3xl"
            />
            <div>
                <p className="font-normal md:text-lg">{username}</p>
                <p className="text-gray-500 text-xs font-medium">
                    {review_date}
                </p>
            </div>
          </div>
          <div className="flex items-center gap-1 pt-6">
            {[1,2,3,4,5].map((i) => (
              <AiFillStar
                key={i + "star"}
                className={
                  i <= rating ? "text-yellow-400" : "text-gray-300"
                }
              />
            ))}
          </div>
          <p className="my-5 maxline_3 overflow-hidden"> {review} </p>
        </div>
      </div>
    </>
  );
};

export default StudentReview;