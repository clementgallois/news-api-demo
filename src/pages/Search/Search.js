import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import styled from 'styled-components';
import { getAllArticles } from '../../services/newsApi';
import { ArticleList, Error } from '../../components';
import { useAsync, useQueryParameters } from '../../hooks';

const Title = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 1.2;
    letter-spacing: -.005em;
    margin-bottom: 1.5rem;
`;
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
      <Title>
        Search result
      </Title>
      {status !== 'success'
        ? <p>Loading...</p>
        : <ArticleList articlesData={articles} />}
    </>
  );
}

export default Search;
