(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9837:
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
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
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
                    children: /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineMenu, {
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
                                        t("For Business"),
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
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Contact.tsx



function openContact() {
    const openEvent = new Event("show-contact");
    window.dispatchEvent(openEvent);
}
function closeContact() {
    const closeEvent = new Event("hide-contact");
    window.dispatchEvent(closeEvent);
}
function Contact() {
    const [show, setShow] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("show-contact", ()=>setShow(true));
        window.addEventListener("hide-contact", ()=>setShow(false));
        return ()=>{
            window.removeEventListener("show-contact", ()=>setShow(true));
            window.removeEventListener("hide-contact", ()=>setShow(false));
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `${show ? "opacity-1 z-50" : "opacity-0 -z-50"} fixed top-0 left-0 right-0 bottom-0 max-w-full min-h-full transition-all duration-1000 overflow-auto`,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "grid justify-center items-start relative overflow-auto p-8",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "bg-white rounded-lg p-4 z-[2]",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                width: 24,
                                height: 24,
                                className: "w-full mx-auto max-w-xs",
                                src: "/images/contact.svg",
                                alt: "Contact us"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "text-center text-ncolor-800 font-semibold text-xl md:text-2xl mt-6",
                                children: "Contact us"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid justify-center items-center gap-6 md:grid-cols-2 pt-10",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "shadow rounded-lg px-9 py-5 text-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "flex gap-1 justify-center items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        width: 24,
                                                        height: 24,
                                                        src: "/icons/email.svg",
                                                        alt: "Email icon"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-sm",
                                                        children: "Email"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "pt-2 font-semibold",
                                                children: "info@coursebee.com"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "shadow rounded-lg px-8 py-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "flex gap-1 justify-center items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        width: 24,
                                                        height: 24,
                                                        src: "/icons/chatIcon.svg",
                                                        alt: "Message icon"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-sm",
                                                        children: "Message"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "pt-2 font-semibold",
                                                children: "m.me/@coursebee"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "shadow rounded-lg px-8 py-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "flex gap-1 justify-center items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        width: 24,
                                                        height: 24,
                                                        src: "/icons/phone.svg",
                                                        alt: "Phone icon"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-sm",
                                                        children: "Phone"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "pt-2 font-semibold",
                                                children: "+880 1833 186 666"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "shadow rounded-lg px-8 py-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "flex gap-1 justify-center items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        width: 24,
                                                        height: 24,
                                                        src: "/icons/facebookIcon.svg",
                                                        alt: "Facebook icon"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "text-sm",
                                                        children: "facebook"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                className: "pt-2 font-semibold",
                                                children: "fb.com/coursebee.live"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex gap-6 justify-center items-center pt-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            width: 24,
                                            height: 24,
                                            src: "/icons/Social Media Icon Square/twitter.svg",
                                            alt: "Twitter"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            width: 24,
                                            height: 24,
                                            src: "/icons/Social Media Icon Square/instagram.svg",
                                            alt: "Instagram"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            width: 24,
                                            height: 24,
                                            src: "/icons/Social Media Icon Square/youtube.svg",
                                            alt: "Youtube"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            width: 24,
                                            height: 24,
                                            src: "/icons/Social Media Icon Square/linkedin.svg",
                                            alt: "LinkedIn"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "pt-10 pb-5",
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    onClick: closeContact,
                                    className: "btn text-lg px-6 py-3 md:py-3 md:px-12 mx-auto",
                                    children: "Close"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    onClick: closeContact,
                    className: "bg-black bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 w-screen max-w-full z-[1]"
                })
            ]
        })
    });
}
/* harmony default export */ const components_Contact = (Contact);

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
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        width: 96,
                        height: 26,
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
                                    className: `nav-link ${asPath == "/for-business" ? "nav-active" : ""}`,
                                    href: "/coming-soon",
                                    children: [
                                        " ",
                                        t("For Business"),
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
                                    onClick: openContact,
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
                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    width: 18,
                                    height: 30,
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("footer", {
                className: "md:pb-20 pt-40 pb-10 max-w mx-auto px-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid gap-10 grid-cols-1 md:grid-cols-3 w-full",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    width: 112,
                                    height: 30,
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
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                width: 24,
                                                height: 26,
                                                className: "hover:invert",
                                                src: "/icons/messengerIcon.svg",
                                                alt: "Messenger"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "",
                                            className: "block hover:bg-bright-orange transition rounded",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                width: 24,
                                                height: 26,
                                                className: "hover:invert",
                                                src: "/icons/facebookIcon.svg",
                                                alt: "Messenger"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "",
                                            className: "block hover:bg-bright-orange transition rounded",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                width: 24,
                                                height: 26,
                                                className: "hover:invert",
                                                src: "/icons/whatsappIcon.svg",
                                                alt: "Messenger"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "",
                                            className: "block hover:bg-bright-orange transition rounded",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                width: 24,
                                                height: 26,
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
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/home",
                                            className: "footer-link",
                                            children: t("Home")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/coming-soon",
                                            className: "footer-link",
                                            children: t("Android")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/coming-soon",
                                            className: "footer-link",
                                            children: t("Courses")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/coming-soon",
                                            className: "footer-link",
                                            children: t("iOS")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/about",
                                            className: "footer-link",
                                            children: t("About")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/coming-soon",
                                            className: "footer-link",
                                            children: t("Login")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            type: "button",
                                            onClick: openContact,
                                            className: "footer-link cursor-pointer",
                                            children: t("Contact")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/coming-soon",
                                            className: "footer-link",
                                            children: t("Sign Up")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/coming-soon",
                                            className: "footer-link",
                                            children: t("Job Board")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/coming-soon",
                                            className: "footer-link",
                                            children: t("For business")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/coming-soon",
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
            }),
            /*#__PURE__*/ jsx_runtime.jsx(components_Contact, {})
        ]
    });
}
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: external "gsap"
const external_gsap_namespaceObject = require("gsap");
;// CONCATENATED MODULE: external "gsap/dist/CSSRulePlugin"
const CSSRulePlugin_namespaceObject = require("gsap/dist/CSSRulePlugin");
var CSSRulePlugin_default = /*#__PURE__*/__webpack_require__.n(CSSRulePlugin_namespaceObject);
;// CONCATENATED MODULE: external "gsap/dist/CustomEase"
const CustomEase_namespaceObject = require("gsap/dist/CustomEase");
var CustomEase_default = /*#__PURE__*/__webpack_require__.n(CustomEase_namespaceObject);
;// CONCATENATED MODULE: external "gsap/dist/ScrollTrigger"
const ScrollTrigger_namespaceObject = require("gsap/dist/ScrollTrigger");
;// CONCATENATED MODULE: ./src/libs/animation.ts




