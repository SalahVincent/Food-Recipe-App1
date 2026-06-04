import { useState } from 'react'
import './styles/App.css'
import Dashboard from './pages/Dashboard'
import Favorites from './pages/Favorites'
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import RecipeForm from './pages/RecipeForm'
import Footer from './components/layout/Footer'
import Sidebar from './components/layout/Sidebar'

const App = () => {
  const location = useLocation()
  const showSidebarPaths = ['/', '/favorites']

  return (
    <>
        <Navbar />
        {showSidebarPaths.includes(location.pathname) && <Sidebar />}
          <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/add' element={<RecipeForm />} /> 
          </Routes>
        <Footer />
    </>
  )
}

export default App
