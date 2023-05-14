import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

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
      <div className="relative mx-auto my-0 min-h-full max-w-4xl rounded-md border border-gray-300 bg-gray-200 px-2 dark:border-neutral-900 dark:bg-black dark:shadow-black/60 md:px-5">
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

        {/* {!home && ( */}
        {/*   <div> */}
        {/*     <Link href="/"> */}
        {/*       <p className="absolute left-0 top-3 ml-3 flex cursor-pointer items-center rounded-full bg-gray-200/60 p-2 shadow backdrop-blur-sm transition-all hover:scale-105 hover:bg-gray-200/100 hover:text-black focus:scale-100 dark:bg-neutral-900/70 dark:hover:bg-neutral-900/100 dark:hover:text-white md:top-5 md:-ml-4"> */}
        {/*         <RxCaretLeft /> */}
        {/*       </p> */}
        {/*     </Link> */}
        {/*   </div> */}
        {/* )} */}
      </div>
      <Footer />
    </div>
  );
}

export function Footer() {
  return (
    <div className="mx-auto my-5 max-w-4xl rounded-md border border-gray-300 bg-gray-200 px-5 py-1 dark:border-neutral-900 dark:bg-black dark:shadow-black/60 md:px-5">
      <ConnectionSection />
    </div>
  );
}

export function Navbar() {
  const router = useRouter();
  const navbar = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/blog",
      title: "Blog",
    },
    {
      href: "/guestbook",
      title: "Guestbook",
    },
  ];
  return (
    <div className="mx-auto my-5 max-w-4xl rounded-md border border-gray-300 bg-gray-200 px-5 py-3 dark:border-neutral-900 dark:bg-black dark:shadow-black/60  md:px-5">
      <div className="flex justify-between">
        <div className="flex gap-1">
          {navbar.map((n) => (
            <Link key={n.href} href={n.href}>
              <span
                className={`${
                  router.asPath === n.href ? "font-bold" : ""
                } flex cursor-pointer items-center rounded-md px-3 py-1 transition-all hover:bg-gray-300/50 active:scale-[.95] dark:border-neutral-800/60 dark:hover:bg-neutral-800/60`}
              >
                {n.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex">
          <Link href="/resume">
            <span
              className={`${
                router.asPath === "/resume" ? "font-black" : ""
              } hidden cursor-pointer rounded-md px-3 py-1 transition-all hover:bg-gray-300/50 active:scale-[.95] dark:border-neutral-800/60 dark:hover:bg-neutral-800/60 md:block`}
            >
              Resume
            </span>
          </Link>
          {/* <button */}
          {/*   onClick={() => setTheme(theme === "dark" ? "light" : "dark")} */}
          {/*   className="cursor-pointer rounded-md px-3 transition-all hover:bg-gray-300/50 active:scale-[.99] dark:border-neutral-800/60 dark:hover:bg-neutral-800/60" */}
          {/* > */}
          {/*   {theme === "dark" ? <FaRegLightbulb /> : <MdOutlineDarkMode />} */}
          {/* </button> */}
        </div>
      </div>
    </div>
  );
}

export function ConnectionSection() {
  return (
    <section className="my-5 flex justify-between gap-8">
      <div className="flex flex-col gap-2">
        <Link href="/">
          <p className="cursor-pointer underline-offset-4 hover:underline">
            Home
          </p>
        </Link>
        <Link href="/about">
          <p className="cursor-pointer underline-offset-4 hover:underline">
            About
          </p>
        </Link>
        <Link href="/resume">
          <p className="cursor-pointer underline-offset-4 hover:underline">
            Resume
          </p>
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
        <a
          href="https://www.linkedin.com/in/rose-kamal-love-1146141b0/"
          className="underline-offset-4 hover:underline"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <Link href="/guestbook">
          <p className="underline-offset-4 hover:underline">Guestbook</p>
        </Link>
      </div>
    </section>
  );
}
