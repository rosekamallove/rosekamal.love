import Head from "next/head";
import Link from "next/link";
import { RxCaretLeft } from "react-icons/rx";

export default function Layout({
  children,
  home,
  title,
}: {
  children: React.ReactNode;
  home?: boolean;
  title?: string;
}) {
  return (
    <div className="dark:text-[#D1D5DA] p-5 border-x border-x-gray-300 dark:border-x-gray-800 bg-gray-100 dark:bg-black text-[#374151] w-full mx-auto md:w-8/12">
      {/* <Navbar /> */}
      <Head>
        <title>{title ?? "Rose Kamal Love"}</title>
        <meta property="og:title" content={title ?? "Rose Kamal Love"} />
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
            <a className="cursor-pointer flex items-center hover:underline underline-offset-4 my-5 font-medium transition-all">
              <RxCaretLeft /> Back to home
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
    <div className="mt-20 px-5 py-3 border-t border-t-gray-300 dark:border-t-gray-900">
      <ConnectionSection />
    </div>
  );
}

export function ConnectionSection() {
  return (
    <section className="flex justify-between gap-8 text-base my-5">
      <div className="flex flex-col gap-2">
        <Link href="/">
          <a className="underline-offset-4 hover:underline">Home</a>
        </Link>
        <Link href="/about">
          <a className="underline-offset-4 hover:underline">About</a>
        </Link>
        <Link href="/resume">
          <a className="underline-offset-4 hover:underline">Resume</a>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <a
          href="https://youtube.com/@rosekamallove"
          className="underline-offset-4 hover:underline"
          rel="noreferrer"
          target="_blank"
        >
          YouTube
        </a>
        <a
          href="https://twitter.com/RoseKamalLove1/"
          className="underline-offset-4 hover:underline"
          rel="noreferrer"
          target="_blank"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com/rosekamallove/"
          className="underline-offset-4 hover:underline"
          rel="noreferrer"
          target="_blank"
        >
          Instagram
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <a
          href="https://github.com/rosekamallove/"
          className="underline-offset-4 hover:underline"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <Link href="/rss/feed.xml">
          <a className="underline-offset-4 hover:underline">RSS Feed</a>
        </Link>
      </div>
    </section>
  );
}
