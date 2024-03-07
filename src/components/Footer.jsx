import {
  FaFacebookF,
  FaInstagram,
  FaDribbble,
  FaBehance,
  FaLinkedinIn,
} from 'react-icons/fa'
import { logo } from '../assets'

const Footer = () => {
  return (
    <div className='w-full px-8 py-24 bg-white'>
      <div className='max-w-[600px] md:max-w-[1480px] grid gap-2 py-8 lg:grid-cols-5 max-[1080px]:grid-cols-2 m-auto'>
        {/* col A */}
        <div className='col-span-2'>
          <img src={logo} alt='' className='h-[24px]' />
          <h3 className='pt-8 text-2xl font-bold'>Contact Us</h3>
          <p className='py-2 text-[#6D737A]'>Call: +123 456 700</p>
          <p className='py-2 text-[#6D737A]'>
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit. Sunt, officiis!
          </p>
          <p className='text-[#6D737A] py-2'>Email: exampomail@mail.com</p>
          <div className='flex gap-4 py-4'>
            <div className='bg-[#E9F8F3] rounded-lg p-4'>
              <FaFacebookF size={20} style={{ color: '#1A906B' }} />
            </div>

            <div className='bg-[#E9F8F3] rounded-lg p-4'>
              <FaInstagram size={20} style={{ color: '#1A906B' }} />
            </div>

            <div className='bg-[#E9F8F3] rounded-lg p-4'>
              <FaDribbble size={20} style={{ color: '#1A906B' }} />
            </div>

            <div className='bg-[#E9F8F3] rounded-lg p-4'>
              <FaLinkedinIn size={20} style={{ color: '#1A906B' }} />
            </div>

            <div className='bg-[#E9F8F3] rounded-lg p-4'>
              <FaBehance size={20} style={{ color: '#1A906B' }} />
            </div>
          </div>
        </div>

        {/* col B */}
        <div className='max-[780px]:mt-8'>
          <h3 className='text-2xl font-bold'>Explore</h3>
          <ul className='py-6 text-[#6D737A] '>
            <li className='px-0 py-2 font-normal'>Home</li>
            <li className='px-0 py-2 font-normal'>About</li>
            <li className='px-0 py-2 font-normal'>Course</li>
            <li className='px-0 py-2 font-normal'>Blog</li>
            <li className='px-0 py-2 font-normal'>Contact</li>
          </ul>
        </div>

        {/* col C */}
        <div className='max-[780px]:mt-8'>
          <h3 className='text-2xl font-bold'>Category</h3>
          <ul className='py-6 text-[#6D737A] '>
            <li className='px-0 py-2 font-normal'>Design</li>
            <li className='px-0 py-2 font-normal'>Development</li>
            <li className='px-0 py-2 font-normal'>Marketing</li>
            <li className='px-0 py-2 font-normal'>Business</li>
            <li className='px-0 py-2 font-normal'>Lifestyle</li>
            <li className='px-0 py-2 font-normal'>Photography</li>
            <li className='px-0 py-2 font-normal'>Music</li>
          </ul>
        </div>

        {/* col D */}
        <div className='max-[1080px]:col-span-2'>
          <h3 className='text-2xl font-bold'>Subscribe</h3>
          <p className='py-8 text-[#6D737A]'>
            Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit. Sunt, officiis!
          </p>

          <form action='' className=''>
            <input
              type='email'
              className='bg-[#F2F3F4] p-4 w-full rounded'
              placeholder='Email here'
            />
            <button className='px-8 my-4 max-[1080px]:w-full py-4 rounded bg-[#20B486] hover:bg-[#20b485d0] text-white font-medium'>
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
