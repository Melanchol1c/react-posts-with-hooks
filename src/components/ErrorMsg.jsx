import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component rendering error messgae
 */
function ErrorMsg({ message = 'There is an error with server...' }) {
  return <div>{message}</div>;
}

ErrorMsg.propTypes = {
  message: PropTypes.string,
};

export default ErrorMsg;
