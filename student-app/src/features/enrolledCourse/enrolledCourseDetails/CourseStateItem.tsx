import Image from "next/image";

interface Props {
  url: string;
  label: string;
  value: any;
  isBatch?: boolean;
}
const CourseStateItem = ({ url, label, value, isBatch = false }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <Image
        width={20}
        height={20}
        className="w-4 h-4 sm:w-5 sm:h-5"
        src={url}
        alt={label}
      />
      <p className="text-sm sm:text-base ml-0.5">
        {label}:{" "}
        <span
          className={`font-semibold ${isBatch ? "text-primary" : "text-black"}`}
        >
          {value}
        </span>
      </p>
    </div>
  );
};

export default CourseStateItem;
