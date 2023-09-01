"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
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
    const { t } = (0,external_next_i18next_.useTranslation)("home");
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
                            children: t("articles.heading")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            "data-animate": "button",
                            "data-delay": "0.5",
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "hidden md:block py-3 px-6 md:py-5 md:px-12 btn leading- font-semibold rounded-md",
                                children: t("articles.btn.browse")
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
                        children: t("articles.btn.browse")
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Home_Articles = (Articles);
const Article = ({ title, cover, date })=>{
    const { t } = (0,external_next_i18next_.useTranslation)("home");
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
                                    children: t("articles.btn.guide")
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

// EXTERNAL MODULE: ./src/components/Home/UserRating.tsx
var UserRating = __webpack_require__(1931);
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
    const { t } = (0,external_next_i18next_.useTranslation)("home");
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "max-w mx-auto px-4 h-[690px] my-16",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            "data-animate": "clip-rect",
            "data-delay": "0.3",
            "data-scale": "1",
            "data-direction": "rtl",
            className: "relative bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url(/images/home/hero_new_ai_course_2.png)] bg-cover bg-center bg-no-repeat h-full rounded-lg",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "h-full",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "relative max-w-screen-xl flex flex-col justify-center md:flex-row md:justify-start items-center h-full",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "max-w-2xl text-white px-4 sm:px-8 md:px-16 font-inter text-center md:text-left",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                "data-animate": "text",
                                "data-delay": "1",
                                className: "text-base sm:text-xl/loose font-bold",
                                children: t("banner.announcement")
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                dangerouslySetInnerHTML: {
                                    __html: t("banner.heading")
                                },
                                "data-animate": "text",
                                "data-delay": "1.2",
                                className: "mt-2 text-2xl md:text-4xl font-semibold"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                "data-animate": "text",
                                "data-delay": "1.4",
                                className: "mt-4 text-white/90",
                                children: t("banner.paragraph")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "mt-8 flex flex-col md:flex-row gap-6 text-center items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        "data-animate": "button",
                                        "data-delay": "1.6",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            className: "btn py-4",
                                            children: t("banner.button")
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex items-center gap-2 flex-col md:flex-row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "flex",
                                                children: /*#__PURE__*/ jsx_runtime.jsx(UserRating/* default */.Z, {
                                                    className: "w-8 rounded-full"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                "data-animate": "text",
                                                "data-delay": "2.2",
                                                className: "text-white/90 text-xs font-medium",
                                                children: t("banner.review")
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const Home_BannerSection = (BannerSection);

// EXTERNAL MODULE: ./src/libs/courses.ts
var courses = __webpack_require__(6048);
// EXTERNAL MODULE: ./src/components/Card.tsx
var Card = __webpack_require__(7834);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Home/BrowseOurCourseSection.tsx







function BrowseOurCourseSection() {
    const { t } = (0,external_next_i18next_.useTranslation)("home");
    const { locale } = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "max-w mx-auto px-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        "data-animate": "text",
                        className: "text-3xl md:text-[45px] text-center md:leading-[60px] font-medium",
                        children: t("browse.heading")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        "data-animate": "text",
                        "data-delay": "0.4",
                        className: "py-[15px] text-center text-dark-gray mx-auto max-w-[666px] font-normal",
                        children: t("browse.subheading")
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid justify-center items-center pt-12 gap-4 mx-auto px-4 md:px-0 tabpanel-btns max-w-[800px]",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            "data-animate": "button",
                            "data-delay": "0.8",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                className: "browse_courses_tab hover:opacity-100 transition-all",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        width: 40,
                                        height: 40,
                                        src: "/icons/all_courses.svg",
                                        className: "w-10 h-10",
                                        alt: "All courses"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "font-medium md:text-lg leading-7",
                                        children: t("browse.btn.all")
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            "data-animate": "button",
                            "data-delay": "1",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                className: "browse_courses_tab opacity-70 hover:opacity-100 transition-all",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        width: 40,
                                        height: 40,
                                        src: "/icons/design.svg",
                                        className: "w-10 h-10",
                                        alt: "Trending"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "font-medium md:text-lg leading-7",
                                        children: t("browse.btn.trending")
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            "data-animate": "button",
                            "data-delay": "1.2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                className: "browse_courses_tab opacity-70 hover:opacity-100 transition-all",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        width: 40,
                                        height: 40,
                                        src: "/icons/development.svg",
                                        className: "w-10 h-10",
                                        alt: "Latest"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "font-medium md:text-lg leading-7",
                                        children: t("browse.btn.latest")
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            "data-animate": "button",
                            "data-delay": "1.4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                className: "browse_courses_tab opacity-70 hover:opacity-100 transition-all",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        width: 40,
                                        height: 40,
                                        src: "/icons/marketing.svg",
                                        className: "w-10 h-10",
                                        alt: "Popular"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "font-medium md:text-lg leading-7",
                                        children: t("browse.btn.popular")
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "pt-16 grid justify-center md:grid-cols-2 lg:grid-cols-3 md:justify-center items-center md:items-stretch gap-4 mx-auto",
                children: (locale == "en" ? courses/* courses_en */.ZS : courses/* courses_bn */.yU).slice(0, 6).map((course, i)=>/*#__PURE__*/ jsx_runtime.jsx(Card/* default */.Z, {
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
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/courses",
                    className: "py-5 px-10 btn font-semibold",
                    children: t("browse.btn.explore")
                })
            })
        ]
    });
}
/* harmony default export */ const Home_BrowseOurCourseSection = (BrowseOurCourseSection);

