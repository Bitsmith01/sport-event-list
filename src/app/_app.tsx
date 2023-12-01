// pages/_app.js
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import '../app/page.module.css'

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
