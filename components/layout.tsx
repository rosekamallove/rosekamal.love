import Head from "next/head";
import Link from "next/link";

export const siteTitle = "Blogs - Rose Kamal Love";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="dark:text-[#D1D5DA] text-[#374151] w-full mx-2 md:mx-auto md:w-6/12 my-10">
      <Head>
        <title>Rose Kamal Love</title>
        <meta property="og:title" content={'About - Rose Kamal Love'} />
        <meta
          property="og:image"
          content="https://rosekamal.love/images/profile.jpg"
        />
        <meta
          property="og:description"
          content="A friendly ambivert who loves writing code, with a craving to create music. I take photos too"
        />
        <meta name="description" content="@rosekamallove on the web" />
        <meta name="author" content="Rose Kamal Love" />
        <meta name="twitter:title" content="Rose Kamal Love" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RoseKamalLove1" />
        <meta name="twitter:creator" content="@RoseKamalLove1" />
        <meta property="og:site_name" content="Rose Kamal Love" />
        <meta name="og:title" content="Rose Kamal Love" />
        <meta property="og:type" content="website" />
      </Head>
      <header className="flex mt-10 justify-center">
        {home ? (
          <>
          </>
        ) : (
          ''
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
