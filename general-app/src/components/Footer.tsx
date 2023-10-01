import { useTranslation } from "next-i18next";
import Contact, { openContact } from "./Contact";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="px-4 pt-40 pb-10 mx-auto md:pb-20 max-w">
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Image
              width={112}
              height={30}
              className="max-w-[112px] w-full"
              src="/images/coursebeeLogo.svg"
              alt="Coursebee"
            />
            <p className="py-3 text-dark-gray">
              {t("Copyright")} ©COURSEBEE 2023
            </p>
            <div className="flex justify-start p-1 gap-7 md:pt-12">
              <a
                href=""
                className="block transition rounded hover:bg-bright-orange"
              >
                <Image
                  width={24}
                  height={26}
                  className="hover:invert"
                  src="/icons/messengerIcon.svg"
                  alt="Messenger"
                />
              </a>
              <a
                href=""
                className="block transition rounded hover:bg-bright-orange"
              >
                <Image
                  width={24}
                  height={26}
                  className="hover:invert"
                  src="/icons/facebookIcon.svg"
                  alt="Messenger"
                />
              </a>
              <a
                href=""
                className="block transition rounded hover:bg-bright-orange"
              >
                <Image
                  width={24}
                  height={26}
                  className="hover:invert"
                  src="/icons/whatsappIcon.svg"
                  alt="Messenger"
                />
              </a>
              <a
                href=""
                className="block transition rounded hover:bg-bright-orange"
              >
                <Image
                  width={24}
                  height={26}
                  className="hover:invert"
                  src="/icons/instagramIcon.svg"
                  alt="Messenger"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold leading-8 pb-7">
              {t("Quick Links")}
            </h3>
            <div className="grid justify-between grid-cols-2">
              <Link href="/home" className="footer-link">
                {t("Home")}
              </Link>
              <Link href="/coming-soon" className="footer-link">
                {t("Android")}
              </Link>
              <Link href="/coming-soon" className="footer-link">
                {t("Courses")}
              </Link>
              <Link href="/coming-soon" className="footer-link">
                {t("iOS")}
              </Link>
              <Link href="/about" className="footer-link">
                {t("About")}
              </Link>
              <Link href="/coming-soon" className="footer-link">
                {t("Login")}
              </Link>
              <a
                type="button"
                onClick={openContact}
                className="cursor-pointer footer-link"
              >
                {t("Contact")}
              </a>
              <Link href="/coming-soon" className="footer-link">
                {t("Sign Up")}
              </Link>
              <Link href="/coming-soon" className="footer-link">
                {t("Job Board")}
              </Link>
              <Link href="/coming-soon" className="footer-link">
                {t("For Business")}
              </Link>
              <Link href="/coming-soon" className="footer-link">
                {t("Privacy Policy")}
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold leading-8 pb-7">
              {t("Contact us")}
            </h3>
            <div>
              <div className="flex items-start gap-4">
                <Image
                  width={18}
                  height={18}
                  className="mt-[3px] hover:invert"
                  src="/icons/email.svg"
                  alt="Email"
                />

                <p className="pb-4 font-medium leading-6 text-dark-gray">
                  info@coursebee.com
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  width={18}
                  height={18}
                  className="mt-[3px] hover:invert"
                  src="/icons/contact.svg"
                  alt="Contact"
                />

                <p className="pb-4 font-medium leading-6 text-dark-gray">
                  m.me/@coursebee
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  width={18}
                  height={18}
                  className="mt-[3px] hover:invert"
                  src="/icons/phone.svg"
                  alt="Phone"
                />
                <p className="pb-4 font-medium leading-6 text-dark-gray">
                  +880 1833 186 666
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Contact />
    </>
  );
}

export default Footer;
