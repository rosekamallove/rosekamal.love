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
    <div className="relative mx-auto w-full border-x border-x-gray-300 bg-gray-100 p-5 px-3 text-[#374151] dark:border-x-gray-800 dark:bg-black dark:text-[#D1D5DA] sm:w-11/12 md:w-10/12 md:px-5 lg:w-8/12">
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
      <header className="mt-10 flex justify-center">{home ? <></> : ""}</header>
      <main>{children}</main>

      {!home && (
        <div>
          <Link href="/">
            <a className="absolute left-0 top-3 ml-3 flex cursor-pointer items-center rounded-full bg-gray-200/60 p-2 shadow backdrop-blur-sm transition-all hover:scale-105 hover:bg-gray-200/100 hover:text-black focus:scale-100 dark:bg-gray-900/70 dark:hover:bg-gray-900/100 dark:hover:text-white md:top-5 md:-ml-4">
              <RxCaretLeft />
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
    <div className="mt-20 border-t border-t-gray-300 px-5 py-3 dark:border-t-gray-900">
      <ConnectionSection />
    </div>
  );
}

export function ConnectionSection() {
  return (
    <section className="my-5 flex justify-between gap-8 text-base">
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
