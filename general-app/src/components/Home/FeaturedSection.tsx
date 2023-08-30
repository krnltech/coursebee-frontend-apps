export default function FeaturedSection() {
    return (
        <section className="max-w mx-auto px-4 pt-10 md:pt-20 pb-20 md:pb-28">
            <div className="flex w-full flex-col md:flex-row gap-10 md:gap-0">
                <div className="w-full md:w-2/5 space-y-2 pr-4">
                    <h2 className="text-2xl font-semibold" data-animate="text">
                        It’s only a step away.
                    </h2>
                    <p className="text-xs" data-animate="text" data-delay="0.2">
                        Join to change your life
                    </p>
                    <p
                        className="text-sm text-dark-gray"
                        data-animate="text"
                        data-delay="0.4"
                    >
                        Trusted by millions of learners worldwide, CourseBee is a leading
                        platform committed to delivering high-quality education and
                        empowering individuals. With a wide range of courses for beginners
                        and experienced professionals, we cater to your learning needs.
                    </p>
                </div>
                <div
                    className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:pl-16"
                >
                    <div>
                        <div className="flex items-start gap-4">
                            <img
                                src="/icons/people.svg"
                                alt="people" className="w-5 h-5 mt-1" data-animate="text" data-delay="0.4"
                            />

                            <div>
                                <h2 className="text-lg font-bold" data-animate="text" data-delay="0.6"
                                >
                                    Trusted by millions
                                </h2>

                                <p className="mt-1 text-sm text-dark-gray" data-animate="text" data-delay="0.7"
                                >
                                    Trusted by millions, CourseBee is the go-to platform for
                                    high-quality education.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-start gap-4">
                            <img className="w-5 h-5 mt-1" data-animate="text" src="/icons/certificate.svg" alt="people" data-delay="0.7"
                            />

                            <div>
                                <h2 className="text-lg font-bold" data-animate="text" data-delay="0.8"
                                >
                                    Certificate awarded
                                </h2>
                                <p className="mt-1 text-sm text-dark-gray" data-animate="text" data-delay="0.9"
                                >
                                    Certificates awarded to recognize your achievements. Boost your professional profile with CourseBee.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-start gap-4">
                            <img src="/icons/chat.svg" alt="people" className="w-5 h-5 mt-1" data-animate="text" data-delay="0.9"
                            />
                            <div>
                                <h2 className="text-lg font-bold" data-animate="text" data-delay="1">
                                    Chat Online
                                </h2>
                                <p className="mt-1 text-sm text-dark-gray" data-animate="text" data-delay="1.1"
                                >
                                    Chat online for instant support and guidance. Connect with CourseBee experts anywhere, anytime.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-start gap-4">
                            <img
                                src="/icons/check.svg" alt="people" className="w-5 h-5 mt-1" data-animate="text" data-delay="1.1"
                            />

                            <div>
                                <h2 className="text-lg font-bold" data-animate="text" data-delay="1.2"
                                >
                                    Made by professionals
                                </h2>

                                <p className="mt-1 text-sm text-dark-gray" data-animate="text" data-delay="1.3"
                                >
                                    Expertly crafted by professionals in the field. Learn from the
                                    best with CourseBee.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-start gap-4">
                            <img
                                src="/icons/download.svg"
                                alt="people" className="w-5 h-5 mt-1" data-animate="text" data-delay="1.3"
                            />
                            <div>
                                <h2 className="text-lg font-bold" data-animate="text" data-delay="1.4"
                                >
                                    Available Offline
                                </h2>

                                <p className="mt-1 text-sm text-dark-gray" data-animate="text" data-delay="1.5"
                                >
                                    Access courses offline, anytime. Learn on-the-go with
                                    CourseBee.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-start gap-4">
                            <img
                                src="/icons/video.svg"
                                alt="people" className="w-5 h-5 mt-1" data-animate="text" data-delay="1.6"
                            />
                            <div>
                                <h2 className="text-lg font-bold" data-animate="text" data-delay="1.7"
                                >
                                    600+ hours of classes
                                </h2>

                                <p className="mt-1 text-sm text-dark-gray" data-animate="text" data-delay="1.8"
                                >
                                    Unlock over 600 hours of immersive classes. Dive deep into
                                    learning with CourseBee.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

