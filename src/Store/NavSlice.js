import { createSlice } from "@reduxjs/toolkit";

const NavSlice= createSlice({
    name: 'nav',
    initialState:{
        isOpen: true,
    },
    reducers:{
        toggleNav(state){
            state.isOpen=!state.isOpen;
        },
       
        
    }
})
export default NavSlice.reducer;
export const {toggleNav} = NavSlice.actions;