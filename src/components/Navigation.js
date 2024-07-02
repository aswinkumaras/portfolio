import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Navigation = () => {
    const[toggleMenu,setToggleMenu]=useState(false)
  return (
    <nav className='flex justify-between font-nav-font px-5 bg-gradient-to-b from-black to-yellow-400 font-bold text-2xl py-4 mix-blend-multiply'>
        <h1 className='text-white'>My-Portfolio</h1>
        <div className='hidden md:block'>
            <ul className='flex gap-3 text-white hover:'>
                <li><a className='hover:text-black' href="/">Home</a></li>
                <li><a className='hover:text-black' href="#about">About</a></li>
                <li><a className='hover:text-black' href="#projects">Projects</a></li>
                <li><a className='hover:text-black' href="#resume">Resume</a></li>
                <li><a className='hover:text-black' href="#contact">Contact</a></li>
            </ul>
        </div>
        {toggleMenu && (<div className='block md:hidden '>
            <ul onClick={()=>setToggleMenu(!toggleMenu)} className='flex flex-col gap-3 text-white mobile-view'>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>) }
        <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-7' /></button>
    </nav>
  )
}

export default Navigation