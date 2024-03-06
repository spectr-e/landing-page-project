import { RiQuillPenLine } from 'react-icons/ri'
import { GoArrowUpRight } from 'react-icons/go'
import {
  PiMicrophoneStage,
  PiBriefcase,
  PiSunHorizon,
  PiCamera,
} from 'react-icons/pi'
import { BsArrowUpRightSquareFill, BsCodeSlash } from 'react-icons/bs'

const CategoriesCard = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-white border rounded-md shadow-lg'>
      <div className='flex items-center gap-4'>
        <RiQuillPenLine size={28} />
        <h1 className='font-semibold'>Design</h1>
      </div>
      <GoArrowUpRight size={28} style={{ color: '#20B486' }} />
    </div>
  )
}

export default CategoriesCard
