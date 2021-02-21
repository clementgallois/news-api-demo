import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Error({ errorMessage, tryAgainCallback }) {
  return (
    <div>
      <p>
        Error:
        {errorMessage}
      </p>
      <button onClick={tryAgainCallback} type="button">Try Again</button>
    </div>
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
