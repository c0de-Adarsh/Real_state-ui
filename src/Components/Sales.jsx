import React from 'react'

const Sales = () => {
  return (
   <>
   <div className='w-full min-h-screen p-2 flex items-center  bg-gray-100'>
     

     <div className='py-12 px-4 lg:px-8 lg:py-16 max-w-7xl mx-auto'>
        <h2 className='text-amber-800 mb-6 text-4xl font-bold'>On Sale <span className='text-gray-800'>Properties</span></h2>
        <p className='text-lg text-gray-700 mb-8'> We offer a wide selection of on-sale properties that cater to different preferences and budgets. Here are some of our featured properties:</p>



        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8'>
            <div className='hover:shadow-md hover:shadow-[#040c16]'>
                <div className='bg-white rounded-lg shadow-lg'>
                    <img src="./Images/img4.jpg" alt="" className='w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64'/>

                    <div className='py-6 px-4'>
                        <h3 className='text-lg font-medium text-gray-900'>123 Main St</h3>
                        <p className='text-sm text-gray-500'>2 bd | 1 ba | 1,000 sqft</p>
                        <p  className="text-lg font-bold text-gray-700 mt-4">$750,000</p>
                        <button className='bg-amber-800 py-2 px-4 rounded-md text-white mt-6'>
                            View Details
                        </button>
                    </div>
                </div>
            </div>


            <div className='hover:shadow-md hover:shadow-[#040c16]'>
                <div className='bg-white rounded-lg shadow-lg'>
                    <img src="./Images/img6.jpg" alt=""  className='w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64' />

                    <div className='px-4 py-6'>
                        <h3 className='font-medium text-lg text-gray-900'>456 Oak St</h3>
                        <p className='text-sm '>4 bd | 3 ba | 2,000 sqft</p>
                        <p className="text-lg font-bold text-gray-700 mt-4">$750,000</p>
                        <button className='bg-amber-800 py-2 px-4 rounded-md text-white mt-6'>
                            View Details
                        </button>
                    </div>
                </div>
            </div>




            <div className='hover:shadow-md hover:shadow-[#040c16]'>
                <div className='bg-white rounded-lg shadow-lg'>
                    <img src="./Images/img5.jpg" alt=""  className='w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64' />

                    <div className='py-6 px-4'>
                        <h3 className='text-gray-900 text-lg font-medium'>789 Maple Ave</h3>
                        <p className='text-sm text-gray-500'>4 bd | 3 ba | 2,000 sqft</p>
                        <p className="text-lg font-bold text-gray-700 mt-4">$750,000</p>
                        <button className='bg-amber-800 py-2 px-4 rounded-md text-white mt-6'>
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
     </div>
   </div>
   </>
  )
}

export default Sales