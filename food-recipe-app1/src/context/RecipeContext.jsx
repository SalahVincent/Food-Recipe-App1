import React, { createContext, useEffect, useReducer } from 'react';
import { recipeReducer, initialState } from './RecipeReducer.js';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(recipeReducer, initialState);

    useEffect(() => {
        localStorage.setItem('myRecipes', JSON.stringify(state.recipes));
    }
    , [state.recipes]);

    return (
        <RecipeContext.Provider value={{ state, dispatch }}>
            {children}
        </RecipeContext.Provider>
    );
}