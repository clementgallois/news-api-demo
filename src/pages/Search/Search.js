import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { getAllArticles } from '../../services/newsApi';
import { ArticleList } from '../../components';
import { useAsync, useQueryParameters } from '../../hooks';

function Search() {
  const {
    execute, status, value: articles, error,
  } = useAsync(getAllArticles, false);
  const queryParameters = useQueryParameters();
  const [searchQuery, setSearchQuery] = useState('');
  const debounced = useDebouncedCallback(() => { setSearchQuery(queryParameters); }, 300);

  useEffect(() => {
    if (searchQuery !== '') {
      execute({ q: searchQuery });
    }
  }, [searchQuery, execute]);

  useEffect(() => {
    debounced.callback();
  }, [debounced, queryParameters]);

  useEffect(() => () => {
    debounced.cancel();
  }, [debounced]);

  if (status === 'error') {
    return (
      <div>
        <p>
          Error:
          {error.message}
        </p>
        <button onClick={() => execute({ q: searchQuery })} type="button">Try Again</button>
      </div>
    );
  }
  return (
    <div className="search-page">
      {status === 'loading'
        ? <p>Loading...</p>
        : <ArticleList articlesData={articles} />}
    </div>
  );
}

export default Search;
