import React from 'react'
import WebsiteImg1 from '../asserts/website1.png'
import WebsiteImg2 from '../asserts/website2.png'
import WebsiteImg3 from "../asserts/website3.png"
const Project = () => {
    const dynamic={
        projects:[
        {
            image:WebsiteImg1,
            description:"This project implements phone number authentication using ReactJS, Tailwind CSS, and HTML.",
            link:'https://aswinkumaras.github.io/authentication-react/'
        },
        {
            image:WebsiteImg2,
            description:'Coming soon: Your ultimate shopping destination',
            link:''
        },
        {
            image:WebsiteImg3,
            description:'Weather wisdom at your fingertips.',
            link:''
        }
    ]
    }
  return (
    <section className='flex flex-col p-5 justify-center bg-gradient-to-b from-yellow-400 to-black text-white' id='projects'>
        <div className='w-full'>
            <div className='flex flex-col px-10 py-5'>
                <h1 className='font-heading-font text-3xl  border-b-2 w-[115px] mb-4 font-bold border-black'>Projects</h1>
                <p className='text-2xl font-common-font'>These are the best project i want to built with react.</p>
            </div>
        </div>
        <div className='w-full '>
            <div className='flex flex-col md:flex-row px-10 gap-3'>
                {dynamic.projects.map((project)=>(
                    <span className='relative'>
                        <img className='h-[200px] w-[400px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center p-4 text-black'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>view project</a>
                            </div>
                        </div>
                        
                    </span>
                ))}
                

            </div>
        </div>
    </section>
  )
}

export default Project