import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  ArticleContainer, Link, Thumbnail, Content, Title, Source, Description,
} from './style';

const Article = ({
  // eslint-disable-next-line no-unused-vars
  author, content, description, publishedAt, title, url, urlToImage, source,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <ArticleContainer>
      <Link href={url}>
        <Thumbnail
          imageLoaded={imageLoaded}
        >
          {urlToImage
        && (
        <img
          src={urlToImage}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
        />
        )}
        </Thumbnail>
        <Content>
          <Title>{title}</Title>
          <Source>
            <cite>{source?.name || 'Unknown source'}</cite>
            {' '}
            {author && (
            <span className="author">
              by
              {' '}
              {author}
            </span>
            )}
          </Source>
          <Description>{description || content}</Description>
        </Content>
      </Link>
    </ArticleContainer>
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
