import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  baskets: [],
 
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    
        BASKET_ADD :(state,action)=>{
            state.baskets.push(action.payload);
           }
           

    
   
  },
});

export const {BASKET_ADD } = basketSlice.actions;



export default basketSlice.reducer;