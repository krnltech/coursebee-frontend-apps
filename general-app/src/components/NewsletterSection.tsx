/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";
import {IoIosArrowForward} from 'react-icons/io';
import {useRouter} from 'next/router';


function NewsletterSection() {
  const { locale } = useRouter();
  const { t } = useTranslation();

  return (
    <section className="pt-28 md:pt-44 max-w mx-auto px-4">
      <div className="bg_circle p-4 mx-auto max-w overflow-x-hidden">
        <div className="grid md:grid-cols-2 justify-center items-center md:py-20 py-10">
          <div>
            <div className="flex gap-6 items-center pb-7">
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
                  className="text-dark-gray pt-2"
                  data-animate="text"
                  data-delay="0.6"
                >
                  {
                    locale === 'en' ? (
                      <>
                        Join the
                        <span className="text-bright-orange font-bold"> 15,000+ </span>
                        students and become part of us.
                      </>
                    )
                    : (
                      <>
                        যোগ দিন 
                        <span className="text-bright-orange font-bold"> 15,000+ </span>
                        ছাত্রদের সাথে এবং আমাদের অংশ হয়ে উঠুন।
                      </>
                    )
                  }
                </p>
              </div>
            </div>
            <div
              className="border border-light-gray rounded-md px-2 py-1 flex items-center max-w-md"
              data-animate="text"
              data-delay="0.9"
            >
              <input
                className="rounded-md outline-none border-none p-4 w-full"
                type="email"
                placeholder="IamCourseBee@coursebee.com"
              />
              <button className="w-14 h-12 bg-bright-orange rounded-[5px] shadow transition text-white flex justify-center items-center hover:bg-white hover:text-bright-orange">
                <IoIosArrowForward size={30}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
