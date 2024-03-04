import { Companies, Courses, Hero, Navbar } from './components/'

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='mt-[80px] mx-8'>
        <Hero />
        <Companies />
        <Courses />
      </main>
    </div>
  )
}

export default App
