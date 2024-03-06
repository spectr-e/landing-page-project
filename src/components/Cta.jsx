import { cta } from '../assets'

const Cta = () => {
  return (
    <div className='w-full px-8 py-16 bg-[#F0FBF7]'>
      <div className='max-w-[600px] md:max-w-[1480px] m-auto items-center grid md:grid-cols-2'>
        <img src={cta} alt='cta' className='hidden md:flex md:order-first' />
        <div className=''>
          <h1 className='py-4 text-3xl font-bold'>
            Join <span className='text-[#20B486]'>World&apos;s Largest </span>{' '}
            Learning Platform Today!
          </h1>
          <p className='font-semibold text-[#6D737A]'>
            Start learning by registering for free.
          </p>
          <button className='px-8 my-8 max-[780px]:w-full py-2 rounded-md bg-[#20B486] hover:bg-[#20b485d0] text-white font-semibold'>
            Sign Up For Free
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cta
