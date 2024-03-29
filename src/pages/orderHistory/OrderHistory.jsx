import { useSelector } from "react-redux";


const OrderHistory = () => {
  const { baskets } = useSelector((state) => state.basket);
  console.log(baskets, "basket");




 

  return (
    <div style={{marginTop:"50px",background:"red", }}>
    <p>ww</p>
    OrderHistory</div>
  )
}

export default OrderHistory