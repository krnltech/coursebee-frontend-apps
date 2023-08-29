import Image from "next/image"
import Link from "next/link"

function NotFound() {
  return (
    <section className="bg-404 mt-20 grid place-content-center min-h-screen h-full">
        <div className="px-2 pb-4 text-center max-w">
            <Image width={538} height={219} className="max-w-xl mx-auto w-full pb-4" src="/images/404.svg" alt="404 not found" />
            <p className="text-ncolor-600 md:text-2xl pb-2">Page not found</p>
            <p className="text-xl md:text-6xl text-ncolor-800 font-medium max-w-[842px] mx-auto">We can’t seem to find the
                page you’re looking for.</p>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 pt-16">
                <button className="px-12 py-6 text-lg font-bold btn">Explore Courses</button>
                <Link type="button" className="px-12 py-6 text-lg btn-white" href="/"> Back to Home </Link>
            </div>
        </div>
    </section>
  )
}

export default NotFound