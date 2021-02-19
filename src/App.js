import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import './App.css';

function SearchBar() {
  const history = useHistory();

  const handleChangeSearchBar = (event) => {
    const searchText = event.target.value.trim();
    if (searchText === '') {
      history.push('/');
    } else {
      history.push({ pathname: '/search', search: `?q=${searchText}` });
    }
  };
  return <input className="search" type="text" placeholder="search" onChange={handleChangeSearchBar} />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Check News</h1>
          <SearchBar />
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