function registerGsapPlugin() {
    external_gsap_namespaceObject.gsap.registerPlugin(ScrollTrigger_namespaceObject.ScrollTrigger);
    external_gsap_namespaceObject.gsap.registerPlugin((CSSRulePlugin_default()));
    external_gsap_namespaceObject.gsap.registerPlugin((CustomEase_default()));
}
let intersectionObserver;
function ensureIntersectionObserver() {
    if (intersectionObserver) return;
    intersectionObserver = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const eventName = entry.isIntersecting ? "enterViewport" : "exitViewport";
            entry.target.dispatchEvent(new CustomEvent(eventName));
        });
    });
}
function viewport(element) {
    ensureIntersectionObserver();
    intersectionObserver.observe(element);
    return {
        destroy () {
            intersectionObserver.unobserve(element);
        }
    };
}
function initAnimation() {
    document.querySelectorAll("[data-animate]").forEach((_el)=>{
        const el = _el;
        const viewportTracker = viewport(el);
        el.style.opacity = "0";
        el.addEventListener("enterViewport", ()=>onEnterViewport(el));
    });
}
function onEnterViewport(el) {
    el.style.opacity = "1";
    if (!el.dataset.animationRepeat && el.dataset.done == "true") return;
    let animation;
    switch(el.dataset.animate){
        case "text":
            animation = {
                autoAlpha: 0,
                y: el.dataset.y || 20,
                duration: el.dataset.duration || 1.2,
                ease: "expo.inOut",
                delay: el.dataset.delay || 0
            };
            external_gsap_namespaceObject.gsap.from(el, animation);
            break;
        case "button":
            const bop = CustomEase_default().create("custom", "M0,0 C0.158,0.586 0.189,1.411 0.352,1.226 0.566,0.982 0.488,1 1,1 ");
            animation = {
                autoAlpha: 0,
                scaleX: el.dataset.scaleX ?? 0.4,
                duration: el.dataset.duration ?? 1,
                ease: bop,
                delay: el.dataset.delay ?? 0
            };
            external_gsap_namespaceObject.gsap.from(el, animation);
            break;
        case "image":
            animation = {
                translateX: "100%",
                duration: el.dataset.duration || 1.5,
                delay: el.dataset.delay || 0
            };
            external_gsap_namespaceObject.gsap.from(el, animation);
            break;
        case "card":
            animation = {
                scale: 0.9,
                autoAlpha: 0,
                y: el.dataset.y || 50,
                delay: el.dataset.delay || 0,
                ease: "power4.out",
                duration: el.dataset.duration || 2
            };
            external_gsap_namespaceObject.gsap.from(el, animation);
            break;
        case "clip-rect":
            let t1 = external_gsap_namespaceObject.gsap.timeline();
            animation = {
                clipPath: `polygon(${el.dataset.direction == "rtl" ? "100% 0, 100% 0, 100% 100%, 100% 100%" : "0% 0%, 0% 0%, 0% 100%, 0% 100%"})`,
                ease: "Circ.easeOut",
                duration: el.dataset.duration || 1.75,
                delay: el.dataset.delay || 0
            };
            t1.from(el, animation);
            t1.to(el, {
                scale: el.dataset.scale || 1.05,
                duration: 5
            });
            break;
        case "background-pos":
            animation = {
                backgroundPosition: "-100vw 100%",
                ease: "Circ.easeOut",
                delay: el.dataset.delay || 0,
                duration: el.dataset.duration || 2
            };
            external_gsap_namespaceObject.gsap.from(el, animation);
            break;
        case "scroll-bg-color":
            const animationFn = external_gsap_namespaceObject.gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: el.dataset.start || "top 100%",
                    end: el.dataset.end || "top 70%",
                    scrub: 0.5,
                    onUpdate: (self)=>{
                        el.style.scale = self.progress >= 1 || self.progress <= 0 ? "1" : "1.5";
                    }
                }
            });
            break;
        case "image-position":
            animation = {
                autoAlpha: 0,
                ease: CustomEase_default().create("custom", "M0,0 C0.476,0.48 0.542,0.548 1,1 "),
                duration: el.dataset.duration || 2.5,
                delay: el.dataset.delay || 0
            };
            if (el.dataset.top) animation.top = el.dataset.top;
            if (el.dataset.bottom) animation.bottom = el.dataset.bottom;
            if (el.dataset.left) animation.left = el.dataset.left;
            if (el.dataset.right) animation.right = el.dataset.right;
            external_gsap_namespaceObject.gsap.from(el, animation);
            break;
    }
    el.dataset.done = "true";
    el.removeEventListener("enterViewport", ()=>onEnterViewport(el));
}
function animate(ref) {
    const ctx = external_gsap_namespaceObject.gsap.context(()=>{
        initAnimation();
    }, ref);
    return ctx;
}

