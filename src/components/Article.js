import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  grid-column: span 3;
  padding: 0;
  font-family: "Helvetica Neue",Helvetica,Arial,Sans-Serif;;
  font-weight: 400;
  border-bottom:none;
  &:first-child{
    grid-row: 1/span 2;
    grid-column: 1/span 6;
  }

  &:nth-child(n+2):nth-child(-n+3), &:nth-child(n+6){
    border-bottom: 1px solid;
    border-bottom-color: rgb(217 217 217);
  }

  &:nth-child(6){
    padding-top: 1rem !important;
    border-top:  1px solid;
    border-top-color: rgb(217 217 217);
  }

  &:nth-child(n+6){
    grid-column: span 12;
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-column-gap: 1.5rem;
    padding: 0;
  }
`;

const Thumbnail = styled.img`
  position: relative;
  width: 100%;
  -webkit-transition: opacity .5s;
  transition: opacity 1s;
  opacity:${(props) => (props.imageLoaded ? '1' : '0')};


  ${Section}:nth-child(n+6) &{
      grid-column: span 3;
      margin-bottom: 1.5rem;
  }
`;

const Title = styled.h2`
  font-weight: 800;
  padding: 1rem 0 0;
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.3;
  
  ${Section}:first-child &{
    font-size: 2rem;
    line-height: 1.2;
    padding: 1.5rem 0 0;
  }

  ${Section}:nth-child(n+6) & {
    padding: 0;
    font-size: 1.5;
    line-height: 1.286;
  }
`;

const Content = styled.div`
    grid-column: span 9;
    position: relative;
    padding-bottom: 1rem;
`;

const Description = styled.div`
  display: none;
  font-size: 1rem;
  margin: 0;
  padding-bottom: 1em;

  ${Section}:first-child &{
    display: block;
  }

  ${Section}:nth-child(n+6) &{
    display: block;
  }
`;

const Source = styled.div`
  padding: 0.5rem 0;
  display: block;
  color: #666666;

  cite {
    font-style: normal;
  }

  ${Section}:first-child & {
    padding: 0.75rem 0 1rem;
  }
`;

const Article = ({
  // eslint-disable-next-line no-unused-vars
  author, content, description, publishedAt, title, url, urlToImage, source,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Section className="article">
      <Thumbnail
        src={urlToImage}
        alt={title}
        imageLoaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
      />
      <Content>
        <Title>{title}</Title>
        <Source>
          <cite>{source?.name ? source.name : 'Unknown source'}</cite>
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
    </Section>
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
