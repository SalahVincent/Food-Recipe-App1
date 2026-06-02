import React from 'react'

const Favorites = () => {
  return (
    <div className='px-10 py-3 mt-25 flex flex-col items-start justify-between'>
        <span className='text-[#c72533] font-semibold'>CURATED COLLECTION</span>
        <h3 className='text-[3.5rem] w-[50%] leading-17 py-1.5'>Your Culnary Favorites</h3>
        <p className='w-[70%] text-gray-600'>A collection of your favorite recipes that you can easily access and cook anytime. </p>
    </div>
  )
}

export default Favorites