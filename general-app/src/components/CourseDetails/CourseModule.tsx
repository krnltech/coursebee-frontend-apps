import Image from "next/image";
import Accordion from "./Accordion";
import Instructor from "./Instructor";
import VideoThumbnail from "./VideoThumbnail";

const accordionData = [
    { summery: "Research and strategy", details: "" },
    { summery: "Information architecture and wireframing", details: "" },
    { summery: "Visual design and usability", details: "" },
    { summery: "Interaction design and user testing", details: "" },
    { summery: "Mobile and responsive design", details: "" },
    { summery: "Design systems and collaboration", details: "" },
]

export default function CourseModule() {
  return (
    <section className="max-w mx-auto px-4 flex flex-col mt-16 md:mt-36">
      <h2
        className="text-black-v1 font-medium text-3xl md:text-4xl text-center"
        data-animate="text"
      >
        Course Module
      </h2>
      <div className="flex flex-col md:flex-row mt-12 gap-10 items-start">
        <div className="w-full md:w-3/5 space-y-4">
          <Accordion summery="Introduction to UX/UI design">
            <p className="font-medium text-bright-orange -mt-2 mb-3 ml-4">
              Week 1
            </p>
            <div className="mb-6 px-4 leading-relaxed text-black-v1">
              <div className="flex items-start gap-3">
                <div className="timeline">
                  <div className="circle"></div>
                  <div className="vline"></div>
                </div>
                <p className="-mt-[4px] text-sm cut-text">
                  What is UX/UI design and why is it important?
                </p>
              </div>
              <div className="pl-[6px]">
                <VideoThumbnail/>
              </div>
              <div className="flex items-start gap-3">
                <div className="timeline">
                  <div className="circle"></div>
                  <div className="vline"></div>
                </div>
                <p className="-mt-[4px] text-sm cut-text">
                  The UI design process
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="timeline">
                  <div className="circle"></div>
                  <div className="vline"></div>
                </div>
                <p className="-mt-[4px] text-sm cut-text">
                  The roles and responsibilities of UX/UI designers
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="timeline">
                  <div className="circle"></div>
                </div>
                <p className="-mt-[4px] text-sm cut-text">
                  How to Submit Assignments (Off topic)
                </p>
              </div>
            </div>

            <p className="font-medium text-bright-orange -mt-1 mb-3 ml-4">
              Week 2
            </p>
            <div className="flex items-center py-2 px-4 border-[2px] w-fit gap-2 ml-4 rounded-md mb-6">
              <Image
                width={20}
                height={20}
                src="/icons/course-details/assignment.svg"
                alt="assignment"
                className="w-5 h-5"
              />
              <p className="">Assignment</p>
            </div>
          </Accordion>

        {
            accordionData.map((accordion, i) => (
                <Accordion delay={(i+1) * 0.3} key={i+"accordion"} summery={accordion.summery}>
                    <p className="text-black-v1 px-6 pb-6">
                        {accordion.details || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sed perspiciatis consectetur unde accusamus hic illum sunt quis porro qui?"}
                    </p>
                </Accordion>
            ))
        }
        </div>
        <Instructor/>
      </div>
    </section>
  );
}
