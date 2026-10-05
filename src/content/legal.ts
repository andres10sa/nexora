// NOTE FOR REVIEW: these texts are a careful draft, not legal advice.
// A Colombian lawyer must review them before the site is used for Meta verification
// or for any commercial relationship (Ley 1581 de 2012, Decreto 1074 de 2015).
import { SITE } from '../config/site';

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface LegalDocument {
  title: string;
  description: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const ADDRESS = `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region}, ${SITE.address.country}`;

export const PRIVACY: LegalDocument = {
  title: 'Política de privacidad y tratamiento de datos personales',
  description:
    'Cómo Nexora trata los datos personales, con qué finalidades y cómo puedes ejercer tus derechos según la Ley 1581 de 2012.',
  updated: '5 de octubre de 2026',
  intro:
    'Esta política explica cómo se tratan los datos personales de quienes visitan este sitio o se comunican con Nexora, en cumplimiento de la Ley 1581 de 2012, el Decreto 1074 de 2015 y las demás normas colombianas aplicables.',
  sections: [
    {
      heading: 'Responsable del tratamiento',
      items: [
        `Nombre comercial: ${SITE.name}`,
        `Responsable: ${SITE.legalName}, persona natural`,
        `Dirección: ${ADDRESS}`,
        `Correo electrónico: ${SITE.email}`,
        `Teléfono y WhatsApp: ${SITE.phoneDisplay}`,
      ],
    },
    {
      heading: 'Datos que se recogen',
      paragraphs: [
        'Este sitio no tiene formularios, no usa cookies y no incluye herramientas de analítica. No recogemos datos de navegación por nuestra cuenta.',
        'Solo tratamos los datos que tú nos envías por iniciativa propia al escribirnos por correo electrónico, llamada o WhatsApp, como tu nombre, tu número de teléfono, tu correo, el nombre de tu negocio y el contenido de tu mensaje.',
      ],
    },
    {
      heading: 'Finalidades',
      items: [
        'Responder tus consultas y solicitudes de información.',
        'Preparar y enviarte propuestas o cotizaciones de servicios.',
        'Ejecutar, administrar y dar soporte a los servicios que contrates.',
        'Cumplir obligaciones legales, contables y tributarias.',
        'Atender peticiones, quejas y reclamos relacionados con tus datos.',
      ],
      paragraphs: ['No vendemos tus datos ni los usamos para finalidades distintas a las aquí descritas sin pedir antes tu autorización.'],
    },
    {
      heading: 'Autorización',
      paragraphs: [
        'Al escribirnos y compartir tus datos, nos autorizas para tratarlos con las finalidades de esta política. Puedes revocar esa autorización en cualquier momento, salvo que exista un deber legal o contractual que exija conservar los datos.',
      ],
    },
    {
      heading: 'Terceros y transferencias',
      paragraphs: [
        'Para atender tus mensajes usamos servicios de terceros, como el correo electrónico y WhatsApp, y para alojar este sitio usamos Cloudflare. Estos proveedores tratan información conforme a sus propias políticas de privacidad.',
        'No cedemos tus datos a terceros para fines comerciales. Solo los compartimos cuando una autoridad competente lo exija o cuando sea necesario para prestar el servicio que solicitaste.',
      ],
    },
    {
      heading: 'Derechos del titular',
      paragraphs: ['Como titular de los datos tienes derecho a:'],
      items: [
        'Conocer, actualizar y rectificar tus datos personales.',
        'Solicitar prueba de la autorización que nos diste.',
        'Ser informado sobre el uso que se ha dado a tus datos.',
        'Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley.',
        'Revocar la autorización y solicitar la supresión de tus datos cuando no se respeten los principios, derechos y garantías legales.',
        'Acceder de forma gratuita a tus datos personales que hayan sido tratados.',
      ],
    },
    {
      heading: 'Cómo ejercer tus derechos',
      paragraphs: [
        `Envía tu solicitud a ${SITE.email}, o escríbenos por WhatsApp al ${SITE.phoneDisplay}. Indica tu nombre, un medio de contacto, qué derecho quieres ejercer y los hechos que motivan la solicitud. Podemos pedirte información para verificar tu identidad.`,
        'Las consultas se responden en un máximo de diez (10) días hábiles desde su recibo. Los reclamos se responden en un máximo de quince (15) días hábiles. Si no podemos hacerlo en ese plazo, te informaremos los motivos y la nueva fecha, que no superará los plazos máximos de la ley.',
      ],
    },
    {
      heading: 'Seguridad y conservación',
      paragraphs: [
        'Aplicamos medidas razonables para proteger la información contra pérdida, acceso o uso no autorizado. Conservamos los datos solo durante el tiempo necesario para las finalidades descritas y para cumplir obligaciones legales.',
      ],
    },
    {
      heading: 'Menores de edad',
      paragraphs: ['Este sitio y nuestros servicios no están dirigidos a menores de edad y no recogemos sus datos de forma intencional.'],
    },
    {
      heading: 'Cambios a esta política',
      paragraphs: ['Podemos actualizar esta política. La versión vigente siempre estará publicada en esta página, con su fecha de última actualización.'],
    },
  ],
};

export const TERMS: LegalDocument = {
  title: 'Términos de uso',
  description: 'Condiciones para el uso del sitio web de Nexora, estudio de desarrollo de software en Facatativá, Colombia.',
  updated: '5 de octubre de 2026',
  intro: `Estos términos regulan el uso del sitio web de ${SITE.name}. Al navegar por el sitio aceptas estas condiciones.`,
  sections: [
    {
      heading: 'Quién ofrece este sitio',
      paragraphs: [
        `${SITE.name} es un nombre comercial de ${SITE.legalName}, persona natural, con domicilio en ${ADDRESS}. Puedes escribirnos a ${SITE.email}.`,
      ],
    },
    {
      heading: 'Carácter informativo',
      paragraphs: [
        'El contenido del sitio es informativo y describe de forma general nuestros servicios. No constituye una oferta vinculante. Los servicios se contratan mediante una propuesta o acuerdo escrito independiente, donde se definen el alcance, los plazos y las condiciones.',
        'Los productos marcados como "En desarrollo" aún no están disponibles y pueden cambiar o no llegar a lanzarse.',
      ],
    },
    {
      heading: 'Uso permitido',
      paragraphs: ['Te comprometes a usar el sitio de forma lícita. No está permitido:'],
      items: [
        'Intentar acceder sin autorización a los sistemas del sitio o interferir con su funcionamiento.',
        'Copiar o reproducir el contenido con fines comerciales sin nuestro permiso.',
        'Usar el sitio para actividades ilegales o que afecten a terceros.',
      ],
    },
    {
      heading: 'Propiedad intelectual',
      paragraphs: [
        `Los textos, el diseño, el logotipo y el código de este sitio pertenecen a ${SITE.legalName} o se usan con licencia. Nombres y marcas de terceros, como WhatsApp, pertenecen a sus titulares y se mencionan solo para describir los servicios.`,
      ],
    },
    {
      heading: 'Enlaces a terceros',
      paragraphs: [
        'El sitio enlaza a servicios externos, como WhatsApp y el correo electrónico. No controlamos esos servicios ni somos responsables de su contenido o de sus políticas.',
      ],
    },
    {
      heading: 'Limitación de responsabilidad',
      paragraphs: [
        'Hacemos lo posible por mantener el sitio disponible y la información correcta, pero no garantizamos que esté libre de errores o interrupciones. En lo permitido por la ley, no respondemos por daños derivados del uso del sitio o de la imposibilidad de usarlo.',
      ],
    },
    {
      heading: 'Datos personales',
      paragraphs: ['El tratamiento de datos personales se rige por nuestra Política de privacidad y tratamiento de datos.'],
    },
    {
      heading: 'Cambios, ley aplicable y jurisdicción',
      paragraphs: [
        'Podemos modificar estos términos en cualquier momento; la versión vigente es la publicada en esta página. Se rigen por las leyes de la República de Colombia, y cualquier controversia se someterá a las autoridades colombianas competentes.',
      ],
    },
  ],
};
