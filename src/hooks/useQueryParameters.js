import { useLocation } from 'react-router-dom';

function useQueryParameters() {
  return new URLSearchParams(useLocation().search).get('q');
}

export default useQueryParameters;
