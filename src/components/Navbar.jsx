/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { hamburgerMenu, close, logo } from '../assets/'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='w-screen h-[80px] z-10 bg-white top-0 fixed drop-shadow'>
      <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
        <div className='flex items-center'>
          <img
            src={logo}
            alt='logo'
            className='sm:ml-8 ss:ml-8 md:ml-4 opacity-[55%] w-full h-[24px]'
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
        <div className='hidden md:flex sm:mr-8 md:mr-8'>
          <button className='px-8 py-5 mr-4 text-black bg-gray-100 hover:bg-gray-200'>
            Login
          </button>
          <button className='px-8 py-4 hover:text-gray-900 hover:bg-[#20B486]/90'>
            Get Started
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
