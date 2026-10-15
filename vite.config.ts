import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const PAGES = ['/', '/privacidad', '/terminos', '/pagos-y-reembolsos'];

const normalizeUrl = (value: string) => value.replace(/\/+$/, '');

// Emitted at build time so the sitemap and robots.txt always match SITE_URL.
function seoFiles(siteUrl: string): Plugin {
  return {
    name: 'nexora-seo-files',
    apply: 'build',
    generateBundle() {
      const urls = PAGES.map((path) => `  <url><loc>${siteUrl}${path === '/' ? '/' : path}</loc></url>`);
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = normalizeUrl(process.env.SITE_URL ?? env.SITE_URL ?? 'http://localhost:5173');

  return {
    plugins: [react(), seoFiles(siteUrl)],
    define: {
      __SITE_URL__: JSON.stringify(siteUrl),
      __META_DOMAIN_VERIFICATION__: JSON.stringify(
        (process.env.META_DOMAIN_VERIFICATION ?? env.META_DOMAIN_VERIFICATION ?? '').trim(),
      ),
    },
    ssgOptions: { dirStyle: 'nested', formatting: 'none' },
  };
});
