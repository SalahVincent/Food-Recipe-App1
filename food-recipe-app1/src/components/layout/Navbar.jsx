import React, { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
    const {state, dispatch} = useContext(RecipeContext)

  return (
    <>
      <div className="navbar flex flex-wrap items-center justify-between px-10 py-3 ">
        <label>
          <h1 className="font-bold text-[#e63946] text-[2.5rem]">
            Cook<span className="navbar-span">er</span>
            <sub className="font-[Inter] text-[20px]">CMR</sub>
          </h1>
        </label>

        <nav>
          <ul className="flex flex-row gap-3">
            <li>
              <Link to={'/'}>Dashboard</Link>
            </li>
            <li>
              <Link to={'/favorites'}>Favorites</Link>
            </li>
          </ul>
        </nav>

        <div
          className="bg-[#00000013] flex items-center gap-2 px-3 py-1.5 rounded-2xl"
        >
          <img
            src="./search.svg"
            alt="search icon"
            className="cursor-pointer"
          />
          <input
            type="text"
            placeholder="Search recipes..."
            className="bg-transparent outline-none"
            value={state.searchQuery}
            onChange={(e) => dispatch({type: 'SET_SEARCH', payload: e.target.value})}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
