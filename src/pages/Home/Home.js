/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { useEffect } from 'react';
import { useAsync } from '../../hooks';
import { getTopArticles } from '../../services/newsApi';
import {
  ArticleList, Error, LoadingIndicator, PageTitle,
} from '../../components';

const TitleWithDetails = styled(PageTitle)`

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
      <TitleWithDetails>
        Top stories
        <span>Belgium</span>
      </TitleWithDetails>

      {status === 'loading'
        ? <LoadingIndicator />
        : <ArticleList articlesData={articles} /> }

    </>
  );
}

export default Home;
