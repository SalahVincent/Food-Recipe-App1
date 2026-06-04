import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeContext'

const Favorites = () => {
  const { state, dispatch } = useContext(RecipeContext);
  const favoriteRecipes = state.recipes.filter(recipe => recipe.isFavorite);

  const heightClasses = [
    'aspect-video',
    'aspect-[3/4]',
    'aspect-square',
    'aspect-[2/3]',
  ];

  return (
    <div className='px-10 py-3 mt-25 flex flex-col items-start justify-between cursor-default w-full'>
        <span className='text-[#c72533] font-semibold'>CURATED COLLECTION</span>
        <h3 className='text-[3.5rem] w-[50%] leading-17 py-1.5'>Your Culinary Favorites</h3>
        <p className='w-[70%] text-gray-600 mb-10'>A collection of your favorite recipes that you can easily access and cook anytime.</p>

        {favoriteRecipes.length === 0 ? (
          <p className="text-gray-400 italic">You haven't marked any recipes as favorites yet.</p>
        ) : (
          <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 [column-fill:_balance]">
            {favoriteRecipes.map((recipe, index) => {
              const randomHeightClass = heightClasses[index % heightClasses.length];

              return (
                <div
                  key={recipe.id}
                  className="break-inside-avoid bg-white rounded-3xl cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 flex flex-col mb-6 group overflow-hidden border border-gray-100"
                  onClick={() => dispatch({ type: "SET_SELECTED", payload: recipe })}
                >
                  <div className={`w-full relative overflow-hidden ${randomHeightClass}`}>
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={recipe.imageLink || "./cover-template.jpg"}
                      alt={recipe.name}
                    />
                    
                    <button
                      className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/80 backdrop-blur-md opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch({ type: "TOGGLE_FAVORITE", payload: recipe.id });
                      }}
                    >
                      <img className="w-4 h-4 object-contain" src="./liked.png" alt="Unfavorite" />
                    </button>
                  </div>

                  <div className="p-4 flex flex-col gap-1 bg-white">
                    <h3 className="text-lg font-semibold text-gray-900 truncate group-hover:text-[#e63946] transition-colors">
                      {recipe.name}
                    </h3>
                    <p className="text-gray-500 text-xs font-medium">
                      {recipe.prepTime || 0} mins • {recipe.servings || 0} people
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
    </div>
  )
}

export default Favorites;