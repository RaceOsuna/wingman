import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'

function Form({player, setPlayer, setPlatform, getPlayerData, platform }) {

  const [buttonStyle, searchButtonStyle] = useState('')

  function handleSubmit() {
    if (!platform || !player) {
      alert('please selct a platform and provide a username')
    } else {
      getPlayerData()
    }
  }

  const pc = platform === "PC" ? {'backgroundColor': 'green'} : null
  const xbox = platform === "X1" ? {'backgroundColor': 'green'} : null
  const playstation = platform === "PS4" ? {'backgroundColor': 'green'} : null
  
  return (
    <div className='form-container'>
      <h1>Wingman</h1>
      <div className='platforms'>
        <button value='PC' style={pc} onClick={(e) => setPlatform(e.target.value)} >PC</button>
        <button value='X1' style={xbox} onClick={(e) => setPlatform(e.target.value)} >XBOX</button>
        <button value='PS4' style={playstation} onClick={(e) => setPlatform(e.target.value)} >PSN</button>
      </div>
      <div className='form'>
        <input type="text" name="username" value={player} placeholder="Username" onChange={(e) => setPlayer(e.target.value)} />
        <Link name="submit" to={`/${player}`} onClick={handleSubmit}>Submit</Link>
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
