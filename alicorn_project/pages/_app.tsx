import type { AppProps } from "next/app";
import Head from "next/head";
import wrapper from "../core/store/configureStore";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>메시지 | 로켓펀치 - 비지니스 네트워크</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(App);
