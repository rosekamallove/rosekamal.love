import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoGlobeOutline,
  IoLogoTwitter,
} from "react-icons/io5";

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
      <section>
        <p>
          Hi, I am Rose Kamal Love
          <a href="https://rosekamallove.vercel.app" target="_blank">
            {" "}
            (<IoGlobeOutline className="IOLOGO1" />
            Website)
          </a>{" "}
          a friendly ambivert who loves writing software, with a crave to create
          music and yeah I take photos too.
        </p>
      </section>

      {/* Connect Section */}
      <section>
        <a
          href="https://www.linkedin.com/in/rose-kamal-love-1146141b0/"
          target="_blank"
        >
          <IoLogoLinkedin className="IOLOGO" />
        </a>
        <a href="https://github.com/rosekamallove" target="_blank">
          <IoLogoGithub className="IOLOGO" />
        </a>
        <a href="https://twitter.com/RoseKamalLove1/" target="_blank">
          <IoLogoTwitter className="IOLOGO" />
        </a>
        <a href="https://instagram.com/rosekamallove" target="_blank">
          <IoLogoInstagram className="IOLOGO" />
        </a>
      </section>

      {/* Blogs Section */}
      <section>
        <h2>Blogs</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
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
