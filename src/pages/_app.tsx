import { type AppType } from "next/app";
import { type Session } from "next-auth";
import "prism-themes/themes/prism-one-dark.min.css";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <Analytics />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
