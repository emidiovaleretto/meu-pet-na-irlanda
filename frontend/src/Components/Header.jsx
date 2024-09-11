import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg?react';

const Header = () => {
  return (
      <header className='header'>
        <nav className="navbar">
          <Link to='/'>
            <Logo />
          </Link>
          <div className='space-x-2'>
            <Link to='/auth/signin'>Sign in</Link>
            <Link to='/auth/signup' className='signup'>Sign up</Link>
          </div>
        </nav>
      </header>
  )
}

export default Header