import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem :(state, action) => {
      const existingItem = state.items.find(item => item.hit.recipe.label === action.payload.hit.recipe.label);
      if (existingItem) {
        existingItem.count += action.payload.count;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      console.log("inside remove")
      state.items = state.items.filter(item => item.hit.recipe.label !== action.payload.hit.recipe.label);
    },
    clearCart:(state,action)=>{
        state.items=[];
    },
    increaseItem:(state,action)=>{
      const existingItem = state.items.find(item => item.hit.recipe.label === action.payload.hit.recipe.label);
      existingItem.count += 1;
    },
    decreaseItem:(state,action)=>{
      const existingItem = state.items.find(item => item.hit.recipe.label === action.payload.hit.recipe.label);
      existingItem.count -= 1;
    }
  },
});

//to export actions
export const {addItem,removeItem,clearCart,increaseItem,decreaseItem} = cartSlice.actions;

//to export al the reducers
export default cartSlice.reducer;