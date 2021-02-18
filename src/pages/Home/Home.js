import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { getTopArticles, getAllArticles } from '../../services/newsApi';
import { ArticleList } from './components';

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState(null);

  const loadTop10Articles = async () => {
    setLoading(true);
    setError(null);
    const jsonData = await getTopArticles({ pageSize: 10, country: 'be' });
    if (jsonData.status === 'ok') {
      setArticles(jsonData?.articles);
    } else if (jsonData.status === 'error') {
      setError(jsonData.message);
    }
    setLoading(false);
  };

  const searchArticles = async (searchText) => {
    setLoading(true);
    setError(null);
    const jsonData = await getAllArticles({ q: searchText, pageSize: 10 });
    if (jsonData.status === 'ok') {
      setArticles(jsonData?.articles);
    } else if (jsonData.status === 'error') {
      setError(jsonData.message);
    }
    setLoading(false);
  };

  const debounceSearch = useDebouncedCallback(
    (value) => {
      searchArticles(value);
    }, 200,
  );

  useEffect(() => {
    loadTop10Articles();
  }, []);

  const handleChangeSearchBar = (event) => {
    const searchText = event.target.value.trim();
    if (searchText === '') {
      debounceSearch.cancel();
      setSearch(null);
      loadTop10Articles();
    } else {
      setSearch(searchText);
      debounceSearch.callback(searchText);
    }
  };
  if (error) {
    return (
      <div>
        <p>
          Error:
          {error}
        </p>
        <button onClick={loadTop10Articles} type="button">Try Again</button>
      </div>
    );
  }

  return (
    <div className="home-page">
      <input className="search" type="text" placeholder="search" onChange={handleChangeSearchBar} />
      {search && (
      <p>
        results for:
        {search}
      </p>
      )}
      {loading
        ? <p>Loading...</p>
        : <ArticleList articlesData={articles} />}

    </div>
  );
}

export default Home;
