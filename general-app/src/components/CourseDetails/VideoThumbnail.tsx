import Image from "next/image"
import { AiFillPlayCircle } from "react-icons/ai"

function VideoThumbnail() {
  return (
    <div className="border-l border-dashed border-[#a3a5b5]">
        <div className="relative border-l border-dashed border-[#a3a5b5] pl-4 pb-4 w-max">
            <Image width={320} height={180} className="brightness-50 rounded-lg" src={"/images/courses/course-video.jpg"} alt="Course" />
            <div className="absolute top-0 left-0 right-full bottom-full flex justify-center items-center w-full h-full pl-4 pb-4">
                <AiFillPlayCircle color="white" size={48}/>
            </div>
        </div>
    </div>
  )
}

export default VideoThumbnail