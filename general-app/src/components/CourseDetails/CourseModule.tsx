import Image from "next/image";
import Accordion from "./Accordion";
import Instructor from "./Instructor";
import VideoThumbnail from "./VideoThumbnail";
import { sampleCourse } from "@/data/sampleCourse";

const accordionData = [
  { summery: "Research and strategy", details: "" },
  { summery: "Information architecture and wireframing", details: "" },
  { summery: "Visual design and usability", details: "" },
  { summery: "Interaction design and user testing", details: "" },
  { summery: "Mobile and responsive design", details: "" },
  { summery: "Design systems and collaboration", details: "" },
];

export default function CourseModule() {
  return (
    <section className="flex flex-col px-4 mx-auto mt-16 max-w md:mt-36">
      <h2
        className="text-3xl font-medium text-center text-black-v1 md:text-4xl"
        data-animate="text"
      >
        Course Module
      </h2>
      <div className="flex flex-col items-start gap-10 mt-12 md:flex-row">
        <div className="w-full space-y-4 md:w-3/5">
          {sampleCourse.map((module, index) => (
            <Accordion moduleTitle={module.moduleTitle} key={index}>
              <div className="px-4">
                <ol className="mt-8 ml-4 border-l-2 border-[#DCE1E8] border-dotted">
                  {module.modules.map((item, i) => (
                    <li key={i}>
                      <div className="flex items-center flex-start">
                        <div className="-ml-[9px] -mt-2 mr-3 flex h-4 min-w-[16px] rounded-full bg-white border-2 border-neutral-300" />
                        <h5 className="-mt-2 text-base font-medium text-black">
                          {item}
                        </h5>
                      </div>
                      <div className="pb-2 mb-6 ml-6">
                        {/* <div className="flex items-center gap-2 text-sm text-neutral-500">
                        <span>Assessment</span>
                        <span className="block w-1 h-1 rounded-full bg-neutral-500" />
                        <span>43 Minutes</span>
                      </div> */}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Accordion>
          ))}
        </div>
        <Instructor />
      </div>
    </section>
  );
}
