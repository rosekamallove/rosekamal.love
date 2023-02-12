import "../styles/global.css";
import "prism-themes/themes/prism-one-dark.min.css";

import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />;
      </ThemeProvider>
      <Analytics />
    </>
  );
}
