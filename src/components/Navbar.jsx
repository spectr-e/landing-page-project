/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { hamburgerMenu, close, logo, lock } from '../assets/'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='w-screen h-[80px] z-10 bg-white top-0 fixed drop-shadow'>
      <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
        <div className='flex items-center'>
          <img
            src={logo}
            alt='logo'
            className='ml-8 opacity-[55%] w-full h-[24px]'
          />
        </div>

        {/* Desktop menu */}
        <div className='flex items-center'>
          <ul className='hidden md:flex'>
            <li className='hover:bg-gray-100 hover:rounded-lg'>Home</li>
            <li className='hover:bg-gray-100 hover:rounded-lg'>About</li>
            <li className='hover:bg-gray-100 hover:rounded-lg'>Support</li>
            <li className='hover:bg-gray-100 hover:rounded-lg'>Platform</li>
            <li className='hover:bg-gray-100 hover:rounded-lg'>Pricing</li>
          </ul>
        </div>

        {/* Login & Get Started buttons */}
        <div className='hidden gap-2 mr-8 md:flex'>
          <button className='flex items-center justify-between gap-2 px-6 text-gray-600 bg-gray-100 hover:bg-gray-300'>
            <img src={lock} />
            Login
          </button>
          <button className='px-8 py-3 rounded-md bg-[#20B486] hover:bg-[#20b485d0] text-white font-bold'>
            Sign Up
          </button>
        </div>

        {/* Hambuger buttons */}
        <div
          className='md:hidden'
          onClick={() => {
            setToggle(!toggle)
          }}
        >
          <img
            src={toggle ? close : hamburgerMenu}
            alt='menu'
            className='cursor-pointer w-[32px] h-[32px] object-contain mr-8 '
          />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={
          toggle ? `absolute bg-white w-full px-8 md:hidden` : `hidden`
        }
      >
        <ul>
          <li className='hover:bg-gray-100 hover:rounded-lg'>Home</li>
          <li className='hover:bg-gray-100 hover:rounded-lg'>About</li>
          <li className='hover:bg-gray-100 hover:rounded-lg'>Support</li>
          <li className='hover:bg-gray-100 hover:rounded-lg'>Platform</li>
          <li className='hover:bg-gray-100 hover:rounded-lg'>Pricing</li>
          <div className='flex flex-col my-4'>
            <button className='px-8 py-4 mb-4 text-black bg-gray-100 border-none hover:bg-gray-200'>
              Login
            </button>
            <button className='px-8 py-4 hover:bg-indigo-700'>
              Get Started
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
