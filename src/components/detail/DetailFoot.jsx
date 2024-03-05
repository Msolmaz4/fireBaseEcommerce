import { useNavigate } from "react-router-dom";
import useFetchCollection from "../../customHooks/useFetchCollection";
import styles from "./DeatailFoot.module.scss"

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
          <div key={index} className={styles.card} onClick={()=>derleme(ert.id)}>
          <div className={styles.image_box}> 
           <img  src={ert.images[0]}
            alt={`Image ${index + 1}`}
            />
          </div>
          <div className={styles.content}>
            <h2>{ert.title}</h2>
            <p>{ert.description}</p>
          </div>
       
          
        </div>
    ))
}
    </div>
  )
}


export default DetailFoot