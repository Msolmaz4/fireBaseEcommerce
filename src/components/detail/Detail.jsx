import { useParams } from "react-router-dom"


const Detail = () => {
    const {params} = useParams()
  return (
    <div style={{paddingTop:"60px", width:"100%" ,height:"100vh" ,border:"2px solid red",font:"50px",color:"red"}}>Detaiccccc {params}ccccccccccccccccccccccccccccccccccccccccccccccccccccl</div>
  )
}

export default Detail