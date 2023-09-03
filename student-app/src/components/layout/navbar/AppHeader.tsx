"use client";
import Link from "next/link";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

import useScrollDirection from "@/hooks/useScrollDirection";

function AppHeader() {
  const [scrollDir] = useScrollDirection();
  const pathname = usePathname();
  // const { pathname, locale } = useRouter();

  return (
    <header
      style={{
        transform: `translateY(${scrollDir == "down" ? "-90px" : "0px"})`,
      }}
      className="sticky top-0 z-10 w-screen max-w-full transition-all bg-white shadow-main"
    >
      <nav className="relative flex flex-row items-center justify-between px-2 py-5 mx-auto max-w">
        <Link href="/">
          <Image
            width={96}
            height={26}
            src="/images/coursebeeLogo.svg"
            alt="coursebee-logo"
            className="w-24 -mt-2"
          />
        </Link>
        {/* <!-- Desktop Nav --> */}
        <ul className="items-center hidden gap-6 md:flex">
          <li>
            <Link
              className={`nav-link ${pathname == "/" ? "nav-active" : ""}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${
                pathname == "/courses" ? "nav-active" : ""
              }`}
              href="/courses"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${pathname == "/about" ? "nav-active" : ""}`}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${
                pathname == "/for-business" ? "nav-active" : ""
              }`}
              href="/coming-soon"
            >
              For Business
            </Link>
          </li>
          <li>
            <a type="button" className="cursor-pointer nav-link">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex flex-row items-center gap-2">
          <div className="flex items-stretch gap-2">
            <Link
              href={pathname}
              // locale={locale === "en" ? "bn" : "en"}
              className="flex rounded-md border-[1px] border-light-gray px-6 md:px-8 py-1.5  text-sm font-medium transition items-center gap-1 hover:bg-slate-100"
            >
              <Image
                width={18}
                height={30}
                src="/icons/language.svg"
                alt="language"
              />
              <p>En</p>
            </Link>
            <div className="flex rounded-md border-[1px] border-light-gray px-6 md:px-8 text-sm font-medium transition items-center gap-1 hover:bg-slate-100">
              <Image
                width={18}
                height={30}
                src="/icons/profile.svg"
                alt="language"
              />
              <p>Jarif</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
