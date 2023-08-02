import React from 'react'
import PropTypes from 'prop-types'
import NewsCard from '../NewsCard/NewsCard'
import './News.css'

function News({ news }) {
  
  const displayNews = news.map(article => (
    <NewsCard 
      title={article.title}
      link={article.link}
      image={article.img}
      shortDesc={article.short_desc}
    />
  ))
  
  return (
    <div className='news-container'>
      {displayNews}
    </div>
  )
}

News.propTypes = {}

export default News
