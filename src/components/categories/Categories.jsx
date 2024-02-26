import styles from "./Categories.module.scss";

const Categories = () => {
  return (
    <div> <div className={styles.product1}>

    <div className={styles.product11}>
     Categories
    </div>
    <div className={styles.product12}>
      <div className={styles.product13}>
        {" "}
        <input
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
  </div></div>
  )
}

export default Categories