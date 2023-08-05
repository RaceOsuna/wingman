import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'

function Form({player, setPlayer, setPlatform, getPlayerData, platform }) {

  function alertUser() {
    alert('please select a platform and provide a valid user name')
  }

  function handleSubmit() {
      getPlayerData()
  }

  function styleButton(plat) {
    return platform === plat ? {'backgroundColor': 'green', 'color': 'white'} : null
  }
  
  return (
    <div className='form-container'>
      <h1>Wingman</h1>
      <div className='platforms'>
        <button value='PC' style={styleButton('PC')} onClick={(e) => setPlatform(e.target.value)} >PC</button>
        <button value='X1' style={styleButton('X1')} onClick={(e) => setPlatform(e.target.value)} >XBOX</button>
        <button value='PS4' style={styleButton('PS4')} onClick={(e) => setPlatform(e.target.value)} >PSN</button>
      </div>
      <div className='form'>
        <input type="text" name="username" value={player} placeholder="Username" onChange={(e) => setPlayer(e.target.value)} />
        {player && platform ? <Link name="submit" to={`/${player}`} onClick={handleSubmit}>Submit</Link> : <p className='dummy-button' onClick={alertUser}>Submit</p>}
      </div>
      {platform === "PC" && <p className='pc-message'>PC players use your Origin account name. If you are playing on Steam use the Origin account name linked to your Steam account. If your Steam account is not linked please do so.</p>}
    </div>
  )
}

Form.propTypes = {
  player: PropTypes.string.isRequired,
  setPlatform: PropTypes.func.isRequired,
  setPlayer: PropTypes.func.isRequired,
  getPlayerData: PropTypes.func.isRequired,
  platform: PropTypes.string.isRequired
}

export default Form
