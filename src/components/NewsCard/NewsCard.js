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

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  shortDesc: PropTypes.string.isRequired
}

export default NewsCard
