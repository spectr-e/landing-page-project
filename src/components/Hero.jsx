import { heroImg } from '../assets'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full py-16 bg-white'>
      <div className='max-w-[600px] md:max-w-[1480px] m-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-start gap-4'>
          <p className='text-2xl py-2 text-[#20B486] font-medium'>
            START TO SUCCESS
          </p>

          <h1 className='md:leading-[72px] py-2 text-4xl font-semibold md:text-6xl'>
            Access to <span className='text-[#20B486]'>5000+</span> Courses from
            <span className='text-[#20B486]'> 300</span> Instructors &
            Institutions
          </h1>

          <p className='py-2 text-lg text-gray-600'>
            Various versions have evolved over the years, sometimes by accident.
          </p>

          <form className='p-4 max-w-[700px] bg-white border flex rounded-lg justify-between items-center input-box-shadow'>
            <input
              type='text'
              placeholder='What do you want to learn?'
              className='bg-white w-[80%]'
            />
            <button className='bg-transparent border-none'>
              <AiOutlineSearch
                size={20}
                className='icon'
                style={{ color: '#000' }}
              />
            </button>
          </form>
        </div>

        <img src={heroImg} alt='hero' className='order-first md:order-last' />
      </div>
    </div>
  )
}

export default Hero
