import Link from "next/link";
import Date from "./date";

export const BlogListItem = ({
  post,
}: {
  post: {
    id: string;
    title: string;
    words: number;
    date: string;
    tags: string;
    og_description: string;
  };
}) => (
  <Link key={post.id} href={`/blog/${post.id}`}>
    <li className="my-2 cursor-pointer border-gray-300 bg-gray-200/20 p-5 transition-all hover:bg-gray-200/50 active:scale-[.99] dark:border-gray-800 dark:bg-gray-900/30 dark:hover:bg-gray-900/50">
      <a href={`/blog/${post.id}`} className="text-2xl font-bold md:text-3xl">
        {post.title}
      </a>
      <div className="text-base font-normal md:text-base">
        <Date dateString={post.date} /> •{" "}
        <b className="font-medium">
          {Math.floor(post.words / 255)} minutes read
        </b>
      </div>
      <p className="mt-6 text-lg md:text-xl">{post.og_description}</p>
    </li>
  </Link>
);
