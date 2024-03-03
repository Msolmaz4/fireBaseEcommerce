import { useNavigate } from "react-router-dom";
import useFetchCollection from "../../customHooks/useFetchCollection";


const DetailFoot = ({categ}) => {
    const { data } = useFetchCollection();
    const detailFo = data?.filter((cat)=>cat.category == categ)
    console.log(detailFo.slice(0,5),"detailFo")
    const navigate = useNavigate()
    const derleme =(id)=>{
        navigate('/')
        navigate(`/detail/${id}`)
    }

  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
{
    detailFo?.slice(0,5).map((ert,index)=>(
          <div key={index} style={{ textAlign: "center" , border:"2px solid black",marginLeft:"4px",borderRadius:"8px"}} onClick={()=>derleme(ert.id)}>
        <img  src={ert.images[0]}
            alt={`Image ${index + 1}`}
            style={{ maxWidth: "80%", height: "auto" ,gap:"20px" }} />
          
        </div>
    ))
}
    </div>
  )
}

export default DetailFoot