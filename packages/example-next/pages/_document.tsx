import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="terra-wallet" />
 
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Terra Wallet Card" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
