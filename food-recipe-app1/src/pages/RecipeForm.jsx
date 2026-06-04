import React, { useContext, useEffect, useState } from "react";
import { RecipeContext } from "../context/RecipeContext.jsx";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import "../styles/App.css";

const Input = ({ label, type, id, name, placeholder, value, change, required }) => {
  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        className="bg-[#00000013] flex items-center gap-2 px-3 py-1.5 "
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={change}
        required={required}
      />
    </div>
  );
};

const FileInput = ({ label, id, name, onFileSelect }) => {
  return (
    <div className="flex flex-col gap-1 py-3.5">
      <label htmlFor={id} className="cursor-pointer">
        <span className="block mb-1">{label}</span>
        <div className="bg-[#00000013] border-2 border-dashed border-gray-300 h-10 flex items-center justify-center hover:bg-[#0000001a] transition-all">
          <p className="text-gray-500 text-sm">Click to upload cover image</p>
        </div>
      </label>
      <input 
        className="hidden" 
        type="file" 
        id={id} 
        name={name} 
        accept="image/*"
        onChange={(e) => onFileSelect(e.target.files[0])} 
      />
    </div>
  );
};

const RecipeForm = () => {
  const { state, dispatch } = useContext(RecipeContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    imageLink: "",
    ingredients: [""],
    instructions: "",
    prepTime: "",
    servings: "",
    isFavorite: false,
  });

  const addIngredient = () => {
    setFormData({ ...formData, ingredients: [...formData.ingredients, ""] });
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addIngredient();

      setTimeout(() => {
        const inputs = document.querySelectorAll(".ingredient-input");
        if (inputs[index + 1]) inputs[index + 1].focus();
      }, 0);
    }
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index] = value;
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  const removeIngredient = (indexToRemove) => {
    if (formData.ingredients.length > 1) {
      setFormData({
        ...formData,
        ingredients: formData.ingredients.filter(
          (_, index) => index !== indexToRemove,
        ),
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (state.selectedRecipe) {
      setFormData(state.selectedRecipe);
    } else {
      setFormData({
        name: "",
        imageLink: "",
        ingredients: [""],
        instructions: "",
        prepTime: "",
        servings: "",
        isFavorite: false,
      });
    }
  }, [state.selectedRecipe]);

  const handleFileChange = (file) => {
    if (file) {
      const tempUrl = URL.createObjectURL(file)

      setFormData((prev) => ({
        ...prev,
        imageLink: tempUrl
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedIngredients = formData.ingredients.filter(ing => ing.trim() !== "");

    const finalData = {
      ...formData,
      ingredients: cleanedIngredients,
    };

    if (state.selectedRecipe) {
      dispatch({
        type: "UPDATE_RECIPE",
        payload: { ...finalData, id: state.selectedRecipe.id },
      });
    } else {
      dispatch({
        type: "ADD_RECIPE",
        payload: { ...finalData, id: Date.now() },
      });
    }

    dispatch({ type: "SET_SELECTED", payload: null });
    navigate("/");
  };

  return (
    <>
      <div className="px-10 py-3 mt-25 ">
        <div className="flex gap-10 flex-wrap justify-between">
          <div className="flex flex-col items-start justify-between cursor-default w-[55%]">
            <h3 className="text-[3.5rem] w-[50%] leading-17 py-1.5">
              {state.selectedRecipe ? "Edit" : "Compose"}{" "}
              <em className="text-[#e93646]">Your Recipe</em>
            </h3>
            <p className=" text-gray-600 mt-5">
              Transform your culinary ideas into your digital collection. Detail
              the flavors and techniques that make your dish unique.
            </p>
          </div>
          <div className="flex flex-col items-end w-[40%] justify-end">
            <button className="text-[#e63946] flex gap-2 p-4 items-center hover:text-black cursor-pointer">
              <img src="./eye.svg" alt="" />
              preview
            </button>
            <img
              className="w-full h-37.5 rounded-4xl"
              src="./cover-template.jpg"
              alt="grey cover"
            />
          </div>
        </div>

        <form className="mt-14 h-fit" action="" onSubmit={handleSubmit}>
          <div className="flex justify-between flex-wrap gap-5">
            <div className="formOne">
              <Input
                label="RECIPE NAME"
                type="text"
                id="name"
                name="name"
                placeholder="e.g Ekwang"
                value={formData.name}
                change={handleChange}
                required
              />
             <FileInput 
                label="RECIPE COVER IMAGE" 
                id="image" 
                name="image" 
                onFileSelect={handleFileChange}
              />
              <div>
                <p className="text-xs text-gray-400 mb-2 font-bold">IMAGE PREVIEW</p>
                <img
                  className="w-full h-60 rounded-3xl object-cover border-2 border-dashed border-gray-200"
                  src={formData.imageLink || "./cover-template.jpg"}
                  alt="Recipe preview"
                />
              </div>
              <Input
                id="imageLink"
                name="imageLink"
                placeholder="Enter image URL"
                value={formData.imageLink}
                change={handleChange}
              />
            </div>

            <div className="formTwo">
              <div className="flex justify-between flex-wrap">
                <h3 className="text-3xl">Ingredients</h3>
                <button
                  className="flex flex-row gap-2 h-9 items-center cursor-pointer"
                  type="button"
                  onClick={addIngredient}
                >
                  <img
                    className="bg-[#e93646] p-0.5 rounded-full hover:bg-[#c72835]"
                    src="./plus.svg"
                    alt=""
                  />
                  Add Ingredient
                </button>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                {formData.ingredients.map((ingredient, index) => {
                  const isNotLast = index < formData.ingredients.length - 1;

                  return (
                    <div key={index} className="flex gap-2">
                      <input
                        className="ingredient-input bg-[#00000013] px-3 py-1.5 border-2 border-gray-300 w-full outline-none focus:border-[#e93646]"
                        type="text"
                        placeholder={`Ingredient ${index + 1}`}
                        value={ingredient}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onChange={(e) =>
                          handleIngredientChange(index, e.target.value)
                        }
                      />

                      {isNotLast && (
                        <button
                          type="button"
                          onClick={() => removeIngredient(index)}
                          className="px-3 bg-gray-100 text-gray-400 hover:text-[#e93646] cursor-pointer border-2 border-gray-300"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              <div>
                <h3 className="text-3xl">Instructions</h3>
                <textarea
                  name="instructions"
                  id="text"
                  required
                  placeholder="Describe your method. Break it down into steps if necessary"
                  className="p-3 h-60 border-2 border-gray-300 bg-[#00000013] w-full"
                  value={formData.instructions}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-3 mt-10">
            <div className="flex flex-col p-8 bg-white rounded-xl gap-3 mt-7 w-[40%]">
              <label className="quick-details">Quick Details</label>
              <div className="grid grid-cols-2 grid-flow-row-dens gap-4">
                <div>
                  <span className="w-fit">PREP TIME</span>
                  <div className="flex">
                    <input
                      type="number"
                      name="prepTime"
                      placeholder="--"
                      value={formData.prepTime}
                      onChange={handleChange}
                      className="w-10"
                    />
                    <span className="text-gray-500">mins</span>
                  </div>
                </div>
                <div>
                  <span className="w-fit">SERVINGS</span>
                  <div>
                    <input
                      type="number"
                      name="servings"
                      placeholder="--"
                      value={formData.servings}
                      onChange={handleChange}
                      className="w-10"
                    />
                    <span className="text-gray-500">people</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="text-gray-500 border-2 border-gray-300 px-4 py-1.5 rounded hover:bg-[#00000013] transition-all"
              >
                Discard Draft
              </button>
              <Button type="submit">Save Recipe</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RecipeForm;
