import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { RxCaretRight } from 'react-icons/rx'
import Image from "next/image";
import { generateRssFeed } from "../lib/rss";
import { BlogListItem } from "../components/blog-list-item";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    words: number;
    og_description: string;
    featured: boolean;
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
            <h1 className="text-2xl md:text-4xl text-[#111827] dark:text-white mb-6 font-black">
              Hi, I am Rose Kamal Love
            </h1>
            <p className="text-xl">
              A friendly ambivert who loves writing software, trying to make a
              difference through{" "}
              <a
                href="https://youtube.com/@rosekamallove"
                className="cursor-pointer my-3 md:mb-3 hover:underline underline-offset-4"
              >
                YouTube
              </a>{" "}
              and{" "}
              <a
                href="https://discord.com/invite/e5SnnVP3ad"
                className="cursor-pointer my-3 md:mb-3 hover:underline underline-offset-4"
              >
                Kroto
              </a>
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
          <a className="cursor-pointer my-3 flex items-center hover:underline underline-offset-4 font-medium transition-all">
            More about me <RxCaretRight />
          </a>
        </Link>
      </section>

      {/* Blogs Section */}
      <section>
        {/* <h2 className="text-3xl text-[#111827] dark:text-white font-semibold"> */}
        {/*   Happy reading ✨ */}
        {/* </h2> */}
        <ul className="flex flex-col my-5">
          {allPostsData.map((post) => {
            if (post.featured)
              return <BlogListItem key={post.id} post={post} />;
          })}
          <Link href="/blog">
            <li className="cursor-pointer my-5 mx-2 flex items-center hover:underline underline-offset-4 font-medium transition-all">
              Read all blogs <RxCaretRight />
            </li>
          </Link>
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
