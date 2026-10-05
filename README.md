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

### 1. Registrar el dominio en Cloudflare Registrar (al costo)

Precio: Cloudflare cobra sin margen el precio del registro más la tarifa de ICANN. Su documentación no publica la cifra de un .com; fuentes de terceros indican unos 10,46 USD/año (10,26 de Verisign + 0,20 de ICANN), con alza prevista de Verisign a 10,97 desde el 1 de noviembre de 2026 (unos 11,17 USD en total). Confirma el precio final en la pantalla de compra.

1. Cloudflare → crea la cuenta y **verifica tu correo** (es obligatorio para registrar).
2. Panel → **Domain Registration → Register Domains**, busca el nombre y confirma que sale disponible.
3. **Purchase** → elige el plazo (1 año) → completa los contactos (registrante, administrativo, técnico y facturación): nombre y apellido, correo, teléfono con código de país (+57) y dirección completa, solo caracteres ASCII, sin tildes ni eñes. Usa los datos reales de Camilo Andrés Sánchez Sandoval.
4. Elige el método de pago, acepta el acuerdo de registro → **Complete purchase**. Termina en unos 30 segundos y llega un correo de confirmación.
5. La renovación automática viene activada (reintenta desde unos 30 días antes del vencimiento; no está garantizada si falla el cobro). La redacción de WHOIS oculta tus datos cuando el registro lo permite. Mantén una tarjeta válida.
6. Opcional: activa DNSSEC en la página de gestión del dominio.

Como el dominio queda en Cloudflare, el DNS ya está en Cloudflare: **no hay que cambiar nameservers ni pasar el DNS**. Salta al paso 3.

### 2. (No aplica) Cambio de nameservers

Solo haría falta si el dominio estuviera en otro registrador (por ejemplo Hostinger).

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

- **Tú:** compra del dominio en Cloudflare, `wrangler login`, registros y reglas en paneles, verificación en Meta.
- **Claude (cuando le des el dominio):** actualizar `SITE_URL`, regenerar el sitio, comprobar canónicos, sitemap, Open Graph y JSON-LD, y desplegar solo cuando lo pidas.

## Pendientes antes de publicar

- Revisión de `/privacidad` y `/terminos` (`src/content/legal.ts`) por un abogado en Colombia.
- `SITE_URL` real.
