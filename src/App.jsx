import {
  Achievements,
  Categories,
  Companies,
  Courses,
  Cta,
  Feedback,
  Footer,
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
        <Footer />
      </main>
    </div>
  )
}

export default App
