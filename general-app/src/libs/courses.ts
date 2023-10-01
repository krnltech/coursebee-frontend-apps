export const categories = new Map<string, { en: string; bn: string }>();
categories.set("coding", { en: "Coding", bn: "কোডিং" });
categories.set("job_based", { en: "Job Based", bn: "চাকরি ভিত্তিক" });
categories.set("research", { en: "Research", bn: "গবেষণা" });
categories.set("practical", { en: "Practical", bn: "ব্যবহারিক" });
categories.set("quick_learn", { en: "Quick Learn", bn: "দ্রুত শিখুন" });
categories.set("editorial", { en: "Editorial", bn: "সম্পাদকীয়" });
categories.set("enhancer", { en: "Enhancer", bn: "বৃদ্ধিকারী" });

export type Course = {
  title: string;
  subtitle: string;
  desc: string;
  cover: string;
  price: string;
  category: (string | undefined)[];
  rating: number;
};

export const courses_bn = [
  {
    title: "Full-Stack Mastery",
    subtitle: "Building with MERN",
    desc: "MERN স্ট্যাকের শক্তি আনলক করুন এবং হ্যান্ড-অন প্রোজেক্ট এবং ব্যাপক প্রশিক্ষণ সহ একজন দক্ষ ফুল-স্ট্যাক বিকাশকারী হয়ে উঠুন।",
    cover: "/images/courses/thumbnails/course-1.png",
    price: "৪৯৯৯.৯৯",
    category: [
      categories.get("coding")?.bn,
      categories.get("job_based")?.bn,
      categories.get("practical")?.bn,
    ],
    rating: 4,
  },
  {
    title: "Python Powerhouse",
    subtitle: "Unlocking Its Full Potential",
    desc: "পাইথনের শক্তি উন্মোচন করুন: শক্তিশালী অ্যাপ্লিকেশন তৈরি করুন এবং এই বহুমুখী প্রোগ্রামিং ভাষার সাথে জটিল সমস্যার সমাধান করুন।",
    cover: "/images/courses/thumbnails/course-2.png",
    price: "৪৯৯৯.৯৯",
    category: [
      categories.get("coding")?.bn,
      categories.get("job_based")?.bn,
      categories.get("practical")?.bn,
    ],
    rating: 5,
  },
  {
    title: "Web Design Unleashed",
    subtitle: "Creating Digital Experiences",
    desc: "আপনার সৃজনশীলতা প্রকাশ করুন এবং চিত্তাকর্ষক ডিজিটাল অভিজ্ঞতা তৈরি করতে দক্ষতা অর্জন করুন যা স্থায়ী প্রভাব ফেলে।",
    cover: "/images/courses/thumbnails/course-3.png",
    price: "৪৯৯৯.৯৯",
    category: [
      categories.get("job_based")?.bn,
      categories.get("practical")?.bn,
      categories.get("editorial")?.bn,
    ],
    rating: 4,
  },
  {
    title: "WordPress Wizardry",
    subtitle: "Crafting Dynamic Websites",
    desc: "চোখ ধাঁধানো পণ্যগুলিকে একত্রিত করে সৃজনশীলতা এবং কার্যকারিতাকে নির্বিঘ্নে মিশ্রিত করে এমন গতিশীল ওয়েবসাইটগুলি তৈরি করার শিল্পে আয়ত্ত করুন৷",
    cover: "/images/courses/thumbnails/course-5.png",
    price: "৪৯৯৯.৯৯",
    category: [
      categories.get("job_based")?.bn,
      categories.get("practical")?.bn,
      categories.get("quick_learn")?.bn,
    ],
    rating: 3,
  },
  {
    title: "User-Centric Design",
    subtitle: "Mastering UI/UX",
    desc: "স্বজ্ঞাত ইন্টারফেস তৈরির শিল্পে আয়ত্ত করে নিরবচ্ছিন্ন এবং ব্যবহারকারী-কেন্দ্রিক ডিজিটাল অভিজ্ঞতা তৈরি করতে UI/UX ডিজাইনের নীতিগুলি আয়ত্ত করুন।",
    cover: "/images/courses/thumbnails/course-4.png",
    price: "৪৯৯৯.৯৯",
    category: [
      categories.get("job_based")?.bn,
      categories.get("practical")?.bn,
      categories.get("editorial")?.bn,
    ],
    rating: 3.5,
  },
  {
    title: "Visual Communication",
    subtitle: "Mastering Graphics Design",
    desc: "চাক্ষুষ যোগাযোগের শক্তি আনলক করুন এবং গ্রাফিক্স ডিজাইনের শিল্পে আয়ত্ত করুন, কীভাবে কার্যকরভাবে বার্তাগুলি প্রকাশ করতে হয় তা শিখুন",
    cover: "/images/courses/thumbnails/course-6.png",
    price: "৪৯৯৯.৯৯",
    category: [
      categories.get("job_based")?.bn,
      categories.get("practical")?.bn,
      categories.get("editorial")?.bn,
    ],
    rating: 4.5,
  },
  {
    title: "Cinematic Storytelling",
    subtitle: "Mastering Video Editing",
    desc: "সিনেম্যাটিক গল্প বলার জগতে নিজেকে নিমজ্জিত করুন এবং ভিডিও সম্পাদনার শিল্পে আয়ত্ত করুন, আকর্ষক গল্প তৈরি করার দক্ষতা অর্জন করুন।",
    cover: "/images/courses/thumbnails/course-7.png",
    price: "৪৯৯৯.৯৯",
    category: [
      categories.get("job_based")?.bn,
      "Enhancer",
      categories.get("practical")?.bn,
      categories.get("editorial")?.bn,
    ],
    rating: 4,
  },
  {
    title: "Digital Entrepreneurship Business",
    subtitle: "Complete Digital Business",
    desc: "একটা অনলাইন ব্যবসা কিভাবে দাঁড় করবেন সেটার বিস্তারিত আলোচনা এই কোর্সের মাধ্যমে জানতে পারবেন। আমাদের কোর্সটা আমরা এমনভাবে সাজিয়েছি যেনো প্রতিটা মডিউল শিখানোর সাথে সাথে আপনি বাস্তবে সেটা প্রয়োগ করতে পারেন।",
    cover: "/images/courses/thumbnails/course-8.png",
    price: "৪৯৯৯.৯৯",
    category: [
      categories.get("coding")?.bn,
      categories.get("research")?.bn,
      categories.get("practical")?.bn,
      categories.get("job_based")?.bn,
    ],
    rating: 3.5,
  },
  {
    title: "Machine Learning Insights",
    subtitle: "Mastering Data Analysis",
    desc: "মেশিন লার্নিং এর জগতে প্রবেশ করুন এবং ডেটা বিশ্লেষণে দক্ষতা অর্জন, প্রয়োজনীয় দক্ষতা অর্জনের জন্য মূল্যবান অন্তর্দৃষ্টি অর্জন করুন।",
    cover: "/images/courses/thumbnails/course-9.png",
    price: "৪৯৯৯.৯৯",
    category: [categories.get("coding")?.bn, categories.get("research")?.bn],
    rating: 4,
  },
];
/**
 * English
 */
