import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import RootLayout from './_root/RootLayout';
import Home from './_root/pages/Home';
import About from './_root/pages/About';
import ServiceLanding from './_root/pages/ServiceLanding';
import ServiceAreas from './_root/pages/ServiceAreas';
import Contact from './_root/pages/Contact';
import PestLibrary from './_root/pages/PestLibrary';
import PestPage from './_root/pages/PestPage';
import FAQ from './_root/pages/FAQ';
import NotFound from './_root/pages/NotFound';
import { findPest } from './data/pest-data';

// Pest pages used to live at /:insectName (e.g. /cockroaches). Send old links to the new URLs.
const legacyPestSlugs: Record<string, string> = { mosquitos: 'mosquitoes', bedbugs: 'bed-bugs' };

const LegacyPestRedirect = () => {
  const { slug = '' } = useParams();
  const pest = findPest(legacyPestSlugs[slug] ?? slug);
  return pest ? <Navigate to={`/pest-library/${pest.slug}`} replace /> : <NotFound />;
};

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='residential' element={<ServiceLanding audience='residential' />} />
        <Route path='commercial' element={<ServiceLanding audience='commercial' />} />
        <Route path='pest-library' element={<PestLibrary />} />
        <Route path='pest-library/:slug' element={<PestPage />} />
        <Route path='service-areas' element={<ServiceAreas />} />
        <Route path='about-us' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='faq' element={<FAQ />} />
        <Route path=':slug' element={<LegacyPestRedirect />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
