exports.id = 25;
exports.ids = [25];
exports.modules = {

/***/ 7834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function Card(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            "data-category": "Coding,Job Based,Practical",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "shadow rounded-lg overflow-hidden border max-w-sm mx-auto pb-4",
                "data-animate": "card",
                "data-duration": "1.2",
                "data-delay": "0.1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "absolute top-20px right-20px shadow bg-bright-orange text-white rounded-lg px-4 py-3",
                                children: props.price
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                width: 382,
                                height: 259,
                                className: "w-full",
                                src: props.cover,
                                alt: props.title,
                                loading: "lazy"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-4 md:p-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-bright-orange font-bold text-sm md:text-base",
                                children: props.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "font-bold md:text-lg",
                                children: props.subtitle
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "maxline_3 text-ncolor-600 pb-8",
                                children: props.description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: `/courses/${props.title.toLowerCase().replace(/[\s']/g, "-")}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "font-medium btn mx-auto",
                                    children: "কোর্স বিবরণ"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 6048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZS: () => (/* binding */ courses_en),
/* harmony export */   bd: () => (/* binding */ categories),
/* harmony export */   yU: () => (/* binding */ courses_bn)
/* harmony export */ });
const categories = new Map();
categories.set("coding", {
    en: "Coding",
    bn: "কোডিং"
});
categories.set("job_based", {
    en: "Job Based",
    bn: "চাকরি ভিত্তিক"
});
categories.set("research", {
    en: "Research",
    bn: "গবেষণা"
});
categories.set("practical", {
    en: "Practical",
    bn: "ব্যবহারিক"
});
categories.set("quick_learn", {
    en: "Quick Learn",
    bn: "দ্রুত শিখুন"
});
categories.set("editorial", {
    en: "Editorial",
    bn: "সম্পাদকীয়"
});
categories.set("enhancer", {
    en: "Enhancer",
    bn: "বৃদ্ধিকারী"
});
const courses_bn = [
    {
        title: "Full-Stack Mastery",
        subtitle: "Building with MERN",
        desc: "MERN স্ট্যাকের শক্তি আনলক করুন এবং হ্যান্ড-অন প্রোজেক্ট এবং ব্যাপক প্রশিক্ষণ সহ একজন দক্ষ ফুল-স্ট্যাক বিকাশকারী হয়ে উঠুন।",
        cover: "/images/courses/thumbnails/course-1.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categories.get("coding")?.bn,
            categories.get("job_based")?.bn,
            categories.get("practical")?.bn
        ],
        rating: 4
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
            categories.get("practical")?.bn
        ],
        rating: 5
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
            categories.get("editorial")?.bn
        ],
        rating: 4
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
            categories.get("quick_learn")?.bn
        ],
        rating: 3
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
            categories.get("editorial")?.bn
        ],
        rating: 3.5
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
            categories.get("editorial")?.bn
        ],
        rating: 4.5
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
            categories.get("editorial")?.bn
        ],
        rating: 4
    },
    {
        title: "Ethical Hacking Unveiled",
        subtitle: "Securing the Digital Realm",
        desc: "সিনেম্যাটিক গল্প বলার জগতে নিজেকে নিমজ্জিত করুন এবং ভিডিও সম্পাদনার শিল্পে আয়ত্ত করুন, আকর্ষক গল্প তৈরি করার দক্ষতা অর্জন করুন।",
        cover: "/images/courses/thumbnails/course-8.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categories.get("coding")?.bn,
            categories.get("research")?.bn,
            categories.get("practical")?.bn,
            categories.get("job_based")?.bn
        ],
        rating: 3.5
    },
    {
        title: "Machine Learning Insights",
        subtitle: "Mastering Data Analysis",
        desc: "মেশিন লার্নিং এর জগতে প্রবেশ করুন এবং ডেটা বিশ্লেষণে দক্ষতা অর্জন, প্রয়োজনীয় দক্ষতা অর্জনের জন্য মূল্যবান অন্তর্দৃষ্টি অর্জন করুন।",
        cover: "/images/courses/thumbnails/course-9.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categories.get("coding")?.bn,
            categories.get("research")?.bn
        ],
        rating: 4
    },
    {
        title: "Data Science Demystified",
        subtitle: "Empowering Everyone",
        desc: "ডেটা সায়েন্সের জগৎকে বিকৃত করুন এবং ডেটা ব্যবহার করার দক্ষতা ও জ্ঞান দিয়ে নিজেকে শক্তিশালী করুন।",
        cover: "/images/courses/thumbnails/course-11.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categories.get("job_based")?.bn,
            categories.get("research")?.bn
        ],
        rating: 3
    },
    {
        title: "Digital Marketing Domination",
        subtitle: "Strategies for Success",
        desc: "ডিজিটাল মার্কেটিং এর ক্ষেত্র জয় করুন এবং সফলতার জন্য কার্যকরী কৌশলের উপর আয়ত্ত অর্জন করুন, শক্তিশালী কৌশল আবিষ্কার করুন",
        cover: "/images/courses/thumbnails/course-10.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categories.get("editorial")?.bn,
            categories.get("quick_learn")?.bn
        ],
        rating: 3.5
    },
    {
        title: "Building Digital Ventures",
        subtitle: "Digital Enterprise Opportunities",
        desc: "ডিজিটাল উদ্যোগ গড়ে তোলার যাত্রা শুরু করুন এবং জ্ঞান অর্জন করে ডিজিটাল এন্টারপ্রাইজ ল্যান্ডস্কেপের বিশাল সুযোগগুলি অন্বেষণ করুন।",
        cover: "/images/courses/thumbnails/course-12.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categories.get("editorial")?.bn,
            categories.get("quick_learn")?.bn
        ],
        rating: 4.5
    },
    {
        title: "React Revolution",
        subtitle: "Mastering Frontend",
        desc: "প্রতিক্রিয়া বিপ্লবে যোগ দিন এবং গতিশীল এবং ইন্টারেক্টিভ UI তৈরির শিল্পে দক্ষতা অর্জন করে ফ্রন্টএন্ড বিকাশের একজন মাস্টার হয়ে উঠুন।",
        cover: "/images/courses/thumbnails/course-5.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categories.get("coding")?.bn,
            categories.get("job_based")?.bn
        ],
        rating: 4
    },
    {
        title: "Scholar's Journey",
        subtitle: "Research and Publication",
        desc: "একজন পণ্ডিতের যাত্রা শুরু করুন এবং প্রয়োজনীয় দক্ষতা এবং পদ্ধতিগুলি অর্জন করে সফল গবেষণা এবং প্রকাশনার পথ খুলে দিন।",
        cover: "/images/courses/thumbnails/course-13.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categories.get("research")?.bn,
            categories.get("editorial")?.bn
        ],
        rating: 4.5
    },
    {
        title: "Flutter Power",
        subtitle: "Mobile Development",
        desc: "ফ্লটারের শক্তিকে কাজে লাগান এবং মোবাইল ডেভেলপমেন্টের জগতে ডুব দিন, ক্রস-প্ল্যাটফর্ম অ্যাপ্লিকেশন তৈরির শিল্পে আয়ত্ত করুন।",
        cover: "/images/courses/thumbnails/course-14.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categories.get("coding")?.bn,
            categories.get("job_based")?.bn
        ],
        rating: 3.5
    },
    {
        title: "Competitive Programming",
        subtitle: "Coding with Confidence",
        desc: "প্রতিযোগিতামূলক প্রোগ্রামিংয়ের যাত্রা শুরু করুন এবং কোডিং চ্যালেঞ্জ, অ্যালগরিদম মাস্টারিং ইত্যাদিতে দক্ষতা অর্জনের জন্য আত্মবিশ্বাস অর্জন করুন।",
        cover: "/images/courses/thumbnails/course-15.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categories.get("coding")?.bn
        ],
        rating: 4.5
    },
    {
        title: "Mastering English Communication",
        subtitle: "Fluency in Speaking, Writing",
        desc: "ইংরেজি কমিউনিকেশনে দক্ষতা অর্জনের চাবিকাঠি আনলক করুন এবং কথা বলা এবং লেখা উভয় ক্ষেত্রেই সাবলীলতা অর্জন করুন।",
        cover: "/images/courses/thumbnails/course-16.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categories.get("job_based")?.bn,
            categories.get("quick_learn")?.bn
        ],
        rating: 3
    },
    {
        title: "After-School",
        subtitle: "Coding Adventures",
        desc: "স্কুলের পরে কোডিং অ্যাডভেঞ্চার শুরু করুন, যেখানে তরুণ শিক্ষার্থীরা প্রোগ্রামিংয়ের জগতে ডুব দেয়, উত্তেজনাপূর্ণ প্রকল্পগুলি অন্বেষণ করে।",
        cover: "/images/courses/thumbnails/course-21.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categories.get("coding")?.bn
        ],
        rating: 3
    },
    {
        title: "Creative Explorers",
        subtitle: "Fun and Learning for Kids",
        desc: "স্একটি সৃজনশীল অন্বেষণ যাত্রা শুরু করুন যা বিশেষভাবে বাচ্চাদের জন্য ডিজাইন করা হয়েছে, একটি মজাদার এবং আকর্ষক শেখার অভিজ্ঞতা প্রদান করে।",
        cover: "/images/courses/thumbnails/course-19.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categories.get("editorial")?.bn,
            categories.get("quick_learn")?.bn
        ],
        rating: 3
    },
    {
        title: "After-School Robotics",
        subtitle: "Building the Future",
        desc: "আমাদের স্কুল-পরবর্তী রোবোটিক্স প্রোগ্রামে আপনার সম্ভাবনা উন্মোচন করুন এবং একটি উজ্জ্বল ভবিষ্যত গড়ে তুলুন রোবোটিক্সের চিত্তাকর্ষক বিশ্ব অন্বেষণ করুন।",
        cover: "/images/courses/thumbnails/course-17.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categories.get("coding")?.bn,
            categories.get("research")?.bn,
            categories.get("practical")?.bn
        ],
        rating: 3.5
    },
    {
        title: "Mastering Effective",
        subtitle: "Communication Skills",
        desc: "কার্যকর যোগাযোগের শিল্পে আয়ত্ত করুন এবং স্বচ্ছতা এবং আত্মবিশ্বাসের সাথে নিজেকে প্রকাশ করার শক্তি আনলক করুন।",
        cover: "/images/courses/thumbnails/course-18.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categories.get("quick_learn")?.bn,
            categories.get("enhancer")?.bn,
            categories.get("editorial")?.bn
        ],
        rating: 0
    }
];
/**
   * English 
   */ const courses_en = [
    {
        title: "Full-Stack Mastery",
        subtitle: "Building with MERN",
        desc: "Unlock the power of MERN stack and become a proficient full-stack developer with hands-on projects and comprehensive training.",
        cover: "/images/courses/thumbnails/course-1.png",
        price: "4999.99",
        category: [
            categories.get("coding")?.en,
            categories.get("job_based")?.en,
            categories.get("practical")?.en
        ],
        rating: 4
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
            categories.get("practical")?.en
        ],
        rating: 5
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
            categories.get("editorial")?.en
        ],
        rating: 4
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
            categories.get("quick_learn")?.en
        ],
        rating: 3
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
            categories.get("editorial")?.en
        ],
        rating: 3.5
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
            categories.get("editorial")?.en
        ],
        rating: 4.5
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
            categories.get("editorial")?.en
        ],
        rating: 4
    },
    {
        title: "Ethical Hacking Unveiled",
        subtitle: "Securing the Digital Realm",
        desc: "Embark on a journey to unveil the world of ethical hacking and gain expertise in securing the digital realm, learning advanced techniques.",
        cover: "/images/courses/thumbnails/course-8.png",
        price: "4999.99",
        category: [
            categories.get("coding")?.en,
            categories.get("research")?.en,
            categories.get("practical")?.en,
            categories.get("job_based")?.en
        ],
        rating: 3.5
    },
    {
        title: "Machine Learning Insights",
        subtitle: "Mastering Data Analysis",
        desc: "Delve into the realm of machine learning and gain valuable insights for mastering data analysis, acquiring the required skills.",
        cover: "/images/courses/thumbnails/course-9.png",
        price: "4999.99",
        category: [
            categories.get("coding")?.en,
            categories.get("research")?.en
        ],
        rating: 4
    },
    {
        title: "Data Science Demystified",
        subtitle: "Empowering Everyone",
        desc: "Demystify the world of data science and empower yourself with the skills and knowledge to leverage data.",
        cover: "/images/courses/thumbnails/course-11.png",
        price: "4999.99",
        category: [
            categories.get("job_based")?.en,
            categories.get("research")?.en
        ],
        rating: 3
    },
    {
        title: "Digital Marketing Domination",
        subtitle: "Strategies for Success",
        desc: "Conquer the realm of digital marketing and gain mastery over effective strategies for success, discovering powerful techniques.",
        cover: "/images/courses/thumbnails/course-10.png",
        price: "4999.99",
        category: [
            categories.get("editorial")?.en,
            categories.get("quick_learn")?.en
        ],
        rating: 3.5
    },
    {
        title: "Building Digital Ventures",
        subtitle: "Digital Enterprise Opportunities",
        desc: "Embark on a journey of building digital ventures and explore the vast opportunities in the digital enterprise landscape, acquiring the knowledge.",
        cover: "/images/courses/thumbnails/course-12.png",
        price: "4999.99",
        category: [
            categories.get("editorial")?.en,
            categories.get("quick_learn")?.en
        ],
        rating: 4.5
    },
    {
        title: "React Revolution",
        subtitle: "Mastering Frontend",
        desc: "Join the React revolution and become a master of frontend development, mastering the art of building dynamic and interactive UIs.",
        cover: "/images/courses/thumbnails/course-5.png",
        price: "4999.99",
        category: [
            categories.get("coding")?.en,
            categories.get("job_based")?.en
        ],
        rating: 4
    },
    {
        title: "Scholar's Journey",
        subtitle: "Research and Publication",
        desc: "Embark on a scholar's journey and unlock the path to successful research and publication, acquiring the essential skills and methodologies.",
        cover: "/images/courses/thumbnails/course-13.png",
        price: "4999.99",
        category: [
            categories.get("research")?.en,
            categories.get("editorial")?.en
        ],
        rating: 4.5
    },
    {
        title: "Flutter Power",
        subtitle: "Mobile Development",
        desc: "Harness the power of Flutter and dive into the world of mobile development, mastering the art of building cross-platform applications.",
        cover: "/images/courses/thumbnails/course-14.png",
        price: "4999.99",
        category: [
            categories.get("coding")?.en,
            categories.get("job_based")?.en
        ],
        rating: 3.5
    },
    {
        title: "Competitive Programming",
        subtitle: "Coding with Confidence",
        desc: "Embark on a journey of competitive programming and gain the confidence to excel in coding challenges, mastering algorithms, etc.",
        cover: "/images/courses/thumbnails/course-15.png",
        price: "4999.99",
        category: [
            categories.get("coding")?.en
        ],
        rating: 4.5
    },
    {
        title: "Mastering English Communication",
        subtitle: "Fluency in Speaking, Writing",
        desc: "Unlock the key to mastering English communication and achieve fluency in both speaking and writing etc.",
        cover: "/images/courses/thumbnails/course-16.png",
        price: "4999.99",
        category: [
            categories.get("job_based")?.en,
            categories.get("quick_learn")?.en
        ],
        rating: 3
    },
    {
        title: "After-School",
        subtitle: "Coding Adventures",
        desc: "Embark on a creative exploration journey designed specifically for kids, offering a fun and engaging learning experience.",
        cover: "/images/courses/thumbnails/course-21.png",
        price: "4999.99",
        category: [
            categories.get("coding")?.en
        ],
        rating: 3
    },
    {
        title: "Creative Explorers",
        subtitle: "Fun and Learning for Kids",
        desc: "Embark on coding adventures after school, where young learners dive into the world of programming, exploring exciting projects.",
        cover: "/images/courses/thumbnails/course-19.png",
        price: "4999.99",
        category: [
            categories.get("editorial")?.en,
            categories.get("quick_learn")?.en
        ],
        rating: 3
    },
    {
        title: "After-School Robotics",
        subtitle: "Building the Future",
        desc: "Unleash your potential in our after-school robotics program and build a brighter future. Explore the fascinating world of robotics.",
        cover: "/images/courses/thumbnails/course-17.png",
        price: "4999.99",
        category: [
            categories.get("coding")?.en,
            categories.get("research")?.en,
            categories.get("practical")?.en
        ],
        rating: 3.5
    },
    {
        title: "Mastering Effective",
        subtitle: "Communication Skills",
        desc: "Master the art of effective communication and unlock the power to express yourself with clarity and confidence.",
        cover: "/images/courses/thumbnails/course-18.png",
        price: "4999.99",
        category: [
            categories.get("quick_learn")?.en,
            categories.get("enhancer")?.en,
            categories.get("editorial")?.en
        ],
        rating: 0
    }
];


/***/ }),

/***/ 6443:
/***/ (() => {



/***/ })

};
;