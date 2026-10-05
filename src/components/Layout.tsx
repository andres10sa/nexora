import { Outlet } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
