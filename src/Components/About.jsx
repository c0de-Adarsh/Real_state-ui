import React from 'react'

const About = () => {
  return (
   <>
   <div className='bg-amber-800 flex flex-col md:flex-row h-screen w-full'>
   <div className='w-full md:w-1/2 p-0 md:px-8 flex justify-center items-center'>
    <img src="/Images/2.png" alt=""  className='"w-full h-auto object-cover rounded-tr-full rounded-bl-ful'/>
   </div>


   <div className='w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center'>
    <div className='text-center md:text-left'>
        <h2  className="text-3xl md:text-5xl font-bold text-amber-800 mb-4">About Us</h2>
        <p> Welcome to my premier real estate agency, where our mission is to provide exceptional service and expertise to help our clients achieve their real estate goals. With years of experience in the industry, our team of dedicated professionals has built a reputation for excellence and integrity.</p>
        <br />
        <br />
        We are committed to staying up-to-date with the latest trends and technologies in the real estate market, and we use our knowledge and expertise to guide our clients through the buying and selling process with confidence.
    </div>
   </div>
   </div>
   </>
  )
}

export default About