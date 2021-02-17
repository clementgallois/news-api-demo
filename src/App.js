import { useState, useEffect } from 'react';
import './App.css';

const apiKey = process.env.REACT_APP_NEWS_API_KEY;
const apiUrl = process.env.REACT_APP_NEWS_API_URL;

function App() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const top10Articles = await fetch(`${apiUrl}top-headlines?country=be&pageSize=10&apiKey=${apiKey}`);

      const jsonData = await top10Articles.json();
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
