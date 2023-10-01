/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/router";

function NewsletterSection() {
  const { locale } = useRouter();
  const { t } = useTranslation();

  return (
    <section className="mx-auto overflow-hidden border mt-28 md:mt-44 max-w rounded-2xl">
      <div className="pl-16 mx-auto overflow-x-hidden bg_circle max-w">
        <div className="grid items-center justify-center py-10 md:grid-cols-2 md:py-20">
          <div>
            <div className="flex items-center gap-6 pb-7">
              <img
                data-animate="text"
                className="max-w-[64px] md:max-w-[76px] w-full"
                src="/icons/message.svg"
                alt="Message Icon"
              />
              <div>
                <h2
                  className="font-bold md:text-lg"
                  data-animate="text"
                  data-delay="0.3"
                >
                  {t("newsletter.heading")}
                </h2>
                <p
                  className="pt-2 text-dark-gray"
                  data-animate="text"
                  data-delay="0.6"
                >
                  {locale === "en" ? (
                    <>
                      Join the
                      <span className="font-bold text-bright-orange">
                        {" "}
                        15,000+{" "}
                      </span>
                      students and become part of us.
                    </>
                  ) : (
                    <>
                      যোগ দিন
                      <span className="font-bold text-bright-orange">
                        {" "}
                        15,000+{" "}
                      </span>
                      ছাত্রদের সাথে এবং আমাদের অংশ হয়ে উঠুন।
                    </>
                  )}
                </p>
              </div>
            </div>
            <div
              className="flex items-center max-w-md px-2 py-1 border rounded-md border-light-gray"
              data-animate="text"
              data-delay="0.9"
            >
              <input
                className="w-full p-4 border-none rounded-md outline-none"
                type="email"
                placeholder="IamCourseBee@coursebee.com"
              />
              <button className="w-14 h-12 bg-bright-orange rounded-[5px] shadow transition text-white flex justify-center items-center hover:bg-white hover:text-bright-orange">
                <IoIosArrowForward size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
