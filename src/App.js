import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import './App.css';
import { Header, PageContainer } from './components';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <PageContainer>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </PageContainer>
      </div>
    </Router>
  );
}

export default App;
