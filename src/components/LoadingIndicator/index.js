import styled from 'styled-components';
import PageContentWrapper from '../PageContentWrapper';

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

const LoadingIndicator = () => (
  <PageContentWrapper inPage>
    <LoaderSpiner>
      <div />
    </LoaderSpiner>
  </PageContentWrapper>
);

export default LoadingIndicator;
