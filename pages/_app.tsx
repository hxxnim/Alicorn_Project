import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import SocketsProvider from "../core/context/socket.context";
import wrapper from "../core/store/configureStore";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SocketsProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>메시지 | 로켓펀치 - 비지니스 네트워크</title>
      </Head>
      <Component {...pageProps} />
    </SocketsProvider>
  );
};

export default wrapper.withRedux(App);
