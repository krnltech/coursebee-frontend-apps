import Image from "next/image";

type LearningSegmentProps = {
    detail: string,
    delay?: string | number; 
}
const LearningSegment = (props:LearningSegmentProps) => {
  return (
    <>
      <div
        className="flex items-center gap-4 w-full md:max-w-lg"
        data-animate="text"
        data-delay={props.delay || "0.3"}
      >
        <Image width={32} height={32} src="/icons/course-details/orange_tick.svg" alt="orange_tick" />
        <p className="text-black-v1">{props.detail}</p>
      </div>
    </>
  );
};

export default LearningSegment;