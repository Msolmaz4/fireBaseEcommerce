import { useSelector } from "react-redux";

const OrderHistory = () => {
  const { baskets } = useSelector((state) => state.basket);
  console.log(baskets, "basket");

  return (
    <div style={{ marginTop: "150px" }}>
      <div
        style={{ fontSize: "25px", display: "flex", justifyContent: "center" }}
      >
        My Order
      </div>
      
      {baskets?.map((item,i) => (
        <div key={i} style={{display:"flex", border:"2px solid red", width:"%100" }}>
        <div style={{display:"flex", width:"%100"}}> 
          <img
            src={item?.thumbnail}
            style={{ width: "100px", height: "90px",marginLeft:"50px" }}
          />
           <div style={{display:"flex" ,alignItems:"center" ,gap:"25px", width:"450px", border:"2px solid black"}} >{item.title} </div>
           <div style={{display:"flex" ,alignItems:"center", width:"300px", border:"2px solid black" }} > {item.price}$ </div>
          
          </div>
          <div style={{display:"flex" ,alignItems:"center" ,gap:"15px",border:"2px solid black",marginLeft:"100px"}} >
            <button style={{ height:"30px", width:"100px"}}>-</button>
            <p style={{ height:"30px", width:"100px", border:"2px solid black",alignItems:"center",justifyContent:"center",display:"flex"}}>{item.quantity}</p>
            <button style={{height:"30px", width:"100px", border:"2px solid black",alignItems:"center",justifyContent:"center"}}>+</button>
            <button style={{height:"30px", width:"100px", border:"2px solid black"}}>delete</button>
          </div>
        </div>
      ))}
      <button>Alle weg</button>
      <p>price TOTAL</p>
    </div>
  );
};

export default OrderHistory;
