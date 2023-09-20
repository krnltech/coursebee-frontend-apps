import Link from "next/link";
import MobileNav from "./MobileNav";
import useScrollDirection from "@/libs/hooks/scrollDirection";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import { openContact } from "./Contact";


function Navbar() {
    const [scrollDir] = useScrollDirection();
    const { asPath, locale } = useRouter();
    const { t } = useTranslation("common");

    return (
        <header style={{ transform: `translateY(${scrollDir == 'down' ? "-90px" : "0px"})` }} className="transition-all bg-white z-10 w-screen max-w-full shadow-sm fixed top-0">
            <nav
                className="flex flex-row max-w mx-auto px-2 items-center py-5 justify-between relative"
            >
                <Link href="/">
                    <Image width={96} height={26} src="/images/coursebeeLogo.svg" alt="coursebee-logo" className="w-24 -mt-2"
                    />
                </Link>
                {/* <!-- Desktop Nav --> */}
                <ul className="hidden md:flex items-center gap-6 gap-x-16">
                    <li> <Link className={`nav-link ${asPath =="/courses" ? "nav-active" : ""}`} href="/courses"> {t("Courses")} </Link> </li>
                    <li> <Link className={`nav-link ${asPath =="/about" ? "nav-active" : ""}`} href="/about"> {t("About")} </Link> </li>
                    <li> <Link className={`nav-link ${asPath =="/for-business" ? "nav-active" : ""}`} href="/coming-soon"> {t("For Business")} </Link> </li>
                </ul>

                <div className="flex flex-row items-center gap-2">
                    <ul className="hidden md:flex items-center gap-6 mr-6">
                        <li><Link className="nav-link underline underline-offset-2" href="/coming-soon">{t("Sign Up")}</Link></li>
                        <li><Link className="nav-link underline underline-offset-2" href="/coming-soon">{t("Job Board")}</Link> </li>
                    </ul>
                    <button className="hidden sm:btn sm:shadow sm:py-3 ">{t("Login")}</button>
                    <Link href={asPath} locale={locale === 'en' ? "bn" : "en"} className="flex rounded-md border-[1px] border-light-gray px-6 md:px-8 py-1.5  text-sm font-medium transition items-center gap-1 hover:bg-slate-100">
                        <Image width={18} height={30} src="/icons/language.svg" alt="language" />
                        <p>{locale === 'en' ? "EN" : "BN"}</p>
                    </Link>
                    <MobileNav />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
