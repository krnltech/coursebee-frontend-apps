import Image from "next/image";

export default function Instructor() {
  return (
    <div className="w-full md:w-2/5 shadow-primary border p-7 rounded-md text-black-v1">
      <p
        className="text-sm font-medium text-dark-gray"
        data-animate="text"
        data-delay="1"
      >
        Instructor
      </p>
      <div className="flex gap-3 items-center mt-4">
        <Image
          width={20}
          height={20}
          data-animate="text"
          data-delay="1.2"
          src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          className="w-12 h-12 rounded-full border-2 border-white"
          alt="Avatar"
        />
        <div data-animate="text" data-delay="1.4">
          <p className="text-lg font-medium">Ifaz Ahmed Aflan</p>
          <p>UX Designer at Williams LTD.</p>
        </div>
      </div>
      <div data-animate="text" data-delay="1.6">
        <p className="text-sm font-medium text-dark-gray mb-1 mt-7">
          Experiences
        </p>
        <p>
          UI Designer at Axiata LTD.
          <span className="text-dark-gray ml-2">2021</span>
        </p>
      </div>
      <div className="flex gap-4 mt-7">
        <Image
          width={20}
          height={20}
          data-animate="text"
          data-delay="1.8"
          src="/icons/Social Media Icon Square/linkedin.svg"
          alt="linkedin"
          className="h-5 w-5"
        />
        <Image
          width={20}
          height={20}
          data-animate="text"
          data-delay="2"
          src="/icons/Social Media Icon Square/instagram.svg"
          alt="instagram"
          className="h-5 w-5"
        />
        <Image
          width={20}
          height={20}
          data-animate="text"
          data-delay="2.2"
          src="/icons/Social Media Icon Square/twitter.svg"
          alt="twitter"
          className="h-5 w-5"
        />
      </div>
    </div>
  );
}
