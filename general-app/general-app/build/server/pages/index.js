(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_tsx_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_tsx_preferredRegion_middlewareConfig_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/index.tsx
var pages_namespaceObject = {};
__webpack_require__.r(pages_namespaceObject);
__webpack_require__.d(pages_namespaceObject, {
  "default": () => (Home),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/components/Home/Articles.tsx

const articles = [
    {
        title: "How to getting started with CourseBee with three simple steps!",
        date: "May 24, 2022",
        cover: "/images/article_placeholder.png"
    },
    {
        title: "Engage into our social platform to win prizes!",
        date: "May 24, 2022",
        cover: "/images/article_placeholder.png"
    },
    {
        title: "Meet our new instructor for our brand new AI course",
        date: "May 24, 2022",
        cover: "/images/article_placeholder.png"
    }
];
function Articles() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "pt-28 md:pt-44 max-w mx-auto px-4 overflow-x-hidden",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mx-auto",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center justify-center md:justify-between pb-[30px]",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            "data-animate": "text",
                            className: "text-3xl md:text-4xl md:leading-[60px] font-medium text-center md:text-start",
                            children: "Read our latest articles"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            "data-animate": "button",
                            "data-delay": "0.5",
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "hidden md:block py-3 px-6 md:py-5 md:px-12 btn leading- font-semibold rounded-md",
                                children: "Browse All Articles"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "pt-[30px] gap-4 grid md:grid-cols-2 lg:grid-cols-3 justify-center md:justify-between justify-items-center items-stretch",
                    children: articles.map((article, i)=>/*#__PURE__*/ jsx_runtime.jsx(Article, {
                            title: article.title,
                            cover: article.cover,
                            date: article.date
                        }, i + "article"))
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    "data-animate": "button",
                    "data-delay": "0.3",
                    className: "flex items-center justify-center pt-10",
                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "md:hidden py-4 px-6 bg-bright-orange text-white leading-5 font-semibold rounded-[5px]",
                        children: "Browse all articles"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Home_Articles = (Articles);
const Article = ({ title, cover, date })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            "data-animate": "card",
            className: "max-w-[410px] box_shadow overflow-hidden",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("img", {
                    className: "w-full",
                    src: cover,
                    alt: "Articles"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "px-11 py-[53px]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex gap-6 items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "py-3 px-[20px] border text-bright-orange border-bright-orange rounded-[5px] text-sm font-medium hover:bg-bright-orange hover:text-white transition",
                                    children: "Guide"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("time", {
                                    className: "text-dark-gray font-semibold",
                                    children: [
                                        " ",
                                        date,
                                        " "
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "pt-[22px] font-medium text-xl leading-8 blog_title",
                            children: title
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Home/UserRating.tsx

const ratedBy = [
    {
        avatar: "https://tecdn.b-cdn.net/img/new/avatars/2.webp"
    },
    {
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        avatar: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
];
const UserRating = ({ className })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: ratedBy.map((user, i)=>/*#__PURE__*/ jsx_runtime.jsx("img", {
                "data-animate": "text",
                "data-delay": `1.${i}`,
                src: user.avatar,
                className: `${className} ${i ? "-ml-2" : ""}`,
                alt: "Avatar"
            }, i + "user"))
    });
};
/* harmony default export */ const Home_UserRating = (UserRating);

;// CONCATENATED MODULE: ./src/components/Home/BannerSection.tsx


const users = [
    {
        avatar: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
        avatar: "https://tecdn.b-cdn.net/img/new/avatars/2.webp"
    },
    {
        avatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
];
function BannerSection() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "max-w mx-auto px-4 h-[690px] my-16",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "relative bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url(/images/home/hero_new_ai_course_2.png)] bg-cover bg-center bg-no-repeat h-full rounded-lg",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    "data-animate": "image",
                    "data-delay": "0.3",
                    "data-direction": "rtl",
                    className: "absolute top-0 bottom-0 left-0 right-0 bg-white -translate-x-full"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "absolute inset-0",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "relative max-w-screen-xl flex flex-col justify-center md:flex-row md:justify-start items-center h-full",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "max-w-2xl text-white px-4 sm:px-8 md:px-16 font-inter text-center md:text-left",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    "data-animate": "text",
                                    "data-delay": "1",
                                    className: "text-base sm:text-xl/loose font-bold",
                                    children: "NEW AI COURSE IS OUT!"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    "data-animate": "text",
                                    "data-delay": "1.2",
                                    className: "mt-2 text-2xl md:text-4xl font-semibold",
                                    children: [
                                        "AI-Powered Future Ahead, Enroll in",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "font-light",
                                            children: "CourseBee's "
                                        }),
                                        " New AI Course Today!"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    "data-animate": "text",
                                    "data-delay": "1.4",
                                    className: "mt-4 text-white/90",
                                    children: "Gain hands-on experience and a comprehensive understanding of AI with latest AI course. Learn from industry experts and unlock your potential."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mt-8 flex flex-col md:flex-row gap-6 text-center items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            "data-animate": "button",
                                            "data-delay": "1.6",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                className: "btn py-4",
                                                children: "Join Today"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-2 flex-col md:flex-row",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "flex",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(Home_UserRating, {
                                                        className: "w-8 rounded-full"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    "data-animate": "text",
                                                    "data-delay": "2.2",
                                                    className: "text-white/90 text-xs font-medium",
                                                    children: "Trusted by over 10.000 students"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Home_BannerSection = (BannerSection);

;// CONCATENATED MODULE: ./src/libs/courses.ts
const categoryMap = new Map();
categoryMap.set("coding", {
    en: "Coding",
    bn: "কোডিং"
});
categoryMap.set("job_based", {
    en: "Job Based",
    bn: "চাকরি ভিত্তিক"
});
categoryMap.set("research", {
    en: "Research",
    bn: "গবেষণা"
});
categoryMap.set("practical", {
    en: "Practical",
    bn: "ব্যবহারিক"
});
categoryMap.set("quick_learn", {
    en: "Quick Learn",
    bn: "দ্রুত শিখুন"
});
categoryMap.set("editorial", {
    en: "Editorial",
    bn: "সম্পাদকীয়"
});
categoryMap.set("enhancer", {
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
            categoryMap.get("coding").bn,
            categoryMap.get("job_based").bn,
            categoryMap.get("practical").bn
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
            categoryMap.get("coding").bn,
            categoryMap.get("job_based").bn,
            categoryMap.get("practical").bn
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
            categoryMap.get("job_based").bn,
            categoryMap.get("practical").bn,
            categoryMap.get("editorial").bn
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
            categoryMap.get("job_based").bn,
            categoryMap.get("practical").bn,
            categoryMap.get("quick_learn").bn
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
            categoryMap.get("job_based").bn,
            categoryMap.get("practical").bn,
            categoryMap.get("editorial").bn
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
            categoryMap.get("job_based").bn,
            categoryMap.get("practical").bn,
            categoryMap.get("editorial").bn
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
            categoryMap.get("job_based").bn,
            "Enhancer",
            categoryMap.get("practical").bn,
            categoryMap.get("editorial").bn
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
            categoryMap.get("coding").bn,
            categoryMap.get("research").bn,
            categoryMap.get("practical").bn,
            categoryMap.get("job_based").bn
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
            categoryMap.get("coding").bn,
            categoryMap.get("research").bn
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
            categoryMap.get("job_based").bn,
            categoryMap.get("research").bn
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
            categoryMap.get("editorial").bn,
            categoryMap.get("quick_learn").bn
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
            categoryMap.get("editorial").bn,
            categoryMap.get("quick_learn").bn
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
            categoryMap.get("coding").bn,
            categoryMap.get("job_based").bn
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
            categoryMap.get("research").bn,
            categoryMap.get("editorial").bn
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
            categoryMap.get("coding").bn,
            categoryMap.get("job_based").bn
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
            categoryMap.get("coding").bn
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
            categoryMap.get("job_based").bn,
            categoryMap.get("quick_learn").bn
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
            categoryMap.get("coding").bn
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
            categoryMap.get("editorial").bn,
            categoryMap.get("quick_learn").bn
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
            categoryMap.get("coding").bn,
            categoryMap.get("research").bn,
            categoryMap.get("practical").bn
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
            categoryMap.get("quick_learn").bn,
            categoryMap.get("enhancer").bn,
            categoryMap.get("editorial").bn
        ],
        rating: 0
    }
];
const courses_en = [
    {
        title: "Full-Stack Mastery",
        subtitle: "Building with MERN",
        desc: "MERN স্ট্যাকের শক্তি আনলক করুন এবং হ্যান্ড-অন প্রোজেক্ট এবং ব্যাপক প্রশিক্ষণ সহ একজন দক্ষ ফুল-স্ট্যাক বিকাশকারী হয়ে উঠুন।",
        cover: "/images/courses/thumbnails/course-1.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categoryMap.get("coding").en,
            categoryMap.get("job_based").en,
            categoryMap.get("practical").en
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
            categoryMap.get("coding").en,
            categoryMap.get("job_based").en,
            categoryMap.get("practical").en
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
            categoryMap.get("job_based").en,
            categoryMap.get("practical").en,
            categoryMap.get("editorial").en
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
            categoryMap.get("job_based").en,
            categoryMap.get("practical").en,
            categoryMap.get("quick_learn").en
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
            categoryMap.get("job_based").en,
            categoryMap.get("practical").en,
            categoryMap.get("editorial").en
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
            categoryMap.get("job_based").en,
            categoryMap.get("practical").en,
            categoryMap.get("editorial").en
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
            categoryMap.get("job_based").en,
            "Enhancer",
            categoryMap.get("practical").en,
            categoryMap.get("editorial").en
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
            categoryMap.get("coding").en,
            categoryMap.get("research").en,
            categoryMap.get("practical").en,
            categoryMap.get("job_based").en
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
            categoryMap.get("coding").en,
            categoryMap.get("research").en
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
            categoryMap.get("job_based").en,
            categoryMap.get("research").en
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
            categoryMap.get("editorial").en,
            categoryMap.get("quick_learn").en
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
            categoryMap.get("editorial").en,
            categoryMap.get("quick_learn").en
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
            categoryMap.get("coding").en,
            categoryMap.get("job_based").en
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
            categoryMap.get("research").en,
            categoryMap.get("editorial").en
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
            categoryMap.get("coding").en,
            categoryMap.get("job_based").en
        ],
        rating: 3.5
    },
    {
        title: "Competitive Programming",
        subtitle: "Coding with Confidence",
        desc: "প্রতিযোগিতামূলক প্রোগ্রামিংয়ের যাত্রা শুরু করুন এবংকোডিংচ্যালেঞ্জ, অ্যালগরিদম মাস্টারিং ইত্যাদিতে দক্ষতা অর্জনের জন্য আত্মবিশ্বাস অর্জন করুন।",
        cover: "/images/courses/thumbnails/course-15.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categoryMap.get("coding").en
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
            categoryMap.get("job_based").en,
            categoryMap.get("quick_learn").en
        ],
        rating: 3
    },
    {
        title: "After-School",
        subtitle: "Coding Adventures",
        desc: "স্কুলের পরেকোডিংঅ্যাডভেঞ্চার শুরু করুন, যেখানে তরুণ শিক্ষার্থীরা প্রোগ্রামিংয়ের জগতে ডুব দেয়, উত্তেজনাপূর্ণ প্রকল্পগুলি অন্বেষণ করে।",
        cover: "/images/courses/thumbnails/course-21.png",
        price: "৪৯৯৯.৯৯",
        category: [
            categoryMap.get("coding").en
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
            categoryMap.get("editorial").en,
            categoryMap.get("quick_learn").en
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
            categoryMap.get("coding").en,
            categoryMap.get("research").en,
            categoryMap.get("practical").en
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
            categoryMap.get("quick_learn").en,
            categoryMap.get("enhancer").en,
            categoryMap.get("editorial").en
        ],
        rating: 0
    }
];

;// CONCATENATED MODULE: ./src/components/Card.tsx

function Card(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            "data-category": "Coding,Job Based,Practical",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "shadow rounded-lg overflow-hidden border max-w-sm mx-auto pb-4",
                "data-animate": "card",
                "data-duration": "1.2",
                "data-delay": "0.1",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "absolute top-20px right-20px shadow bg-bright-orange text-white rounded-lg px-4 py-3",
                                children: props.price
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                className: "w-full",
                                src: props.cover,
                                alt: props.title,
                                loading: "lazy"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "p-4 md:p-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-bright-orange font-bold text-sm md:text-base",
                                children: props.title
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "font-bold md:text-lg",
                                children: props.subtitle
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "maxline_3 text-ncolor-600 pb-8",
                                children: props.description
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "/courses/details/",
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
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
/* harmony default export */ const components_Card = (Card);

;// CONCATENATED MODULE: ./src/components/Home/BrowseOurCourseSection.tsx



function BrowseOurCourseSection() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "max-w mx-auto px-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        "data-animate": "text",
                        className: "text-3xl md:text-[45px] text-center md:leading-[60px] font-medium",
                        children: "Browse our popular courses"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        "data-animate": "text",
                        "data-delay": "0.4",
                        className: "py-[15px] text-center text-dark-gray mx-auto max-w-[666px] font-normal",
                        children: "Join thousands of learners for a brighter future. Start browsing now and explore a world of knowledge and growth."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    "data-animate": "button",
                    "data-delay": "0.8",
                    className: "grid justify-center items-center pt-12 gap-4 mx-auto px-4 md:px-0 tabpanel-btns max-w-[800px]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            className: "browse_courses_tab hover:opacity-100 transition-all",
                            "data-coursebutton": "All",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/icons/all_courses.svg",
                                    className: "w-10 h-10",
                                    alt: "All courses"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "font-medium md:text-lg leading-7",
                                    children: "ALL"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            className: "browse_courses_tab opacity-70 hover:opacity-100 transition-all",
                            "data-coursebutton": "Trending",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/icons/design.svg",
                                    className: "w-10 h-10",
                                    alt: "Trending"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "font-medium md:text-lg leading-7",
                                    children: "Trending"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            className: "browse_courses_tab opacity-70 hover:opacity-100 transition-all",
                            "data-coursebutton": "Latest",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/icons/development.svg",
                                    className: "w-10 h-10",
                                    alt: "Latest"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "font-medium md:text-lg leading-7",
                                    children: "Latest"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            className: "browse_courses_tab opacity-70 hover:opacity-100 transition-all",
                            "data-coursebutton": "Popular",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/icons/marketing.svg",
                                    className: "w-10 h-10",
                                    alt: "Popular"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "font-medium md:text-lg leading-7",
                                    children: "Popular"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "pt-16 grid justify-center md:grid-cols-2 lg:grid-cols-3 md:justify-center items-center md:items-stretch gap-4 mx-auto",
                children: courses_bn.slice(0, 6).map((course, i)=>/*#__PURE__*/ jsx_runtime.jsx(components_Card, {
                        title: course.title,
                        description: course.desc,
                        price: course.price,
                        cover: course.cover,
                        subtitle: course.subtitle,
                        category: course.category
                    }, i + "course"))
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                "data-animate": "button",
                className: "mx-auto w-full py-[85px] flex items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                    className: "py-5 px-10 btn font-semibold",
                    children: "Explore All Courses"
                })
            })
        ]
    });
}
/* harmony default export */ const Home_BrowseOurCourseSection = (BrowseOurCourseSection);

