import React, { useContext, useState } from "react";
import { ContextOfRecipeCards, MyContext } from "../Context";
import { useRecipe } from "../CustomHooks/RecipeFetch";

export default function RecipeDetailCards() {
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

  const [filteredData] = useState(
    recipeData.hits.filter((hit) => hit.recipe.label === recipe)
  );
  console.log(filteredData);
  // useEffect(() => {
  //   const filtered = recipeData.filter(recipe => recipe.type === 'Italian');
  //   setFilteredData(filtered);
  // }, [recipeData]);

  return (
    <div className="flex flex-col  w-screen md:flex-row p-1">
      <div className="w-3 h-30 md:w-[20rem] md:h-[30rem] ">
        <img className="" src={filteredData[0].recipe.image} />
      </div>

      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-2xl font-medium">{recipe}</h5>

        <h6 className="mb-2 font-medium">Ingredients</h6>

        <ul className="">
          {filteredData[0].recipe.ingredientLines.map((ingredient, index) => (
            <li> {ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
