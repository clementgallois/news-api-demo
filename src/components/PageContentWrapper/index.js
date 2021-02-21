import styled from 'styled-components';

const PageContentWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    width: ${(props) => (props.inPage ? '100%' : 'inherit')};
    max-width:1140px;
    
  @media (max-width: 719px){
    padding: 0 1.5rem;
}
  @media (max-width: 599px){
    padding: 0 1rem;
}
`;

export default PageContentWrapper;
