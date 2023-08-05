import React from 'react'
import PropTypes, { string } from 'prop-types'
import { useParams } from 'react-router-dom'
import './LegendProfile.css'

function LegendProfile({ playerData }) {
  
  const { name } = useParams()
  
  const legend = playerData.legends.all[name]

  return (
    <div className='legend-profile'>
      <div className='profile'>
        <img src={legend.ImgAssets.banner} alt={`${name} icon`} />
        <h1>{name}</h1>
        <div className="legend-stats">
          <p>{legend.data ? 'Kills:' + ' ' + legend.data[0].value : 'Kills:' + ' ' + '0'}</p>
          <p>{'Top Percentile:' + ' ' + (legend.data && legend.data[0].rank.topPercent !== "NOT_CALCULATED_YET" ? Math.ceil(legend.data[0].rank.topPercent) + '%' : 'No Data')}</p>
        </div>
      </div>
    </div>
  )
}

LegendProfile.propTypes = {
  playerData: PropTypes.object.isRequired,
}

export default LegendProfile
