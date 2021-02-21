import PropTypes from 'prop-types';
import styled from 'styled-components';

import bear from '../../assets/BEAR08.png';
import bearMobile from '../../assets/BEAR03.png';
import Button from '../Button';
import PageContentWrapper from '../PageContentWrapper';

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

function Error({
  errorMessage, callback, buttonText, inPage,
}) {
  return (
    <PageContentWrapper inPage={inPage}>
      <IllustrationWrapper>
        <ErrorIllustration src={bear} alt="error illustration" />
      </IllustrationWrapper>
      <h1>Oops.</h1>
      <ErrorMessage>
        {errorMessage}
      </ErrorMessage>
      <Button onClick={callback} type="button">{buttonText}</Button>
    </PageContentWrapper>
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
