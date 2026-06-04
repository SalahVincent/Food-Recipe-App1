import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RecipeProvider } from './context/RecipeContext.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <RecipeProvider>
      <App />
    </RecipeProvider>
    </BrowserRouter>
  </StrictMode>,
)
