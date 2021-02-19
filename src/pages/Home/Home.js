import { useEffect } from 'react';
import { useAsync } from '../../hooks';

import { getTopArticles } from '../../services/newsApi';
import { ArticleList } from '../../components';

function Home() {
  const {
    execute, status, value: articles, error,
  } = useAsync(getTopArticles, false);

  useEffect(() => {
    execute({ pageSize: 10, country: 'be' });
  }, [execute]);

  if (status === 'error') {
    return (
      <div>
        <p>
          Error:
          {error.message}
        </p>
        <button onClick={() => execute({ pageSize: 10, country: 'be' })} type="button">Try Again</button>
      </div>
    );
  }

  return (
    <div className="home-page">
      {status === 'loading'
        ? <p>Loading...</p>
        : <ArticleList articlesData={articles} />}

    </div>
  );
}

export default Home;
