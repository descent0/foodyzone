import { useEffect,useState } from "react"

export const useRecipe = (url) => {
    const [recipeData, setRecipeData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setRecipeData(result);
          console.log(url);
        } catch (error) {
          console.error(`Error fetching recipe data: ${error.message}`);
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }, [url]);
  
    return {
      recipeData,
      isLoading,
      error,
    };
  };