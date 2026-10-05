# Nexora — sitio web

Sitio de Nexora (nombre comercial de Camilo Andrés Sánchez Sandoval). React + TypeScript + Vite, prerenderizado a HTML estático con `vite-react-ssg`. Páginas: `/`, `/privacidad`, `/terminos`. Sin cookies ni analítica.

Requisitos: Node 20.19 o superior (`.nvmrc`: `nvm use`) y `npm install`.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Desarrollo con recarga |
| `npm start` | Compila y sirve `dist/` en http://localhost:4173 |
| `npm run build` | Compila y genera `dist/` |
| `npm run deploy` | Compila y publica en Cloudflare Pages (ver más abajo) |

## Variables (`.env`, copia de `.env.example`; no se sube a git)

- `SITE_URL`: dominio público sin barra final (`https://tudominio.com`). Define canónicos, Open Graph, JSON-LD, `sitemap.xml` y `robots.txt`.
- `META_DOMAIN_VERIFICATION`: opcional. Valor del atributo `content` de la metaetiqueta de Meta. Si está vacía, no se genera la etiqueta.

Tras cambiar cualquiera, ejecuta `npm run build`.

## Seguridad

- No subas este proyecto a un repositorio público.
- Nunca guardes claves ni tokens en el código. `.env` está en `.gitignore`. Wrangler guarda su sesión fuera del proyecto (`npx wrangler login`).

## Despliegue en Cloudflare Pages (subida directa, sin repositorio)

Configuración del proyecto: comando de compilación `npm run build`, carpeta de salida `dist`, Node 20 (lo fija `.nvmrc`; en Pages también puedes definir `NODE_VERSION=20`). `wrangler.toml` ya lo declara.

Pasos:

1. (Tú) Crea cuenta en Cloudflare (gratis).
2. (Tú) En la terminal: `npx wrangler login` y acepta en el navegador.
3. (Tú) Una sola vez: `npx wrangler pages project create nexora --production-branch main`.
4. (Tú) Pon el dominio real en `SITE_URL` dentro de `.env`.
5. `npm run deploy`. El script se niega a publicar si `SITE_URL` es el de ejemplo o localhost.

Antes de tener dominio puedes probar con la URL `nexora.pages.dev`, pero entonces `SITE_URL` debe ser esa URL.

## Plan completo: dominio, DNS, Pages y correo

Datos verificados en la documentación oficial de Cloudflare y Hostinger en octubre de 2026. Los menús cambian con frecuencia: si un nombre no coincide, busca el equivalente.

### 1. Comprar el dominio en Hostinger (solo el dominio)

1. Entra a hostinger.com → **Domains** → busca el nombre y confirma que sale disponible.
2. Añade al carrito solo el dominio. Rechaza hosting, correo, constructor de sitios u otros extras que ofrezca.
3. Revisa que la protección de privacidad WHOIS quede incluida (suele ser gratis) y desactiva la renovación automática solo si prefieres renovar a mano.
4. Paga. (No pude confirmar en la documentación de Hostinger el orden exacto de estas pantallas; sigue lo que muestre el carrito y rechaza todo lo que no sea el dominio.)

### 2. Pasar el DNS a Cloudflare

1. Cloudflare → **Onboard a domain** → escribe el dominio → plan **Free**.
2. Revisa los registros DNS que detecte. Debe quedar vacío o solo lo que necesites.
3. Cloudflare muestra dos nameservers (por ejemplo `xxx.ns.cloudflare.com`). Cópialos exactos.
4. Hostinger → **DNS** (barra lateral) → tu dominio → pestaña **DNS / Nameservers** → **Change Nameservers** → **Change nameservers** → pega los dos de Cloudflare → **Save**. Si tienes DNSSEC activo en Hostinger, desactívalo antes.
5. Espera de unos minutos a 24 horas. Comprueba con `dig ns tudominio.com @1.1.1.1`. Cloudflare avisa por correo cuando el dominio queda activo.

### 3. Conectar el dominio a Pages

1. Cloudflare → **Workers & Pages** → proyecto `nexora` → **Custom domains** → **Set up a domain**.
2. Escribe `tudominio.com` (el raíz exige que el DNS esté en Cloudflare, paso 2) y confirma. Cloudflare crea el CNAME solo.
3. Repite con `www.tudominio.com` y crea una redirección de `www` al dominio raíz en **Rules → Redirect Rules**.
4. Completa este paso en el panel antes de tocar registros DNS a mano.
5. En **SSL/TLS** deja el modo **Full**.

### 4. Correo del dominio con reenvío hacia camand10sa@gmail.com

1. Cloudflare → tu dominio → **Compute → Email Service → Email Routing** → **Onboard Domain** → selecciona el dominio y acepta los registros MX, SPF y DKIM que añade → **Done**.
2. **Destination Addresses** → escribe `camand10sa@gmail.com` → abre el correo de verificación de Cloudflare → **Verify email address**.
3. **Routing Rules** → **Create routing rule** → patrón `contacto` (o `hola`) → acción **Send to an email** → destino tu Gmail → **Save**.
4. Prueba enviando un correo desde otra cuenta; revisa spam.
5. Esto solo reenvía. Para responder desde `contacto@tudominio.com` hace falta un servicio de envío adicional (SMTP) que no está incluido.
6. Cuando funcione, cambia el correo del sitio en `src/config/site.ts` (`SITE.email`) y vuelve a desplegar.

### 5. Verificación de dominio de Meta

Meta Business Suite → **Configuración** → **Seguridad de la marca** → **Dominios** → **Agregar** → escribe el dominio. Elige uno de estos métodos:

- **Metaetiqueta (ya preparada):** copia solo el valor de `content` de la etiqueta que muestra Meta, ponlo en `META_DOMAIN_VERIFICATION` en `.env`, ejecuta `npm run deploy` y pulsa **Verificar** en Meta.
- **Registro TXT:** Cloudflare → tu dominio → **DNS → Records → Add record** → Tipo `TXT`, Nombre `@`, Contenido `facebook-domain-verification=CODIGO` (tal cual, sin comillas ni espacios) → **Save**. Espera unos minutos y pulsa **Verificar** en Meta.

### 6. Quién hace qué

- **Tú:** compra del dominio, cuenta de Cloudflare, `wrangler login`, cambio de nameservers, registros y reglas en paneles, verificación en Meta.
- **Claude (cuando le des el dominio):** actualizar `SITE_URL`, regenerar el sitio, comprobar canónicos, sitemap, Open Graph y JSON-LD, y desplegar solo cuando lo pidas.

## Pendientes antes de publicar

- Revisión de `/privacidad` y `/terminos` (`src/content/legal.ts`) por un abogado en Colombia.
- `SITE_URL` real.
