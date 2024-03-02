import { useState } from "react";
import useFetchCollection from "../../customHooks/useFetchCollection";
import styles from "./Allfilter.module.scss";
import { useNavigate } from "react-router-dom";

const sele = [];

const Allfilter = () => {
  const { data, categor, setCategor } = useFetchCollection();

  const navi = useNavigate();
  const det = () => {
    navi("/");
  };
  const [int, setInt] = useState(1400);
  const handleRangeChange = (e) => {
    const newValue = parseInt(e.target.value, 10); // Değeri sayıya çevir

    setInt(newValue);
  };

  return (
    <div className={styles.allFil}>
      <div className={styles.product2}>
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
          <select name="" id="" style={{ fontSize: "25px" }}>
            <option value="">all</option>
            {sele?.map((er) => (
              <option>{er} </option>
            ))}
          </select>
          <p style={{ fontSize: "25px" }}>Price</p>
          <p style={{ fontSize: "25px" }}>${int}</p>
          <input
            type="range"
            value={int}
            onChange={handleRangeChange}
            min={0} // Minimum değer
            max={1400} // Maksimum değer
            step={1} // Adım miktarı
          />
          <div>
            <button
              style={{
                width: "90px",
                height: "30px",
                background: "red",
                color: "white",
                borderRadius: "5px",
              }}
              onClick={det}
            >
              clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allfilter;
