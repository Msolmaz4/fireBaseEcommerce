import { useState } from "react";
import useFetchCollection from "../../customHooks/useFetchCollection";

import styles from "./Product.module.scss";
const initialCategories = [
  { name: "All", isActive: true },
  { name: "Laptop", isActive: false },
  { name: "Electronic", isActive: false },
  { name: "Fashion", isActive: false },
  { name: "Phone", isActive: false },
];

const sele = [];

const Products = () => {
  const { data } = useFetchCollection();
  const [categor, setCategor] = useState(initialCategories);
  console.log(data, "eeeeeeeeeeeeee");

  return (
    <div>
      <div className={styles.product1}>
        {" "}
        <div className={styles.product11}> Categories</div>
        <div className={styles.product12}>2parca</div>
      </div>
      <div className={styles.product2}  >
        {" "}
        <div className={styles.product22}>
          {categor.map((ert, index) => (
            <div 
              key={index}
              onClick={() => {
                const updatedCategories = categor.map((st) =>
                st.name === ert.name ? { ...st, isActive: !st.isActive } : { ...st, isActive: false }
                );
                setCategor(updatedCategories);
                console.log(updatedCategories);
              }}
            >
            <div style={{color: ert.isActive == true ? "red" :"black"}}> 
               {ert.name}
            </div>
           
            </div>
          ))}

          {data?.map((cat, index) => (
            <div key={index}>
              {!sele.includes(cat.category) && sele.push(cat.category)}
            </div>
          ))}
          <select name="" id="">
            <option value="">all</option>
            {sele?.map((er) => (
              <option>{er} </option>
            ))}
          </select>
        </div>
        <div className={styles.product23}>4parca</div>
      </div>
    </div>
  );
};

export default Products;
