import React from 'react'

const Features = () => {
  return (
    <>
    <div className='min-h-screen bg-gradient-to-b p-2 from-white to-gray-400'>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 '>
            <h2 className='font-bold text-4xl mb-6'>Featured<span className='text-amber-800'> Properties</span></h2>
            <p className='text-xl mb-8 text-gray-700'>Here are some of our featured properties:</p>



            {/* card */}
            <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <div className='shadow-lg bg-white rounded-lg'>
                        <img src="./Images/image1.webp" className='w-full max-h-64 md:h-64 h-1/3 object-cover rounded-t-lg '  alt="" />


                        <div className='px-4 py-6'>
                            <h3 className='text-lg font-medium text-gray-600'>143 NY CITY</h3>
                            <p className='text-sm text-gray-400'>3 bd | 2 ba | 1,500 sqft</p>
                            <p className='text-lg font-medium text-gray-700 mt-4'>$500,000</p>
                            <button className='bg-amber-800 mt-6 text-white py-2 px-4 rounded-md text-lg'>View Details</button>
                        </div>
                    </div>                   
                </div>




                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <div className='shadow-lg bg-white rounded-lg'>
                        <img src="./Images/image2.png" className='w-full max-h-64 md:h-64 h-1/3 object-cover rounded-t-lg '  alt="" />


                        <div className='px-4 py-6 '>
                            <h3 className='text-lg font-medium text-gray-600'>456 Oak St</h3>
                            <p className='text-sm text-gray-400'>3 bd | 2 ba | 1,500 sqft</p>
                            <p className='text-lg font-medium text-gray-700 mt-4'>$600,000</p>
                            <button className='bg-amber-800 mt-6 text-white py-2 px-4 rounded-md text-lg'>View Details</button>
                        </div>
                    </div>                   
                </div>





                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <div className='shadow-lg bg-white rounded-lg'>
                        <img src="./Images/images3.jpg" className='w-full max-h-64 md:h-64 h-1/3 object-cover rounded-t-lg '  alt="" />


                        <div className='px-4 py-6'>
                            <h3 className='text-lg font-medium text-gray-600'>143 NY CITY</h3>
                            <p className='text-sm text-gray-400'>3 bd | 2 ba | 1,500 sqft</p>
                            <p className='text-lg font-medium text-gray-700 mt-4'>$500,000</p>
                            <button className='bg-amber-800 mt-6 text-white py-2 px-4 rounded-md text-lg'>View Details</button>
                        </div>
                    </div>                   
                </div>



            </div>
        </div>
    </div>
    </>
  )
}

export default Features