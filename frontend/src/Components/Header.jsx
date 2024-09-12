import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg?react';
import { UserContext } from '../UserContext';

const Header = () => {
  const context = React.useContext(UserContext)
  return (
    <header className='header'>
      <nav className="navbar">
        <Link to='/'>
          <Logo />
        </Link>
        <div className='space-x-2'>
          {context.data ? (
            <Link to='/profile'>My profile</Link>
          ) : (
            <Link to='/auth/signin'>Sign in</Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header