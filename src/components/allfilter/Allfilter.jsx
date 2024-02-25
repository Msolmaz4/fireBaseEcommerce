import { useState } from "react";
import useFetchCollection from "../../customHooks/useFetchCollection";
import styles from "./Allfilter.jsx"
const initialCategories = [
    { name: "All", isActive: true },
    { name: "Laptop", isActive: false },
    { name: "Electronic", isActive: false },
    { name: "Fashion", isActive: false },
    { name: "Phone", isActive: false },
  ];
  
  const sele = [];

const Allfilter = () => {
    const { data } = useFetchCollection();
    console.log(data,"product olan")
    const [categor, setCategor] = useState(initialCategories);
  
    const [int, setInt] = useState(1400);
    const handleRangeChange = (e) => {
      const newValue = parseInt(e.target.value, 10); // Değeri sayıya çevir
  
      setInt(newValue);
    };
  return (
    <div> <div className={styles.product2}>
        
    <div className={styles.product22}>
      {categor.map((ert, index) => (
        <div
          key={index}
          onClick={() => {
            const updatedCategories = categor.map((st) =>
              st.name === ert.name
                ? { ...st, isActive: !st.isActive }
                : { ...st, isActive: false }
            );
            setCategor(updatedCategories);
            console.log(updatedCategories);
          }}
        >
          <div style={{ color: ert.isActive == true ? "red" : "black" }}>
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
      <p>Price</p>
      <p>${int}</p>
      <input
        type="range"
        value={int}
        onChange={handleRangeChange}
        min={0} // Minimum değer
        max={1400} // Maksimum değer
        step={1} // Adım miktarı
      />
    </div>




   
  </div></div>
  )
}

export default Allfilter