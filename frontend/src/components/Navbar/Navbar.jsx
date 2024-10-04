import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='xl:w-[1200px] 2xl:w-[1440px] h-[70px] flex items-center justify-between bg-[#FAFAFA] text-[18px] m-auto z-50'>
      <div className='w-[160px]'>
        <img src="img/logo.png" alt="logo" />
      </div>
      <ul className='flex items-center gap-[40px]'>
        <li>Home</li>
        <li>Service</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Link to="/getstarted" className='w-[160px] h-[48px] bg-[#009BA9] cursor-pointer rounded-lg flex items-center justify-center text-white'>Get Started</Link>
    </div>
  )
}