;// CONCATENATED MODULE: ./src/components/Home/CareerSection.tsx

function CareerSection() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "pt-28 md:pt-44 max-w mx-auto px-4 overflow-x-hidden",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "grid md:grid-cols-2 items-center justify-between mx-auto",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    "data-animate": "text",
                    className: "w-full p-4 flex flex-col items-center justify-center md:items-start",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            "data-animate": "text",
                            "data-delay": "0.3",
                            className: "font-medium text-3xl md:text-4xl leading-10 text-center md:text-start",
                            children: "Grow your career! Start learning with CourseBee."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            "data-animate": "text",
                            "data-delay": "0.6",
                            className: "font-normal leading-6 text-dark-gray py-[30px] text-center md:text-start",
                            children: [
                                "Ignite your career growth with Academy. ",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                "Start your learning journey today."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            "data-animate": "button",
                            "data-delay": "0.9",
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "btn py-4 px-12 rounded-md font-semibold",
                                children: "Browse Jobs"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "relative flex justify-end mt-10 md:mt-0 overflow-hidden",
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        "data-animate": "clip-rect",
                        "data-delay": "1.5",
                        className: "w-full md:w-[90%]",
                        src: "/images/panel_illustration.svg",
                        alt: "Panel illustration"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Home_CareerSection = (CareerSection);

;// CONCATENATED MODULE: ./src/components/Home/EnrollSection.tsx

function EnrollSection() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "pt-36 overflow-x-hidden",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "bg-bright-orange text-white",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg_circle_gradiant py-4 md:py-14 px-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid md:grid-cols-2 justify-center items-center max-w-[1000px] gap-6 mx-auto py-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-col items-center justify-center md:items-start mb-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    "data-animate": "text",
                                    className: "font-semibold text-[32px] leading-10 text-center md:text-start",
                                    children: "Why don’t you start today?"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    "data-animate": "text",
                                    "data-delay": "0.5",
                                    className: "pt-6 pb-8 max-w-[494px]",
                                    children: "Start today and unlock endless possibilities. Don't wait to take the first step towards your goals. Embrace a brighter future now."
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-full",
                                    "data-animate": "button",
                                    "data-delay": "1",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        "data-animate": "text",
                                        "data-delay": "1.2",
                                        className: "text-bright-orange bg-white rounded-[5px] border py-3 max-w-[308px] font-semibold w-full text-xl mb-10 hover:bg-bright-orange hover:text-white transition",
                                        children: "Enroll now"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center flex-col md:flex-row gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    "data-animate": "text",
                                                    "data-delay": "1.5",
                                                    src: "https://tecdn.b-cdn.net/img/new/avatars/2.webp",
                                                    className: "w-10 rounded-full",
                                                    alt: "Avatar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    "data-animate": "text",
                                                    "data-delay": "1.6",
                                                    src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                                                    className: "w-10 rounded-full border-2 border-white -ml-2",
                                                    alt: "Avatar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    "data-animate": "text",
                                                    "data-delay": "1.7",
                                                    src: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
                                                    className: "w-10 rounded-full border-2 border-white -ml-2",
                                                    alt: "Avatar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    "data-animate": "text",
                                                    "data-delay": "1.8",
                                                    src: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
                                                    className: "w-10 rounded-full border-2 border-white -ml-2",
                                                    alt: "Avatar"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            "data-animate": "text",
                                            "data-delay": "2",
                                            children: "Trusted by over 10.000 students"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex items-center justify-center overflow-hidden",
                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                "data-animate": "clip-rect",
                                "data-delay": "2.2",
                                className: "m-end-auto rounded-sm md:max-w-[422px] w-full",
                                src: "/images/heroImage.png",
                                alt: "A person using her computer"
                            })
                        })
                    ]
                })
            })
        })
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-countup"
const external_react_countup_namespaceObject = require("react-countup");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_namespaceObject);
;// CONCATENATED MODULE: external "react-visibility-sensor"
const external_react_visibility_sensor_namespaceObject = require("react-visibility-sensor");
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Home/Counter.tsx




