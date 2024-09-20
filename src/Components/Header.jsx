import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg?react';
import { UserContext } from '../UserContext';

const Header = () => {
  const context = React.useContext(UserContext)
  console.log(context.data.username)
  return (
    <header className='header'>
      <nav className="navbar">
        <Link to='/'>
          <Logo />
        </Link>
        <div className='space-x-2'>
          {context.data ? (
            <Link to='/profile'>{context.data.username}</Link>
          ) : (
            <Link to='/auth/signin'>Sign in</Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header