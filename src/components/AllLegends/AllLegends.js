import React from 'react'
import PropTypes from 'prop-types'
import LegendCard from '../LegendCard/LegendCard'
import './AllLegends.css'
import { useSearchParams } from 'react-router-dom'

function AllLegends({ playerData }) {
  
  const [searchParams, setSearchParams] = useSearchParams()
  const filteredLegends = searchParams.get('legends')

  const legends = Object.keys(playerData.legends.all).filter(key => key !== 'Global')
  const displayLegends = filteredLegends ? legends.filter(legend => legend.toLowerCase().includes(filteredLegends.toLowerCase())) : legends
  
  const allLegends = displayLegends.map(legend => {
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
    <div className='legend-page'>
      <div className='search'>
        <input type='text' name='legends' placeholder='Search Legends' value={filteredLegends || ''} onChange={e => setSearchParams({'legends': e.target.value})} />
      </div>
      <div className='legend-container'>
        {allLegends}
      </div>
    </div>
      
  )
}

AllLegends.propTypes = {}

export default AllLegends
