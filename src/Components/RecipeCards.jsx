import { useContext } from "react";
import { Link } from "react-router-dom"
import { ContextOfRecipeCards, MyContext } from "../Context";

export function RecipeCards({
    imageUrl,
   label,
  
}) {
  
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

  function onRecipeChange(e){
    setRecipe(label);
    console.log(recipe);
      }
  
    return (
      <Link to="recipeCard" onClick={onRecipeChange}>
      <div  className="relative flex flex-row bg-white h-[167px] w-[267px] border-1 border-white rounded-md shadow-2xl overflow-hidden">
        
        <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-lg"></div>
        
        <div className="relative flex flex-row h-full w-full">
          <div className="h-full w-[45%] flex items-center justify-center">
            <img
              src={imageUrl}
              alt=""
              className="bg-cover h-[120px] w-[120px] rounded-full"
            />
          </div>
  
          <div className="h-full w-[55%] flex flex-col justify-center items-center p-2 gap-2">
            <div className="w-fit h-fit self-center text-black font-bold opacity-100">
              {label}
            </div>
          </div>
        </div>
      </div>
      </Link>
    );
  }
  