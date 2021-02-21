import PropTypes from 'prop-types';
import styled from 'styled-components';
import bear from './BEAR08.png';
import bearMobile from './BEAR03.png';

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: inherit;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;

max-width: calc(100% - 5rem);
  @media (max-width: 719px){
    padding: 2.5rem 1.5rem;
}
  @media (max-width: 599px){
    padding: 1.5rem 1rem;
}
`;

const ErrorIllustration = styled.div`
  width: 100%;
  padding-top: 66%;
  background-position: 50%;
  background-size: cover;
  background-image: url(${bear});
  @media(max-width: 600px){
  background-image: url(${bearMobile});
  padding-top: 111.69%;
  }

`;

const IllustrationWrapper = styled.div`
  width : 50%;
  height : auto;
  @media(max-width: 900px){
    width : 70%;
  }
  @media(max-width: 700px){
    width : 100%;
  }
    @media(max-width: 600px){
    width : 50%;
  }
  @media(max-width: 450px){
    width : 70%;
  }
  
`;

function Error({ errorMessage, tryAgainCallback }) {
  return (
    <Wrapper>
      <IllustrationWrapper>
        <ErrorIllustration src={bear} alt="error illustration" />
      </IllustrationWrapper>
      <p>
        Error:
        {errorMessage}
      </p>
      <button onClick={tryAgainCallback} type="button">Try Again</button>
    </Wrapper>
  );
}

Error.propTypes = {
  errorMessage: PropTypes.string,
  tryAgainCallback: PropTypes.func.isRequired,
};

Error.defaultProps = {
  errorMessage: 'An unecxpected error occured',
};

export default Error;
