import LearningSegment from "./LearningSegment";

const learningSegments = [
  "Digital Entrepreneurship Business blueprints - Real examples you can follow to build your business from scratch.",
  "In depth analysis of business promotion &amp; marketing strategies to create &amp; target powerful Audiences.",
  "In-depth guideline from product sourcing to delivery.",
  "Real life example of business establishment: Both service and product based business",
];

function LearningSection() {
  return (
    <section className="flex flex-col px-4 mx-auto mt-16 max-w md:mt-36">
      <h2
        className="text-3xl font-medium text-center text-black-v1 md:text-4xl"
        data-animate="text"
      >
        What you’ll learn?
      </h2>
      <div className="grid grid-cols-1 gap-5 mt-12 md:grid-cols-2 md:gap-10">
        <div className="space-y-6">
          {learningSegments
            .slice(0, learningSegments.length / 2)
            .map((segment, i) => (
              <LearningSegment
                key={i + "learning-segment"}
                detail={segment}
                delay={(i + 1) * 0.3}
              />
            ))}
        </div>
        <div className="space-y-6">
          {learningSegments
            .slice(learningSegments.length / 2, learningSegments.length)
            .map((segment, i) => (
              <LearningSegment
                key={i + "learning-segment"}
                detail={segment}
                delay={(i + 1) * 0.3}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default LearningSection;
