import {
  Achievements,
  Categories,
  Companies,
  Courses,
  Cta,
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
        <Cta />
      </main>
    </div>
  )
}

export default App
