import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full flex justify-between py-5 px-2 md:px-10 md:py-10'>
        <div>
            <h1 className='font-bold text-xl text-blue-700'>To-Do</h1>

        </div>
        <div>
            <Link to={'/signup'} className='py-2 px-5 border-2 rounded-full font-medium hover:bg-blue-700 hover:text-white transition duration-200 ease-in-out'>Sign Up</Link>
            <Link to={'/login'} className='bg-blue-700 py-2 px-5 text-white rounded-full ms-4 md:ms-8 font-medium hover:bg-white hover:text-blue-700 transition duration-200 ease-in-out hover:border-2 border-2'>Log In</Link>
        </div>
    </div>
  )
}

export default Header