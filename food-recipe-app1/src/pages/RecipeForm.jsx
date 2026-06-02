import React from 'react'
import Button from '../components/ui/Button'
import '../styles/App.css'

const Input = ({ label, type, id, name, placeholder }) => {
  return (
    <div className='flex flex-col w-full gap-1'>
      <label htmlFor={id}>{label}</label>
      <input className='bg-[#00000013] flex items-center gap-2 px-3 py-1.5 ' type={type} id={id} name={name} placeholder={placeholder} />
    </div>
  )
}

// A specialized version for files to allow for large heights
const FileInput = ({ label, id, name }) => {
  return (
    <div className='flex flex-col gap-1 py-3.5'>
      <label htmlFor={id} className="cursor-pointer">
        <span className="block mb-1">{label}</span>
        {/* We style this DIV to look like the input box */}
        <div className='bg-[#00000013] border-2 border-dashed border-gray-300 h-70 flex items-center justify-center hover:bg-[#0000001a] transition-all'>
          <p className="text-gray-500 text-sm">Click to upload cover image</p>
        </div>
      </label>
      {/* We hide the actual input but keep it functional via the label's 'htmlFor' */}
      <input className='hidden' type="file" id={id} name={name} />
    </div>
  )
}

const RecipeForm = () => {
  return (
    <>
    <div className='px-10 py-3 mt-25 '>
    <div className='flex gap-10 flex-wrap justify-between'>
        <div className='flex flex-col items-start justify-between cursor-default w-[55%]'>
        <h3 className='text-[3.5rem] w-[50%] leading-17 py-1.5'>Compose <em className='text-[#e93646]'>Your Recipe</em></h3>
            <p className=' text-gray-600 mt-5'>Transform your culinary ideas into your digital collection. Detail the flavors and techniques that make your dish unique.</p>
        </div>
        <div className='flex flex-col items-end w-[40%] justify-end'>
            <button className='text-[#e63946] flex gap-2 p-4 items-center hover:text-black'><img src="./eye.svg" alt="" />preview</button>
            <img className='w-[70%] h-37.5 rounded-4xl' src="./cover-template.jpg" alt="grey cover" />
        </div>
    </div>

    <form className='mt-14 h-fit' action="" >
        <div className='flex justify-between flex-wrap gap-5'>
            <div className='formOne'>
            <Input label="RECIPE NAME" type="text" id="name" name="name" placeholder="e.g Ekwang" />
            <FileInput label="RECIPE COVER IMAGE" id="image" name="image" />
            <Input id="imageLink" name="imageLink" placeholder="Enter image URL" />
            
                
            </div>

            <div className='formTwo'>
                <div className='flex justify-between flex-wrap'>
                    <h3 className='text-3xl'>Ingredients</h3>
                    <button className='flex flex-row gap-2 h-9 items-center cursor-pointer'><img className='bg-[#e93646] p-0.5 rounded-full' src="./plus.svg" alt="" />Add Ingredient</button>
                </div>
                <div className=''>
                    <h3 className='text-3xl'>Instructions</h3>
                </div>
            </div>
        </div>
        <div className='flex justify-between gap-3 mt-10'>
            <div className='flex flex-col p-4 bg-white rounded-md gap-3 mt-7'>
                    <label className='quick-details'>Quick Details</label>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <span className='w-fit'>PREP TIME</span>
                            <div className='flex'>
                                <input type="number" placeholder='--' className='w-10'/>
                            <span className='text-gray-500'>mins</span>
                            </div>
                        </div>
                        <div>
                            <span>SERVINGS</span>
                            <div>
                                <input type="number" placeholder='--' className='w-10'/>
                            <span className='text-gray-500'>people</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div>
                    <button>Discard Draft</button>
        <Button>Save Recipe</Button>
        </div>

                </div>
    </form>
    </div>
    </>
  )
}

export default RecipeForm