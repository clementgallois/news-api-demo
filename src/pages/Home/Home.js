import { useState, useEffect } from 'react';
import { getTopArticles } from '../../services/newsApi';

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const jsonData = await getTopArticles({ pageSize: 10, country: 'be' });
      if (jsonData.status === 'ok') {
        setArticles(jsonData?.articles);
      } else if (jsonData.status === 'error') {
        setError(jsonData.message);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }
  return (
    <ul>
      {articles.map((article) => <li>{article.title}</li>)}
    </ul>

  );
}

export default Home;
