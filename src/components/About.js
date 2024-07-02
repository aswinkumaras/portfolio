import React from 'react';
import AboutImg from '../asserts/about.png';
const About = () => {
    const dynamic={
        about_me1:'I am Aswin Kumar ,I am writing to express my strong interest in the Junior web Developer position at',
        company:'Acoustic Designs.',
        about_me2:'As a recent graduate with a passion for web development and a strong foundation in front-end technologies, I am excited about the opportunity to contribute to your team and help create exceptional user experiences.',
        skills:'I am proficient in front-end skills like React.js,Tailwind css,html,JavaScript',
    }
  return (
    <section className='flex flex-col md:flex-row bg-gradient-to-b from-black to-yellow-400 px-5' id='about'>
        <div className='md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center mt-5'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='font-heading-font text-3xl  border-b-2 w-[150px] mb-4 font-bold border-black'>About Me</h1>
                <p className='font-common-font text-[20px]'>{dynamic.about_me1}<i className=' text-black font-bold'> {dynamic.company}</i>{dynamic.about_me2}</p>
                <p className='font-common-font mt-5 text-black font-bold text-[20px]'>{dynamic.skills}</p>
            </div>
        </div>
    </section>
  )
}

export default About