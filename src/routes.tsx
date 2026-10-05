import type { RouteRecord } from 'vite-react-ssg';
import { Layout } from './components/Layout';
import { PRIVACY, TERMS } from './content/legal';
import { Home } from './pages/Home';
import { LegalPage } from './pages/LegalPage';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'privacidad', element: <LegalPage doc={PRIVACY} path="/privacidad" /> },
      { path: 'terminos', element: <LegalPage doc={TERMS} path="/terminos" /> },
    ],
  },
];
