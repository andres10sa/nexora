import { NAV } from '../content/home';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="nav-desktop" aria-label="Principal">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <details className="nav-mobile">
          <summary aria-label="Abrir menú">
            <span className="burger" aria-hidden="true" />
          </summary>
          <nav aria-label="Principal móvil">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
