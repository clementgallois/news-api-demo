import styled from 'styled-components';

export const Section = styled.section`
  grid-column: span 3;
  padding: 0;
  font-family: "Helvetica Neue",Helvetica,Arial,Sans-Serif;;
  font-weight: 400;
  border-bottom:none;
  color: black;

  @media (max-width: 900px){
    /* featured item on the right */
    grid-column: span 4;

    /* featured item bellow */
    &:nth-child(n+4){
        grid-column: span 6;
    }
  }
  @media (max-width: 700px){
    grid-column: 1/span 6;
  }


  /* featured item n°1 */
  &:first-child{
    grid-row: 1/span 2;
    grid-column: 1/span 6;

    @media (max-width: 900px){
      grid-column: 1/span 8;
    }

    @media (max-width: 700px){
      grid-column: 1/span 12;
      grid-row: 1/span 1;
    }
  }


  /* border below top row of featured item on the right */
  &:nth-child(n+2):nth-child(-n+3), &:nth-child(n+6){
    border-bottom: 1px solid;
    border-bottom-color: rgb(217 217 217);
  }

  /* divider vertical list */
  &:nth-child(6){
    padding-top: 1rem !important;
    border-top:  1px solid;
    border-top-color: rgb(217 217 217);
  }

  /* vertical list  */
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

  ${Section}:nth-child(n+6) &{
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

export const Title = styled.h2`
  font-weight: 800;
  padding: 1rem 0 0;
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.3;
  text-decoration: underline;
  text-decoration-color: transparent;
  
  @media (max-width: 800px){
    font-size: 1rem;
    line-height: 1.25;
  }

  ${Section}:first-child &{
    font-size: 2rem;
    line-height: 1.2;
    padding: 1.5rem 0 0;

    @media (max-width: 1000px){
      font-size: 1.75rem;
      line-height: 1.179;
    }
    @media (max-width: 700px){
      padding: 1rem 0 0;
    }
    @media (max-width: 400px){
      font-size: 1.18rem;
    }
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
    grid-column: span 8;
    @media (max-width: 599px){
        grid-column: span 7;
    }
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
    @media (max-width: 600px){
        display: none;
    }

    @media (max-width: 1000px) {
        font-size: 0.85rem;
    }
  }
`;

export const Source = styled.div`
  padding: 0.5rem 0;
  display: block;
  color: #666666;

  cite {
    font-style: normal;
  }
  
  .author{
      display: none;
  }
@media (max-width: 1023px){
    font-size: 0.85rem;
    line-height: 1.429;
}
  ${Section}:first-child & {
    padding: 0.75rem 0 1rem;

    @media(max-width: 900px){
      padding: 0.5rem 0;
    }
  }
`;
