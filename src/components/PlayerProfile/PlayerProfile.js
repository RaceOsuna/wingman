import React from 'react'
import PropTypes from 'prop-types'
import './PlayerProfile.css'

function PlayerProfile({ playerData }) {

  return (
    <div className='player-profile'>
      <h1>{playerData.global.name}</h1>
      <div className='legend-icon'>
        <img src={playerData.legends.selected.ImgAssets.icon} />
      </div>
    </div>
  )
}

PlayerProfile.propTypes = {}

export default PlayerProfile
