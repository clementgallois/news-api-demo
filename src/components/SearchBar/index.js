import {
  useHistory,
} from 'react-router-dom';
import { useState } from 'react';
import { useQueryParameters } from '../../hooks';

function SearchBar() {
  const queryParameters = useQueryParameters();
  const [value, setValue] = useState(queryParameters || '');
  const history = useHistory();

  const handleChangeSearchBar = (event) => {
    setValue(event.target.value);
    const searchText = event.target.value.trim();
    if (searchText === '') {
      history.push('/');
    } else {
      history.push({ pathname: '/search', search: `?q=${searchText}` });
    }
  };
  return <input className="search" type="text" placeholder="search" onChange={handleChangeSearchBar} value={value} />;
}

export default SearchBar;
