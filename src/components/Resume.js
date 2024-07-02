import React from 'react'
import ResumeImg from '../asserts/resume.png'
const Resume = () => {
    const dynamic={
        link:'https://drive.google.com/file/d/1i9bwO90zTFK-I9D7RU1MBk5o1wEHWSKU/view?usp=drive_link'
    }
  return (
    <section className='flex flex-col md:flex-row bg-gradient-to-b from-black to-yellow-400 px-5 py-8 mix-blend-multiply' id='resume'>
        <div className=' py-10 flex justify-center md:justify-end md:w-1/2'>
            <img src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center mt-5'>
            <div className='flex justify-center flex-col text-white '>
                <h1 className='font-heading-font text-3xl  border-b-2 w-[115px] mb-4 font-bold border-black'>Resume</h1>
                    <p className='font-common-font font-bold'>Click here to download my resume and see how I can contribute to your team<a className='btn' target='_blank' href={dynamic.link}>Download</a></p>
            </div>
        </div>
    </section>
  )
}

export default Resume