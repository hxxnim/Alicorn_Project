import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
interface IProps {
  styleTags: Array<React.ReactElement<{}>>;
}
export default class MyDocument extends Document<IProps> {
  static async getInitialProps({ renderPage }: { renderPage: any }) {
    const sheet = new ServerStyleSheet();
    const page = await renderPage(
      (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <Html lang="kr">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/image/favicon.ico" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
