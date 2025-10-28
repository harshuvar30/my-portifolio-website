import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <div className='min-h-screen flex justify-center items-center flex-col bg-linear-to-b from-gray-50 to-gray-100'>
          <Navbar/>
          <Hero/>
          <About />
          <Experience />
          <Projects/>
        </div>
      </div>
    </>
  )
}

export default App
