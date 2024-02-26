import { useEffect, useState } from "react";
import styles from "./Categories.module.scss";
import { useDispatch, useSelector} from "react-redux";
import { FILTER_BY_SEARCH } from "../../redux/slice/filterSlice";



const Categories = () => {
  const { products } = useSelector((state) => state.product);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({ products: products, search: value }));
  }, [value, dispatch, products]);

  return (
    <div>
      <div className={styles.product1}>
        <div className={styles.product11}>Categories</div>
        <div className={styles.product12}>
          <div className={styles.product13}>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="search"
              placeholder="Search ...."
              style={{
                marginTop: "18px",
                width: "350px",
                height: "35px",
                borderRadius: "5px",
              }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;