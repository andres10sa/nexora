# Nexora — sitio web

Sitio de Nexora (nombre comercial de Camilo Andrés Sánchez Sandoval). React + TypeScript + Vite, prerenderizado a HTML estático con `vite-react-ssg`. Páginas: `/`, `/privacidad`, `/terminos`. Sin cookies ni analítica.

## Requisitos

Node 20.19 o superior (`.nvmrc` incluido: `nvm use`).

```bash
npm install
```

## Previsualizar

- Desarrollo con recarga: `npm run dev`
- Versión final (compila y sirve `dist/`): `npm start` → http://localhost:4173

## Configurar SITE_URL

`SITE_URL` define canónicos, Open Graph, JSON-LD, `sitemap.xml` y `robots.txt`.

1. Copia `.env.example` a `.env` y escribe tu dominio sin barra final: `SITE_URL=https://tudominio.com`
2. En Cloudflare Pages define la misma variable (ver abajo).
3. Vuelve a compilar: `npm run build`.

## Desplegar en Cloudflare Pages

Opción A — con Git (recomendada):

1. Sube el repositorio a GitHub/GitLab.
2. Cloudflare → Workers & Pages → Create → Pages → Connect to Git.
3. Configuración de build:
   - Framework preset: ninguno
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Variables de entorno: `NODE_VERSION=20` y `SITE_URL=https://tudominio.com`
4. Guardar y desplegar.

Opción B — subida directa: ejecuta `npm run build` y sube la carpeta `dist/` desde Pages → Upload assets.

## Conectar el dominio

1. En el proyecto de Pages: Custom domains → Set up a custom domain → escribe el dominio.
2. Si el dominio ya está en Cloudflare, el DNS se crea solo (registro CNAME hacia `<proyecto>.pages.dev`).
3. Si el dominio está en otro registrador: añade el sitio a Cloudflare (Add a site) y cambia los nameservers en el registrador por los que Cloudflare indique. Luego repite el paso 1.
4. Para el dominio raíz y `www`: añade ambos en Custom domains y crea una regla de redirección (Rules → Redirect Rules) de uno hacia el otro.
5. SSL/TLS en modo Full o Full (strict). Espera a que el certificado quede activo.
6. Cambia `SITE_URL` al dominio final y vuelve a desplegar.

## Pendientes antes de publicar

- Los textos de `/privacidad` y `/terminos` (`src/content/legal.ts`) deben ser revisados por un abogado en Colombia.
- Definir `SITE_URL` real; el valor de ejemplo `https://nexora.example` no sirve para producción.
- No hay cédula ni NIT publicados; añadir el NIT solo si decides hacerlo.
