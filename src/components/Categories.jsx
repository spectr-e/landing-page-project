import { RiQuillPenLine } from 'react-icons/ri'
import { GoArrowUpRight } from 'react-icons/go'
import {
  PiMicrophoneStage,
  PiBriefcase,
  PiSunHorizon,
  PiCamera,
} from 'react-icons/pi'
import { BsArrowUpRightSquareFill, BsCodeSlash } from 'react-icons/bs'

const Categories = () => {
  return (
    <div className='w-full py-24  px-8 bg-[#E9F8F3B2]'>
      <div className='max-w-[600px] md:max-w-[1480px] m-auto'>
        <h1 className='py-4 text-3xl font-bold'>
          Most Popular <span className='text-[#20B486]'>Courses</span>
        </h1>
        <p className='text-[#6D737A]'>
          Various versions have evolved over the years, sometimes by accident.
        </p>
        <div className='grid grid-cols-4 grid-rows-3 py-8'>
          {/* 1. design */}
          <div className='flex items-center justify-between p-4 border'>
            <div className='flex items-center'>
              <RiQuillPenLine size={32} />
              <h1 className=''>Design</h1>
            </div>
            <GoArrowUpRight size={32} />
          </div>

          {/* 2. development */}
          <div className='flex items-center justify-between border'>
            <div className='flex items-center'>
              <BsCodeSlash size={32} />
              <h1 className=''>Development</h1>
            </div>
            <GoArrowUpRight size={32} />
          </div>

          {/* 3. marketing */}
          <div className='flex items-center justify-between border'>
            <div className='flex items-center'>
              <PiMicrophoneStage size={32} />
              <h1 className=''>Marketing</h1>
            </div>
            <GoArrowUpRight size={32} />
          </div>
          {/* 4. business */}
          <div className='flex items-center justify-between border'>
            <div className='flex items-center'>
              <PiBriefcase size={32} />
              <h1 className=''>Business</h1>
            </div>
            <GoArrowUpRight size={32} />
          </div>

          {/* 5. lifestyle */}
          <div className='flex items-center justify-between border'>
            <div className='flex items-center'>
              <PiSunHorizon size={30} />
              <h1 className=''>Lifestyle</h1>
            </div>
            <GoArrowUpRight size={32} />
          </div>

          {/* 6. photography */}
          <div className='flex items-center justify-between border'>
            <div className='flex items-center'>
              <PiCamera size={32} />
              <h1 className=''>Photography</h1>
            </div>
            <GoArrowUpRight size={32} />
          </div>

          {/* 7. music */}
          <div className='flex items-center justify-between border'>
            <div className='flex items-center'>ABC</div>
            <h1 className=''>ABC</h1>
            <GoArrowUpRight size={32} />
          </div>

          {/* 8. data science */}
          <div className='flex items-center justify-between border'>
            <div className='flex items-center'>ABC</div>
            <h1 className=''>ABC</h1>
            <GoArrowUpRight size={32} />
          </div>

          {/* 9.personal development */}
          <div className='flex items-center justify-between border'>
            <div className='flex items-center'>ABC</div>
            <h1 className='border'>ABC</h1>
            <GoArrowUpRight size={32} />
          </div>

          {/* 10. health and fitness */}
          <div className='flex items-center justify-between border'>
            <div className='flex items-center'>ABC</div>
            <h1 className=''>ABC</h1>
            <GoArrowUpRight size={32} />
          </div>

          {/* 11. finance */}
          <div className='flex items-center justify-between border'>
            <div className='flex items-center'>ABC</div>
            <h1 className=''>ABC</h1>
            <GoArrowUpRight size={32} />
          </div>

          {/* 12. teaching */}
          <div className='flex items-center justify-between border'>
            <div className='flex items-center'>ABC</div>
            <h1 className=''>ABC</h1>
            <GoArrowUpRight size={32} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
