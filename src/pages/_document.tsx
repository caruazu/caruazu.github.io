import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link
          rel="icon"
          href="/bug.png"
          type="image"
          media="(prefers-color-scheme: light)"
        />

        <link
          rel="icon"
          href="/bug-dark.png"
          type="image"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
