export interface Service {
  id: string;
  title: string;
  summary: string;
  points: string[];
}

export interface Step {
  title: string;
  text: string;
}

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Páginas web y PWA',
    summary:
      'Sitios rápidos, claros y pensados para el celular, que pueden instalarse como aplicación.',
    points: ['Diseño a la medida', 'Optimización para buscadores', 'Instalables y con uso sin conexión'],
  },
  {
    id: 'sistemas',
    title: 'Sistemas de gestión a la medida',
    summary:
      'Herramientas internas que se adaptan a la forma en que trabaja tu negocio, no al revés.',
    points: ['Agendas, inventarios y clientes', 'Paneles de control simples', 'Roles y permisos por usuario'],
  },
  {
    id: 'ia',
    title: 'Automatización con IA y WhatsApp',
    summary:
      'Asistentes que atienden y organizan conversaciones de WhatsApp con reglas definidas por ti.',
    points: ['Respuestas a preguntas frecuentes', 'Gestión de citas y solicitudes', 'Traspaso a una persona cuando hace falta'],
  },
  {
    id: 'integraciones',
    title: 'Integraciones y automatizaciones',
    summary:
      'Conectamos las herramientas que ya usas para que dejes de repetir tareas a mano.',
    points: ['Conexión entre aplicaciones y APIs', 'Avisos y recordatorios automáticos', 'Reportes sin copiar y pegar'],
  },
];

export const STEPS: Step[] = [
  { title: 'Diagnóstico', text: 'Conversamos para entender tu negocio, tus procesos y lo que quieres resolver.' },
  { title: 'Propuesta', text: 'Te presentamos el alcance, el plan de trabajo y las condiciones por escrito.' },
  { title: 'Desarrollo', text: 'Construimos por etapas y te mostramos avances para ajustar a tiempo.' },
  { title: 'Entrega', text: 'Publicamos la solución, te explicamos cómo usarla y entregamos la documentación.' },
  { title: 'Soporte', text: 'Seguimos disponibles para resolver dudas, corregir y mejorar.' },
];

export const NAV = [
  { href: '/#sobre-nexora', label: 'Sobre Nexora' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#como-trabajamos', label: 'Cómo trabajamos' },
  { href: '/#productos', label: 'Productos' },
  { href: '/#contacto', label: 'Contacto' },
] as const;
