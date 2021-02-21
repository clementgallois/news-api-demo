import styled from 'styled-components';
import { ArticleContainer, Link } from '../Article/style';

// https://stackoverflow.com/a/61419334/4057637
export const Thumbnail = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: fit-content;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #a6a6a6;
  border-radius: 0.25rem;

  & img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    object-fit: cover;

    transition-property: opacity;
    transition-duration: 0s;
    transition-timing-function: ease;
    opacity: ${(props) => (props.imageLoaded ? 1 : 0)};
  }

  &::before {
    display: block;
    content: "";
    padding-top: 56.25%;
  }

  ${ArticleContainer}:nth-child(n+6) &{
      grid-column: span 4;
      margin-bottom: 1.5rem;
      @media (max-width: 599px){
        grid-row: 1/span 2;
        grid-column: span 5;
    }
  }

  /* animation when hover article */
  ${Link} &  {
    transition-property:  filter;
    transition-duration: 0s;
    transition-timing-function: ease;
  }

  ${Link}:hover &  {
    filter: brightness(90%);
    transition-duration: 0.3s;
  }
`;
