(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_tsx_preferredRegion_middlewareConfig_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/_app.tsx
var _app_namespaceObject = {};
__webpack_require__.r(_app_namespaceObject);
__webpack_require__.d(_app_namespaceObject, {
  "default": () => (_app)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: ./src/components/MobileNav.tsx




function MobileNav() {
    const { t } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "group outline-none",
            tabIndex: 1,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("button", {
                    className: "menu-hamburger",
                    children: /*#__PURE__*/ jsx_runtime.jsx(ai_namespaceObject.AiOutlineMenu, {
                        size: 30
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("ul", {
                    className: "mobile-nav drop-shadow",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center justify-center h-full flex-col gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    className: "nav-link",
                                    href: "/",
                                    children: [
                                        " ",
                                        t("Home"),
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    className: "nav-link",
                                    href: "/courses",
                                    children: [
                                        " ",
                                        t("Courses"),
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    className: "nav-link",
                                    href: "/about",
                                    children: [
                                        " ",
                                        t("About"),
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    className: "nav-link",
                                    href: "/coming-soon",
                                    children: [
                                        " ",
                                        t("Career"),
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    className: "nav-link cursor-pointer",
                                    children: [
                                        " ",
                                        t("Contact"),
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    className: "nav-link",
                                    href: "/coming-soon",
                                    children: [
                                        " ",
                                        t("Sign Up"),
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-3/5 sm:hidden",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                    className: "btn py-3 w-full",
                                    children: [
                                        " ",
                                        t("Login"),
                                        " "
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const components_MobileNav = (MobileNav);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/libs/hooks/scrollDirection.ts

function useScrollDirection() {
    const [scrollDir, setScrollDir] = (0,external_react_.useState)("still");
    (0,external_react_.useEffect)(()=>{
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;
        const updateScrollDir = ()=>{
            const scrollY = window.pageYOffset;
            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(scrollY > lastScrollY ? "down" : "up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };
        const onScroll = ()=>{
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, [
        scrollDir
    ]);
    return [
        scrollDir,
        setScrollDir
    ];
}
/* harmony default export */ const scrollDirection = (useScrollDirection);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/Navbar.tsx






function Navbar() {
    const [scrollDir] = scrollDirection();
    const { asPath, locale } = (0,router_.useRouter)();
    const { t } = (0,external_next_i18next_.useTranslation)("common");
    return /*#__PURE__*/ jsx_runtime.jsx("header", {
        style: {
            transform: `translateY(${scrollDir == "down" ? "-90px" : "0px"})`
        },
        className: "transition-all bg-white z-10 w-screen max-w-full shadow-sm fixed top-0",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
            className: "flex flex-row max-w mx-auto px-2 items-center py-5 justify-between relative",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: "/images/coursebeeLogo.svg",
                        alt: "coursebee-logo",
                        className: "w-24 -mt-2"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    className: "hidden md:flex items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            children: [
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    className: `nav-link ${asPath == "/" ? "nav-active" : ""}`,
                                    href: "/",
                                    children: [
                                        " ",
                                        t("Home"),
                                        " "
                                    ]
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            children: [
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    className: `nav-link ${asPath == "/courses" ? "nav-active" : ""}`,
                                    href: "/courses",
                                    children: [
                                        " ",
                                        t("Courses"),
                                        " "
                                    ]
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            children: [
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    className: `nav-link ${asPath == "/about" ? "nav-active" : ""}`,
                                    href: "/about",
                                    children: [
                                        " ",
                                        t("About"),
                                        " "
                                    ]
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            children: [
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                    className: `nav-link ${asPath == "/career" ? "nav-active" : ""}`,
                                    href: "/career",
                                    children: [
                                        " ",
                                        t("Career"),
                                        " "
                                    ]
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            children: [
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    type: "button",
                                    className: "nav-link cursor-pointer",
                                    children: t("Contact")
                                }),
                                " "
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-row items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "hidden md:flex items-center gap-6 mr-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        className: "nav-link underline underline-offset-2",
                                        href: "/coming-soon",
                                        children: t("Sign Up")
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            className: "nav-link underline underline-offset-2",
                                            href: "/coming-soon",
                                            children: t("Job Board")
                                        }),
                                        " "
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: "hidden sm:btn sm:shadow sm:py-3 ",
                            children: t("Login")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                            href: asPath,
                            locale: locale === "en" ? "bn" : "en",
                            className: "flex rounded-md border-[1px] border-light-gray px-6 md:px-8 py-1.5  text-sm font-medium transition items-center gap-1 hover:bg-slate-100",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    src: "/icons/language.svg",
                                    alt: "language"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: locale === "en" ? "EN" : "BN"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(components_MobileNav, {})
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: ./src/components/Footer.tsx


function Footer() {
    const { t } = (0,external_next_i18next_.useTranslation)();
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "md:pb-20 pt-40 pb-10 max-w mx-auto px-4",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "grid gap-10 grid-cols-1 md:grid-cols-3 w-full",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            className: "max-w-[112px] w-full",
                            src: "/images/coursebeeLogo.svg",
                            alt: "Coursebee"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            className: "text-dark-gray py-3",
                            children: [
                                t("Copyright"),
                                " \xa9COURSEBEE 2023"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex justify-start gap-7 p-1 md:pt-12",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "",
                                    className: "block hover:bg-bright-orange transition rounded",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        className: "hover:invert",
                                        src: "/icons/messengerIcon.svg",
                                        alt: "Messenger"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "",
                                    className: "block hover:bg-bright-orange transition rounded",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        className: "hover:invert",
                                        src: "/icons/facebookIcon.svg",
                                        alt: "Messenger"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "",
                                    className: "block hover:bg-bright-orange transition rounded",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        className: "hover:invert",
                                        src: "/icons/whatsappIcon.svg",
                                        alt: "Messenger"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "",
                                    className: "block hover:bg-bright-orange transition rounded",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        className: "hover:invert",
                                        src: "/icons/instagramIcon.svg",
                                        alt: "Messenger"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            className: "font-bold text-xl leading-8 pb-7",
                            children: t("Quick Links")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-2 justify-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "",
                                    className: "footer-link",
                                    children: t("Home")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "",
                                    className: "footer-link",
                                    children: t("Android")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "",
                                    className: "footer-link",
                                    children: t("Courses")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "",
                                    className: "footer-link",
                                    children: t("iOS")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "",
                                    className: "footer-link",
                                    children: t("About")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "",
                                    className: "footer-link",
                                    children: t("Login")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    "data-component": "open-contact",
                                    className: "footer-link cursor-pointer",
                                    children: t("Contact")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "",
                                    className: "footer-link",
                                    children: t("Sign Up")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "",
                                    className: "footer-link",
                                    children: t("Job Board")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "",
                                    className: "footer-link",
                                    children: t("Career")
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "",
                                    className: "footer-link",
                                    children: t("Privacy Policy")
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            className: "font-bold text-xl leading-8 pb-7",
                            children: t("Contact us")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex gap-4 items-start",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            className: "max-w-[18px]",
                                            src: "/icons/email.svg",
                                            alt: "Email"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-dark-gray font-medium leading-6 pb-4",
                                            children: "info@coursebee.com"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex gap-4 items-start",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            className: "max-w-[18px]",
                                            src: "/icons/contact.svg",
                                            alt: "Contact"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-dark-gray font-medium leading-6 pb-4",
                                            children: "m.me/@coursebee"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex gap-4 items-start",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            className: "max-w-[18px]",
                                            src: "/icons/phone.svg",
                                            alt: "Phone"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-dark-gray font-medium leading-6 pb-4",
                                            children: "+880 1833 186 666"
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
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./src/pages/_app.tsx






function App({ Component, pageProps }) {
    const { locale } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            lang: locale == "en" ? "en" : "bn",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(components_Navbar, {}),
                /*#__PURE__*/ jsx_runtime.jsx("main", {
                    children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                        ...pageProps
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx(components_Footer, {})
            ]
        })
    });
}
/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(App));

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx&preferredRegion=&middlewareConfig=e30%3D!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_tsx_preferredRegion_middlewareConfig_e30_3D_ = ((0,helpers/* hoist */.l)(_app_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_app_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_app_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/_app","pathname":"/_app","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _app_namespaceObject })
        
        
    

/***/ }),

/***/ 108:
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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [812,664], () => (__webpack_exec__(9005)));
module.exports = __webpack_exports__;

})();