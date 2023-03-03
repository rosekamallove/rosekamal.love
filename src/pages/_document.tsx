import { useTheme } from "next-themes";
import { Head, Html, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {

  const { setTheme } = useTheme();
  useEffect(() => setTheme("dark"), []);

  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
        />
      </Head>
      <body className="flex h-full flex-col bg-gray-200 bg-[url('/grid-dark.svg')]  dark:bg-black dark:bg-[url('/grid.svg')]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
