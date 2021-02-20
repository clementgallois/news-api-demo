import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Home from './pages/Home';
import Search from './pages/Search';
import './App.css';
import { useQueryParameters } from './hooks';

const MainContent = styled.div`
  margin:auto;
  max-width:1140px;
`;

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

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Check News</h1>
          <SearchBar />
        </header>
        <MainContent>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </MainContent>
      </div>
    </Router>
  );
}

export default App;
