import React from 'react'
import PropTypes from 'prop-types'
import NewsCard from '../NewsCard/NewsCard'

function News({ news }) {
  
  const displayNews = news.map(article => (
    <NewsCard 
      title={article.title}
      link={article.link}
      image={article.image}
      shortDesc={article.short_desc}
    />
  ))
  
  return (
    <div>
      {displayNews}
    </div>
  )
}

News.propTypes = {}

export default News
