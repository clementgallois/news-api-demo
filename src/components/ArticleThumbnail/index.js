import { useState } from 'react';
import PropTypes from 'prop-types';

import { Thumbnail } from './style';

const ArticleThumbnail = ({ urlToImage, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
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
  );
};

ArticleThumbnail.propTypes = {
  title: PropTypes.string,
  urlToImage: PropTypes.string,
};

ArticleThumbnail.defaultProps = {
  title: '',
  urlToImage: '',
};

export default ArticleThumbnail;
