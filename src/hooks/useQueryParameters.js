import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';

function useQueryParameters() {
  const [query, setQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    setQuery(new URLSearchParams(location.search).get('q') || '');
  }, [location]);
  return query;
}

export default useQueryParameters;
