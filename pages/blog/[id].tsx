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
    tags: string;
    words: number;
    cover_image: any;
  };
}) {
  const url = `https://rosekamal.love/blog/${postData.id}`;

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
      <article className="prose relative mx-auto overflow-hidden transition-all prose-a:decoration-1 prose-a:underline-offset-4 hover:prose-a:decoration-2 prose-blockquote:border-l-gray-300 dark:prose-invert dark:prose-blockquote:border-l-gray-800 dark:prose-pre:bg-gray-900 md:prose-xl xl:prose-2xl">
        <SVGBackground />
        <div className="flex min-h-[40vh] flex-col justify-center  md:min-h-[60vh]">
          <h1 className="z-10 font-black">{postData.title}</h1>
          <div className="z-10">
            <Date dateString={postData.date} /> •{" "}
            <b>{Math.floor(postData.words / 255)} minutes read</b>
          </div>
          <div className="my-2 flex gap-2">
            {postData.tags.split(",").map((t) => (
              <span className="z-10 cursor-pointer rounded-md bg-gray-200/70 px-3 py-1 text-sm md:text-base transition-all hover:dark:bg-gray-800/100 hover:bg-gray-200/100 dark:bg-gray-800/70 ">
                {t}
              </span>
            ))}
          </div>
          {/* <p>{postData.description}</p> */}
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

export const SVGBackground = () => (
  <div className="relative mx-auto h-full max-w-sm translate-y-60 md:max-w-lg">
    <svg
      className="absolute right-full hidden translate-x-1/4 transform md:block lg:translate-x-1/2"
      width={404}
      height={784}
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern
          id="f210dbf6-a58d-4871-961e-36d5016a0f49"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className={`text-gray-200/70 dark:text-gray-900/70`}
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={284}
        fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
      />
    </svg>
    <svg
      className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
      width={404}
      height={784}
      fill="none"
      viewBox="0 0 404 784"
    >
      <defs>
        <pattern
          id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className={`text-gray-200/70 dark:text-gray-900/70`}
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={584}
        fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
      />
    </svg>
  </div>
);
