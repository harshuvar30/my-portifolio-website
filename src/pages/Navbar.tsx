import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
       useEffect(() =>{
        const handleScroll = () => {
          if(window.scrollY > 50){
            setScrolled(true);
        }else{
          setScrolled(false);
        }
       }
       window.addEventListener('scroll', handleScroll);
       return () => {
        window.removeEventListener('scroll', handleScroll);
       }
      },[])
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
        scrolled
          ? "bg-white/70 shadow-sm border-b border-gray-200/50"
          : "bg-transparent"
      }`}>

    <div className='flex justify-between items-center h-20 px-20 max-w-7xl mx-auto'>
        <div className='text-2xl font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Harshvardhan</div>
        <div className="flex space-x-10 text-md font-small">
        <div className="relative text-black hover:cursor-pointer hover:text-purple-500 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-purple-500 hover:after:w-[140%] after:transition-all after:duration-300">
         <a href="#about">About</a>
        </div>
        <div className="relative text-black hover:cursor-pointer hover:text-purple-500 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-purple-500 hover:after:w-[140%] after:transition-all after:duration-300"><a href="#experience">Experience</a></div>
        <div className="relative text-black hover:cursor-pointer hover:text-purple-500 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-purple-500 hover:after:w-[140%] after:transition-all after:duration-300"><a href="#projects">Projects</a></div>
        <div className="relative text-black hover:cursor-pointer hover:text-purple-500 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-purple-500 hover:after:w-[140%] after:transition-all after:duration-300"><a href="#skills">Skills</a></div>
        <div className="relative text-black hover:cursor-pointer hover:text-purple-500 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-purple-500 hover:after:w-[140%] after:transition-all after:duration-300"><a href="#contact">Contact</a></div>
        {/* <div className="borde shadow-Contact
        <div className='text-black'>Download Contactsume</div>
        </div> */}
        </div>
    </div>
    </nav>
  )
}

export default Navbar