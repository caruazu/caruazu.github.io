import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

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
        <meta name="author" content="caruazu" />
        <link rel="canonical" href="https://www.caruazu.com/" />

        {/* --- Open Graph para redes sociais --- */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gustavo Caruazu" />
        <meta
          property="og:description"
          content="Portifólio e contato de Gustavo Caruazu."
        />
        <meta property="og:url" content="https://www.caruazu.com/" />
        <meta
          property="og:image"
          content="https://www.caruazu.com/profile.webp"
        />
        <meta
          property="og:logo"
          content="https://www.caruazu.com/web-app.png"
        />

        {/* --- Dados estruturados (JSON-LD) --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gustavo Caruazu",
              url: "https://www.caruazu.com/",
              sameAs: [
                "https://github.com/caruazu",
                "https://www.linkedin.com/in/caruazu",
                "https://www.instagram.com/caruazu/",
                "https://wa.me/message/Y7VNNQW6QXP2K1/",
              ],
              jobTitle: "Desenvolvedor Full-Stack",
              worksFor: {
                "@type": "Organization",
                name: "Freelancer",
              },
            }),
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
