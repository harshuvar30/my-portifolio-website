import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <div className=''>
        <div className='min-h-screen flex justify-center items-center flex-col bg-linear-to-b from-gray-50 to-gray-100'>
          <Navbar/>
          <Hero/>
          <About />
          <Experience />
          <Projects/>
          <Skills />
          <Contact/>
        </div>
      </div>
    </>
  )
}

export default App
