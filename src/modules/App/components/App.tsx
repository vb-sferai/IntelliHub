import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { ScrollToTop } from '../../../components/ScrollToTop';
import { CookieBanner } from '../../../components/CookieBanner';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
      <CookieBanner />
    </BrowserRouter>
  );
}