function Counter({ end, duration, once }) {
    const [activeSensor, setActiveSensor] = (0,external_react_.useState)(true);
    function onEnd() {
        if (once) return;
        setActiveSensor(false);
    }
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx((external_react_visibility_sensor_default()), {
            partialVisibility: true,
            offset: {
                top: 10
            },
            active: activeSensor,
            children: ({ isVisible })=>/*#__PURE__*/ jsx_runtime.jsx("span", {
                    children: isVisible ? /*#__PURE__*/ jsx_runtime.jsx((external_react_countup_default()), {
                        onEnd: onEnd,
                        end: end,
                        duration: duration || 1.5
                    }) : 0
                })
        })
    });
}
/* harmony default export */ const Home_Counter = (Counter);

;// CONCATENATED MODULE: ./src/components/Home/ExpertPanelSection.tsx


function ExpertPanelSection() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "max-w mx-auto px-4",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "pt-[120px]",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                    "data-animate": "text",
                    className: "text-3xl text-center md:text-[45px] md:leading-[60px] font-medium",
                    children: "Meet Our Expert Panel"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                    "data-animate": "text",
                    "data-delay": "0.2",
                    className: "pt-[34px] text-center text-dark-gray font-normal mx-auto max-w-[830px]",
                    children: [
                        "Discover our esteemed Expert Panel, guiding the structure, strategy, and outcomes of our courses. With their vast knowledge and experience, they uphold the integrity and quality of our education. Our diverse Expert Panel collaborates with our team, ensuring our courses meet high standards and industry trends. Their insights create a robust learning experience for students. ",
                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                        "From evaluating content to providing recommendations, our Expert Panel continuously enhances course quality. Join us to access courses thoughtfully designed and evaluated by industry experts. Start your learning journey with CourseBee today."
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "pt-16 md:pt-32 overflow-hidden",
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        "data-animate": "clip-rect",
                        "data-delay": "0.3",
                        className: "w-full mx-auto max-w",
                        src: "/images/expert_panel.png",
                        alt: "Expert Panel"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    "data-animate": "text",
                    className: "pt-20 md:pt-36 flex flex-col md:flex-row justify-center items-center gap-4 stats-level",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center md:border-r max-w-[330px] w-full border-black",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-3xl md:text-[42px] font-bold text-bright-orange stats",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Home_Counter, {
                                        end: 98
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "pb-4 font-normal text-[18px] mt-2",
                                    children: "NPS Score"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center md:border-r max-w-[330px] w-full border-black",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-3xl md:text-[42px] font-bold text-bright-orange stats",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Home_Counter, {
                                        end: 3000
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "pb-4 font-normal text-[18px] mt-2",
                                    children: "Satisfied alumni"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center md:border-r max-w-[330px] w-full border-black",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-3xl md:text-[42px] font-bold text-bright-orange stats",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Home_Counter, {
                                        end: 6000
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "pb-4 font-normal text-[18px] mt-2",
                                    children: "Hours of recorded courses"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "text-center max-w-[330px] w-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-3xl md:text-[42px] font-bold text-bright-orange stats",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(Home_Counter, {
                                        end: 50
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "pb-4 font-normal text-[18px] mt-2",
                                    children: "Newjoiners weekly"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Home_ExpertPanelSection = (ExpertPanelSection);

;// CONCATENATED MODULE: ./src/components/Home/FeaturedSection.tsx

function FeaturedSection() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "max-w mx-auto px-4 pt-10 md:pt-20 pb-20 md:pb-28",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex w-full flex-col md:flex-row gap-10 md:gap-0",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full md:w-2/5 space-y-2 pr-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "text-2xl font-semibold",
                            "data-animate": "text",
                            children: "It’s only a step away."
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-xs",
                            "data-animate": "text",
                            "data-delay": "0.2",
                            children: "Join to change your life"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-sm text-dark-gray",
                            "data-animate": "text",
                            "data-delay": "0.4",
                            children: "Trusted by millions of learners worldwide, CourseBee is a leading platform committed to delivering high-quality education and empowering individuals. With a wide range of courses for beginners and experienced professionals, we cater to your learning needs."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:pl-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/icons/people.svg",
                                        alt: "people",
                                        className: "w-5 h-5 mt-1",
                                        "data-animate": "text",
                                        "data-delay": "0.4"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "text-lg font-bold",
                                                "data-animate": "text",
                                                "data-delay": "0.6",
                                                children: "Trusted by millions"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mt-1 text-sm text-dark-gray",
                                                "data-animate": "text",
                                                "data-delay": "0.7",
                                                children: "Trusted by millions, CourseBee is the go-to platform for high-quality education."
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        className: "w-5 h-5 mt-1",
                                        "data-animate": "text",
                                        src: "/icons/certificate.svg",
                                        alt: "people",
                                        "data-delay": "0.7"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "text-lg font-bold",
                                                "data-animate": "text",
                                                "data-delay": "0.8",
                                                children: "Certificate awarded"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mt-1 text-sm text-dark-gray",
                                                "data-animate": "text",
                                                "data-delay": "0.9",
                                                children: "Certificates awarded to recognize your achievements. Boost your professional profile with CourseBee."
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/icons/chat.svg",
                                        alt: "people",
                                        className: "w-5 h-5 mt-1",
                                        "data-animate": "text",
                                        "data-delay": "0.9"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "text-lg font-bold",
                                                "data-animate": "text",
                                                "data-delay": "1",
                                                children: "Chat Online"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mt-1 text-sm text-dark-gray",
                                                "data-animate": "text",
                                                "data-delay": "1.1",
                                                children: "Chat online for instant support and guidance. Connect with CourseBee experts anywhere, anytime."
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/icons/check.svg",
                                        alt: "people",
                                        className: "w-5 h-5 mt-1",
                                        "data-animate": "text",
                                        "data-delay": "1.1"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "text-lg font-bold",
                                                "data-animate": "text",
                                                "data-delay": "1.2",
                                                children: "Made by professionals"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mt-1 text-sm text-dark-gray",
                                                "data-animate": "text",
                                                "data-delay": "1.3",
                                                children: "Expertly crafted by professionals in the field. Learn from the best with CourseBee."
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/icons/download.svg",
                                        alt: "people",
                                        className: "w-5 h-5 mt-1",
                                        "data-animate": "text",
                                        "data-delay": "1.3"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "text-lg font-bold",
                                                "data-animate": "text",
                                                "data-delay": "1.4",
                                                children: "Available Offline"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mt-1 text-sm text-dark-gray",
                                                "data-animate": "text",
                                                "data-delay": "1.5",
                                                children: "Access courses offline, anytime. Learn on-the-go with CourseBee."
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/icons/video.svg",
                                        alt: "people",
                                        className: "w-5 h-5 mt-1",
                                        "data-animate": "text",
                                        "data-delay": "1.6"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                                className: "text-lg font-bold",
                                                "data-animate": "text",
                                                "data-delay": "1.7",
                                                children: "600+ hours of classes"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mt-1 text-sm text-dark-gray",
                                                "data-animate": "text",
                                                "data-delay": "1.8",
                                                children: "Unlock over 600 hours of immersive classes. Dive deep into learning with CourseBee."
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/Home/RatingsAndStars.tsx



function RatingsAndStars() {
    const { t } = (0,external_next_i18next_.useTranslation)("home");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex",
                children: /*#__PURE__*/ jsx_runtime.jsx(Home_UserRating, {
                    className: "w-10 rounded-full border-2 border-white "
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col items-center md:items-start",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-0.5",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                "data-animate": "text",
                                "data-delay": "1.4",
                                src: "/icons/star.svg",
                                alt: "star"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                "data-animate": "text",
                                "data-delay": "1.5",
                                src: "/icons/star.svg",
                                alt: "star"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                "data-animate": "text",
                                "data-delay": "1.6",
                                src: "/icons/star.svg",
                                alt: "star"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                "data-animate": "text",
                                "data-delay": "1.7",
                                src: "/icons/star.svg",
                                alt: "star"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                "data-animate": "text",
                                "data-delay": "1.8",
                                src: "/icons/star-half.svg",
                                alt: "star"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-xs text-dark-gray font-medium mt-2 md:mt-1",
                        "data-animate": "text",
                        "data-delay": "1.8",
                        children: t("rating-details")
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Home_RatingsAndStars = (RatingsAndStars);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/Home/HeroSection.tsx




function HeroSection() {
    const { t } = (0,external_next_i18next_.useTranslation)("home");
    const { locale } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "max-w mx-auto px-4 md:h-[calc(100vh-86px)] mt-[86px] flex items-center justify-center py-10 md:py-0",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-20 content-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col items-center md:items-start",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            "data-animate": "text",
                            className: "text-black font-semibold mb-2 text-xs md:text-sm",
                            children: t("title")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            "data-animate": "text",
                            "data-delay": "0.2",
                            className: "text-2xl font-semibold md:text-4xl lg:text-6xl md:leading-tight",
                            children: locale == "en" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    t("Learn In-Demand"),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    t("Skills With"),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "text-bright-orange",
                                        children: [
                                            " ",
                                            t("Ease")
                                        ]
                                    }),
                                    "."
                                ]
                            }) : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                children: t("heading")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            "data-animate": "text",
                            "data-delay": "0.4",
                            className: "mt-4 text-dark-gray text-sm md:text-base text-center md:text-left",
                            children: t("description")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            "data-animate": "text",
                            "data-delay": "0.6",
                            className: "mt-4",
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "btn py-4 font-semibold",
                                children: t("Explore Courses")
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mt-8 flex flex-col lg:flex-row gap-3 items-center md:items-start",
                            children: /*#__PURE__*/ jsx_runtime.jsx(Home_RatingsAndStars, {})
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "relative h-[300px] md:h-[400px] w-full white-gradiant-left overflow-hidden rounded-2xl",
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        "data-animate": "clip-rect",
                        "data-delay": "1",
                        "data-direction": "rtl",
                        alt: "learning",
                        src: "/images/home/hero-section-1.png",
                        className: "absolute inset-0 h-full w-full object-cover rounded-2xl"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Home_HeroSection = (HeroSection);

;// CONCATENATED MODULE: ./src/components/Home/InstructorsSection.tsx

function InstructorsSection() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "max-w mx-auto px-4 overflow-x-hidden",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "grid md:grid-cols-2 gap-[75px] md:justify-between items-center pt-28 md:pt-40 p-2 mx-auto max-w",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-start md:px-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            "data-animate": "text",
                            className: "text-3xl md:text-[45px] md:leading-[60px] font-medium text-center md:text-start",
                            children: "Meet Our Instructors"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "pt-[34px] text-dark-gray font-normal",
                            "data-animate": "text",
                            "data-delay": "0.5",
                            children: "Meet our exceptional instructors dedicated to your learning success. With industry expertise and a passion for teaching, they guide and inspire you throughout your journey. Unlock your full potential with CourseBee's expert instructors who simplify complex concepts."
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "pt-[38px] text-dark-gray font-normal",
                            "data-animate": "text",
                            "data-delay": "1",
                            children: "Start your learning journey today and receive expert guidance along the way."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            "data-animate": "button",
                            "data-delay": "1.5",
                            className: "pt-[34px] flex gap-4 flex-col md:flex-row",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "btn font-semibold py-4",
                                    children: "Become an instructor"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "btn bg-white text-black shadow border font-semibold py-4",
                                    children: "Browse All Instructors"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "overflow-hidden rounded-xl",
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        "data-animate": "clip-rect",
                        "data-delay": "1.5",
                        className: "w-full max-w-[630px] mx-auto",
                        src: "/images/instructors.png",
                        alt: "Instructors"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Home_InstructorsSection = (InstructorsSection);

;// CONCATENATED MODULE: external "react-icons/io"
const io_namespaceObject = require("react-icons/io");
;// CONCATENATED MODULE: ./src/components/Home/NewsletterSection.tsx


function NewsletterSection() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "pt-28 md:pt-44 max-w mx-auto px-4",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "bg_circle p-4 mx-auto max-w overflow-x-hidden",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "grid md:grid-cols-2 justify-center items-center md:py-20 py-10",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex gap-6 items-center pb-7",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    "data-animate": "text",
                                    className: "max-w-[64px] md:max-w-[76px] w-full",
                                    src: "/icons/message.svg",
                                    alt: "Message Icon"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "font-bold md:text-lg",
                                            "data-animate": "text",
                                            "data-delay": "0.3",
                                            children: "Subscribe to our newsletter"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            className: "text-dark-gray pt-2",
                                            "data-animate": "text",
                                            "data-delay": "0.6",
                                            children: [
                                                "Join the",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "text-bright-orange font-bold",
                                                    children: "15,000+"
                                                }),
                                                "students and become part of us."
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "border border-light-gray rounded-md px-2 py-1 flex items-center max-w-md",
                            "data-animate": "text",
                            "data-delay": "0.9",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("input", {
                                    className: "rounded-md outline-none border-none p-4 w-full",
                                    type: "email",
                                    placeholder: "IamCourseBee@coursebee.com"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "w-14 h-12 bg-bright-orange rounded-[5px] shadow transition text-white flex justify-center items-center hover:bg-white hover:text-bright-orange",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(io_namespaceObject.IoIosArrowForward, {
                                        size: 30
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const Home_NewsletterSection = (NewsletterSection);

;// CONCATENATED MODULE: ./src/components/Home/SocialMediaSection.tsx

function SocialMediaSection() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "pt-28 md:pt-44 max-w mx-auto px-4 overflow-x-hidden",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "grid md:grid-cols-2 items-center gap-8 md:gap-32",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "overflow-hidden relative",
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        "data-animate": "clip-rect",
                        className: "max-w-xl w-full mx-auto",
                        src: "/images/follow_us_social_media_illustration.svg",
                        alt: "follow_us_social_media_illustration"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    "data-animate": "text",
                    "data-delay": "1",
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "font-semibold text-[32px] leading-10 text-bright-orange",
                            children: "Follow us on social media"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            "data-animate": "text",
                            "data-delay": "1.5",
                            className: "pt-2 text-dark-gray text-lg",
                            children: "Connect with us on social media Follow us for updates, inspiration and valuable resources. Join the online community and be part of the discussion."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "pt-14 flex items-center justify-center gap-8 md:gap-16 px-4 mx-auto flex-wrap",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    "data-animate": "text",
                                    "data-delay": "2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/icons/facebook.svg",
                                        alt: "Facebook"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    "data-animate": "text",
                                    "data-delay": "2.2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/icons/google.svg",
                                        alt: "Google"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    "data-animate": "text",
                                    "data-delay": "2.4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/icons/youtube.svg",
                                        alt: "Youtube"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Home_SocialMediaSection = (SocialMediaSection);

;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: external "react-icons/tb"
const tb_namespaceObject = require("react-icons/tb");
// EXTERNAL MODULE: ./node_modules/keen-slider/keen-slider.min.css
var keen_slider_min = __webpack_require__(6443);
;// CONCATENATED MODULE: external "keen-slider/react"
const react_namespaceObject = require("keen-slider/react");
;// CONCATENATED MODULE: ./src/components/Home/StudentsFeedback.tsx





const feedbacks = [
    {
        username: "James William",
        userPhoto: "/images/james_william.png",
        review: "Flexible online learning with interactive assignments boosts skill application and confidence.",
        course: "Full-Stack Mastery"
    },
    {
        username: "James William",
        userPhoto: "/images/james_william.png",
        review: "Exceeds expectations with well-structured, engaging courses that are industry-relevant. Exceptional support ensures a smooth learning journey.",
        course: "Web Design Unleashed"
    },
    {
        username: "James William",
        userPhoto: "/images/james_william.png",
        review: "Top-notch courses, knowledgeable and supportive instructors, and comprehensive learning materials. It's a career game-changer!",
        course: "React Revolution"
    }
];
function StudentsFeedback() {
    const [sliderRef, instanceRef] = (0,react_namespaceObject.useKeenSlider)({
        loop: true,
        mode: "snap",
        slides: {
            origin: "center",
            perView: "auto"
        }
    }, [
        (slider)=>{
            let timeout;
            let mouseOver = false;
            function clearNextTimeout() {
                clearTimeout(timeout);
            }
            function nextTimeout() {
                clearTimeout(timeout);
                if (mouseOver) return;
                timeout = setTimeout(()=>{
                    slider.next();
                }, 2100);
            }
            slider.on("created", ()=>{
                slider.container.addEventListener("mouseover", ()=>{
                    mouseOver = true;
                    clearNextTimeout();
                });
                slider.container.addEventListener("mouseout", ()=>{
                    mouseOver = false;
                    nextTimeout();
                });
                nextTimeout();
            });
            slider.on("dragStarted", clearNextTimeout);
            slider.on("animationEnded", nextTimeout);
            slider.on("updated", nextTimeout);
        }
    ]);
    function prev(e) {
        e.stopPropagation();
        instanceRef.current?.prev();
    }
    function next(e) {
        e.stopPropagation();
        instanceRef.current?.next();
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "pt-20",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        "data-animate": "text",
                        className: "text-3xl md:text-[46px] md:leading-[60px] font-medium text-center",
                        children: "What our students say about us"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        "data-animate": "text",
                        "data-delay": "0.5",
                        className: "py-[15px] px-4 text-center text-dark-gray mx-auto max-w-[682px] font-normal",
                        children: "Join our community of satisfied learners and start your learning journey with CourseBee today."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "end_gradiant relative",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "m-end-auto pt-16",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        ref: sliderRef,
                        className: "keen-slider",
                        children: feedbacks.map((feedback, i)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "keen-slider__slide min-w-[420px] max-w-[524px]",
                                children: /*#__PURE__*/ jsx_runtime.jsx(FeedBack, {
                                    ...feedback
                                })
                            }, i + "feedback"))
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                "data-animate": "text",
                "data-delay": "0.6",
                className: "relative pt-16",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-center items-center gap-4 text-dark-gray",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            "aria-label": "Previous slide",
                            onClick: prev,
                            children: /*#__PURE__*/ jsx_runtime.jsx(fa_namespaceObject.FaArrowLeft, {
                                size: 25
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            "aria-label": "Next slide",
                            onClick: next,
                            children: /*#__PURE__*/ jsx_runtime.jsx(fa_namespaceObject.FaArrowRight, {
                                size: 25
                            })
                        })
                    ]
                })
            })
        ]
    });
}
const FeedBack = ({ username, userPhoto, review, course })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            "data-animate": "text",
            className: "py-2 mx-7",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "box_shadow py-7 px-7 grid items-end",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-3 items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: userPhoto,
                                alt: username,
                                className: "w-[45px] rounded-3xl"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "font-normal md:text-lg",
                                children: username
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: "py-5",
                        children: [
                            " ",
                            review,
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("hr", {
                        className: "border-t-2 border-light-gray"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-3 pt-3",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(tb_namespaceObject.TbLamp, {}),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: course
                            })
                        ]
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: external "next-i18next/serverSideTranslations"
const serverSideTranslations_namespaceObject = require("next-i18next/serverSideTranslations");
;// CONCATENATED MODULE: ./src/pages/index.tsx















function Home() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Home_HeroSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Home_BannerSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(FeaturedSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Home_BrowseOurCourseSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(StudentsFeedback, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Home_InstructorsSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Home_ExpertPanelSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Home_CareerSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Home_Articles, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Home_SocialMediaSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(EnrollSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Home_NewsletterSection, {})
        ]
    });
}
const getStaticProps = async ({ locale })=>{
    if (false) {}
    return {
        props: {
            ...await (0,serverSideTranslations_namespaceObject.serverSideTranslations)(locale || "en", [
                "common",
                "home"
            ])
        }
    };
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F&absolutePagePath=private-next-pages%2Findex.tsx&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_tsx_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(pages_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2F_absolutePagePath_private_next_pages_2Findex_tsx_preferredRegion_middlewareConfig_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(pages_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(pages_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(pages_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/index","pathname":"/","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: pages_namespaceObject })
        
        
    

/***/ }),

/***/ 6443:
/***/ (() => {



/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [812], () => (__webpack_exec__(7229)));
module.exports = __webpack_exports__;

})();