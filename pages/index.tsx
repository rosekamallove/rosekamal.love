import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Image from "next/image";
import { generateRssFeed } from "../lib/rss";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    words: number;
    og_description: string;
  }[]; // Array of objects
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta
          property="og:image"
          content="https://rosekamal.love/images/profile.jpg"
        />
      </Head>

      {/* User Bio Section */}
      <section className="flex flex-col my-10 pl-2">
        <div className="flex flex-col-reverse md:flex-row gap-5">
          <div className="w-full md:max-w-8/12">
            <h1 className="text-2xl md:text-4xl text-[#374151] dark:text-white mb-6 font-black">
              Hi, I am Rose Kamal Love
            </h1>
            <p className="text-xl">
              A friendly ambivert who loves writing software, with a crave to
              create music and yeah I take photos too.
            </p>
          </div>
          <div>
            <Image
              priority
              src="/images/profile.jpg"
              height={144}
              width={144}
              className="rounded-full"
              alt={"rosekamallove"}
            />
          </div>
        </div>
        <Link href="/about">
          <a className="cursor-pointer my-3 md:mb-3 hover:underline underline-offset-4 text-base font-medium transition-all">
            More about me →
          </a>
        </Link>
      </section>

      {/* Blogs Section */}
      <section>
        {/* <h2 className="text-3xl text-[#111827] dark:text-white font-semibold"> */}
        {/*   Happy reading ✨ */}
        {/* </h2> */}
        <ul className="flex flex-col my-5">
          {allPostsData.map(({ id, og_description, words, date, title }) => (
            <Link key={id} href={`/posts/${id}`}>
              <li className="border-b-[1px] border-gray-300 hover:bg-gray-300 dark:hover:bg-gray-800 dark:border-gray-800 cursor-pointer px-2 py-5 transition-all">
                <a className="text-2xl font-bold text-[#374151] m-0 dark:text-white">
                  {title}
                </a>
                <p className="text-sm font-light">
                  <Date dateString={date} /> •{" "}
                  <b>{Math.floor(words / 255)} minutes read</b>
                </p>
                <p className="text-lg mt-6">{og_description}</p>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  await generateRssFeed();
  return {
    props: {
      allPostsData,
    },
  };
};
