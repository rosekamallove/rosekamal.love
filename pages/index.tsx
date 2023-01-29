import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

import Image from 'next/image'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[]; // Array of objects
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* User Bio Section */}
      <section className="flex flex-col my-10">
        <div className="flex flex-col-reverse md:flex-row gap-5 ">
          <div className="w-full md:max-w-8/12">
            <h1 className="text-2xl md:text-3xl text-[#111827] dark:text-white mb-2 font-bold">
              Hi, I am Rose Kamal Love
            </h1>
            <p className="text-xl">
              A friendly ambivert who loves writing software, with a crave to create
              music and yeah I take photos too.
            </p>
          </div>
          <div>
            <Image
              priority
              src="/images/profile.jpg"
              height={144}
              width={144}
              className="rounded-full"
              alt={'rosekamallove'}
            />
          </div>
        </div>
        {/* Connect Section */}
        <section className="flex text-xl my-5 gap-4">
          <a
            href="https://youtube.com/@rosekamallove"
            rel="noreferrer"
            target="_blank"
          >
            <IoLogoYoutube />
          </a>
          <a href="https://instagram.com/rosekamallove" rel="noreferrer" target="_blank">
            <IoLogoInstagram />
          </a>
          <a href="https://twitter.com/RoseKamalLove1/" rel="noreferrer" target="_blank">
            <IoLogoTwitter />
          </a>
          <a href="https://github.com/rosekamallove" rel="noreferrer" target="_blank">
            <IoLogoGithub />
          </a>
        </section>
      </section>


      {/* Blogs Section */}
      <section>
        <h2 className="text-3xl text-[#111827] dark:text-white font-semibold">Happy reading ✨</h2>
        <ul className="flex flex-col my-5">
          {allPostsData.map(({ id, date, title }) => (
            <Link key={id} href={`/posts/${id}`} >
              <li className="border-b-[1px] hover:bg-gray-100 dark:hover:bg-gray-900 dark:border-gray-900 cursor-pointer px-1 py-2 transition-all">
                <a className="text-lg text-[#111827] dark:text-white  font-medium">{title}</a>
                <br />
                <small>
                  <Date dateString={date} />
                </small>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </Layout >
  );
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
