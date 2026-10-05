import { Head } from 'vite-react-ssg';
import { SITE, absoluteUrl } from '../config/site';

interface SeoProps {
  title: string;
  description: string;
  path: string;
}

const OG_IMAGE = '/og-image.png';

export function Seo({ title, description, path }: SeoProps) {
  const url = absoluteUrl(path);
  const image = absoluteUrl(OG_IMAGE);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      {__META_DOMAIN_VERIFICATION__ && (
        <meta name="facebook-domain-verification" content={__META_DOMAIN_VERIFICATION__} />
      )}
    </Head>
  );
}
