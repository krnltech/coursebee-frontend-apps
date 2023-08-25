function SocialMediaSection() {
  return (
    <section className="pt-28 md:pt-44 max-w mx-auto px-4 overflow-x-hidden">
    <div className="grid md:grid-cols-2 items-center gap-8 md:gap-32">
      <div className="overflow-hidden relative">
        <img
          data-animate="clip-rect"
          className="max-w-xl w-full mx-auto"
          src="/images/follow_us_social_media_illustration.svg"
          alt="follow_us_social_media_illustration"
        />
      </div>
      <div data-animate="text" data-delay="1" className="text-center">
        <h2 className="font-semibold text-[32px] leading-10 text-bright-orange">
          Follow us on social media
        </h2>
        <p
          data-animate="text"
          data-delay="1.5"
          className="pt-2 text-dark-gray text-lg"
        >
          Connect with us on social media Follow us for updates, inspiration
          and valuable resources. Join the online community and be part of the
          discussion.
        </p>
        <div
          className="pt-14 flex items-center justify-center gap-8 md:gap-16 px-4 mx-auto flex-wrap"
        >
          <button data-animate="text" data-delay="2">
            <img src="/icons/facebook.svg" alt="Facebook" />
          </button>
          <button data-animate="text" data-delay="2.2">
            <img src="/icons/google.svg" alt="Google" />
          </button>
          <button data-animate="text" data-delay="2.4">
            <img src="/icons/youtube.svg" alt="Youtube" />
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SocialMediaSection