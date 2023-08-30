(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 8435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2Fabout_absolutePagePath_private_next_pages_2Fabout_tsx_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2Fabout_absolutePagePath_private_next_pages_2Fabout_tsx_preferredRegion_middlewareConfig_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/about.tsx
var about_namespaceObject = {};
__webpack_require__.r(about_namespaceObject);
__webpack_require__.d(about_namespaceObject, {
  "default": () => (about),
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
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: ./src/components/About/AboutCoursebeeSection.tsx



function AboutCoursebeeSection() {
    const { t } = (0,external_next_i18next_.useTranslation)("about");
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "max-w mx-auto px-4 pt-36 md:pt-52 flex items-center justify-center py-10 text-slate-900",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "grid md:grid-cols-2 justify-between items-center gap-10",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-center md:text-start",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-bright-orange text-xl pb-1 font-semibold uppercase",
                            "data-animate": "text",
                            children: t("about.subheading")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "font-semibold text-4xl md:text-6xl leading-10",
                            "data-animate": "text",
                            "data-delay": "0.3",
                            children: t("about.heading")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "pt-20 md:pt-48",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                width: 672,
                                height: 672,
                                className: "h-auto mx-auto md:mx-0 w-full max-w-2xl",
                                "data-animate": "clip-rect",
                                "data-delay": "0.6",
                                src: "/images/videodevice.png",
                                alt: "Video device"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "font-normal text-base md:text-xl leading-6",
                            "data-animate": "text",
                            "data-delay": "0.6",
                            children: t("about.desc")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "pt-20",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                width: 672,
                                height: 672,
                                className: "h-auto mx-auto w-full max-w-2xl",
                                "data-animate": "clip-rect",
                                "data-direction": "rtl",
                                "data-delay": "0.6",
                                src: "/images/laptop.png",
                                alt: "Laptop"
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const About_AboutCoursebeeSection = (AboutCoursebeeSection);

;// CONCATENATED MODULE: ./src/components/About/OurMissionSection.tsx



function OurMissionSection() {
    const { t } = (0,external_next_i18next_.useTranslation)("about");
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "bg-lb-circle",
        "data-animate": "background-pos",
        "data-delay": "1.5",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "max-w mx-auto px-4 pt-36 flex items-center justify-center py-10 text-slate-900",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid md:grid-cols-2 justify-between items-start gap-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-center md:text-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-bright-orange text-xl pb-1 font-semibold uppercase",
                                "data-animate": "text",
                                children: t("mission.subheading")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "font-semibold text-4xl md:text-6xl leading-10",
                                "data-animate": "text",
                                "data-delay": "0.3",
                                children: t("mission.heading")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "pt-20 md:pt-48",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    width: 576,
                                    height: 576,
                                    className: "h-auto mx-auto md:mx-0 w-full max-w-xl",
                                    "data-animate": "clip-rect",
                                    "data-delay": "0.9",
                                    src: "/images/mac.png",
                                    alt: "Mac"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: "font-normal text-base md:text-xl leading-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        "data-animate": "text",
                                        "data-delay": "0.6",
                                        children: t("mission.desc1")
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        "data-animate": "text",
                                        "data-delay": "0.9",
                                        children: t("mission.desc2")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "pt-20",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    width: 576,
                                    height: 576,
                                    className: "h-auto mx-auto w-full max-w-xl",
                                    "data-animate": "clip-rect",
                                    "data-direction": "rtl",
                                    "data-delay": "0.9",
                                    src: "/images/meeting.png",
                                    alt: "Meeting"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const About_OurMissionSection = (OurMissionSection);

;// CONCATENATED MODULE: ./src/components/About/OurValueSection.tsx



function OurValueSection() {
    const { t } = (0,external_next_i18next_.useTranslation)("about");
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "pt-52 px-4",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mx-auto max-w md:grid md:grid-cols-3 justify-between items-start gap-12",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-center md:text-start mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-bright-orange text-xl pb-1 font-semibold uppercase",
                            "data-animate": "text",
                            children: t("value.subheading")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "font-semibold text-4xl md:text-6xl leading-10",
                            "data-animate": "text",
                            "data-delay": "0.3",
                            children: t("value.heading")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "pt-4 text-dark-gray",
                            "data-animate": "text",
                            "data-delay": "0.6",
                            children: t("value.desc")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "pt-10",
                            "data-animate": "button",
                            "data-delay": "0.9",
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "px-12 py-4 text-lg font-bold btn mx-auto md:mx-0",
                                children: t("value.btn.explore")
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "col-span-2 grid sm:grid-cols-2 gap-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "rounded-lg mt-6 shadow p-6",
                                    "data-animate": "text",
                                    "data-delay": "0.3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "pb-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                width: 64,
                                                height: 64,
                                                className: "w-16 h-16",
                                                src: "/icons/about/relevance.svg",
                                                alt: "Relevance"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                            className: "font-semibold text-xl pb-2",
                                            children: [
                                                " ",
                                                t("value.feature.heading1"),
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-dark-gray",
                                            children: t("value.feature.desc1")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "rounded-lg mt-6 shadow p-6",
                                    "data-animate": "text",
                                    "data-delay": "0.6",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "pb-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                width: 64,
                                                height: 64,
                                                className: "w-16 h-16",
                                                src: "/icons/about/flexibility.svg",
                                                alt: "Flexibility"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                            className: "font-semibold text-xl pb-2",
                                            children: [
                                                " ",
                                                t("value.feature.heading2"),
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-dark-gray",
                                            children: t("value.feature.desc2")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "rounded-lg mt-6 shadow p-6",
                                    "data-animate": "text",
                                    "data-delay": "0.9",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "pb-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                width: 64,
                                                height: 64,
                                                className: "w-16 h-16",
                                                src: "/icons/about/excellence.svg",
                                                alt: "Excellence"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                            className: "font-semibold text-xl pb-2",
                                            children: [
                                                " ",
                                                t("value.feature.heading3"),
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-dark-gray",
                                            children: t("value.feature.desc3")
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "sm:pt-20",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "rounded-lg mt-6 shadow p-6",
                                    "data-animate": "text",
                                    "data-delay": "1.2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "pb-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                width: 64,
                                                height: 64,
                                                className: "w-16 h-16",
                                                src: "/icons/about/support.svg",
                                                alt: "Support"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "font-semibold text-xl pb-2",
                                            children: t("value.feature.heading4")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-dark-gray",
                                            children: t("value.feature.desc3")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "rounded-lg mt-6 shadow p-6",
                                    "data-animate": "text",
                                    "data-delay": "1.5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "pb-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                width: 64,
                                                height: 64,
                                                className: "w-16 h-16",
                                                src: "/icons/about/collaboration.svg",
                                                alt: "Collaboration"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                            className: "font-semibold text-xl pb-2",
                                            children: [
                                                " ",
                                                t("value.feature.heading5"),
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-dark-gray",
                                            children: t("value.feature.desc5")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "rounded-lg mt-6 shadow p-6",
                                    "data-animate": "text",
                                    "data-delay": "1.8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "pb-4",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                width: 64,
                                                height: 64,
                                                className: "w-16 h-16",
                                                src: "/icons/about/empowerment.svg",
                                                alt: "Empowerment"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                            className: "font-semibold text-xl pb-2",
                                            children: t("value.feature.heading6")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-dark-gray",
                                            children: t("value.feature.desc6")
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const About_OurValueSection = (OurValueSection);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: ./node_modules/keen-slider/keen-slider.min.css
var keen_slider_min = __webpack_require__(6443);
// EXTERNAL MODULE: external "keen-slider/react"
var react_ = __webpack_require__(1161);
;// CONCATENATED MODULE: ./src/components/About/TeachersSection.tsx






function TeachersSection() {
    const { t } = (0,external_next_i18next_.useTranslation)("about");
    const [sliderRef, instanceRef] = (0,react_.useKeenSlider)({
        loop: true,
        mode: "snap",
        slides: {
            // origin: "center",
            perView: "auto"
        }
    });
    function next(e) {
        e.stopPropagation();
        instanceRef.current?.next();
    }
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "pt-52 px-4",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mx-auto max-w md:grid md:grid-cols-3 justify-between items-center gap-y-12 md:gap-12",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-center md:text-start mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-bright-orange text-xl pb-1 font-semibold uppercase",
                            "data-animate": "text",
                            "data-delay": "0.3",
                            children: t("teachers.subheading")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "font-semibold text-4xl md:text-6xl leading-10",
                            "data-animate": "text",
                            "data-delay": "0.6",
                            children: t("teachers.heading")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "pt-4 text-dark-gray",
                            "data-animate": "text",
                            "data-delay": "0.9",
                            children: t("teachers.desc")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "pt-10",
                            "data-animate": "button",
                            "data-delay": "1.2",
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "px-12 py-4 text-lg font-bold btn mx-auto md:mx-0",
                                children: t("teachers.btn.join")
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "col-span-2 relative",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            ref: sliderRef,
                            className: "keen-slider pt-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(CarouselItem, {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(TeacherCard, {
                                        name: "Jahid Hasan",
                                        department: "Science",
                                        cover: "/images/about/teacher1.png"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx(CarouselItem, {
                                    children: /*#__PURE__*/ jsx_runtime.jsx(TeacherCard, {
                                        name: "Sara Ahmed",
                                        department: "Computer Science",
                                        cover: "/images/about/teacher2.png",
                                        imageBgColorClass: "bg-yellow-300"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            onClick: next,
                            className: "absolute top-[50%] right-0 shadow p-2 bg-rose-500 rounded text-white",
                            "aria-label": "Next slide",
                            "aria-controls": "splide01-track",
                            "data-carousel": "next",
                            children: /*#__PURE__*/ jsx_runtime.jsx(fa_.FaArrowRight, {
                                size: 22
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const About_TeachersSection = (TeachersSection);
const TeacherCard = (props)=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "rounded-xl mx-4 shadow overflow-hidden",
            "data-animate": "clip-rect",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: `px-4 pt-4 ${props.imageBgColorClass || "bg-cyan-500"}`,
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        width: 320,
                        height: 320,
                        className: "w-full max-w-xs mx-auto aspect-rect",
                        src: props.cover,
                        alt: props.name
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "px-4 md:px-8 pt-5 md:pt-10 pb-8 md:pb-16",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            className: "uppercase text-bright-orange font-semibold",
                            children: [
                                " ",
                                props.department,
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            className: "font-bold text-xl md:text-3xl",
                            children: [
                                " ",
                                props.name,
                                " "
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const CarouselItem = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "keen-slider__slide min-w-full sm:min-w-0 p-4",
        children: children
    });
};

// EXTERNAL MODULE: ./src/components/NewsletterSection.tsx
var NewsletterSection = __webpack_require__(5729);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/pages/about.tsx









function About() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                    children: "About - Coursebee"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(About_AboutCoursebeeSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(About_OurMissionSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(About_OurValueSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(About_TeachersSection, {}),
            /*#__PURE__*/ jsx_runtime.jsx(NewsletterSection/* default */.Z, {})
        ]
    });
}
/* harmony default export */ const about = (About);
const getStaticProps = async ({ locale })=>{
    if (false) {}
    return {
        props: {
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale || "en", [
                "common",
                "about"
            ])
        }
    };
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2Fabout&absolutePagePath=private-next-pages%2Fabout.tsx&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2Fabout_absolutePagePath_private_next_pages_2Fabout_tsx_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(about_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2Fabout_absolutePagePath_private_next_pages_2Fabout_tsx_preferredRegion_middlewareConfig_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(about_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(about_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(about_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(about_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(about_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(about_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/about","pathname":"/about","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: about_namespaceObject })
        
        
    

/***/ }),

/***/ 6443:
/***/ (() => {



/***/ }),

/***/ 1161:
/***/ ((module) => {

"use strict";
module.exports = require("keen-slider/react");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

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

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 4751:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,812,675,729], () => (__webpack_exec__(8435)));
module.exports = __webpack_exports__;

})();