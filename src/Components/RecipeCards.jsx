import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextOfRecipeCards, MyContext } from "../Context";
import { addItem } from "../Store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { random } from "../utils/random";

export function RecipeCards({ hit, imageUrl, label }) {
  const {
    searchTerm,
    updateSearchTerm,
    selected,
    setSelected,
    ingredients,
    setIngredients,
    recipe,
    setRecipe,
    recipeData,
    isLoading,
    error,
  } = useContext(MyContext);

  const [count,setCount]=useState(1);

  function onRecipeChange(e) {
    setRecipe(label);
    console.log(recipe);
  }
  const dispatch =useDispatch();
  const items=useSelector(store=>store.cart.items);

  function handleAddItemInCart(e) {
    e.preventDefault();
    dispatch(addItem({hit,count,"price":random([1222,3243,422,345,53,234,233,352,23,235,20,2323,4000])}));
    console.log(items)
  }

  return (
    <Link to="recipeCard" onClick={onRecipeChange}>
      <div className="relative flex flex-row bg-white h-[167px] w-[267px] border-1 border-white rounded-md shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-lg"></div>

        <div className="relative flex flex-row h-full w-full">
          <div className="h-full w-[45%] flex items-center justify-center">
            <img
              src={imageUrl}
              alt=""
              className="bg-cover h-[120px] w-[120px] rounded-full"
            />
          </div>

          <div className="h-full w-[55%] flex flex-col justify-center items-center p-2 gap-10 m-2">
            <div className="w-fit h-fit self-center text-black font-bold opacity-100">
              {label}
            </div>
            <button
              onClick={handleAddItemInCart}
              className="bg-green-900 flex rounded-lg justify-center items-center ml-12 px-2 text-white active:bg-white active:text-green-900 active:font-bold active:border-green-900"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
