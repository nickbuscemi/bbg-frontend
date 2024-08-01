import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css'
import RootLayout from './_root/RootLayout';
import Home from './_root/pages/Home';
import About from './_root/pages/About';
import Residential from './_root/pages/Residential';
import Commercial from './_root/pages/Commercial';
import ServiceAreas from './_root/pages/ServiceAreas';
import Contact from './_root/pages/Contact';
import PestLibrary from './_root/pages/PestLibrary';
import PestPage  from './_root/pages/PestPage';

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='about-us' element={<About />} />
          <Route path='pest-library' element={<PestLibrary />} />
          <Route path='residential' element={<Residential />} />
          <Route path='commercial' element={<Commercial />} />
          <Route path='service-areas' element={<ServiceAreas />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/:insectName' element={<PestPage />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
