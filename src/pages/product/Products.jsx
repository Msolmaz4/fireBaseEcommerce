
import useFetchCollection from "../../customHooks/useFetchCollection"

import styles from "./Product.module.scss"
 const categor =[
    "All","Laptop","Electronic","Fashion","Phone"
 ]
 const sele= []

const Products = () => {
    const {data} = useFetchCollection()
    console.log(data,"eeeeeeeeeeeeee")
    const catt = data
    console.log(catt,"catttttttttttt")
 
  
  return (
    <div>
    <div className={styles.product1}>       <div className={styles.product11}> Categories</div>
<div className={styles.product12}>2parca</div></div>
   <div className={styles.product2}> <div className={styles.product22}>

{categor?.map((ert)=>{
    return(
       <div onClick={()=>console.log(ert)}> 
       
       {ert} </div> 
    ) 
})}

{data?.map((cat, index) => (
    <div key={index}>

    {(!sele.includes(cat.category)) && sele.push(cat.category)}
    </div>
))}
<select name="" id="">
    <option value="">all</option>
    {sele?.map((ert)=> <option>{ert} </option>)}
</select>

   </div>
<div className={styles.product23}>4parca


     
</div></div>


    </div>
  )
}

export default Products