;// CONCATENATED MODULE: ./src/components/Home/CareerSection.tsx



function CareerSection() {
    const { t } = (0,external_next_i18next_.useTranslation)("home");
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
                            children: t("career.heading")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            "data-animate": "text",
                            "data-delay": "0.6",
                            className: "font-normal leading-6 text-dark-gray py-[30px] text-center md:text-start",
                            children: [
                                t("career.subheading1"),
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                t("career.subheading2")
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            "data-animate": "button",
                            "data-delay": "0.9",
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: "btn py-4 px-12 rounded-md font-semibold",
                                children: t("career.btn")
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "relative flex justify-end mt-10 md:mt-0 overflow-hidden",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        width: 566,
                        height: 413,
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
    const { t } = (0,external_next_i18next_.useTranslation)("home");
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
                                    children: t("enroll.heading")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    "data-animate": "text",
                                    "data-delay": "0.5",
                                    className: "pt-6 pb-8 max-w-[494px]",
                                    children: t("enroll.subheading1")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-full text-center",
                                    "data-animate": "button",
                                    "data-delay": "1",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        "data-animate": "text",
                                        "data-delay": "1.2",
                                        className: "text-bright-orange bg-white rounded-[5px] border py-3 max-w-[308px] font-semibold w-full text-xl mb-10 hover:bg-bright-orange hover:text-white transition",
                                        children: t("enroll.btn.enroll")
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex items-center flex-col md:flex-row gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    width: 40,
                                                    height: 40,
                                                    "data-animate": "text",
                                                    "data-delay": "1.5",
                                                    src: "https://tecdn.b-cdn.net/img/new/avatars/2.webp",
                                                    className: "w-10 rounded-full",
                                                    alt: "Avatar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    width: 40,
                                                    height: 40,
                                                    "data-animate": "text",
                                                    "data-delay": "1.6",
                                                    src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
                                                    className: "w-10 rounded-full border-2 border-white -ml-2",
                                                    alt: "Avatar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    width: 40,
                                                    height: 40,
                                                    "data-animate": "text",
                                                    "data-delay": "1.7",
                                                    src: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
                                                    className: "w-10 rounded-full border-2 border-white -ml-2",
                                                    alt: "Avatar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    width: 40,
                                                    height: 40,
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
                                            children: t("enroll.subheading2")
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex items-center rounded-sm justify-center overflow-hidden",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                width: 422,
                                height: 422,
                                "data-animate": "clip-rect",
                                "data-delay": "2.2",
                                className: "m-end-auto md:max-w-[422px] w-full",
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
    const { locale } = (0,router_.useRouter)();
    function onEnd() {
        if (once) return;
        setActiveSensor(false);
    }
    function format(n) {
        return locale == "en" ? n.toLocaleString("en") : n.toLocaleString("bn");
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
                        formattingFn: format,
                        duration: duration || 1.5
                    }) : 0
                })
        })
    });
}
/* harmony default export */ const Home_Counter = (Counter);

;// CONCATENATED MODULE: ./src/components/Home/ExpertPanelSection.tsx




