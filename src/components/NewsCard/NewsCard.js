import React from 'react'
import PropTypes from 'prop-types'
import './NewsCard.css'
import { Link } from 'react-router-dom'

function NewsCard({ title, link, image, shortDesc }) {
  return (
    <div className='news-card'>
      <h4><Link to={link}>{title}</Link></h4>
      <img src={image} alt={title + 'image'} />
      <p>{shortDesc}</p>
    </div>
  )
}

NewsCard.propTypes = {}

export default NewsCard
