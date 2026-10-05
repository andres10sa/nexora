import { ViteReactSSG } from 'vite-react-ssg';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/inter';
import './styles/global.css';
import { routes } from './routes';

export const createRoot = ViteReactSSG({ routes });
