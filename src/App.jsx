import { Hero, Navbar } from './components/'

const App = () => {
  return (
    <div>
      <Navbar />
      <main className='mt-[80px]'>
        <Hero />
      </main>
    </div>
  )
}

export default App
