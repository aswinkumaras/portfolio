import React from 'react'
import HeaderImg from '../asserts/header.png'
import { AiOutlineWhatsApp,AiOutlineInstagram } from "react-icons/ai";
import { SiIndeed } from "react-icons/si";

const Header = () => {
  const config={
    link1:'https://profile.indeed.com/p/aswink-6mxg64q',
    link2:'https://wa.me/+919600363288',
    link3:'https://www.instagram.com/achu_aswin_6/',
    passion:"I'm a budding coder 🤩"
  }
  return (
    <>
      <header className='flex flex-col md:flex-row px-5 md:py-32 py-52 bg-gradient-to-b from-yellow-400 to-black justify-center mix-blend-multiply'>    
        <div className='md:w-1/2 flex-col'>
            <h1 className= 'text-white text-4xl font-header-font'>Hi,<br/>I'm <span className='text-black'>Achu</span> Aswin,<p>{config.passion}</p></h1>
            <div className='flex gap-3 py-6'>
                <a className='hover:text-white' target='_blank' href={config.link1}><SiIndeed size={40}/></a>
                <a className='hover:text-white' target='_blank' href={config.link2}><AiOutlineWhatsApp size={40}/></a>
                <a className='hover:text-white' target='_blank' href={config.link3}><AiOutlineInstagram size={40}/></a>
            </div>
        </div>
        <img className='md:w-1/3 h-[300px] rounded' src={HeaderImg}/>
      </header>
    </>
  )
}

export default Header