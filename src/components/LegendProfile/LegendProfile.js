import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import './LegendProfile.css'

function LegendProfile({ playerData }) {
  
  const { name } = useParams()
  
  const legend = playerData.legends.all[name]

  return (
    <div className='legend-profile'>
      <div className='profile'>
        <img src={legend.ImgAssets.banner} />
        <h1>{name}</h1>
        <div className="legend-stats">
          <p>{legend.data ? 'Kills:' + ' ' + legend.data[0].value : 'kills:' + ' ' + '0'}</p>
          <p>{legend.data? 'Top Percentile:' + ' ' + Math.ceil(legend.data[0].rank.topPercent) + '%' : 'Top Percentile: No Data'}</p>
        </div>
      </div>
    </div>
  )
}

LegendProfile.propTypes = {
  playerData: PropTypes.object.isRequired,
}

export default LegendProfile
