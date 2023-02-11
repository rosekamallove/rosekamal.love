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
    <li className="cursor-pointer rounded-md border-b-[1px] border-gray-300/40 px-2 py-5 transition-all hover:bg-gray-200/50 active:scale-[.99] dark:border-gray-900/60 dark:hover:bg-neutral-900/50">
      <p className="text-2xl font-bold md:text-3xl">{post.title}</p>
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