function ExpertPanelSection() {
    const { t } = (0,external_next_i18next_.useTranslation)("home");
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "max-w mx-auto px-4",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "pt-[120px]",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                    "data-animate": "text",
                    className: "text-3xl text-center md:text-[45px] md:leading-[60px] font-medium",
                    children: t("expert.heading")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                    "data-animate": "text",
                    "data-delay": "0.2",
                    className: "pt-[34px] text-center text-dark-gray font-normal mx-auto max-w-[830px]",
                    children: [
                        t("expert.subheading1"),
                        " ",
                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                        /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                        t("expert.subheading2")
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "pt-16 md:pt-32 overflow-hidden",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        "data-animate": "clip-rect",
                        "data-delay": "0.3",
                        width: 1290,
                        height: 780,
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
                                    children: t("expert.counter.nps")
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
                                    children: t("expert.counter.alumni")
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
                                    children: t("expert.counter.hours")
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
                                    children: t("expert.counter.newjoiners")
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
    const { t } = (0,external_next_i18next_.useTranslation)("home");
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
                            children: t("featured.h1")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-xs",
                            "data-animate": "text",
                            "data-delay": "0.2",
                            children: t("featured.s1")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-sm text-dark-gray",
                            "data-animate": "text",
                            "data-delay": "0.4",
                            children: t("featured.d1")
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
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        width: 20,
                                        height: 20,
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
                                                children: t("featured.h2")
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mt-1 text-sm text-dark-gray",
                                                "data-animate": "text",
                                                "data-delay": "0.7",
                                                children: t("featured.d2")
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
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        width: 20,
                                        height: 20,
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
                                                children: t("featured.h5")
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mt-1 text-sm text-dark-gray",
                                                "data-animate": "text",
                                                "data-delay": "0.9",
                                                children: t("featured.d5")
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
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        width: 20,
                                        height: 20,
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
                                                children: t("featured.h3")
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mt-1 text-sm text-dark-gray",
                                                "data-animate": "text",
                                                "data-delay": "1.1",
                                                children: t("featured.d3")
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
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        width: 20,
                                        height: 20,
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
                                                children: t("featured.h6")
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mt-1 text-sm text-dark-gray",
                                                "data-animate": "text",
                                                "data-delay": "1.3",
                                                children: t("featured.d6")
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
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        width: 20,
                                        height: 20,
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
                                                children: t("featured.h4")
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mt-1 text-sm text-dark-gray",
                                                "data-animate": "text",
                                                "data-delay": "1.5",
                                                children: t("featured.d4")
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
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        width: 20,
                                        height: 20,
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
                                                children: t("featured.h7")
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "mt-1 text-sm text-dark-gray",
                                                "data-animate": "text",
                                                "data-delay": "1.8",
                                                children: t("featured.d7")
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

;// CONCATENATED MODULE: ./src/components/Home/RatingsAndStars.tsx



function RatingsAndStars() {
    const { t } = (0,external_next_i18next_.useTranslation)("home");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex",
                children: /*#__PURE__*/ jsx_runtime.jsx(UserRating/* default */.Z, {
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
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        width: 570,
                        height: 400,
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
    const { t } = (0,external_next_i18next_.useTranslation)("home");
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
                            children: t("instructors.heading")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "pt-[34px] text-dark-gray font-normal",
                            "data-animate": "text",
                            "data-delay": "0.5",
                            children: t("instructors.subheading1")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "pt-[38px] text-dark-gray font-normal",
                            "data-animate": "text",
                            "data-delay": "1",
                            children: t("instructors.subheading2")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "pt-[34px] flex gap-4 flex-col md:flex-row",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mx-auto",
                                    "data-animate": "button",
                                    "data-delay": "1.5",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: "btn font-semibold py-4",
                                        children: t("instructors.btn.join")
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "mx-auto",
                                    "data-animate": "button",
                                    "data-delay": "2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        className: "btn bg-white text-black shadow border font-semibold py-4",
                                        children: t("instructors.btn.view")
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "overflow-hidden rounded-xl",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        "data-animate": "clip-rect",
                        "data-delay": "1.5",
                        width: 630,
                        height: 630,
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

// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__(4751);
;// CONCATENATED MODULE: ./src/components/Home/NewsletterSection.tsx
/* eslint-disable @next/next/no-img-element */ 



function NewsletterSection() {
    const { locale } = (0,router_.useRouter)();
    const { t } = (0,external_next_i18next_.useTranslation)();
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
                                            children: t("newsletter.heading")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-dark-gray pt-2",
                                            "data-animate": "text",
                                            "data-delay": "0.6",
                                            children: locale === "en" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    "Join the",
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-bright-orange font-bold",
                                                        children: " 15,000+ "
                                                    }),
                                                    "students and become part of us."
                                                ]
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    "যোগ দিন",
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-bright-orange font-bold",
                                                        children: " 15,000+ "
                                                    }),
                                                    "ছাত্রদের সাথে এবং আমাদের অংশ হয়ে উঠুন।"
                                                ]
                                            })
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
                                    children: /*#__PURE__*/ jsx_runtime.jsx(io_.IoIosArrowForward, {
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
    const { t } = (0,external_next_i18next_.useTranslation)("home");
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "pt-28 md:pt-44 max-w mx-auto px-4",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "grid md:grid-cols-2 items-center gap-8 md:gap-32",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "overflow-hidden relative",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        width: 576,
                        height: 450,
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
                            children: t("social.heading")
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            "data-animate": "text",
                            "data-delay": "1.5",
                            className: "pt-2 text-dark-gray text-lg",
                            children: t("social.subheading")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "pt-14 flex items-center justify-center gap-8 md:gap-16 px-4 mx-auto flex-wrap",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    "data-animate": "text",
                                    "data-delay": "2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        width: 100,
                                        height: 34,
                                        src: "/icons/facebook.svg",
                                        alt: "Facebook"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    "data-animate": "text",
                                    "data-delay": "2.2",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        width: 100,
                                        height: 34,
                                        src: "/icons/google.svg",
                                        alt: "Google"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    "data-animate": "text",
                                    "data-delay": "2.4",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        width: 100,
                                        height: 34,
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

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: external "react-icons/tb"
const tb_namespaceObject = require("react-icons/tb");
// EXTERNAL MODULE: ./node_modules/keen-slider/keen-slider.min.css
var keen_slider_min = __webpack_require__(6443);
// EXTERNAL MODULE: external "keen-slider/react"
var react_ = __webpack_require__(1161);
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
        username: "Bobby",
        userPhoto: "/images/james_william.png",
        review: "Top-notch courses, knowledgeable and supportive instructors, and comprehensive learning materials. It's a career game-changer!",
        course: "React Revolution"
    },
    {
        username: "Charlie",
        userPhoto: "/images/james_william.png",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt in, assumenda dicta mollitia animi expedita, saepe suscipit, quo id voluptates odit illum! Dolor, non possimus. Voluptatem, ad. Culpa, commodi.",
        course: "React Revolution"
    }
];
function StudentsFeedback() {
    const { t } = (0,external_next_i18next_.useTranslation)();
    const [sliderRef, instanceRef] = (0,react_.useKeenSlider)({
        loop: true,
        mode: "snap",
        breakpoints: {
            "(min-width: 800px)": {
                slides: {
                    perView: 2
                }
            },
            "(min-width: 1000px)": {
                slides: {
                    perView: 3
                }
            }
        },
        slides: {
            perView: 1
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
                }, 1500);
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
                        children: t("studentsFeedback.heading")
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        "data-animate": "text",
                        "data-delay": "0.5",
                        className: "py-[15px] px-4 text-center text-dark-gray mx-auto max-w-[682px] font-normal",
                        children: t("studentsFeedback.subheading")
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
                            children: /*#__PURE__*/ jsx_runtime.jsx(fa_.FaArrowLeft, {
                                size: 25
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            "aria-label": "Next slide",
                            onClick: next,
                            children: /*#__PURE__*/ jsx_runtime.jsx(fa_.FaArrowRight, {
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
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                width: 45,
                                height: 45,
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
                        className: "my-5 maxline_3 overflow-hidden",
                        children: [
                            " ",
                            review,
                            " "
                        ]
                    }),
                    course && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
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
                ]
            })
        })
    });
};

// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(5460);
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
            ...await (0,serverSideTranslations_.serverSideTranslations)(locale || "en", [
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
var __webpack_exports__ = __webpack_require__.X(0, [636,812,675,664,25,931], () => (__webpack_exec__(6570)));
module.exports = __webpack_exports__;

})();