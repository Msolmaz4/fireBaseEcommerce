import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { STORE_PRODUCTS } from "../../redux/slice/productSlice";

import useFetchCollection from "../../customHooks/useFetchCollection";

const Product = () => {
  const { data } = useFetchCollection();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );
  }, []);

  return (
    
      <div>hallo</div>
   
  );
}

export default Product;
