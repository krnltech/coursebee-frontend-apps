import LearningSegment from "./LearningSegment";

const learningSegments = [
    "Learn about the user experience design process and how to perform user research to guide design decisions.",
    "Construct wireframes, prototypes, and high-fidelity mockups.",
    "Use visual design concepts to produce visually appealing and unified designs.",
    "Understand interaction design ideas and how to create animations and micro-interactions.",
    "To acquire input and enhance usability, conduct user testing.",
    "Using responsive design principles, create designs for many devices and screen sizes.",
    "Collaborate with cross-functional teams and developers to put plans into action.",
    "Recognize the significance of usability, globalization, and emerging technologies in UX/UI design.",
]

function LearningSection() {
  return (
    <section className="max-w mx-auto px-4 flex flex-col mt-16 md:mt-36">
      <h2
        className="text-black-v1 font-medium text-3xl md:text-4xl text-center"
        data-animate="text"
      >
        What you’ll learn?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-12">
        <div className="space-y-6">
          {
            learningSegments.slice(0, learningSegments.length/2).map((segment, i) =>
            <LearningSegment key={i+"learning-segment"} detail={segment} delay={(i+1) * 0.3} />
            )
          }
        </div>
        <div className="space-y-6">
          {
            learningSegments.slice(learningSegments.length/2, learningSegments.length).map((segment, i) =>
            <LearningSegment key={i+"learning-segment"} detail={segment} delay={(i+1) * 0.3} />
            )
          }
        </div>
      </div>
    </section>
  );
}

export default LearningSection;
