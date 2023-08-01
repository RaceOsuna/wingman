import React from 'react'
import PropTypes from 'prop-types'
import './LegendCard.css'

function LegendCard({ name, kills, image }) {
  return (
    <div className='legend-card'>
      <div className='legend-card-icon'>
        <img src={image} />
      </div>
      <div className='card-details'>
        <h1>{name}</h1>
        <p>{kills}</p>
      </div>
    </div>
  )
}

LegendCard.propTypes = {}

export default LegendCard
