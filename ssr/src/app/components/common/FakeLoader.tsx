import { ReactNode, useEffect, useState } from 'react';
import { Section } from './Section';

interface FakeLoaderProps {
  children: ReactNode;
  tabName: string;
}

export function FakeLoader({ children, tabName }: FakeLoaderProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, [tabName]);

  return <Section isLoading={isLoading}>{children}</Section>;
}
