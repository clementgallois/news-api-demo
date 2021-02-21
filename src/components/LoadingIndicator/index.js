import styled from 'styled-components';

const LoaderSpiner = styled.div`
& {
  display: inline-block;
  transform: translateZ(1px);
  
}
& > div {
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  background: transparent;
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  
  background-image: url('https://www.socialseeder.com/hubfs/Social%20Seeder%20logo.png');
  background-size: cover;
}
@keyframes lds-circle {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}

`;

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: inherit;
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

const LoadingIndicator = () => (
  <Wrapper inPage>
    <LoaderSpiner>
      <div />
    </LoaderSpiner>
  </Wrapper>
);

export default LoadingIndicator;
