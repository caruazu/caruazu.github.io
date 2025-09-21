import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import { schemaJSONLD } from "@/lib/data";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gustavo Caruazu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Portifólio e contato de Gustavo Caruazu."
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content={`${schemaJSONLD.alternateName}`} />
        <link rel="canonical" href={`${schemaJSONLD.url}`} />

        {/* --- Open Graph para redes sociais --- */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${schemaJSONLD.name}`} />
        <meta
          property="og:description"
          content="Portifólio e contato de Gustavo Caruazu."
        />
        <meta property="og:url" content={`${schemaJSONLD.url}`} />
        <meta property="og:image" content={`${schemaJSONLD.image}`} />
        <meta property="og:logo" content={`${schemaJSONLD.url}/web-app.png`} />

        {/* --- Dados estruturados (JSON-LD) --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaJSONLD),
          }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* --- Scripts do Google Analytics (fora do Head) --- */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
}
