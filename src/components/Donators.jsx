import React from 'react';
import Amcalar from "../assets/images/amcalar.jpg";

const Donator = ({ image, link }) => {
  return(
    <div className='bg-gray-300 flex items-center justify-center lg:grayscale rounded-sm hover:grayscale-0 active:bg-gray-500 transition-all duration-200 ease-linear cursor-pointer'>
      <img src={image} alt={image} className='w-32 h-32 object-contain' />
    </div>
  )
}

const Donators = () => {
  return (
    <div className='bg-gray-800 py-4'>
      <div className='flex flex-col justify-center container max-w-4xl mx-auto items-center'>
        <div className='my-12'>
          <h1 className='title text-center text-4xl text-white font-bold cursor-pointer'>Bağışçılarımız</h1>
          <div className='line'></div>
        </div>
        <div className='grid grid-cols-2 px-3 lg:px-0 lg:py-0 lg:grid-cols-2 gap-4 w-1/2'>
          <Donator image={Amcalar} />
          {/* <StakeHolder image={} /> */}
        </div>
      </div>
    </div>
  )
}

export default Donators