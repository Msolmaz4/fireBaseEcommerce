
import useFetchCollection from "../../customHooks/useFetchCollection";

import styles from "./Product.module.scss";
import Cart from "../cart/Cart";

const Products = ({page,setPage}) => {
  const { data } = useFetchCollection();

  return (
    <div>
      <div className={styles.product2}>
        
          <div className={styles.product24}>
            <Cart data={data}  page={page} setPage= {setPage}/>
          </div>
        
      </div>
    </div>
  );
};

export default Products;
