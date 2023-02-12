import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { RxArrowDown, RxArrowRight, RxCaretRight } from "react-icons/rx";
import Image from "next/image";
import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
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
    tags: string;
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
      <section className="flex flex-col pl-2">
        <div className="flex flex-col-reverse gap-5 md:flex-row">
          <div className="md:max-w-8/12 w-full">
            <h1 className="mb-6 text-4xl font-black dark:text-white md:text-5xl">
              Rose Kamal Love
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
        {/* <Link href="/about"> */}
        {/*   <p className="my-5 flex cursor-pointer items-center gap-1 px-1 font-medium"> */}
        {/*    More about me <RxArrowRight /> */}
        {/*   </p> */}
        {/* </Link> */}
      </section>

      <section className="my-5 flex gap-5 text-2xl">
        {socials.map((s) => (
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={s.link}
            key={s.link}
          >
            <span className="cursor-pointer active:scale-[0.95] rounded-md px-3 py-2 dark:hover:bg-neutral-800/80">
              {s.icon}
            </span>
          </Link>
        ))}
      </section>

      {/* Blogs Section */}
      <section>
        <h2 className="mt-14 px-1 text-3xl font-bold dark:text-white">
          Featured Posts
        </h2>
        <ul className="mb-5 flex flex-col">
          {allPostsData.map((post) => {
            if (post.featured)
              return <BlogListItem key={post.id} post={post} />;
          })}
          <Link href="/blog">
            <p className="my-5 flex cursor-pointer items-center gap-1 px-1 font-medium">
              Read More <RxArrowRight />
            </p>
          </Link>
        </ul>
      </section>
    </Layout>
  );
}

const socials = [
  {
    link: "https://instagram.com/rosekamallove",
    icon: <IoLogoYoutube />,
  },
  {
    link: "https://instagram.com/rosekamallove",
    icon: <IoLogoInstagram />,
  },
  {
    link: "https://instagram.com/rosekamallove",
    icon: <IoLogoTwitter />,
  },
];

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  await generateRssFeed();
  return {
    props: {
      allPostsData,
    },
  };
};
