import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Blogs - Rose Kamal Love";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="dark:text-[#D1D5DA] text-[#374151] w-11/12 mx-auto md:w-6/12 mb-10">
      {/* <Navbar /> */}
      <Head>
        <title>Rose Kamal Love</title>
        <meta property="og:title" content={"About - Rose Kamal Love"} />
        <meta
          property="og:description"
          content="A friendly ambivert who loves writing code, with a craving to create music. I take photos too"
        />
        <meta name="description" content="@rosekamallove on the web" />
        <meta name="author" content="Rose Kamal Love" />
        <meta name="twitter:title" content="Rose Kamal Love" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RoseKamalLove1" />
        <meta name="twitter:creator" content="@RoseKamalLove1" />
        <meta property="og:site_name" content="Rose Kamal Love" />
        <meta name="og:title" content="Rose Kamal Love" />
        <meta property="og:type" content="website" />
      </Head>
      <header className="flex mt-10 justify-center">{home ? <></> : ""}</header>
      <main>{children}</main>

      {!home && (
        <div>
          <Link href="/">
            <a className="cursor-pointer hover:underline underline-offset-4 text-base font-medium transition-all">
              ← Back to home
            </a>
          </Link>
        </div>
      )}

      <Footer />
    </div>
  );
}

export function Footer() {
  return (
    <div className="mt-20 text-sm flex justify-between items-center bg-gray-300 bg-opacity-30 hover:bg-opacity-75 px-5 py-3 border-b-[1px] border-b-gray-300 dark:border-gray-800 dark:bg-gray-800 dark:bg-opacity-30 dark:hover:bg-opacity-90 transition-all">
      <ConnectionSection />
      <Link href="/rss/feed.xml">
        <a className="text-base hidden md:block underline-offset-4 hover:underline">
          rss
        </a>
      </Link>
    </div>
  );
}

export function ConnectionSection() {
  return (
    <section className="flex text-sm items-center my-5 gap-4">
      <Link href="/about">
        <a className="underline-offset-4 hover:underline">/about</a>
      </Link>
      <Link href="/resume">
        <a className="underline-offset-4 hover:underline">/resume</a>
      </Link>
      <a
        href="https://youtube.com/@rosekamallove"
        className="underline-offset-4 hover:underline"
        rel="noreferrer"
        target="_blank"
      >
        /youtube
      </a>
      <a
        href="https://twitter.com/RoseKamalLove1/"
        className="underline-offset-4 hover:underline"
        rel="noreferrer"
        target="_blank"
      >
        /twitter
      </a>
    </section>
  );
}
