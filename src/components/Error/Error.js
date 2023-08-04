import React from 'react'
import PropTypes from 'prop-types'
import './Error.css'

function Error({ error }) {
  console.log(error);
  console.log(typeof(error));

  function displayError() {
    const errorType = error.toString().charAt(0);
    let message
    if (errorType === '3') {
      message = `page has been moved to somewhere else...`;
    } else if (errorType === '4') {
      message = `This Page does not exist...`;
    } else if (errorType === '5') {
      message = `The server is down...`;
    } 
  
    return message;
  }

  return (
    <div className='error'>
      {error ? <h1>{error + ' ' + displayError()}</h1>
      :
      <h1>Loading...</h1>}
    </div>
  )
}

Error.propTypes = {
  error: PropTypes.string.isRequired
}

export default Error
