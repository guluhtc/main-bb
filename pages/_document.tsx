import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    let description = "Generate your dream room in seconds.";
    let ogimage = "https://www.decorai.xyz/og-image.png";
    let sitename = "DecorAI.xyz";
    let title = "Dream Room Generator";

    return (
      <Html lang="en">
        <Head>
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3KWCED0960"></script>
        <script src='https://cdn.paritydeals.com/banner.js'></script>
        <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/ee39f4cc-1e51-4514-85f0-ba34c1956d5e/webchat/config.js" defer></script>
     
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={description} />
          <meta property="og:site_name" content={sitename} />
          <meta property="og:description" content={description} />
          <meta property="og:title" content={title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta property="og:image" content={ogimage} />
          <meta name="twitter:image" content={ogimage} />
        </Head>
        <body className="bg-[#17181C] text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
