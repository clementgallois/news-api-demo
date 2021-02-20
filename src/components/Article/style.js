import styled from 'styled-components';

export const Section = styled.section`
  grid-column: span 3;
  padding: 0;
  font-family: "Helvetica Neue",Helvetica,Arial,Sans-Serif;;
  font-weight: 400;
  border-bottom:none;
  color: black;
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

  &:nth-child(n+6) {
    grid-column: span 12;

    & a{
      display: grid;
      grid-template-columns: repeat(12,1fr);
      grid-column-gap: 1.5rem;
      padding: 0;
    }
  }
`;

export const Link = styled.a`
  color: inherit;
  height: 100%;
  width: 100%;
  position: relative;
  display: block;
  text-decoration: none;
`;

// https://stackoverflow.com/a/61419334/4057637
export const Thumbnail = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: #a6a6a6;
  border-radius: 0.25rem;

  &::before {
    display: block;
    content: "";
  }

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
    padding-top: 56.25%;
  }

  ${Section}:nth-child(n+6) &{
      grid-column: span 3;
      margin-bottom: 1.5rem;
  }

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

export const Title = styled.h2`
  font-weight: 800;
  padding: 1rem 0 0;
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.3;
  text-decoration: underline;
  text-decoration-color: transparent;
  
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
  ${Link} &{
    transition-property: text-decoration;
    transition-duration: 0s;
    transition-timing-function: ease;
  }
  ${Link}:hover &{
    text-decoration-color: inherit;
    transition-duration: 0.3s;
  }
`;

export const Content = styled.div`

    position: relative;

    padding-bottom: 1rem;
${Section}:first-child &, ${Section}:nth-child(n+4) &{
    padding-bottom:0;
}
${Section}:nth-child(n+6) & {
    grid-column: span 9;
}
`;

export const Description = styled.div`
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

export const Source = styled.div`
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
