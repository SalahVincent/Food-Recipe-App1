import React, { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeContext'
import Button from '../ui/Button'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(RecipeContext);
  const recipe = state.selectedRecipe;

  const handleEdit = () => {
    console.log("Button Clicked, Navigating to Edit Form with Recipe:", recipe);
    navigate('/add')
  }

  const closeSidebar = () => {
    dispatch({ type: 'SET_SELECTED', payload: null })
  }

  console.log("Current Selected Recipe:", state.selectedRecipe);

  return (
    <>
    {recipe && (
      <div
      className='fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity'
      onClick={closeSidebar}>
      </div>
    )}

    <aside className={`fixed top-0 right-0 h-full w-90 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out p-8 overflow-y-auto ${recipe ? 'translate-x-0' : 'translate-x-full'}`}>
      {recipe ? (
        <div className='flex flex-col h-full'>
          <button onClick={closeSidebar} className='self-end mb-4 text-gray-500 hover:text-gray-700 transition-colors'>
            <img src="./close.svg" alt="Close" className='w-6 h-6' />
          </button>

          <img src={recipe.imageLink || './cover-template.jpg'}
          alt={recipe.name}
          className='w-full h-full object-cover rounded-3xl mb-6'
          />
          <h2 className='text-3xl mb-4'>{recipe.name}</h2>
          <div className='flex gap-4 mb-8'>
            <span className='bg-red-400 text-white py-2 px-4 rounded-full text-[15px]'>{recipe.prepTime} mins</span>
            <span className='bg-gray-300 text-white py-2 px-4 rounded-full'>{recipe.servings} people </span>
          </div>

          <div className="mb-6">
  <h4 className="font-bold text-green-600 uppercase text-sm mb-2 flex gap-2"><img src="./egg.svg" alt="" />Ingredients</h4>
  <ul className="list-disc pl-5 space-y-1">
    {recipe.ingredients && recipe.ingredients.length > 0 ? (
      recipe.ingredients
        .filter(ingredient => ingredient.trim() !== "")
        .map((ingredient, index) => (
          <li key={index} className="text-gray-700">{ingredient}</li>
        ))
    ) : (
      <li className="text-gray-400 italic">No ingredients listed</li>
    )}
  </ul>
</div>

          <div className='mb-8'>
            <h3 className='text-2xl font-semibold mb-2'>Instructions</h3>
            <p className='text-lg whitespace-pre-line'>{recipe.instructions}</p>
          </div>

          <div className='mt-auto pt-10 flex gap-4'>
            <Button
            onClick={handleEdit}
            className='flex-1 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors'>Edit Recipe</Button>
            <button
            className='px-4 py-2 border border-black text-red-500 rounded-xl hover:bg-red-50'
            onClick={() => {dispatch({ type: 'DELETE_RECIPE', payload: recipe.id })
          closeSidebar()
        }}><img src='./trash.svg' /></button>
          </div>
        </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-full'>
      <img src="./empty.svg" alt="No Recipe Selected" className='w-24 h-24 mb-4' />
      <p className='text-gray-500 text-lg'>Select a recipe to view details</p>
    </div>
  )}
    </aside>
    </>
  )
}

export default Sidebar