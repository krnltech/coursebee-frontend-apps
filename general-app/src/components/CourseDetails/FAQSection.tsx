import { AiOutlinePlus } from "react-icons/ai";

const faqs = [
    {question: "What is UX design?", answer: "UX design, or user experience design, focuses on creating meaningful and seamless interactions between users and digital products or services. It involves understanding user needs, conducting research, designing intuitive interfaces, and optimizing the overall user experience."},
    {question: "Why is UX design important?", answer: ""},
    {question: "What skills are essential for a UX designer?", answer: ""},
    {question: "How does UX design differ from UI design?", answer: ""},
    {question: "What is the UX design process?", answer: ""},
    {question: "Can anyone become a UX designer?", answer: ""},
]
export default function FAQSection() {
  return (
    <section className="max-w mx-auto px-4 flex flex-col mt-16 md:mt-36">
      <h2
        className="text-black-v1 font-medium text-3xl md:text-4xl text-center"
        data-animate="text"
      >
        Frequently Asked Questions
      </h2>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
            {
                faqs.slice(0,3).map((faq, i) => (
                    <FAQ {...faq} key={i+"FAQ"} delay={(i+1)*0.3} />
                ))
            }
        </div>
        <div className="space-y-6">
          {
                faqs.slice(3, faqs.length).map((faq, i) => (
                    <FAQ {...faq} key={i+"FAQ"} delay={(i+1)*0.3} />
                ))
          }

          {/* <!-- Ask Query--> */}
          <div className="text-right text-sm text-dark-gray pt-4">
            <p data-animate="text" data-delay="2.1">
              Couldn’t find what you were looking for?
            </p>
            <p data-animate="text" data-delay="2.4" className="my-1">
              write to us at
            </p>
            <a
              data-animate="text"
              data-delay="2.7"
              href="mailto: coursebee@faq.com"
              className="text-black-v1 underline underline-offset-2"
              >coursebee@faq.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}

type FAQPropType = {
    question: string;
    answer: string;
    delay?: string | number;
}

const FAQ = (props:FAQPropType) => {
    return (
        <>
          <details
            data-animate="text"
            data-delay={props.delay || "0.3"}
            className="group [&_summary::-webkit-details-marker]:hidden bg-white shadow-primary border-[1px] rounded-lg outline-none relative"
          >
            <summary
              className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-black-v1 relative"
            >
              <span
                className="absolute top-6 -left-0 block bg-bright-orange w-2 h-7"
              ></span>
              <h2 className="font-medium text-lg cut-text">
                {props.question}
              </h2>

              <div
                className="bg-bright-orange p-1.5 rounded-md grid place-content-center text-white"
              >
                <AiOutlinePlus />
              </div>
            </summary>

            <p className="text-dark-gray px-6 pb-6">{props.answer || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque beatae alias impedit fugit exercitationem officiis, porro magni neque nam, placeat consectetur reprehenderit quibusdam voluptas. Quisquam perferendis laudantium temporibus doloribus ratione?"}</p>
          </details>
        </>
    )
}