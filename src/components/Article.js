import PropTypes from 'prop-types';
import styled from 'styled-components';

const Thumbnail = styled.img`
  width: 100%;
`;

const StyledArticle = styled.section`
    &{
      grid-column: span 3;

      .description{
        display: none;
      }
    }
    &:first-child{
      grid-row: 1/span 2;
      grid-column: 1/span 6;
      
      .description{
        display: block;
      }
    }
    &:nth-child(n+6){
      grid-column: span 2;
    }
`;
const Article = ({
  // eslint-disable-next-line no-unused-vars
  author, content, description, publishedAt, title, url, urlToImage, source,
}) => {
  console.log(description && description.length);
  console.log({
    author, content, description, publishedAt, title, url, urlToImage, source,
  });
  return (
    <StyledArticle className="article">
      <Thumbnail src={urlToImage} alt={title} />
      <h2>{title}</h2>
      <div className="article-source">
        {source?.name ? source.name : 'Unknown source'}
        {' '}
        {author && (
          <span className="author">
            by
            {' '}
            {author}
          </span>
        )}
      </div>
      <div className="description">{description || content}</div>
    </StyledArticle>
  );
};

Article.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  description: PropTypes.string,
  publishedAt: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  source: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
};

Article.defaultProps = {
  author: '',
  content: '',
  description: '',
  publishedAt: '',
  title: '',
  url: '',
  urlToImage: '',
  source: {
    id: '',
    name: '',
  },
};

export default Article;
