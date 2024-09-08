import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav className='border-gray-200 bg-gray-900'>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 text-white">
          <Link to='/'>Home</Link>
          <Link to='/signin'>Sign in / Sign up</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header