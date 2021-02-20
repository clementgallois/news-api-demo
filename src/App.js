import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Search from './pages/Search';
import './App.css';
import SearchBar from './components';

const MainContent = styled.div`
  margin:auto;
  max-width:1140px;
`;

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
