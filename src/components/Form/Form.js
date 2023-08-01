import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'

function Form({player, setPlayer, setPlatform, getPlayerData }) {
  
  // const [formData, setFormData] = useState({username: ''})

  // function handleChange(event) {
  //   setFormData({[event.target.name]: event.target.value})
  // }

  function handleSubmit() {
    // event.preventDefault()
    // setPlayer(formData.username)
    getPlayerData()
  }
  // console.log(formData.username)
  return (
    <div className='form-container'>
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

Form.propTypes = {}

export default Form
