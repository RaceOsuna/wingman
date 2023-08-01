import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {



  return (
    <div>
      <header className="app-header">
        <h1>Wingman</h1>
      </header>
      <nav className='header-nav'>
        <NavLink to="/" >New User</NavLink>
        <NavLink to="." end className={({isActive}) => isActive ? 'active' : 'header-nav a'}>Profile</NavLink>
        <NavLink to="legends" className={({isActive}) => isActive ? 'active' : 'header-nav a'}>Legends</NavLink>
        <NavLink to="news" className={({isActive}) => isActive ? 'active' : 'header-nav a'}>News</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
