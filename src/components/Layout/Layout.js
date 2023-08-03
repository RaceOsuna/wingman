import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

function Layout({ setPlayer, setPlatform, setPlayerData, player }) {

  function clearUserData() {
    setPlatform('')
    setPlayer('')
    setPlayerData({})
  }

  return (
    <div>
      <header className="app-header">
        <div>
          <h1>Wingman</h1>
        </div>  
        <nav className='header-nav'>
          <NavLink to="/" onClick={clearUserData} >New User</NavLink>
          <NavLink to="." end className={({isActive}) => isActive ? 'active' : 'header-nav a'}>Stats</NavLink>
          <NavLink to="legends" className={({isActive}) => isActive ? 'active' : 'header-nav a'}>Legends</NavLink>
          <NavLink to="news" className={({isActive}) => isActive ? 'active' : 'header-nav a'}>News</NavLink>
        </nav>
      </header>
      <main>
        <Outlet context={{player}}/>
      </main>
    </div>
  )
}

Layout.propTypes = {
  setPlatform: PropTypes.func.isRequired,
  setPlayer: PropTypes.func.isRequired,
  setPlayerData: PropTypes.func.isRequired
}

export default Layout
