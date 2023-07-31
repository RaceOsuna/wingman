import React from 'react'
import PropTypes from 'prop-types'

function PlayerProfile({ playerData }) {
  return (
    <div>
      <h1>{playerData.global.name}</h1>
    </div>
  )
}

PlayerProfile.propTypes = {}

export default PlayerProfile
