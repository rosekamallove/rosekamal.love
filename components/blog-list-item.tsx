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
    og_description: string;
  };
}) => (
  <Link key={post.id} href={`/blog/${post.id}`}>
    <li className="cursor-pointer border-b-[1px] border-gray-300 px-2 py-5 transition-all hover:bg-gray-300/30 dark:border-gray-800 dark:hover:bg-gray-800/30">
      <a href={`/blog/${post.id}`} className="text-2xl md:text-3xl font-bold">
        {post.title}
      </a>
      <p className="text-sm md:text-base font-light">
        <Date dateString={post.date} /> •{" "}
        <b>{Math.floor(post.words / 255)} minutes read</b>
      </p>
      <p className="mt-6 text-lg md:text-xl">{post.og_description}</p>
    </li>
  </Link>
);
