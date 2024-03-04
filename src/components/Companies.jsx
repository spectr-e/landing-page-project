import {
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
} from '../assets'

const Companies = () => {
  return (
    <div className='w-full py-[48px] bg-white'>
      <div className='max-w-[600px] md:max-w-[1480px] m-auto'>
        <h1 className='text-2xl font-bold text-center text-[#536E96]'>
          Trusted by over 25,000 teams around the world.
        </h1>
        <p className='my-4 text-[#536E96] text-xl text-center'>
          Leading companies use the same courses to help employees keep their
          skills upto date.
        </p>
        <div className='flex justify-between mt-8 '>
          <img src={companyLogo1} alt='logo' />
          <img src={companyLogo2} alt='logo' />
          <img src={companyLogo3} alt='logo' className='hidden md:flex' />
          <img src={companyLogo4} alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default Companies
