import React from 'react'
import PropTypes from 'prop-types'
import './PlayerProfile.css'

function PlayerProfile({ playerData }) {
  
  const toggleStatus = playerData.realtime.currentState === 'inMatch' ? 'green' : 'red'

  function showStatus() {
    if (playerData.realtime.currentState === 'inMatch') {
      return 'online'
    } else {
      return 'offline'
    }
  }

  return (
    <div className='player-profile'>
      <div className='container'>
        <div className='name-avatar'>
          <img src={playerData.global.avatar} />
          <h1>{playerData.global.name}</h1>
        </div>
        <p className="status" style={{color: toggleStatus}}>{showStatus()}</p>
        <div className='legend-icon'>
          <img src={playerData.legends.selected.ImgAssets.icon} />
        </div>
      </div>
      <div className='rank-details'>
        <p>Legend: {playerData.legends.selected.LegendName}</p>
        <p>Rank: {playerData.global.rank.rankName}</p>
        <p>LP: {playerData.global.rank.rankScore}</p>
        {playerData.total.kills ? <p>Total Kills: {playerData.total.kills.value}</p> : null}
        {playerData.total.damage ? <p>Total Damage: {playerData.total.damage.value}</p> : null}
      </div>
    </div>
  )
}

PlayerProfile.propTypes = {}

export default PlayerProfile
