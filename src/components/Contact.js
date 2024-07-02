import React from 'react'

const Contact = () => {
    const dynamic={
        detail:'If you want to discuss more in detail, please contact me',
        email:'aswinkumaras622@gmail.com',
        phone:'+91 9600363288'
    }
  return (
    <section className='flex flex-col bg-gradient-to-b from-yellow-400 to-black px-5 py-20 mix-blend-multiply' id='contact'>
        <div className='flex flex-col items-center mt-5 text-white'>
            <h1 className='font-heading-font text-3xl  border-b-2 w-[115px] mb-4 font-bold border-black'>Contact</h1>  
            <div className='font-common-font font-bold text-[19px]'> 
              <p>{dynamic.detail}</p>    
              <p className='py-2'><span>Email :{dynamic.email}</span> </p>
              <p className='py-2'><span>Phone :{dynamic.phone}</span> </p>
            </div>  
        </div>
    </section>
  )
}

export default Contact