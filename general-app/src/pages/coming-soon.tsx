import { GetStaticProps } from "next";
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Comingsoon() {
  return (
    <>
        <Head>
          <title>Coming soon</title>
        </Head>
        <section className="max-w mx-auto px-4 pt-36 md:pt-32 flex items-center justify-center py-10 text-slate-900">
        <div>
            <div className="pb-10">
                <Image width={448} height={300} className="w-full max-w-md mx-auto" src="/images/coming_soon.svg" alt="Coming soon"/>
            </div>
            <h1 className="text-3xl md:text-5xl text-center text-slate-900 font-semibold pb-10"> Coming soon </h1>
            <p className="max-w-xl text-center pb-16">Stay tuned for our upcoming launch and be the first to access a
                diverse catalog of courses, collaborate with a vibrant learning community, and embark on a
                transformative learning journey with CourseBee.</p>
            <Link href="/" type="button" className="mx-auto block">
                <button className="px-10 py-4 text-lg font-bold btn mx-auto"><span> Go to Homepage </span></button>
            </Link>
        </div>
    </section>
    </>
  )
}


export const getStaticProps:GetStaticProps = async ({ locale }) => {
  if (process.env.NODE_ENV === "development") {
    await i18n?.reloadResources();
  }

  return { props: {
    ...(await serverSideTranslations(locale || "en", ['common', '404',]))
  }
  }
}
