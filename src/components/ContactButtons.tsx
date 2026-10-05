import { SITE } from '../config/site';

export function ContactButtons({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className="btn-row">
      <a className={`btn ${onDark ? 'btn-mint' : 'btn-primary'}`} href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
        Escríbenos por WhatsApp
      </a>
      <a className={`btn ${onDark ? 'btn-ghost-dark' : 'btn-ghost'}`} href={`mailto:${SITE.email}`}>
        Enviar un correo
      </a>
    </div>
  );
}
