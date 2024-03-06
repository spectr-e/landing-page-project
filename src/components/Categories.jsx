import CategoriesCard from './CategoriesCard'
import {
  PiFileHtml,
  PiShootingStar,
  PiChatsCircle,
  PiBriefcase,
  PiCamera,
  PiMusicNoteSimple,
  PiCurrencyCircleDollar,
  PiBookOpenText,
} from 'react-icons/pi'
import { MdOutlineDesignServices } from 'react-icons/md'
import { FaUncharted } from 'react-icons/fa'
import { CgGym } from 'react-icons/cg'
import {   BsPersonWalking } from 'react-icons/bs'

const Categories = () => {
  return (
    <div className='w-full py-24  px-8 bg-[#F0FBF7]'>
      <div className='max-w-[600px] md:max-w-[1480px] m-auto'>
        <h1 className='py-4 text-3xl font-bold'>
          Most Popular <span className='text-[#20B486]'>Courses</span>
        </h1>
        <p className='text-[#6D737A]'>
          Various versions have evolved over the years, sometimes by accident.
        </p>
        <div className='grid grid-cols-2 gap-2 py-8 md:grid-cols-4'>
          {/* 1. design */}
          <CategoriesCard
            icon={<MdOutlineDesignServices size={28} />}
            title={'Design'}
          />
          {/* 2. development */}
          <CategoriesCard
            icon={<PiFileHtml size={28} />}
            title={'Development'}
          />
          {/* 3. marketing */}
          <CategoriesCard
            icon={<PiChatsCircle size={28} />}
            title={'Marketing'}
          />
          {/* 4. business */}
          <CategoriesCard icon={<PiBriefcase size={28} />} title={'Business'} />
          {/* 5. lifestyle */}
          <CategoriesCard
            icon={<PiShootingStar size={28} />}
            title={'Lifestyle'}
          />
          {/* 6. photography */}
          <CategoriesCard icon={<PiCamera size={28} />} title={'Photograpy'} />
          {/* 7. music */}
          <CategoriesCard
            icon={<PiMusicNoteSimple size={28} />}
            title={'Music'}
          />
          {/* 8. data science */}
          <CategoriesCard
            icon={<FaUncharted size={28} />}
            title={'Data Science'}
          />
          {/* 9.personal development */}
          <CategoriesCard
            icon={<BsPersonWalking size={28} />}
            title={'Personal Development'}
          />
          {/* 10. health and fitness */}
          <CategoriesCard
            icon={<CgGym size={28} />}
            title={'Heatlh & Fitness'}
          />
          {/* 11. finance */}
          <CategoriesCard
            icon={<PiCurrencyCircleDollar size={28} />}
            title={'Finance'}
          />
          {/* 12. teaching */}
          <CategoriesCard
            icon={<PiBookOpenText size={28} />}
            title={'Teaching'}
          />
        </div>
      </div>
    </div>
  )
}

export default Categories
