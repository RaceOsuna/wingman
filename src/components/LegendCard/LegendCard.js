import React from 'react'
import PropTypes from 'prop-types'
import './LegendCard.css'

function LegendCard({ name, kills, image }) {
  return (
    <div className='legend-card'>
      <div className='legend-card-icon'>
        <img src={image} />
      </div>
      <h1>{name}</h1>
      <p>{kills}</p>
    </div>
  )
}

LegendCard.propTypes = {}

export default LegendCard
