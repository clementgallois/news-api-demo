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
    width: ${(props) => (props.inPage ? '100%' : 'inherit')};

    
  max-width:1140px;
  @media (max-width: 719px){
    padding: 0 1.5rem;
}
  @media (max-width: 599px){
    padding: 0 1rem;
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

const ErrorMessage = styled.div`
  text-align: center;
`;

/* https://fdossena.com/?p=html5cool/buttons/i.frag */
const Button = styled.button`
  display:inline-block;
  padding:0.7em 1.7em;
  margin: 1rem;
  border-radius:0.2em;
  box-sizing: border-box;
  font-weight: 800;
  text-decoration:none;
  color:#FFFFFF;
  background-color:rgb(55 232 184);
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.09),
              inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),
              inset 0 0 0em 0.05em rgba(255,255,255,0.12);
  text-align:center;
  position:relative;
  border: none;

  &:active{
    box-shadow: inset 0 0.6em 2em -0.3em rgba(0,0,0,0.09),
                inset 0 0 0em 0.05em rgba(255,255,255,0.12);
  }
`;

function Error({
  errorMessage, callback, buttonText, inPage,
}) {
  return (
    <Wrapper inPage={inPage}>
      <IllustrationWrapper>
        <ErrorIllustration src={bear} alt="error illustration" />
      </IllustrationWrapper>
      <h1>Oops.</h1>
      <ErrorMessage>
        {errorMessage}
      </ErrorMessage>
      <Button onClick={callback} type="button">{buttonText}</Button>
    </Wrapper>
  );
}

Error.propTypes = {
  errorMessage: PropTypes.string,
  callback: PropTypes.func.isRequired,
  inPage: PropTypes.bool,
  buttonText: PropTypes.string,
};

Error.defaultProps = {
  errorMessage: 'Something Went Wrong',
  inPage: false,
  buttonText: 'Try Again',
};

export default Error;
