import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  useHistory,
} from 'react-router-dom';
import Article from './Article';
import Error from './Error';

const Grid = styled.section`
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  grid-template-columns: repeat(12,1fr);
  grid-auto-flow: dense;
`;

const ArticleList = ({ articlesData }) => {
  const history = useHistory();
  if (!articlesData || articlesData.length === 0) {
    return (
      <Error inPage errorMessage="We didn't find any result" callback={() => history.push('./')} buttonText="Go Home" />
    );
  }
  return (
    <Grid>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */ }
      {articlesData.map((article) => <Article key={article.url} {...article} />)}
    </Grid>
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
