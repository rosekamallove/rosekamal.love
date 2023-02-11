import Head from "next/head";
import Link from "next/link";
import { RxCaretLeft } from "react-icons/rx";

export default function Layout({
  children,
  home,
  blog,
  title,
}: {
  children: React.ReactNode;
  home?: boolean;
  blog?: boolean;
  title?: string;
}) {
  return (
    <div className="text-[#374151] dark:text-[#D1D5DA]">
      {!blog && <Navbar />}
      <div className="relative mx-auto my-0 min-h-full w-full rounded-md border border-gray-300 bg-gray-200 p-5 shadow dark:border-neutral-900 dark:bg-black dark:shadow-black/60  sm:w-11/12 md:w-10/12 md:px-5 lg:w-8/12">
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
        <header className="mt-10 flex justify-center">
          {home ? <></> : ""}
        </header>
        <main>{children}</main>

        {!home && (
          <div>
            <Link href="/">
              <p className="absolute left-0 top-3 ml-3 flex cursor-pointer items-center rounded-full bg-gray-200/60 p-2 shadow backdrop-blur-sm transition-all hover:scale-105 hover:bg-gray-200/100 hover:text-black focus:scale-100 dark:bg-neutral-900/70 dark:hover:bg-neutral-900/100 dark:hover:text-white md:top-5 md:-ml-4">
                <RxCaretLeft />
              </p>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export function Footer() {
  return (
    <div className="mx-auto my-0 mt-10 rounded-md border border-gray-300 bg-gray-200 px-5 py-3 shadow dark:border-neutral-900 dark:bg-black dark:shadow-black/60 sm:w-11/12 md:w-10/12 md:px-5 lg:w-8/12">
      <ConnectionSection />
    </div>
  );
}

export function Navbar() {
  return (
    <div className="mx-auto my-0 mt-5 mb-10 rounded-md border border-gray-300 bg-gray-200 px-5 py-3 shadow dark:border-neutral-900 dark:bg-black dark:shadow-black/60 sm:w-11/12 md:w-10/12 md:px-5 lg:w-8/12">
      <div className="flex gap-5">
        <Link href="/">
          <p className="cursor-pointer rounded-md px-3 transition-all hover:bg-gray-200/50 active:scale-[.99] dark:border-neutral-800/60 dark:hover:bg-neutral-900/50">
            Home
          </p>
        </Link>
        <Link href="/about">
          <p className="cursor-pointer rounded-md px-3 transition-all hover:bg-gray-200/50 active:scale-[.99] dark:border-neutral-800/60 dark:hover:bg-neutral-900/50">
            About
          </p>
        </Link>
        <Link href="/resume">
          <p className="cursor-pointer rounded-md px-3 transition-all hover:bg-gray-200/50 active:scale-[.99] dark:border-neutral-800/60 dark:hover:bg-neutral-900/50">
            Resume
          </p>
        </Link>
      </div>
    </div>
  );
}

export function ConnectionSection() {
  return (
    <section className="my-5 flex justify-between gap-8">
      <div className="flex flex-col gap-2">
        <Link href="/">
          <p className="underline-offset-4 hover:underline">Home</p>
        </Link>
        <Link href="/about">
          <p className="underline-offset-4 hover:underline">About</p>
        </Link>
        <Link href="/resume">
          <p className="underline-offset-4 hover:underline">Resume</p>
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
          <p className="underline-offset-4 hover:underline">RSS Feed</p>
        </Link>
      </div>
    </section>
  );
}
