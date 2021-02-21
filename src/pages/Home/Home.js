/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { useEffect } from 'react';
import { useAsync } from '../../hooks';
import { getTopArticles } from '../../services/newsApi';
import { ArticleList, Error, LoadingIndicator } from '../../components';

const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.2;
  letter-spacing: -.005em;
  margin-bottom: 1.5rem;

  & span {
    font-size: 1rem;
    padding: 0 .25em;
    font-weight: 400;
  }

  & span::before{
    content: "·";
    padding: 0 .25em;
  }
`;

function Home() {
  const {
    execute, status, value: articles, error,
  } = useAsync(getTopArticles, false);

  useEffect(() => {
    execute({ pageSize: 10, country: 'be' });
  }, [execute]);

  if (status === 'error') {
    return (
      <Error
        errorMessage={error?.message}
        tryAgainCallback={() => execute({ pageSize: 10, country: 'be' })}
      />
    );
  }

  return (
    <>
      <Title>
        Top stories
        <span>Belgium</span>
      </Title>

      {status === 'loading'
        ? <LoadingIndicator />
        : <ArticleList articlesData={articles} /> }

    </>
  );
}

export default Home;
