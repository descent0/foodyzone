import { useContext, useState } from "react";
import { RecipeCards } from "./RecipeCards";
import { ContextOfRecipeCards, MyContext } from "../Context";
import { useRecipe } from "../CustomHooks/RecipeFetch";
import { useSelector } from "react-redux";

export const MainBody = () => {
  const isOpen=useSelector(store=>store.nav.isOpen);
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

 

  


  if (isLoading) {
    return (
      <div className={`w-full sm:p-10 h-fit sm:pr-20 flex flex-wrap items-center justify-center sm:justify-start gap-10 `}>
        {Array.from({ length: 20 }, (_, index) => (
          <RecipeCards
            key={index}
            label={null}
            imageUrl={null}
            recipe={null}
           
          />
        ))}
      </div>
    );
  }
  

  if (error) {
    console.error(error);
    return(
      <>
      <h1>🥲Oops !! Check Your internet connection</h1>
      </>
    );
  }

  return (
    <div className={`w-full sm:p-10 h-fit sm:pr-20  flex flex-wrap items-center justify-center sm:justify-start gap-10 `}>
      {recipeData &&
        recipeData.hits.map((hit) => (
          <RecipeCards
            key={hit.recipe.uri}
            hit={hit}
            label={hit.recipe.label}
            imageUrl={hit.recipe.image}
            recipe={hit.recipe}
          />
        ))}
    </div>
  );
};

const LoadingIndicator = () => {
  return <div className="flex justify-center">Loading...</div>;
};
