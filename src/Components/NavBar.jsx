

import { Menu, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'



const NavBar = () => {

    const [isOpen , setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleHandler = () =>{
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY >= 33) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <>
    <nav className={`w-full  z-50 fixed ${isScrolled ? 'bg-white': 'bg-transparent'}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-[70px]'>
            <div className='flex items-center'>
                <span className='text-2xl font-semibold text-amber-800'>Paradise Hunt</span>
            </div>


            {/* desktop view */}
            <div className='md:flex hidden ml-12  items-center font-medium    gap-8'>
                <a className='text-gray-700 
                transition-colors hover:text-amber-900  rounded'>Home</a>
                <a className='text-gray-700 hover:text-amber-900 transition-colors'>About Us</a>
                <a className='text-gray-700 hover:text-amber-900 transition-colors'>Our Features</a>
                <a className='text-gray-700 hover:text-amber-900 transition-colors'>On Sale</a>
               
               
                <a className='text-gray-700 hover:text-amber-900 transition-colors'>Our Services</a>
                <a className='text-gray-700 hover:text-amber-900 transition-colors'>Demo</a>
                <a className='text-gray-700 hover:text-amber-900 transition-colors'>Our Clients</a>
               
            </div >


            <div className='hidden md:flex items-center'>
            <button className='text-white inline-flex bg-amber-900 py-2 outline-none rounded px-4'>Contact Us</button>
            </div>

            
            {/* mobile menu */}

          <div className='md:hidden flex items-center'>
            <button className='inline-flex items-center justify-center p-2 rounded-md' onClick={toggleHandler}>
                {isOpen ? <X  className='h-6 w-6'/> : <Menu className='h-6 w-6'/>}
            </button>
          </div>
        </div>
      </div>

 

 {/* mobile menu */}

      {isOpen &&(
        <div className='md:hidden'>
            <div className='px-2 flex flex-col pt-2 pb-3 space-y-1 sm:px-3 bg-white'>
            <a className='text-gray-700 
                transition-colors hover:text-amber-900  rounded'>Home</a>
                <a className='text-gray-700 hover:text-amber-900 transition-colors'>About Us</a>
                <a className='text-gray-700 hover:text-amber-900 transition-colors'>Our Features</a>
                <a className='text-gray-700 hover:text-amber-900 transition-colors'>On Sale</a>
               
               
                <a className='text-gray-700 hover:text-amber-900 transition-colors'>Our Services</a>
                <a className='text-gray-700 hover:text-amber-900 transition-colors'>Demo</a>
                <a className='text-gray-700 hover:text-amber-900 transition-colors'>Our Clients</a>
                <a className='text-gray-700 hover:text-amber-900 transition-colors'>Contact Us</a>
              
               
            </div>

        </div>
      )}
       
    </nav>
    </>
  )
}

export default NavBar