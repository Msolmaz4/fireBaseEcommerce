import { useSelector } from "react-redux";

import { selectProducts } from "../../redux/slice/productSlice";
import useFetchCollection from "../../customHooks/useFetchCollection";

const Product = () => {
  const { data } = useFetchCollection();

  const products = useSelector(selectProducts);
  console.log(products);

  return (
    <div>
      {products?.map((pro) => (
        <div>{pro.id}</div>
      ))}
    </div>
  );
};

export default Product;
