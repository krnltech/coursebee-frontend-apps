import { ReactNode } from "react";

type AccordionTye = {
  children?: ReactNode;
  moduleTitle: string;
  delay?: number | string;
};

function Accordion(props: AccordionTye) {
  return (
    <details
      data-animate="text"
      data-delay={props.delay || "0.3"}
      className="group [&_summary::-webkit-details-marker]:hidden bg-white shadow-primary border-[1px] rounded-lg outline-none relative"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 py-6 px-8 text-black-v1 relative">
        <span className="absolute block w-2 top-6 -left-0 bg-bright-orange h-7"></span>
        <h2 className="text-lg font-semibold cut-text">{props.moduleTitle}</h2>

        <svg
          className="w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-180"
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
  );
}

export default Accordion;
