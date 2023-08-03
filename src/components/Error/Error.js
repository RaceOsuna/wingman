import React from 'react'
import PropTypes from 'prop-types'

function Error({ error }) {
  return (
    <div>
      {error ? <h1>{error}</h1> :
      <h1>Loading...</h1>}
    </div>
  )
}

Error.propTypes = {
  error: PropTypes.string.isRequired
}

export default Error
