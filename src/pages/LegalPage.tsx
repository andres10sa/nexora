import { Seo } from '../components/Seo';
import { SITE } from '../config/site';
import type { LegalDocument } from '../content/legal';

interface LegalPageProps {
  doc: LegalDocument;
  path: string;
}

export function LegalPage({ doc, path }: LegalPageProps) {
  return (
    <>
      <Seo title={`${doc.title} | ${SITE.name}`} description={doc.description} path={path} />
      <article className="container legal">
        <h1>{doc.title}</h1>
        <p className="legal-updated">Última actualización: {doc.updated}</p>
        <p>{doc.intro}</p>
        {doc.sections.map((section, index) => (
          <section key={section.heading}>
            <h2>{index + 1}. {section.heading}</h2>
            {section.paragraphs?.map((text) => <p key={text}>{text}</p>)}
            {section.items && (
              <ul>
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </section>
        ))}
      </article>
    </>
  );
}
