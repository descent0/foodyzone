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

        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          Last updated 3 mins ago
        </p>
      </div>
    </div>
  );
}
