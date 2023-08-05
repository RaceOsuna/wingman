import React from 'react'
import PropTypes from 'prop-types'
import './Error.css'
import { NavLink } from 'react-router-dom';

function Error({ error, setPlayer, setPlatform, setPlayerData, setError }) {

  function displayError() {
    const errorType = error.toString().charAt(0);
    let message
    if (errorType === '3') {
      message = `Oops! Nevermind. This page has been moved...`;
    } else if (errorType === '4') {
      message = `Oops! Nevermind. This page doesn't exist...`;
    } else if (errorType === '5') {
      message = `Oops! Nevermind. The server is down...`;
    } 
  
    return message;
  }

  function refresh(){
    setPlatform('')
    setPlayerData({})
    setPlayer('')
    setError(0)
  }

  return (
    <div className='error'>
      {error ? 
      <div>
        <h1>{error}</h1>
        <h2>{displayError()}</h2>
        <NavLink onClick={refresh} to="/">🔄 Return Home</NavLink>
      </div>
      :
      <h1>Loading...</h1>}
    </div>
  )
}

Error.propTypes = {
  error: PropTypes.number,
  setError: PropTypes.func,
  setPlayer: PropTypes.func,
  setPlatform: PropTypes.func,
  setPlayerData: PropTypes.func
}

export default Error