;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.css
var nprogress = __webpack_require__(4204);
;// CONCATENATED MODULE: ./src/pages/_app.tsx










function App({ Component, pageProps }) {
    const [loading, setLoading] = (0,external_react_.useState)(true);
    const { locale, asPath } = (0,router_.useRouter)();
    const ref = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        try {
            const handleRouteStart = ()=>external_nprogress_default().start();
            const handleRouteDone = ()=>external_nprogress_default().done();
            router_.Router.events.on("routeChangeStart", handleRouteStart);
            router_.Router.events.on("routeChangeComplete", handleRouteDone);
            router_.Router.events.on("routeChangeError", handleRouteDone);
            return ()=>{
                // Make sure to remove the event handler on unmount!
                router_.Router.events.off("routeChangeStart", handleRouteStart);
                router_.Router.events.off("routeChangeComplete", handleRouteDone);
                router_.Router.events.off("routeChangeError", handleRouteDone);
            };
        } catch (error) {
            console.log(error);
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        registerGsapPlugin();
        const ctx = animate(ref);
        setLoading(false);
        console.log(asPath);
        return ()=>ctx.revert();
    }, [
        asPath
    ]);
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

/***/ 4204:
/***/ (() => {



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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

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

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,812,675,664], () => (__webpack_exec__(9837)));
module.exports = __webpack_exports__;

})();