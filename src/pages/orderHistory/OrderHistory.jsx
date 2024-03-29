import { useSelector } from "react-redux";


const OrderHistory = () => {
  const { baskets } = useSelector((state) => state.basket);
  console.log(baskets, "basket");




 

  return (
    <div style={{marginTop:"150px", }}>
    <div style={{fontSize:"25px", display:"flex",justifyContent:"center"}}>My Order</div>
 {
  baskets?.map(item=>(
    <div>
    {item.title}
  
  <img src={item?.thumbnail}/>

    
    
    </div>
  ))
 }


    </div>
  )
}

export default OrderHistory