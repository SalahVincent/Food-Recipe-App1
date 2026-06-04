export const initialState = {
    recipes: JSON.parse(localStorage.getItem('myRecipes')) || [],
    searchQuery: '',
    selectedRecipe: null,
}

export const recipeReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case 'DELETE_RECIPE':
            return {
                ...state,
                recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
            }
        case 'UPDATE_RECIPE':
            return {
                ...state,
                recipes: state.recipes.map(recipe => recipe.id === action.payload.id ? action.payload : recipe)
            }
        case 'SET_SEARCH':
            return {
                ...state,
                searchQuery: action.payload
            }
        case 'SET_SELECTED':
            return {
                ...state,
                selectedRecipe: action.payload
            }
        case 'TOGGLE_FAVORITE':
            return {
                ...state,
                recipes: state.recipes.map(recipe => recipe.id === action.payload ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe)
            }
        default:
            return state;
    }
}