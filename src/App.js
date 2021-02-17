import { useState, useEffect } from 'react';
import { getTopArticles } from './services/newsApi';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const jsonData = await getTopArticles({ pageSize: 10, country: 'be' });
      setArticles(jsonData?.articles);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Check News</h1>
      </header>
      {loading
        ? 'Loading...'
        : articles.map((article) => <p>{article.title}</p>)}

    </div>
  );
}

export default App;