export const courses_en = [
  {
    title: "Full-Stack Mastery",
    subtitle: "Building with MERN",
    desc: "Unlock the power of MERN stack and become a proficient full-stack developer with hands-on projects and comprehensive training.",
    cover: "/images/courses/thumbnails/course-1.png",
    price: "4999.99",
    category: [
      categories.get("coding")?.en,
      categories.get("job_based")?.en,
      categories.get("practical")?.en,
    ],
    rating: 4,
  },
  {
    title: "Python Powerhouse",
    subtitle: "Unlocking Its Full Potential",
    desc: "Unleash Python's power: Build robust applications and solve complex problems with this versatile programming language.",
    cover: "/images/courses/thumbnails/course-2.png",
    price: "4999.99",
    category: [
      categories.get("coding")?.en,
      categories.get("job_based")?.en,
      categories.get("practical")?.en,
    ],
    rating: 5,
  },
  {
    title: "Web Design Unleashed",
    subtitle: "Creating Digital Experiences",
    desc: "Unleash your creativity and master the skills to create captivating digital experiences that make a lasting impact.",
    cover: "/images/courses/thumbnails/course-3.png",
    price: "4999.99",
    category: [
      categories.get("job_based")?.en,
      categories.get("practical")?.en,
      categories.get("editorial")?.en,
    ],
    rating: 4,
  },
  {
    title: "WordPress Wizardry",
    subtitle: "Crafting Dynamic Websites",
    desc: "Master the art of crafting dynamic websites that seamlessly blend creativity and functionality, combining eye-catching products.",
    cover: "/images/courses/thumbnails/course-5.png",
    price: "4999.99",
    category: [
      categories.get("job_based")?.en,
      categories.get("practical")?.en,
      categories.get("quick_learn")?.en,
    ],
    rating: 3,
  },
  {
    title: "User-Centric Design",
    subtitle: "Mastering UI/UX",
    desc: "Master the principles of UI/UX design to create seamless and user-centric digital experiences, mastering the art of crafting intuitive interfaces.",
    cover: "/images/courses/thumbnails/course-4.png",
    price: "4999.99",
    category: [
      categories.get("job_based")?.en,
      categories.get("practical")?.en,
      categories.get("editorial")?.en,
    ],
    rating: 3.5,
  },
  {
    title: "Visual Communication",
    subtitle: "Mastering Graphics Design",
    desc: "Unlock the power of visual communication and master the art of graphics design, learning how to effectively convey messages.",
    cover: "/images/courses/thumbnails/course-6.png",
    price: "4999.99",
    category: [
      categories.get("job_based")?.en,
      categories.get("practical")?.en,
      categories.get("editorial")?.en,
    ],
    rating: 4.5,
  },
  {
    title: "Cinematic Storytelling",
    subtitle: "Mastering Video Editing",
    desc: "Immerse yourself in the world of cinematic storytelling and master the art of video editing, acquiring the skills to craft compelling stories.",
    cover: "/images/courses/thumbnails/course-7.png",
    price: "4999.99",
    category: [
      categories.get("job_based")?.en,
      "Enhancer",
      categories.get("practical")?.en,
      categories.get("editorial")?.en,
    ],
    rating: 4,
  },
  {
    title: "Digital Entrepreneurship Business",
    subtitle: "Complete Digital Business",
    desc: "Learn more about how to start an online business through this course.We have designed our course in such a way that as you learn each module, you can apply it in practice.",
    cover: "/images/courses/thumbnails/course-8.png",
    price: "4999.99",
    category: [
      categories.get("coding")?.en,
      categories.get("research")?.en,
      categories.get("practical")?.en,
      categories.get("job_based")?.en,
    ],
    rating: 3.5,
  },
  {
    title: "Machine Learning Insights",
    subtitle: "Mastering Data Analysis",
    desc: "Delve into the realm of machine learning and gain valuable insights for mastering data analysis, acquiring the required skills.",
    cover: "/images/courses/thumbnails/course-9.png",
    price: "4999.99",
    category: [categories.get("coding")?.en, categories.get("research")?.en],
    rating: 4,
  },
];
