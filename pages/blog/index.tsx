import { BlogListItem } from "../../components/blog-list-item";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";

export default function Blog({
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
    <Layout>
      <section className="px-2">
        <h1 className="text-6xl font-black">Blogs</h1>
        <p className="my-2">
          The home to my thoughts and revelations, happy reading ✨
        </p>
      </section>
      <section>
        {/* <h2 className="text-3xl text-[#111827] dark:text-white font-semibold"> */}
        {/*   Happy reading ✨ */}
        {/* </h2> */}
        <ul className="flex flex-col my-5">
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
