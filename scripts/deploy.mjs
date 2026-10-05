// Compila y publica dist/ en Cloudflare Pages con wrangler.
// Requiere SITE_URL real (en .env o en el entorno) y haber iniciado sesión
// con `npx wrangler login` (o definir CLOUDFLARE_API_TOKEN en tu shell).
import { readFileSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

const fromEnvFile = (key) => {
  if (!existsSync('.env')) return undefined;
  const line = readFileSync('.env', 'utf8').split('\n').find((l) => l.startsWith(`${key}=`));
  return line?.slice(key.length + 1).trim();
};

const siteUrl = process.env.SITE_URL ?? fromEnvFile('SITE_URL') ?? '';
if (!/^https:\/\//.test(siteUrl) || /example|localhost/.test(siteUrl)) {
  console.error(`SITE_URL no es un dominio real (${siteUrl || 'vacío'}). Defínelo en .env antes de desplegar.`);
  process.exit(1);
}

const run = (cmd, args) => {
  const r = spawnSync(cmd, args, { stdio: 'inherit', env: process.env });
  if (r.status !== 0) process.exit(r.status ?? 1);
};

run('npm', ['run', 'build']);
run('npx', ['--yes', 'wrangler', 'pages', 'deploy', 'dist', '--project-name', 'nexora', '--branch', 'main']);
