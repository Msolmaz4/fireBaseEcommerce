import { useNavigate, useParams } from "react-router-dom";
import useFetchCollection from "../../customHooks/useFetchCollection";
import DetailFoot from "./DetailFoot";
import DetailYou from "./DetailYou";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useFetchDocument from "../../customHooks/useFetchDocument";

const Detail = () => {
  const { id } = useParams();
  const { data } = useFetchCollection();
  const { getAdd} = useFetchDocument();
  const navigate = useNavigate();
  const { userID ,email} = useSelector((state) => state.auth);
  console.log(userID,"userid")
  const { baskets } = useSelector((state) => state.basket);
 console.log(baskets, "basket");

  const ver = data?.filter((veri) => veri.id == id);
  console.log(ver,"verdetails")
  console.log(ver[0]?.category);
  const buy = () => {
    navigate("/buy");
  };
  const det = (id) => {
    if (userID) {

      
      console.log(id);
      getAdd({data:ver[0],email:email,id:id})
      

 
    } else {
      toast("login muss");
    }
  };



  return (
    <div
      style={{
        marginTop: "9rem",
        width: "100%",
        height: "91.2vh",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "660px",
            height: "350px",
            border: "solid black 2px",
            marginLeft: "180px",
            marginTop: "22px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>{ver[0]?.title}</h2>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={ver[0]?.images[0]} alt="" width="260px" height="150px" />
            </div>
          </div>
          <div>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {ver[0]?.description}
            </p>
            <p
              style={{
                fontSize: "20px",
                marginLeft: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {ver[0]?.price}$
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                onClick={() => buy(ver[0].id)}
                style={{
                  width: "100px",
                  height: "25px",
                  borderRadius: "5px",
                  margin: "10px",
                }}
              >
                BUY
              </button>
              <button
                onClick={() => det(ver[0].id)}
                style={{
                  width: "100px",
                  height: "25px",
                  borderRadius: "5px",
                  margin: "10px",
                }}
              >
                Add to Backet
              </button>
            </div>
          </div>
        </div>
        <DetailYou categ={ver[0]?.category} />
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 60,
          width: "100%",
          height: "150px",
        }}
      >
        <DetailFoot categ={ver[0]?.category} />
      </div>
    </div>
  );
};

export default Detail;
