import { BlogListItem } from "../../components/blog-list-item";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../../lib/posts";

export default function Blog({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
    tags: string;
    words: number;
    og_description: string;
  }[]; // Array of objects
}) {
  return (
    <Layout title="Blog | Rose Kamal Love">
      <section className="px-0">
        <h1 className="text-5xl font-bold">Blog</h1>
        <p className="my-2">
          The home to my thoughts and revelations, happy reading ✨
        </p>
      </section>
      <section>
        <ul className="my-5 flex flex-col">
          {allPostsData.map((post) => (
            <BlogListItem key={post.id} post={post} />
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
