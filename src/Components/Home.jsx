import React from 'react'

const Home = () => {
  return (
   <>
   <div className='min-h-screen w-full flex items-center pt-10 bg-gradient-to-b from-white to-gray-400'>
    <div className='max-w-7xl mx-auto md:flex md:flex-row-reverse  md:items-center'>
      <div className='md:w-[40%] md:pr-8 my-11'>
        <img src="/Images/1.jpeg" className='w-full h-auto object-cover rounded-tr-full rounded-bl-full' alt="" />
      </div>



      <div className='md:w-1/2 md:pl-8'>
        <div className='text-center md:text-left'>
          <h1 className='text-4xl font-bold mb-6'>Find Your <span className='text-amber-800'>Dream Home</span></h1>
          <p className='text-gray-700 text-lg mb-8'>  Welcome to our real estate agency, where finding your dream home is our top priority. Our team of experienced agents is dedicated to providing exceptional service and helping you navigate the complex process of buying or selling a property</p>



          <div className='text-center md:text-left'>
            <form action="" className='flex gap-4 md:flex-row'>
             <input type="email" placeholder='Enter Email' className='py-3 rounded-full px-4 flex-col gap-4' autoComplete='email' />
             <button className='bg-amber-800 text-white px-4 py-3 rounded-full'>
              Get Started
             </button>
            </form>
          </div>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default Home