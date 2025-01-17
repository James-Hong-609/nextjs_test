import Head from 'next/head';
import config from 'config';
import { useRouter } from 'next/dist/client/router';

const SEO: React.FC<Props> = ({ title, description, keywords }) => {
  const router = useRouter();

  return (
    <Head>
      {/* <!-- General Meta-Tags & SEO--> */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={config.meta.siteOwnerName} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content={config.meta.themeColor} />
      <link rel="canonical" href={`${config.meta.canonicalRootUrl}${router.asPath}`} />
      <meta name="msvalidate.01" content={config.meta.bingValidationId} />

      {/* <!-- Social Media Stuff / Sharing --> */}
      {/* <!-- Open Graph (Facebook) --> */}
      <meta property="og:url" content={`${config.meta.canonicalRootUrl}${router.asPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={config.meta.socialShareImgUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={config.meta.defaultTitle} />
      <meta property="article:author" content={config.meta.siteOwnerName} />

      {/* <!-- Twitter Cards --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={`${config.meta.canonicalRootUrl}${router.asPath}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content={config.meta.twitterHandle} />
      <meta name="twitter:creator" content={config.meta.twitterHandle} />
      <meta name="twitter:description" content={description} />
      <meta property="og:image" content={config.meta.socialShareImgUrl} />
    </Head>
  );
};

SEO.defaultProps = {
  title: config.meta.defaultTitle,
  description: config.meta.defaultDescription,
  keywords: config.meta.defaultKeywords,
};

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
}

export default SEO;
