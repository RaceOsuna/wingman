import React from 'react'
import PropTypes from 'prop-types'
import LegendCard from '../LegendCard/LegendCard'
import './AllLegends.css'

function AllLegends({ playerData }) {
  // playerData.legends.all[legend]
  const legends = Object.keys(playerData.legends.all).filter(key => key !== 'Global')
  const allLegends = legends.map(legend => {
    // console.log(playerData.legends.all[legend].data)
    let data = playerData.legends.all[legend].data
    let images = playerData.legends.all[legend].ImgAssets
    return (
    <LegendCard
        key={legend}
        name={legend}
        kills={data ? 'kills:' + ' ' + data[0].value : 'kills: 0'}
        image={images ? images.icon : 'coming soon'}
      />
    )
  })
  return (
    <div className='legend-container'>
      {allLegends}
    </div>
  )
}

AllLegends.propTypes = {}

export default AllLegends
