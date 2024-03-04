import { blogImg1 } from '../assets'
import Rating from './Rating'

const Card = () => {
  return (
    <div className='overflow-hidden bg-white rounded-2xl drop-shadow-md'>
      <img src={blogImg1} alt='card' className='object-cover w-full h-40 ' />

      <div className='p-4 border border-b'>
        <h1 className='py-2'>Python Programming</h1>
        <Rating stars={4} />
      </div>

      <h3 className='p-5 text-xl'>$500</h3>
      <div className='absolute top-0 px-2 py-[2.4px] rounded font-bold m-4 bg-white'>
        HTML
      </div>
    </div>
  )
}

export default Card
