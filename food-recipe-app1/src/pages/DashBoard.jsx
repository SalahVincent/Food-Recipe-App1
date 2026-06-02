import React from 'react'
import Button from '../components/ui/Button'

const Dashboard = () => {
  return (
    <>
    <div className='px-10 py-3 mt-8 flex flex-row items-center justify-between'>
        <div>
            <h2 className='font-bold text-[3.5rem]'>Your Kitchen</h2>
            <p className='text-lg text-gray-600'>Curate, curate and plate your culnary adventures</p>
        </div>
        <Button className='px-6'><img src="./plus.svg" alt="" />Add Recipe</Button>
    </div>
    </>
  )
}

export default Dashboard