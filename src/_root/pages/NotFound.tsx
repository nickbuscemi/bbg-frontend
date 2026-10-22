import { Link } from 'react-router-dom';
import { PageHero } from '@/components/hero/PageHero';
import { usePageTitle } from '@/hooks/usePageTitle';

const NotFound = () => {
  usePageTitle('Page not found');

  return (
    <PageHero
      eyebrow="404"
      title="This page has gone missing."
      intro="The page you're looking for doesn't exist or has moved. Try one of these instead."
    >
      <Link to="/" className="btn-primary">Back to home</Link>
      <Link to="/pest-library" className="btn-outline">Pest library</Link>
      <Link to="/contact" className="btn-outline">Contact us</Link>
    </PageHero>
  );
};

export default NotFound;
