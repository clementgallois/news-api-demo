import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { getAllArticles } from '../../services/newsApi';
import {
  ArticleList, Error, LoadingIndicator, PageTitle,
} from '../../components';
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
      <Error
        errorMessage={error?.message}
        tryAgainCallback={() => execute({ q: searchQuery })}
      />
    );
  }
  return (
    <>
      <PageTitle>
        Search result
      </PageTitle>
      {status !== 'success'
        ? <LoadingIndicator />
        : <ArticleList articlesData={articles} />}
    </>
  );
}

export default Search;
