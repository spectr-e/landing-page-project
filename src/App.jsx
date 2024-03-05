import { Achievements, Companies, Courses, Hero, Navbar } from './components/'

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='mt-[80px]'>
        <Hero />
        <Companies />
        <Courses />
        <Achievements />
      </main>
    </div>
  )
}

export default App
