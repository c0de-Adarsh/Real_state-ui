import React from 'react'

const Service = () => {
  return (
    <>
    <div className='bg-gradient-to-b p-2 flex items-center from-white to-gray-400 min-h-screen'>
      <div className='max-w-7xl mx-auto py-12 px-4 md:px-6 lg:py-16 lg:px-8 '>
        <h2 className='text-4xl text-gray-800 mb-8 font-bold'> Our<span className='text-amber-800'> Services</span></h2>
        <p className='text-gray-700 text-lg mb-8'>  We offer many services for our clients, Here are some of our services:</p>




        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full md:w-1/3 px-4 mb-8'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'> 
                <img src="./Images/img7.png" className='w-full h-48 object-cover object-center'  alt="" />
                <div className='p-4'>
                <h2 className="text-lg font-bold text-gray-800 mb-2">Home Buying</h2>
                  <p className='text-lg text-gray-700 mb-8'>We help you find the perfect home that fits your needs and budget. Our team of experts will guide you through the entire home buying process from start to finish in an easy without any problem.</p>
                  <button className='bg-amber-800 py-2 text-white  rounded-md px-4'>Learn More</button>
                </div>
              </div>
            </div>



            <div className='w-full md:w-1/3 px-4 mb-8'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'> 
                <img src="./Images/img8.jpg" className='w-full h-48 object-cover object-center' alt="" />

                <div className='p-4'>
                  <h2 className='text-lg font-bold mb-2 text-gray-800'>Home Selling</h2>
                  <p className='text-gray-700 leading-relaxed mb-4'>We help you sell your home quickly and for the best price. Our team of experts will provide you with a customized marketing strategy to attract potential buyers and maximize your home's value.</p>
                  <button className='bg-amber-800 mt-6 px-4 rounded-md py-2 text-white'> Learn More</button>
                </div>
              </div>
            </div>



            <div className='w-full md:w-1/3 px-4 mb-8'>
              <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <img src="./Images/img9.jpg" className='w-full h-48 object-cover object-center' alt="" />
                <div className='p-4'> 
                  <h2 className="text-lg font-bold text-gray-800 mb-2">Property Management</h2>
                  <p className='text-gray-700 leading-relaxed mb-4'>We provide comprehensive property management services to help you manage your rental properties. Our team of experts will handle everything from tenant screening to maintenance and repairs.</p>
                  <button className='bg-amber-800 mt-6 rounded-md px-4 py-2 text-white'>Learn More</button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Service