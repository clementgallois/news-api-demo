import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articlesData }) => {
  if (!articlesData || articlesData.length === 0) {
    return (<p>No Result to Display</p>);
  }
  return (
    <section className="article-list">
      {articlesData.map((article) => <Article article={article} />)}
    </section>
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
  articlesData: null,
};

export default ArticleList;
