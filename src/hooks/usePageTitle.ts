import { useEffect } from 'react';
import { pageTitle } from '@/data/site';

// Every route gets a unique, descriptive <title> (WCAG 2.4.2)
export const usePageTitle = (title?: string) => {
  useEffect(() => {
    document.title = pageTitle(title);
  }, [title]);
};
