import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  baskets: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    BASKET_START: (state, action) => {
      console.log(action.payload.baskets, "basketsssssss");
      state.baskets = action.payload.baskets;
      console.log(state.baskets,"sobndurum");
    },
    BASKET_ADD:(state,action)=>{
     console.log(action.payload,"ekledemeden gelen")
     state.baskets = action.payload.baskets
    }
  },
});

export const { BASKET_START,BASKET_ADD } = basketSlice.actions;

export default basketSlice.reducer;
