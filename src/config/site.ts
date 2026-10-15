export const SITE = {
  name: 'Nexora',
  legalName: 'Camilo Andrés Sánchez Sandoval',
  url: __SITE_URL__,
  email: 'nexoraequipo@gmail.com',
  phoneDisplay: '+57 301 318 4491',
  whatsappHref: `https://wa.me/573013184491?text=${encodeURIComponent('Hola, quiero información sobre los servicios de Nexora')}`,
  address: {
    street: 'Calle 7 # 3-119 Sur',
    city: 'Facatativá',
    region: 'Cundinamarca',
    country: 'Colombia',
    countryCode: 'CO',
  },
  tagline: 'Software, PWA y automatización con IA para negocios',
  description:
    'Nexora es un estudio de desarrollo de software en Facatativá, Colombia: páginas web y PWA, sistemas de gestión a la medida y automatización con IA y WhatsApp.',
} as const;

export const absoluteUrl = (path: string) => `${SITE.url}${path === '/' ? '/' : path}`;
