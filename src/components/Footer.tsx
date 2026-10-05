import { SITE } from '../config/site';
import { Logo } from './Logo';

export function Footer() {
  const { address } = SITE;

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-legal">
            {SITE.name} es un nombre comercial de {SITE.legalName}, persona natural.
          </p>
        </div>
        <address>
          <p>{address.street}</p>
          <p>{address.city}, {address.region}, {address.country}</p>
          <p><a href={SITE.phoneHref}>{SITE.phoneDisplay}</a></p>
          <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        </address>
        <nav aria-label="Información legal">
          <a href="/privacidad">Política de privacidad</a>
          <a href="/terminos">Términos de uso</a>
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
