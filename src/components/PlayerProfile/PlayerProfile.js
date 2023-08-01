import React from 'react'
import PropTypes from 'prop-types'
import './PlayerProfile.css'
import { useEffect, useState } from'react'
import { NavLink } from'react-router-dom'

function PlayerProfile({ playerData }) {

  const [news, setNews] = useState([])

  // useEffect(() => {
  //   fetch(`https://api.mozambiquehe.re/news?auth=bae15f3f336782882976819cd65d9ef3`)
  //   .then(res => res.json())
  //   .then(data => setNews(data))
  // }, [])

  // const toggleStatus = () => {
  //   if (playerData.realtime.currentState === 'online') {
  //     return 'green'
  //   } else {
  //     return 'red'
  //   }
  // }
  
  const toggleStatus = playerData.realtime.currentState === 'online' ? 'green' : 'red'

  console.log(news)

  return (
    <div className='player-profile'>
      <div className='container'>
        <div className='name-avatar'>
          <img src={playerData.global.avatar} />
          <h1>{playerData.global.name}</h1>
        </div>
        <p className="status" style={{color: toggleStatus}}>{playerData.realtime.currentState}</p>
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
