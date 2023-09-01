"use strict";
(() => {
var exports = {};
exports.id = 520;
exports.ids = [520];
exports.modules = {

/***/ 165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fcourses_absolutePagePath_private_next_pages_2Fcourses_2Findex_tsx_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fcourses_absolutePagePath_private_next_pages_2Fcourses_2Findex_tsx_preferredRegion_middlewareConfig_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/courses/index.tsx
var courses_namespaceObject = {};
__webpack_require__.r(courses_namespaceObject);
__webpack_require__.d(courses_namespaceObject, {
  "default": () => (pages_courses),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/keen-slider/keen-slider.min.css
var keen_slider_min = __webpack_require__(6443);
// EXTERNAL MODULE: external "keen-slider/react"
var react_ = __webpack_require__(1161);
;// CONCATENATED MODULE: ./src/components/Courses/AnnouncementSection.tsx




function AnnouncementSection() {
    const [sliderRef, instanceRef] = (0,react_.useKeenSlider)({
        loop: true,
        mode: "snap",
        slides: {
            // origin: "center",
            perView: "auto"
        }
    });
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "pt-8 max-w mx-auto relative px-3",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            ref: sliderRef,
            className: "keen-slider",
            children: /*#__PURE__*/ jsx_runtime.jsx(CarouselItem, {
                children: /*#__PURE__*/ jsx_runtime.jsx(Announcement, {})
            })
        })
    });
}
/* harmony default export */ const Courses_AnnouncementSection = (AnnouncementSection);
const Announcement = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "shadow rounded-lg px-5 py-9 grid md:grid-cols-2 justify-between items-end gap-7",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "relative overflow-hidden",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    width: 511,
                    height: 356,
                    className: "max-w-2xl w-full mx-auto object-cover p-[1px]",
                    src: "/images/courses/carousel-1.png",
                    alt: "Announcement",
                    "data-animate": "clip-rect",
                    "data-delay": "1",
                    "data-direction": "rtl"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex gap-3",
                        "data-animate": "text",
                        "data-delay": "0.7",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "bg-ncolor-300 rounded-lg px-2 py-1",
                                children: "Trending"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "text-white bg-bright-orange rounded-lg px-2 py-1",
                                children: "Coding"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "pt-10 font-inter text-bright-orange font-bold",
                        lang: "en",
                        "data-animate": "text",
                        "data-delay": "1",
                        children: "Python Powerhouse"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "pt-1 text-ncolor-800 text-3xl md:text-4xl font-medium font-inter",
                        lang: "en",
                        "data-animate": "text",
                        "data-delay": "1.2",
                        children: "Unlocking Its Full Potential"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "pt-2 pb-14 text-dark-gray",
                        "data-animate": "text",
                        "data-delay": "1.4",
                        children: "Unleash Python's power: Build robust applications and solve complex problems with this versatile programming language."
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        "data-animate": "button",
                        "data-delay": "1.6",
                        className: "origin-center max-w-fit",
                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: "rounded-md text-lg font-medium px-7 py-4 btn",
                            children: "৳4999.99 BDT"
                        })
                    })
                ]
            })
        ]
    });
};
const CarouselItem = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "keen-slider__slide max-w-6xl mx-auto min-w-full sm:min-w-0 p-2",
        children: children
    });
};

// EXTERNAL MODULE: ./src/libs/courses.ts
var courses = __webpack_require__(6048);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
// EXTERNAL MODULE: ./src/components/Card.tsx
var Card = __webpack_require__(7834);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/Courses/CoursesSection.tsx






