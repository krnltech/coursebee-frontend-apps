import { useTranslation } from "next-i18next";
import Link from "next/link"
import { AiOutlineMenu } from "react-icons/ai"

function MobileNav() {
    const { t } = useTranslation("common");
    
    return (
        <>
            <div className="group outline-none" tabIndex={1}>
                <button className="menu-hamburger"><AiOutlineMenu size={30} /></button>
                <ul
                    className="mobile-nav drop-shadow"
                >
                    <div className="flex items-center justify-center h-full flex-col gap-4">
                        <li>
                            <Link className="nav-link" href="/"> {t("Home")} </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/courses"> {t("Courses")} </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/about"> {t("About")} </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/coming-soon"> {t("Career")} </Link>
                        </li>
                        <li>
                            <a className="nav-link cursor-pointer"> {t("Contact")} </a>
                        </li>
                        <li>
                            <Link className="nav-link" href="/coming-soon"> {t("Sign Up")} </Link>
                        </li>
                        <div className="w-3/5 sm:hidden">
                            <button className="btn py-3 w-full"> {t("Login")} </button>
                        </div>
                    </div>
                    {/* <div ><AiOutlineClose size={28} /></div> */}
                </ul>
            </div>
        </>
    )
}

export default MobileNav