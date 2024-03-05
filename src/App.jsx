import {
  Achievements,
  Categories,
  Companies,
  Courses,
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
      </main>
    </div>
  )
}

export default App
