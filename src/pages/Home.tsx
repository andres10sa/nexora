import { ContactButtons } from '../components/ContactButtons';
import { HeroArt } from '../components/HeroArt';
import { OrganizationJsonLd } from '../components/OrganizationJsonLd';
import { Seo } from '../components/Seo';
import { SITE } from '../config/site';
import { SERVICES, STEPS } from '../content/home';

export function Home() {
  return (
    <>
      <Seo title={`${SITE.name} | ${SITE.tagline}`} description={SITE.description} path="/" />
      <OrganizationJsonLd />

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Estudio de desarrollo de software</p>
            <h1>Tecnología a la medida para que tu negocio trabaje mejor.</h1>
            <p className="lead">
              Creamos páginas web y PWA, sistemas de gestión y automatizaciones con IA y WhatsApp para negocios que quieren ordenar su operación y atender mejor a sus clientes.
            </p>
            <ContactButtons onDark />
          </div>
          <HeroArt />
        </div>
      </section>

      <section id="sobre-nexora" className="section">
        <div className="container about">
          <h2 className="reveal">Sobre Nexora</h2>
          <div className="reveal" style={{ '--d': '1' } as React.CSSProperties}>
            <p>
              Nexora es un estudio de desarrollo de software con sede en {SITE.address.city}, {SITE.address.region}. Diseñamos y construimos páginas web, aplicaciones web instalables (PWA), sistemas de gestión y automatizaciones con inteligencia artificial para negocios que quieren dejar de depender de tareas manuales.
            </p>
            <p>
              Trabajamos de forma directa con cada cliente: hablamos de lo que necesita su negocio, acordamos el alcance por escrito y entregamos soluciones que puede usar desde el primer día.
            </p>
          </div>
        </div>
      </section>

      <section id="servicios" className="section section-tint">
        <div className="container">
          <p className="eyebrow reveal">Servicios</p>
          <h2 className="reveal">Qué hacemos</h2>
          <div className="card-grid">
            {SERVICES.map((service, index) => (
              <article key={service.id} className="card reveal" style={{ '--d': String(index % 2) } as React.CSSProperties}>
                <span className="card-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-trabajamos" className="section section-dark">
        <div className="container">
          <p className="eyebrow reveal">Proceso</p>
          <h2 className="reveal">Cómo trabajamos</h2>
          <ol className="steps">
            {STEPS.map((step, index) => (
              <li key={step.title} className="step reveal" style={{ '--d': String(index) } as React.CSSProperties}>
                <span className="step-number">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="productos" className="section">
        <div className="container">
          <p className="eyebrow reveal">Productos</p>
          <h2 className="reveal">Lo que estamos construyendo</h2>
          <article className="product reveal">
            <span className="badge">En desarrollo</span>
            <h3>Agenda de citas con IA por WhatsApp</h3>
            <p>
              Un sistema para barberías, peluquerías y spas que permite agendar citas conversando por WhatsApp, con un asistente de IA y un panel para gestionar la agenda del negocio.
            </p>
          </article>
        </div>
      </section>

      <section id="contacto" className="section section-dark contact">
        <div className="container">
          <p className="eyebrow reveal">Contacto</p>
          <h2 className="reveal">Cuéntanos qué necesita tu negocio</h2>
          <p className="lead reveal">Escríbenos y conversamos sobre tu proyecto, sin compromiso.</p>
          <div className="reveal"><ContactButtons onDark /></div>
          <dl className="contact-list reveal">
            <div><dt>WhatsApp y teléfono</dt><dd><a href={SITE.phoneHref}>{SITE.phoneDisplay}</a></dd></div>
            <div><dt>Correo</dt><dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd></div>
            <div><dt>Dirección</dt><dd>{SITE.address.street}, {SITE.address.city}, {SITE.address.region}, {SITE.address.country}</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}
