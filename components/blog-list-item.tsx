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
    <li className="border-b-[1px] border-gray-300 hover:bg-gray-300/30 dark:hover:bg-gray-800/30 dark:border-gray-800 cursor-pointer px-2 py-5 transition-all">
      <a className="text-2xl font-bold">{post.title}</a>
      <p className="text-sm font-light">
        <Date dateString={post.date} /> •{" "}
        <b>{Math.floor(post.words / 255)} minutes read</b>
      </p>
      <p className="text-lg mt-6">{post.og_description}</p>
    </li>
  </Link>
);
