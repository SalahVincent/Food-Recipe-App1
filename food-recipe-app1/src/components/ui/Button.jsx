import React from 'react'

const Button = ({ children }) => {
  return (
    <div className='bg-[#e63946] text-white py-3 px-12 rounded-md hover:bg-[#d90429] flex gap-2'>
      {children}
    </div>
  )
}
export default Button