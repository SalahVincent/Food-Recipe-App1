import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <button
    className='bg-[#e63946] text-white py-3 px-12 rounded-md hover:bg-[#d90429] flex gap-2 cursor-pointer'
    onClick={onClick}>
      {children}
    </button>
  )
}

export default Button