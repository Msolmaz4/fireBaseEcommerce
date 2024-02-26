import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";

const LIMIT = 15;

const Cart = ({ data, page, setPage }) => {

  const [postData, setPostData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [visible, setVisible] = useState(LIMIT);
  const {filteredProducts} = useSelector(state=>state.filter)
  console.log(filteredProducts,"cart")

  useEffect(() => {

if(filteredProducts){
  setPostData(filteredProducts)
  setHasMore(false)

}else{ 
   const vert = async () => {
      try {
        const dert = await data?.slice(0, LIMIT);
        setPostData(dert);
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      }
    };
    vert();
}


   
    
  }, [data,filteredProducts]);

  const fetchMoreData = () => {
    const newLimit = visible + LIMIT;
 

    if (postData.length < 40) {
      try {
        setPage(true);
        
        const addTo = data.slice(visible, newLimit);
      

        setTimeout(() => {
          setPostData((prevData) => [...prevData, ...addTo]);
        }, 2000);

        setVisible(newLimit);
      } catch (error) {
        console.error("Yeni veri alınırken hata oluştu:", error);
      }
    } else {
      setPage(false);
      setTimeout(() => {
        setHasMore(false);
      }, 2000);
    }
  };


  return (
    <div style={{ marginBottom: "60px" }}>
      <InfiniteScroll
        dataLength={postData.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        endMessage={
          <div style={{ marginTop: "15px" }}>
            <h2 style={{ textAlign: "center" }}>Alles</h2>
          </div>
        }
        style={{ overflowX: "hidden", overflowY: "hidden" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
            overflowX: "hidden",
            overflowY: "hidden",
          }}
        >
          {postData.map((item, index) => (
            <div
              style={{
                height: "270px",
                width: "300px",
                border: "2px solid red",
              }}
              key={index}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h4>{item?.title} </h4>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                {item?.images && item?.images[0] && (
                  <img
                    src={item?.images[0]}
                    style={{ width: "160px", height: "160px" }}
                  />
                )}
              </div>
              <div
                style={{
                  marginTop: "2px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {item?.description && (
                  <p>{item?.description.slice(0, 10)}...</p>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "7px",
                }}
              >
                {item?.price && (
                  <p
                    style={{
                      border: "2px solid blue",
                      width: "60px",
                      height: "40px",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      paddingTop: "3px",
                    }}
                  >
                    {item?.price}$
                  </p>
                )}
                <button
                  style={{
                    color: "white",
                    background: "blue",
                    width: "80px",
                    height: "30px",
                    borderRadius: "10px",
                  }}
                >
                  Add to
                </button>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Cart;
