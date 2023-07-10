import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
  return (
    <div className='navBar'>
      <div className='logo'>
        <Link to='/'><h2>Gaza Sky Geeks</h2></Link>
      </div>
      <ul className='navs'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/profile'>
          <li>Profile</li>
        </Link>
        <Link to='/counter'>
          <li>Counter</li>
        </Link>
      </ul>
    </div>
  )
}

export default Header
