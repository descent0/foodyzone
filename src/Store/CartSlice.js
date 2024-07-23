import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem:(state,action)=>{
        state.items.push(action.payload)
        //action.payload is the data that is coming
        //note dont return anything from this
    },
    clearCart:(state,action)=>{
        state.items=[]
    }
  },
});

//to export actions
export const {addItem,clearCart} = cartSlice.actions;

//to export al the reducers
export default cartSlice.reducer;