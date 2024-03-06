import { avatar } from '../assets'
import { BiSolidQuoteRight } from 'react-icons/bi'

const FeedbackCard = () => {
  return (
    <div className='p-4 mx-2 my-4 overflow-hidden bg-white rounded-2xl drop-shadow-md'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img src={avatar} alt='avatar' className='' />
          <div className=''>
            <h1 className='text-xl font-semibold'>Jenny Wilson</h1>
            <p className=''>UI-UX Designer</p>
          </div>
        </div>
        <BiSolidQuoteRight size={44} style={{ color: '#20B486' }} />
      </div>

      <div className='py-8'>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          laudantium, a cupiditate sit soluta tempora nostrum aperiam corporis,
          fugit culpa minima ab sunt quasi quae, quod debitis eveniet ratione
          nam. <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
          accusantium autem voluptas eligendi consequatur cupiditate illum velit
          voluptatum dolor dignissimos?
        </h3>
      </div>
    </div>
  )
}

export default FeedbackCard
