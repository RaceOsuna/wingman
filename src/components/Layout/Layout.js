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
        <NavLink to="/">Sign In</NavLink>
        <NavLink to=".">Profile</NavLink>
        <NavLink to="legends">Legends</NavLink>
        <NavLink to="news">News</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
