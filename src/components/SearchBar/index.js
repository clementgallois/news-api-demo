import {
  useHistory,
} from 'react-router-dom';
import { useState, useRef } from 'react';
import styled from 'styled-components';

import { useQueryParameters } from '../../hooks';
import 'font-awesome/css/font-awesome.min.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;
    border-radius: .25rem;
    border: 1px solid rgb(0 0 0 / 15%);
    &:focus-within{
        border-color: rgb(55 232 184);
    }
    
`;

const Input = styled.input`
    outline: none;
    border: none;
    color: rgb(51 51 51);
    font-size: inherit;
    line-height: normal;
    margin: 0;
    outline: 0;
    padding: .5rem .30rem;
    width: 200px;
`;

const Icon = styled.i`
    padding: 0 6px;
`;

const ButtonWithoutStyle = styled.button`
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
`;

function SearchBar() {
  const buttonRef = useRef(null);
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

  const handleCancel = () => {
    buttonRef.current.blur();
    setValue('');
    history.push('/');
  };

  return (
    <Wrapper>
      <Icon className="fa fa-search" />
      <Input className="search" type="text" placeholder="search" onChange={handleChangeSearchBar} value={value} />
      <ButtonWithoutStyle ref={buttonRef} type="button" aria-label="Cancel Search" onClick={handleCancel}><Icon className="fa fa-times" /></ButtonWithoutStyle>
    </Wrapper>
  );
}

export default SearchBar;
