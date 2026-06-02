import React from 'react'
import { useNavigate, } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
   <>
    <div className="navbar flex flex-wrap items-center justify-between px-20 py-3 sticky top-0 bg-[#ffffff6e] backdrop-blur-sm z-30">
        <label className="w-[20rem] cursor-pointer" onClick={() => navigate("/")}>
          <h1 className="font-bold text-[#e63946] text-[2.5rem]">
            Cook<span className="navbar-span">Book</span>
            <sub className="font-[Inter] text-[20px]">RA</sub>
          </h1>
        </label>

        <nav>
          <ul className="flex flex-row gap-3">
            
            <li>
              <button
                onClick={() => navigate("/")}
                className='cursor-pointer'
              >
                Dashboard
              </button>
            </li>
            <li>
                <button
                onClick={() => navigate("/favorites")}
                >Favorites</button>
            </li>
            
          </ul>
        </nav>

        <form action="submit" className='bg-[#00000013] flex items-center gap-2 px-3 py-1.5 rounded-2xl'>
            <img src="./search.svg" alt="search icon" />
            <input type="text" placeholder="Search recipes..." />
        </form>
    </div>
    </>
  )
}

export default Navbar