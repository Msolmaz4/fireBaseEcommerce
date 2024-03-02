import { useParams } from "react-router-dom";
import useFetchCollection from "../../customHooks/useFetchCollection";

const Detail = () => {
  const { id } = useParams();
  const { data } = useFetchCollection();

  const ver = data?.filter((veri) => veri.id == id);
  console.log(ver[0]);

  return (
    <div
      style={{
        display: "flex",
        marginTop: "8rem",
        width: "100%",
        height: "91.2vh",
        zIndex: "200",
      }}
    >
      <div
        style={{
          width: "660px",
          height: "350px",
          border: "solid black 2px",
          marginLeft: "80px",
          marginTop: "4px",
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
            <img src={ver[0]?.images} alt="" width="260px" height="150px" />
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
          <p style={{ fontSize: "20px", marginLeft: "15px" }}>
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
              style={{
                width: "100px",
                height: "25px",
                borderRadius: "5px",
                margin: "10px",
              }}
            >
              {" "}
              Direk
            </button>
            <button
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
    </div>
  );
};

export default Detail;
