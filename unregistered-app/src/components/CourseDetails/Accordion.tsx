import Image from "next/image"
import { ReactNode } from "react";

type AccordionTye = {
    children?: ReactNode;
    summery: string;
    delay?: number|string;
}

function Accordion(props:AccordionTye) {
  return (
    <details
    data-animate="text"
    data-delay={props.delay ||"0.3"}
    className="group [&_summary::-webkit-details-marker]:hidden bg-white shadow-primary border-[1px] rounded-lg outline-none relative"
  >
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-black-v1 relative"
    >
      <span
        className="absolute top-6 -left-0 block bg-bright-orange w-2 h-7"
      ></span>
      <h2 className="font-medium text-lg cut-text">
        {props.summery}
      </h2>

      <svg
        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </summary>
    {props.children}
  </details>
  )
}

export default Accordion