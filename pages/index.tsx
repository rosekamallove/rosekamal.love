import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
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
          A friendly ambivert, trying to make a life out of code who also happens to love taking photos</p>
        <p>Happy Reading ✨</p>
      </section>



      {/* Connect Section */}
      <section>
        <a
          href="https://www.youtube.com/channel/UCIcZjoMa7k1w63XlP1qGbQQ"
          target="_blank"
        >
          <IoLogoYoutube className="IOLOGO" />
        </a>
        <a href="https://twitter.com/RoseKamalLove1/" target="_blank">
          <IoLogoTwitter className="IOLOGO" />
        </a>
        <a href="https://instagram.com/rosekamallove" target="_blank">
          <IoLogoInstagram className="IOLOGO" />
        </a>
      </section>

      {/* Blogs Section */}
      <section >
        <h2 >Blogs</h2>
        <ul >
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small >
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
