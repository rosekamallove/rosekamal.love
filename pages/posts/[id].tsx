import Layout from "../../components/layout";
import Head from "next/head";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
    og_description: string;
    description: string;
    id: string;
    words: number;
    cover_image: any;
  };
}) {
  const url = `https://rosekamal.love/blogs/${postData.id}`;

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description}></meta>
        <meta property="og:title" content={postData.title}></meta>
        <meta property="og:url" content={url}></meta>
        <meta
          property="og:description"
          content={postData.og_description}
        ></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:image" content={postData.cover_image}></meta>
      </Head>

      {/* <ReadingProgress /> */}
      <article className="prose prose-a:underline-offset-4 prose-a:decoration-1 hover:prose-a:decoration-2 prose-blockquote:border-l-gray-300 dark:prose-blockquote:border-l-gray-800 dark:prose-invert transition-all">
        <h1 className="font-black">{postData.title}</h1>
        <div>
          <Date dateString={postData.date} /> •{" "}
          <b>{Math.floor(postData.words / 255)} minutes read</b>
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
