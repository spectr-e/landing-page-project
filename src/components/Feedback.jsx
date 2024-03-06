import Slider from 'react-slick'
import { FeedbackCard } from '../components'

const Feedback = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className='w-full px-8 py-24 bg-white'>
      <div className='max-w-[600px] md:max-w-[1480px] m-auto'>
        <h1 className='py-4 text-3xl font-bold'>
          Student <span className='text-[#20B486]'>Feedback</span>
        </h1>
        <p className='text-[#6D737A]'>
          Various versions have evolved over the years, sometimes by accident.
        </p>
        <Slider {...settings}>
          <FeedbackCard />
          <FeedbackCard />
        </Slider>
      </div>
    </div>
  )
}

export default Feedback
