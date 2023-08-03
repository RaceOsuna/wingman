import React from 'react'
import PropTypes from 'prop-types'
import './LegendCard.css'

function LegendCard({ name, kills, image }) {
  return (
    <div className='legend-card'>
        <h1>{name}</h1>
      <div className='legend-card-icon'>
        <img src={image} />
      </div>
      <div className='card-details'>
        <p>{kills}</p>
      </div>
    </div>
  )
}

LegendCard.propTypes = {}

export default LegendCard
