import styled from 'styled-components';

const MainContent = styled.div`
  margin:auto;
  max-width:1140px;
  padding: 0 2.5rem;
  @media (max-width: 719px){
    padding: 0 1.5rem;
}
  @media (max-width: 599px){
    padding: 0 1rem;
}
`;

export default MainContent;
