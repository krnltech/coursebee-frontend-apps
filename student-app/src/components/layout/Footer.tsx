import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="px-4 pt-40 pb-10 md:pb-20 max-w">
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Image
              width={112}
              height={30}
              className="max-w-[112px] w-full"
              src="/images/coursebeeLogo.svg"
              alt="Coursebee"
            />
            <p className="py-3 text-dark-gray">Copyright ©COURSEBEE 2023</p>
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
            <h3 className="text-xl font-bold leading-8 pb-7">Quick Links</h3>
            <div className="grid justify-between grid-cols-2">
              <Link href="/home" className="footer-link">
                Home
              </Link>
              <Link href="/coming-soon" className="footer-link">
                Android
              </Link>
              <Link href="/coming-soon" className="footer-link">
                Courses
              </Link>
              <Link href="/coming-soon" className="footer-link">
                iOS
              </Link>
              <Link href="/about" className="footer-link">
                About
              </Link>
              <Link href="/coming-soon" className="footer-link">
                Login
              </Link>
              <a type="button" className="cursor-pointer footer-link">
                Contact
              </a>
              <Link href="/coming-soon" className="footer-link">
                Sign Up
              </Link>
              <Link href="/coming-soon" className="footer-link">
                Job Board
              </Link>
              <Link href="/coming-soon" className="footer-link">
                For business
              </Link>
              <Link href="/coming-soon" className="footer-link">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold leading-8 pb-7">Contact us</h3>
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
                  src="/icons/phone-icon.svg"
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
    </>
  );
}

export default Footer;
