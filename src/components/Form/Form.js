import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'

function Form({player, setPlayer, setPlatform, getPlayerData }) {

  function handleSubmit() {
    getPlayerData()
  }
  
  return (
    <div className='form-container'>
      <h1>Wingman</h1>
      <div className='platforms'>
        <button value='PC' onClick={(e) => setPlatform(e.target.value)} >PC</button>
        <button value='X1' onClick={(e) => setPlatform(e.target.value)} >XBOX</button>
        <button value='PS4' onClick={(e) => setPlatform(e.target.value)} >PSN</button>
      </div>
      <div className='form'>
        <input type="text" name="username" value={player} placeholder="Username" onChange={(e) => setPlayer(e.target.value)} />
        <Link to={`/${player}`} onClick={handleSubmit}>Submit</Link>
      </div>
    </div>
  )
}

Form.propTypes = {
  player: PropTypes.string.isRequired,
  setPlatform: PropTypes.func.isRequired,
  setPlayer: PropTypes.func.isRequired,
  getPlayerData: PropTypes.func.isRequired
}

export default Form
