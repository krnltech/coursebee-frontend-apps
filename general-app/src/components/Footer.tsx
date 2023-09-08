import { useTranslation } from "next-i18next";
import Contact, { openContact } from "./Contact";
import Image from 'next/image'
import Link from "next/link";

function Footer() {
    const {t} = useTranslation();
  return (
    <>
    <footer className="md:pb-20 pt-40 pb-10 max-w mx-auto px-4">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 w-full">
            <div>
                <Image width={112} height={30} className="max-w-[112px] w-full" src="/images/coursebeeLogo.svg" alt="Coursebee" />
                <p className="text-dark-gray py-3">{t("Copyright")} ©COURSEBEE 2023</p>
                <div className="flex justify-start gap-7 p-1 md:pt-12">
                    <a href="" className="block hover:bg-bright-orange transition rounded"><Image width={24} height={26} className="hover:invert"
                            src="/icons/messengerIcon.svg" alt="Messenger" /></a>
                    <a href="" className="block hover:bg-bright-orange transition rounded"><Image width={24} height={26} className="hover:invert"
                            src="/icons/facebookIcon.svg" alt="Messenger" /></a>
                    <a href="" className="block hover:bg-bright-orange transition rounded"><Image width={24} height={26} className="hover:invert"
                            src="/icons/whatsappIcon.svg" alt="Messenger" /></a>
                    <a href="" className="block hover:bg-bright-orange transition rounded"><Image width={24} height={26} className="hover:invert"
                            src="/icons/instagramIcon.svg" alt="Messenger" /></a>
                </div>
            </div>

            <div>
                <h3 className="font-bold text-xl leading-8 pb-7">{t("Quick Links")}</h3>
                <div className="grid grid-cols-2 justify-between">
                    <Link href="/home" className="footer-link">{t("Home")}</Link>
                    <Link href="/coming-soon" className="footer-link">{t("Android")}</Link>
                    <Link href="/coming-soon" className="footer-link">{t("Courses")}</Link>
                    <Link href="/coming-soon" className="footer-link">{t("iOS")}</Link>
                    <Link href="/about" className="footer-link">{t("About")}</Link>
                    <Link href="/coming-soon" className="footer-link">{t("Login")}</Link>
                    <a type="button" onClick={openContact} className="footer-link cursor-pointer">{t("Contact")}</a>
                    <Link href="/coming-soon" className="footer-link">{t("Sign Up")}</Link>
                    <Link href="/coming-soon" className="footer-link">{t("Job Board")}</Link>
                    <Link href="/coming-soon" className="footer-link">{t("For Business")}</Link>
                    <Link href="/coming-soon" className="footer-link">{t("Privacy Policy")}</Link>
                </div>
            </div>

            <div>
                <h3 className="font-bold text-xl leading-8 pb-7">{t("Contact us")}</h3>
                <div>
                    <div className="flex gap-4 items-start">
                        <img className="max-w-[18px]" src="/icons/email.svg" alt="Email" />
                        <p className="text-dark-gray font-medium leading-6 pb-4">
                            info@coursebee.com
                        </p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <img className="max-w-[18px]" src="/icons/contact.svg" alt="Contact" />
                        <p className="text-dark-gray font-medium leading-6 pb-4">
                            m.me/@coursebee
                        </p>
                    </div>
                    <div className="flex gap-4 items-start">
                        <img className="max-w-[18px]" src="/icons/phone.svg" alt="Phone" />
                        <p className="text-dark-gray font-medium leading-6 pb-4">
                            +880 1833 186 666
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <Contact />
    </>
  )
}

export default Footer