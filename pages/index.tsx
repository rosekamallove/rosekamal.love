import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { RxCaretRight } from "react-icons/rx";
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
        <meta
          property="og:image"
          content="https://rosekamal.love/images/profile.jpg"
        />
      </Head>

      {/* User Bio Section */}
      <section className="my-10 flex flex-col pl-2">
        <div className="flex flex-col-reverse gap-5 md:flex-row">
          <div className="md:max-w-8/12 w-full">
            <h1 className="mb-6 text-2xl font-black text-[#111827] dark:text-white md:text-4xl lg:text-5xl">
              Hi, I am Rose Kamal Love
            </h1>
            <p className="text-xl lg:text-2xl">
              {" "}
              A friendly ambivert who loves writing software, trying to make a
              difference through{" "}
              <a
                href="https://youtube.com/@rosekamallove"
                className="my-3 cursor-pointer underline-offset-4 hover:underline md:mb-3"
              >
                YouTube
              </a>{" "}
              and{" "}
              <a
                href="https://discord.com/invite/e5SnnVP3ad"
                className="my-3 cursor-pointer underline-offset-4 hover:underline md:mb-3"
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
          <a className="my-3 flex cursor-pointer items-center font-medium underline-offset-4 transition-all hover:underline">
            More about me <RxCaretRight />
          </a>
        </Link>
      </section>

      {/* Blogs Section */}
      <section>
        {/* <h2 className="text-3xl text-[#111827] dark:text-white font-semibold"> */}
        {/*   Happy reading ✨ */}
        {/* </h2> */}
        <ul className="my-5 flex flex-col">
          {allPostsData.map((post) => {
            if (post.featured)
              return <BlogListItem key={post.id} post={post} />;
          })}
          <Link href="/blog">
            <a href="/blog" className="my-5 mx-2 flex cursor-pointer items-center font-medium underline-offset-4 transition-all hover:underline">
              Read all blogs <RxCaretRight />
            </a>
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
