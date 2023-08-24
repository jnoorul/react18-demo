import { useEffect, useState } from 'react';
import { Loader } from './Loader';

export function FakeLoader() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return <Loader isLoading={isLoading} />;
}
