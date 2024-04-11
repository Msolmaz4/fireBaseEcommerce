import { useSelector } from "react-redux";
import useFetchDocument from "../../customHooks/useFetchDocument";
import useFetchCollection from "../../customHooks/useFetchCollection";

const OrderHistory = () => {
  const { baskets } = useSelector((state) => state.basket);
  //console.log(baskets, "basket");
  let basketsCopy = [...baskets];
  basketsCopy.pop();
 console.log(basketsCopy, "basketsCopy");
  const {getAdd} = useFetchDocument()
  const { data } = useFetchCollection();
  const { email} = useSelector((state) => state.auth);
  const total = basketsCopy?.reduce((acc, item) => {
    return acc +Number(item.price) * Number(item.quantity);
  }, 0);


  return (
    <div style={{ marginTop: "150px" }}>
      <div
        style={{ fontSize: "25px", display: "flex", justifyContent: "center" }}
      >
        My Order
      </div>
      
      {basketsCopy?.map((item,i) => (
        <div key={i} style={{display:"flex", border:"2px solid red", width:"%100",marginBottom:"5px" ,borderRadius:"20px" }}>
        
        <div style={{display:"flex", width:"%100"}}> 
          <img
            src={item?.thumbnail}
            style={{ width: "100px", height: "90px",marginLeft:"50px" }}
          />
           <div style={{display:"flex" ,alignItems:"center" ,gap:"25px", width:"450px"}} >{item.title} </div>
           <div style={{display:"flex" ,alignItems:"center", width:"300px"}} > {item.price}$ </div>
          
          </div>
          <div style={{display:"flex" ,alignItems:"center" ,gap:"15px",marginLeft:"100px"}} >
            <button style={{ height:"30px", width:"100px"}}>-</button>
            <p style={{ height:"30px", width:"100px",alignItems:"center",justifyContent:"center",display:"flex"}}>{item.quantity}</p>
            <button onClick={()=>getAdd({id:item.id,email:email,data:data})} style={{height:"30px", width:"100px", border:"2px solid black",alignItems:"center",justifyContent:"center"}}>+</button>
            <button style={{height:"30px", width:"100px", border:"2px solid black"}}>delete</button>
          </div>
        </div>
      ))}
      <div style={{display:"flex" ,justifyContent:"space-between"}}> 
      <button>Alle weg</button>
      <p style={{marginRight:"60px",marginTop:"15px" , fontSize:"20px" ,color:"red"}}> Total:{total} $</p></div>
    </div>
  );
};

export default OrderHistory;
