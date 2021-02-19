import PropTypes from 'prop-types';

const Article = ({
  // eslint-disable-next-line no-unused-vars
  author, content, description, publishedAt, title, url, urlToImage,
}) => (
  <article className="article">{title}</article>
);

Article.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  description: PropTypes.string,
  publishedAt: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
};

Article.defaultProps = {
  author: '',
  content: '',
  description: '',
  publishedAt: '',
  title: '',
  url: '',
  urlToImage: '',
};

export default Article;
