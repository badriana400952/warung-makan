import clsx from "clsx";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={clsx("min-h-screen bg-background font-sans antialiased")}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
