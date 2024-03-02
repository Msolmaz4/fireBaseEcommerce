import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_BY_SEARCH(state, action) {
      const { products, search } = action.payload;
      console.log(search, products, "ddddddd");
      const tempProducts = products?.filter((product) =>
        product?.title?.toLowerCase().includes(search.toLowerCase())
      );

      state.filteredProducts = tempProducts;
    },

    

  
    


    FILTER_BY_CATEGORY(state, action) {
      const { products, category } = action.payload;
      console.log(products, category, "by category");
      const tempProducts = category;
      console.log(tempProducts, "tepmmmmm");

      for (let i = 0; i <tempProducts.length; i++) {
        if (tempProducts[i].isActive) {
         // console.log(tempProducts[i].name.toLowerCase(), "kuckolma");
          if (tempProducts[i].name == "All") return;
          state.filteredProducts = []
          products?.map((ert) => {
           console.log(ert?.category);
           
            if (ert?.category == tempProducts[i].name.toLowerCase()){
                 // state.filteredProducts.push({...ert}) 
                 console.log(ert,"filterrrrrrrrrrrrr")
              return state.filteredProducts.push({...ert}) ;
            }
          });
        }
      }
    }
    ,
    
    
    






    FILTER_BY_BRAND(state, action) {
      const { products, brand } = action.payload;
      let tempProducts = [];
      if (brand === "All") {
        tempProducts = products;
      } else {
        tempProducts = products.filter((product) => product.brand === brand);
      }
      state.filteredProducts = tempProducts;
    },
    FILTER_BY_PRICE(state, action) {
      const { products, price } = action.payload;
      let tempProducts = [];
      tempProducts = products.filter((product) => product.price <= price);

      state.filteredProducts = tempProducts;
    },
  },
});

export const {
  FILTER_BY_SEARCH,

  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  FILTER_BY_PRICE,
} = filterSlice.actions;

export default filterSlice.reducer;
