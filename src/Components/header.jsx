import React, { useContext, useState, useEffect } from "react";
import { Categories } from "./Categories";
import { MyContext } from "../Context";

export function Header() {
  let categories = ["All","Breakfast", "Lunch", "Dinner"];

  const {
    searchQuery,
    setSearchQuery,
    selected,
    setSelected,
    ingredients,
    setIngredients,
  } = useContext(MyContext);

  function handleCategoryChange(e) {
    setSelected(e.target.innerText);
  }

  function handleIngredientChange(e) {
    setIngredients(e.target.value);
  }

  return (
    <div className="flex flex-col sm:flex-row sm:p-5 justify-end p-2 items-center h-[80px] sm:h-[50px] w-screen bg-[#295f48] gap-2 sm:justify-between sm:items-center">
      <div>
          <input
          onInput={handleIngredientChange}
            className="border-2 h-[30px] w-[300px] rounded-sm md:h-[35px] md:w-[350px] text-white border-[#d8f5e9] bg-transparent align-middle pl-2"
            type="text"
            placeholder="Search"
          />
        </div>
      <div className="flex flex-row h-fit w-full sm:w-1/3 justify-center items-center gap-1 sm:gap-5 cursor-pointer">
      
        {categories.map((category, index) => (
          <Categories
            key={index}
            val={category}
            onChange={handleCategoryChange}
          />
        ))}
      </div>
    </div>
  );
}