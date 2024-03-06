/* eslint-disable react/prop-types */
import Rating from './Rating'

const CourseCard = ({ course }) => {
  return (
    <div className='m-2 my-4 overflow-hidden bg-white rounded-2xl drop-shadow-md'>
      <img
        src={course.linkImg}
        alt='card'
        className='object-cover w-full h-40 '
      />

      <div className='p-4 border border-b'>
        <h1 className='py-2 truncate'>{course.title}</h1>
        <Rating stars={course.rating} reviews={course.reviews} />
      </div>

      <h3 className='p-5 text-xl'>{course.price}</h3>
      <div className='absolute top-0 px-2 py-[2.4px] rounded font-bold m-4 bg-white'>
        {course.category}
      </div>
    </div>
  )
}

export default CourseCard
