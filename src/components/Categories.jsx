import CategoriesCard from './CategoriesCard'

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
        <div className='grid grid-cols-4 grid-rows-3 gap-2 py-8'>
          {/* 1. design */}
          <CategoriesCard />
          {/* 2. development */}
          <CategoriesCard />
          {/* 3. marketing */}
          <CategoriesCard />
          {/* 4. business */}
          <CategoriesCard />
          {/* 5. lifestyle */}
          <CategoriesCard />
          {/* 6. photography */}
          <CategoriesCard />
          {/* 7. music */}
          <CategoriesCard />
          {/* 8. data science */}
          <CategoriesCard />
          {/* 9.personal development */}
          <CategoriesCard />
          {/* 10. health and fitness */}
          <CategoriesCard />
          {/* 11. finance */}
          <CategoriesCard />
          {/* 12. teaching */}
          <CategoriesCard />
        </div>
      </div>
    </div>
  )
}

export default Categories
