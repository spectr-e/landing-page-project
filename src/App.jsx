import {
  Achievements,
  Categories,
  Companies,
  Courses,
  Feedback,
  Hero,
  Navbar,
} from './components/'

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='mt-[80px]'>
        <Hero />
        <Companies />
        <Courses />
        <Achievements />
        <Categories />
        <Feedback />
      </main>
    </div>
  )
}

export default App
