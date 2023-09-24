import Badge from "@/components/Badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const ModuleItem = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="relative">
        <AccordionTrigger isComplete>
          Introduction to UI Design
        </AccordionTrigger>
        <AccordionContent>
          {/* Item Details */}
          <div>
            <h4 className="mt-6 text-title text-primary">Week 1</h4>
            <ol className="mt-8 ml-4 border-l-2 border-[#DCE1E8] border-dotted">
              <li>
                <div className="flex items-center flex-start">
                  <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-neutral-300" />
                  <h5 className="-mt-2 text-base font-medium text-black">
                    What is UX/UI design and why is it important?
                  </h5>
                </div>
                <div className="pb-6 mb-6 ml-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <span>Video</span>
                    <span className="block w-1 h-1 rounded-full bg-neutral-500" />
                    <span>43 Minutes</span>
                  </div>
                  <div className="rounded-2xl w-[320px] overflow-hidden mt-4">
                    <Image
                      src="/images/ui-ux.jpg"
                      alt="courseImage"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="object-cover w-full aspect-video"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center flex-start">
                  <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-neutral-300" />
                  <h5 className="-mt-2 text-base font-medium text-black">
                    What is UX/UI design and why is it important?
                  </h5>
                </div>
                <div className="mb-6 ml-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <span>Video</span>
                    <span className="block w-1 h-1 rounded-full bg-neutral-500" />
                    <span>15 Minutes</span>
                  </div>
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-16">
            <h4 className="mt-6 text-title text-primary">Week 2</h4>
            <ol className="mt-8 ml-4 border-l-2 border-[#DCE1E8] border-dotted">
              <li>
                <div className="flex items-center flex-start">
                  <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-neutral-300" />
                  <h5 className="-mt-2 text-base font-medium text-black">
                    What is UX/UI design and why is it important??
                  </h5>
                </div>
                <div className="pb-6 mb-6 ml-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <span>Assessment</span>
                    <span className="block w-1 h-1 rounded-full bg-neutral-500" />
                    <span>43 Minutes</span>
                  </div>
                  <div className="pt-2 -ml-1h">
                    <Badge message="On Review" variant="info" />
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center flex-start">
                  <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-neutral-300" />
                  <h5 className="-mt-2 text-base font-medium text-black">
                    The role of an entry level UX designer
                  </h5>
                </div>
                <div className="mb-6 ml-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <span>Video</span>
                    <span className="block w-1 h-1 rounded-full bg-neutral-500" />
                    <span>15 Minutes</span>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </AccordionContent>

        <div className="absolute left-0 block w-[6px] h-[30px] top-5 bg-primary" />
      </AccordionItem>
    </Accordion>
  );
};

export default ModuleItem;
