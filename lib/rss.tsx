import fs from "fs";
import postData from "../interfaces/postData";
import { getSortedPostsData } from "./posts";
import { Feed } from "feed";

export const generateRssFeed = async (): Promise<void> => {
  if (process.env.NODE_EVN === "development") return;

  const posts = getSortedPostsData();
  const siteURL = "https://rosekamal.love/";
  const date = new Date();

  const author = {
    name: "Rose Kamal Love",
    email: "rosekamallove@gmail.com",
    link: "https://twitter.com/RoseKamalLove1",
  };

  const feed = new Feed({
    title: "RoseK's Blog",
    description:
      "Blgo posts about internships, Web Development, Open Source, Productivity and more",
    id: siteURL,
    link: siteURL,
    favicon: `${siteURL}/images/logo-dark.png`,
    copyright: `All rights reserved ${date.getFullYear()}, Rose Kamal Love`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });

  posts.forEach((post: postData) => {
    const url = `${siteURL}/blogs/${post.id}`;

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: post.description,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
};
