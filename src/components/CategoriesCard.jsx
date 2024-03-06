import { RiQuillPenLine } from 'react-icons/ri'
import { GoArrowUpRight } from 'react-icons/go'
import {
  PiMicrophoneStage,
  PiBriefcase,
  PiSunHorizon,
  PiCamera,
} from 'react-icons/pi'
import { BsCodeSlash } from 'react-icons/bs'

const CategoriesCard = () => {
  return (
    <div className='category-card flex items-center justify-between p-4 bg-white border border-transparent group/edit hover:cursor-pointer hover:border-[#20B486] rounded-md shadow-lg'>
      <div className='flex items-center gap-2'>
        <RiQuillPenLine size={28} />
        <h1 className='font-semibold'>Design</h1>
      </div>
      <div className='group-hover/edit:bg-[#20B486] rounded-lg p-2'>
        <GoArrowUpRight
          size={24}
          style={{ color: '#20B486' }}
          className='arrow-icon'
        />
      </div>
    </div>
  )
}

export default CategoriesCard
