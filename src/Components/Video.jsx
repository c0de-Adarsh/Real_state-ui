import React from 'react'

const Video = () => {
  return (
  <>
   <div id="demo" className="flex flex-col md:flex-row w-full h-screen bg-amber-800">
      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Real  <span className="text-amber-800">Estate</span> Video</h1>
          <div className="aspect-w-16 aspect-h-9">
           <img src="./Images/hhhh.jpg" alt="" />
           
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <div className="text-white">
        <h2 className="text-1xl font-bold mb-4">Paradise Hunt</h2>
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Properties?</h2>
          <ul className="list-disc list-inside mb-8">
            <li className="flex items-center space-x-4">
              <img src='./Images/h.png' alt="House Icon" className="w-8 h-8" />
              <span>Spacious and comfortable living spaces</span>
            </li>
            <li className="flex items-center space-x-4 my-10">
              <img src='./Images/l.png' alt="Location Icon" className="w-8 h-8" />
              <span>Located in prime areas with excellent infrastructure</span>
            </li>
            <li className="flex items-center space-x-4 my-10">
              <img src='./Images/m.png' alt="Money Icon" className="w-8 h-8" />
              <span>Affordable prices and flexible payment plans</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
  )
}

export default Video