const sortButtons = [
    {
        en_label: "Default",
        bn_label: "ডিফল্ট",
        type: "default"
    },
    {
        en_label: "Trending",
        bn_label: "ট্রেন্ডিং",
        type: "trending"
    },
    {
        en_label: "Price",
        bn_label: "দাম",
        type: "price"
    },
    {
        en_label: "Rating",
        bn_label: "রেটিং",
        type: "rating"
    }
];
function Courses() {
    const { locale } = (0,router_.useRouter)();
    const { t } = (0,external_next_i18next_.useTranslation)("courses");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "mx-auto max-w pt-36 px-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col md:flex-row gap-4 justify-between items-center pb-10 md:pb-20",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center md:text-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "font-medium text-4xl text-ncolor-800",
                                children: t("courses.heading")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-dark-gray",
                                children: t("courses.subheading")
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex gap-4 items-center flex-wrap justify-center text-sm md:text-base",
                        children: sortButtons.map((sortButton, i)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: `rounded-xl shadow-sm px-5 py-3 md:px-7 md:py-4 btn-white ${i == 0 ? "active" : ""}`,
                                children: locale == "en" ? sortButton.en_label : sortButton.bn_label
                            }, i + "sort button"))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(SearchBar, {}),
            /*#__PURE__*/ jsx_runtime.jsx(CourseCategoryButton, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "pt-24 grid gap-6 justify-center items-center md:grid-cols-2 lg:grid-cols-3",
                children: (locale == "en" ? courses/* courses_en */.ZS : courses/* courses_bn */.yU).map((course, i)=>/*#__PURE__*/ jsx_runtime.jsx(Card/* default */.Z, {
                        delay: 0.1 * i % 3 + 0.1,
                        title: course.title,
                        subtitle: course.subtitle,
                        category: course.category,
                        cover: course.cover,
                        description: course.desc,
                        price: course.price
                    }, i + ". course-card"))
            })
        ]
    });
}
/* harmony default export */ const CoursesSection = (Courses);
function SearchBar() {
    const { t } = (0,external_next_i18next_.useTranslation)("courses");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex justify-between items-center shadow border rounded-lg p-1 pl-4",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                className: "outline-none w-full rounded-lg",
                placeholder: t("courses.input.placeholder"),
                type: "search",
                name: "search course",
                id: "searchbar"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                className: "font-medium text-bright-orange bg-bright-orange bg-opacity-20 px-3 py-3 md:px-4 md:min-w-[160px] rounded-md shadow-sm",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        className: "hidden md:block",
                        children: t("courses.input.btn")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(fi_namespaceObject.FiSearch, {
                        className: "block md:hidden"
                    })
                ]
            })
        ]
    });
}
function CourseCategoryButton() {
    const { locale } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "inline-block pt-6 text-center",
        children: Array.from(courses/* categories */.bd.keys()).map((category, i)=>/*#__PURE__*/ jsx_runtime.jsx("button", {
                className: "min-w-[128px] border rounded-lg mb-2 mx-2 py-2 text-sm transition-all hover:bg-bright-orange hover:text-white",
                children: locale == "en" ? courses/* categories */.bd.get(category)?.en : courses/* categories */.bd.get(category)?.bn
            }, i + "category"))
    });
}

;// CONCATENATED MODULE: ./src/components/Courses/FeedbackSection.tsx



function FeedbackSection() {
    const { t } = (0,external_next_i18next_.useTranslation)("courses");
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("section", {
            className: "max-w mx-auto pt-52 px-3",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "max-w-6xl mx-auto grid justify-between items-center md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "font-medium text-4xl",
                                "data-animate": "text",
                                children: t("feedback.heading")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "py-6 text-dark-gray",
                                "data-animate": "text",
                                "data-delay": "0.5",
                                children: t("feedback.subheading")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "shadow bg-bright-orange text-white rounded-md px-9 py-4",
                                "data-animate": "button",
                                "data-delay": "0.7",
                                children: t("feedback.btn.contact")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "overflow-hidden relative",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                width: 512,
                                height: 512,
                                className: "w-full max-w-lg md:m-end-auto p-[1px]",
                                src: "/images/courses/Feedback.svg",
                                alt: "Feedback"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                "data-animate": "image",
                                "data-delay": "0.3",
                                className: "mask-anime"
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Courses_FeedbackSection = (FeedbackSection);

;// CONCATENATED MODULE: ./src/components/Courses/IntroSection.tsx


function IntroSection() {
    const { t } = (0,external_next_i18next_.useTranslation)("courses");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "text-center max-w mx-auto mt-56 px-3",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-4xl md:text-6xl font-medium pb-4",
                "data-animate": "text",
                children: t("intro.heading")
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-lg text-dark-gray max-w-4xl mx-auto",
                "data-animate": "text",
                "data-delay": "0.5",
                children: t("intro.desc")
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/NewsletterSection.tsx
var NewsletterSection = __webpack_require__(5729);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/pages/courses/index.tsx









function courses_Courses() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                    children: "Courses - CourseBee"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(IntroSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Courses_AnnouncementSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(CoursesSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Courses_FeedbackSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(NewsletterSection/* default */.Z, {})
        ]
    });
}
/* harmony default export */ const pages_courses = (courses_Courses);
const getStaticProps = async ({ locale })=>{
    if (false) {}
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale || "en", [
                "common",
                "courses"
            ])
        }
    };
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fcourses&absolutePagePath=private-next-pages%2Fcourses%2Findex.tsx&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fcourses_absolutePagePath_private_next_pages_2Fcourses_2Findex_tsx_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(courses_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fcourses_absolutePagePath_private_next_pages_2Fcourses_2Findex_tsx_preferredRegion_middlewareConfig_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(courses_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(courses_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(courses_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(courses_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(courses_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(courses_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(courses_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(courses_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(courses_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(courses_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/courses","pathname":"/courses","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: courses_namespaceObject })
        
        
    

/***/ }),

/***/ 1161:
/***/ ((module) => {

module.exports = require("keen-slider/react");

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 4751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,812,675,664,25,729], () => (__webpack_exec__(165)));
module.exports = __webpack_exports__;

})();