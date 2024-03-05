import Card from './Card'
import Slider from 'react-slick'
import { courses } from '../data/Courses'

const Courses = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  }
  return (
    <div className='w-full py-24  px-8 bg-[#E9F8F3B2]'>
      <div className='max-w-[600px] md:max-w-[1480px] m-auto'>
        <h1 className='py-4 text-3xl font-bold'>
          Most Popular <span className='text-[#20B486]'>Courses</span>
        </h1>
        <p className='text-[#6D737A]'>
          Various versions have evolved over the years, sometimes by accident.
        </p>
        <Slider {...settings}>
          {courses.map((course) => (
            <Card course={course} key={course.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Courses
