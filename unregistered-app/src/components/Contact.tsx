import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function openContact() {
    const openEvent = new Event("show-contact");
    window.dispatchEvent(openEvent);
}

export function closeContact() {
    const closeEvent = new Event("hide-contact");
    window.dispatchEvent(closeEvent);
}

function Contact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('show-contact', () => setShow(true));
    window.addEventListener('hide-contact', () => setShow(false));
    return () => {
        window.removeEventListener('show-contact', () => setShow(true));
        window.removeEventListener('hide-contact', () => setShow(false));
    }
  }, [])
  
  return (
    <div className={`${show ? "opacity-1 z-50" : "opacity-0 -z-50"} fixed top-0 left-0 right-0 bottom-0 max-w-full min-h-full transition-all duration-1000 overflow-auto`}>
    <div className="grid justify-center items-start relative overflow-auto p-8">
      <div className="bg-white rounded-lg p-4 z-[2]">
        <div>
          <Image
            width={24}
            height={24}
            className="w-full mx-auto max-w-xs"
            src="/images/contact.svg"
            alt="Contact us"
          />
          <h2 className="text-center text-ncolor-800 font-semibold text-xl md:text-2xl mt-6">
            Contact us
          </h2>
          <div className="grid justify-center items-center gap-6 md:grid-cols-2 pt-10">
            <div className="shadow rounded-lg px-9 py-5 text-center">
              <p className="flex gap-1 justify-center items-center">
                <Image
                  width={24}
                  height={24}
                  src="/icons/email.svg"
                  alt="Email icon"
                />
                <span className="text-sm">Email</span>
              </p>
              <p className="pt-2 font-semibold">
                info@coursebee.com
              </p>
            </div>

            <div className="shadow rounded-lg px-8 py-4">
              <p className="flex gap-1 justify-center items-center">
                <Image
                  width={24}
                  height={24}
                  src="/icons/chatIcon.svg"
                  alt="Message icon"
                />
                <span className="text-sm">Message</span>
              </p>
              <p className="pt-2 font-semibold">m.me/@coursebee</p>
            </div>
            <div className="shadow rounded-lg px-8 py-4">
              <p className="flex gap-1 justify-center items-center">
                <Image
                  width={24}
                  height={24}
                  src="/icons/phone.svg"
                  alt="Phone icon"
                />
                <span className="text-sm">Phone</span>
              </p>
              <p className="pt-2 font-semibold">+880 1833 186 666</p>
            </div>
            <div className="shadow rounded-lg px-8 py-4">
              <p className="flex gap-1 justify-center items-center">
                <Image
                  width={24}
                  height={24}
                  src="/icons/facebookIcon.svg"
                  alt="Facebook icon"
                />
                <span className="text-sm">facebook</span>
              </p>
              <p className="pt-2 font-semibold">
                fb.com/coursebee.live
              </p>
            </div>
          </div>

          <div className="flex gap-6 justify-center items-center pt-10">
            <button>
              <Image
                width={24}
                height={24}
                src="/icons/Social Media Icon Square/twitter.svg"
                alt="Twitter"
              />
            </button>
            <button>
              <Image
                width={24}
                height={24}
                src="/icons/Social Media Icon Square/instagram.svg"
                alt="Instagram"
              />
            </button>
            <button>
              <Image
                width={24}
                height={24}
                src="/icons/Social Media Icon Square/youtube.svg"
                alt="Youtube"
              />
            </button>
            <button>
              <Image
                width={24}
                height={24}
                src="/icons/Social Media Icon Square/linkedin.svg"
                alt="LinkedIn"
              />
            </button>
          </div>

          <div className="pt-10 pb-5">
            <button onClick={closeContact} className="btn text-lg px-6 py-3 md:py-3 md:px-12 mx-auto">
              Close
            </button>
          </div>
        </div>
      </div>
      <div onClick={closeContact} className="bg-black bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 w-screen max-w-full z-[1]"></div>
    </div>
    </div>
  );
}

export default Contact;
