import { Head } from 'vite-react-ssg';
import { SITE, absoluteUrl } from '../config/site';

export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/favicon.svg'),
    description: SITE.description,
    email: SITE.email,
    telephone: '+573013184491',
    founder: { '@type': 'Person', name: SITE.legalName },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.countryCode,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+573013184491',
      email: SITE.email,
      availableLanguage: 'es',
    },
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
