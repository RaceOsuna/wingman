import React from 'react'
import PropTypes from 'prop-types'
import './LegendCard.css'
import { NavLink, useOutletContext } from 'react-router-dom'
import { scrollToTop } from '../../scrollToTop'

function LegendCard({ name, image }) {
  
  const { player } = useOutletContext()

  return (
    <div className='legend-card'>
      <NavLink onClick={scrollToTop} to={`/${player}/${name}`}>
        <h1>{name}</h1>
        <div className='legend-card-icon'>
          <img src={image} alt={`${name} icon`}/>
        </div>
      </NavLink>
    </div>
  )
}

LegendCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default LegendCard
