import { achievement } from '../assets'
import { PiGraduationCapDuotone, PiStudent, PiUsersThree } from 'react-icons/pi'
import { IoVideocamOutline } from 'react-icons/io5'

const Achievements = () => {
  return (
    <div className='w-full px-8 py-16 bg-white'>
      <div className='max-w-[600px] md:max-w-[1480px] m-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <h1 className='md:leading-[72px] text-2xl font-bold md:text-4xl'>
            Our <span className='text-[#20B486]'>Achievements</span>
          </h1>
          <p className='text-lg text-gray-600'>
            Various versions have evolved over the years, sometimes by accident.
          </p>
          <div className='grid grid-cols-2 grid-rows-2 py-8'>
            {/* 1 */}
            <div className='flex py-6 '>
              <div className='p-4  rounded-xl bg-[#E9F8F3]'>
                <PiGraduationCapDuotone
                  size={32}
                  style={{ color: '#1A906B' }}
                />
              </div>
              <div className='px-4'>
                <h1 className='text-2xl font-semibold'>300</h1>
                <p className='text-[#6D737A]'>Instructor</p>
              </div>
            </div>
            {/* 2 */}
            <div className='flex py-6 '>
              <div className='p-4  rounded-xl bg-[#FFFAF5]'>
                <IoVideocamOutline size={32} style={{ color: '#FFC27A' }} />
              </div>
              <div className='px-4'>
                <h1 className='text-2xl font-semibold'>10,000+</h1>
                <p className='text-[#6D737A]'>Videos</p>
              </div>
            </div>
            {/* 3 */}
            <div className='flex py-6 '>
              <div className='p-4  rounded-xl bg-[#FFEEF0]'>
                <PiStudent size={32} style={{ color: '#ED4459' }} />
              </div>
              <div className='px-4'>
                <h1 className='text-2xl font-semibold'>20,000+</h1>
                <p className='text-[#6D737A]'>Students</p>
              </div>
            </div>
            {/* 4 */}
            <div className='flex py-6 '>
              <div className='p-4  rounded-xl bg-[#F0F7FF]'>
                <PiUsersThree size={32} style={{ color: '#0075FD' }} />
              </div>
              <div className='px-4'>
                <h1 className='text-2xl font-semibold'>100,000+</h1>
                <p className='text-[#6D737A]'>Users</p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={achievement}
          alt='hero'
          className='order-first hidden m-auto md:flex md:order-last'
        />
      </div>
    </div>
  )
}

export default Achievements
