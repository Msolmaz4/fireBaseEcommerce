import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Footer } from "../../components";

const LIMIT = 15;

const Cart = ({ data,page ,setPage}) => {
  console.log(data, "cartolandaki");
  const [postData, setPostData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [visible, setVisible] = useState(LIMIT);
 

  useEffect(() => {
    const vert = async () => {
      try {
        console.log(data, "veri");
        const dert = await data?.slice(0, LIMIT);
        console.log(dert, "dddddddddddd");
        setPostData(dert);
      } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
      }
    };
    vert();
  }, [data]);

  const fetchMoreData = () => {
    const newLimit = visible + LIMIT;
    console.log(newLimit);

    if (postData.length < 40) {
      try {
        setPage(true)
        console.log(data, "fetch");
        const addTo = data.slice(visible, newLimit);
        console.log(addTo, "addto");

        setTimeout(() => {
          setPostData((prevData) => [...prevData, ...addTo]);
        }, 2000);

        setVisible(newLimit);
      } catch (error) {
        console.error("Yeni veri alınırken hata oluştu:", error);
      }
    } else {
      setPage(false)
      setTimeout(() => {
        setHasMore(false);
      }, 2000);
    }
  };

  console.log(postData, "posssssssssssssssssssssss");
console.log(page)
  return (
    <div style={{ marginBottom: "60px" }}>
      <InfiniteScroll
        dataLength={postData.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4 style={{ textAlign: 'center' }}>Loading...</h4>}
        endMessage={
         <div style={{marginTop:"15px"}}> 
         <h2 style={{textAlign: 'center'}}>Alles</h2>
          </div>
        }
        style={{ overflowX: 'hidden',overflowY:"hidden" }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap:"12px", justifyContent:"center",overflowX: 'hidden',overflowY:"hidden" }}>
          {postData.map((item, index) => (
            <div
              style={{
                height: "250px",
                width: "300px",
                border: "2px solid red",
              }}
              key={index}
            >
              div {item?.title} #{index}
            </div>
          ))}
        </div>
      </InfiniteScroll>
     
    </div>
  );
};

export default Cart;
