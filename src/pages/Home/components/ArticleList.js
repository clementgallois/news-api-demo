import PropTypes from 'prop-types';

const ArticleList = ({ articlesData }) => {
  if (articlesData.length === 0) {
    return (<p>No Result to Display</p>);
  }
  return (
    <ul className="article-list">
      {articlesData.map((article) => <li className="article" key={article.url}>{article.title}</li>)}
    </ul>
  );
};

ArticleList.propTypes = {
  articlesData: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.string,
      description: PropTypes.string,
      publishedAt: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      urlToImage: PropTypes.string,
    }),
  ),
};

ArticleList.defaultProps = {
  articlesData: [],
};

export default ArticleList;
