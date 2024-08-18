import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, decreaseItem, increaseItem, removeItem } from '../Store/CartSlice';
import { MyContext } from '../Context';

export const CartCards = ({ item }) => {
  const label=item.hit.recipe.label;
  const {
    setRecipe,
  } = useContext(MyContext);

  const dispatch = useDispatch();

  const onRecipeChange = () => {
    setRecipe(label);
    console.log(label); // Logging item.hit.recipe.label instead of recipe for accuracy
  };

  const handleRemoveItem = () => {
    console.log("handleClicked");
    dispatch(removeItem(item));
  };

  const handleIncrease = () => {
    console.log("inc");
    dispatch(increaseItem(item));
  };

  const handleDecrease = () => {
    dispatch(decreaseItem(item));
  };

  return (
    <div className="bg-[#e2f3e2] shadow-md p-3 flex gap-1">
      <div className="flex flex-col gap-1">
        <Link onClick={onRecipeChange} to="/home/recipeCard" className="text-base font-medium text-gray-900 hover:underline">
          {item.hit.recipe.label}
        </Link>
        <div className="flex flex-row justify-between pr-3">
          <p className="text-base font-bold text-gray-900">
            {item.price}
          </p>
          <div className="flex items-center gap-2 mb-2">
            <button
              onClick={handleDecrease}
              type="button"
              id="decrement-button"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <p>{item.count}</p>
            <button
              onClick={handleIncrease}
              type="button"
              id="increment-button"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="me-1.5 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
            Add to Favorites
          </button>
          <button
            onClick={handleRemoveItem}
            type="button"
            className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
          >
            <svg
              className="me-1.5 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
            Remove
          </button>
        </div>
      </div>
      <div className="h-20 w-20 mt-2 rounded-xl">
        <img className="rounded-xl" src={item.hit.recipe.image} alt={item.hit.recipe.label} />
      </div>
    </div>
  );
};
