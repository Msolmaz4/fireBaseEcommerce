import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  baskets: [],
 
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
   
  },
});

export const { } = basketSlice.actions;



export default basketSlice.reducer;