import React from 'react'
import PropTypes from 'prop-types'
import './PlayerProfile.css'

function PlayerProfile({ playerData }) {

  return (
    <div className='player-profile'>
      <div className='name-avatar'>
        <img src={playerData.global.avatar} />
        <h1>{playerData.global.name}</h1>
      </div>
      <div className='legend-icon'>
        <img src={playerData.legends.selected.ImgAssets.icon} />
      </div>
      <div className='rank-details'>
        <p>Rank: {playerData.global.rank.rankName}</p>
        <p>LP: {playerData.global.rank.rankScore}</p>
      </div>
    </div>
  )
}

PlayerProfile.propTypes = {}

export default PlayerProfile
