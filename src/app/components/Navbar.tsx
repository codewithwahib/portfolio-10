import React from 'react'
import { BiMenuAltRight } from "react-icons/bi";


const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-large'><b><b>Hassan Jaffer</b></b></div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href='#hero'><b>Home</b></a></li>
                <li className='menuLink'><a href='#about'><b>About</b></a></li>
                <li className='menuLink'><a href='#projects'><b>Projects</b></a></li>
                <li className='menuLink'><a href='#contact'><b>Contact</b></a></li>
            </ul>
            <BiMenuAltRight className='md:hidden' size={40} />
        </div>
      
    </div>
  )
}

export default Navbar
