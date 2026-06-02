import React from "react";
import DashBoard from "./pages/DashBoard";
import Favorites from "./pages/Favorites";
import Navbar from "./components/parts/Navbar";
import './styles/App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeForm from "./pages/RecipeForm";

const App = () => {
  return (
    <>
     <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path='/' element={<DashBoard />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/add' element={<RecipeForm/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App