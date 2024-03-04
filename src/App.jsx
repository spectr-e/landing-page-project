import { Companies, Hero, Navbar } from './components/'

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='mt-[80px] mx-8'>
        <Hero />
        <Companies />
      </main>
    </div>
  )
}

export default App
