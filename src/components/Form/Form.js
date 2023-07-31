import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Form({player, setPlayer}) {
  
  const [formData, setFormData] = useState({username: ''})

  function handleChange(event) {
    setFormData({[event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    setPlayer(formData.username)
  }
  console.log(formData.username)
  return (
    <div>
      <input type="text" name="username" value={formData.username} placeholder="Username" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

Form.propTypes = {}

export default Form
