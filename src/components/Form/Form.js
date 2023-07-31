import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'

function Form({player, setPlayer}) {
  
  const [formData, setFormData] = useState({username: ''})

  function handleChange(event) {
    setFormData({[event.target.name]: event.target.value})
  }

  function handleSubmit() {
    // event.preventDefault()
    setPlayer(formData.username)
  }
  console.log(formData.username)
  return (
    <div className='form-container'>
      <div className='platforms'>
        <p>PC</p>
        <p>XBOX</p>
        <p>PSN</p>
      </div>
      <div className='form'>
        <input type="text" name="username" value={formData.username} placeholder="Username" onChange={handleChange} />
        <Link to={`/${formData.username}`} onClick={handleSubmit}>Submit</Link>
      </div>
    </div>
  )
}

Form.propTypes = {}

export default Form
