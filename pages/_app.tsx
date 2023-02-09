import "../styles/global.css";
import "prism-themes/themes/prism-one-dark.min.css";

import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <Analytics />
    </>
  );
}
