
import { Link } from "react-router-dom"
import registerImg from "../../assets/register.png"
import styles from "./auth.module.scss"
import Card from "../../components/card/Card"
import { useState } from "react"

const Register = () => {

const [inp,setInp]= useState({
  email:"",
  password:"",
  cpassword:""
})

const handle = (e)=>{
     setInp({...inp,[e.target.name]:e.target.value})
}
const derleme =(e)=>{
  e.preventDefault()
  console.log(inp)
}
  return (
    <section className={`container ${styles.auth}`}>
    <Card> 
   
    <div className={styles.form}>
      <h2>Register</h2>
      <form onSubmit={derleme}>
        <input type="text" placeholder="Email" required value={inp.email} onChange={handle} name="email" />
        <input type="password" placeholder="Password" required value={inp.password} onChange={handle}  name="password"  />
        <input type="password" placeholder="Confirm Password" required value={inp.cPassword} name="cpasword"  onChange={handle} />
        <button className="--btn --btn-primary --btn-block" onClick={derleme}>Register</button>
      

      </form>
    
      <span className={styles.register}>
        <p>Already an account?</p>
        <Link to="/login"> Login</Link>
      </span>
    </div>
    </Card>
    <div className={styles.img}>
      <img src={registerImg} alt="login" width="400" />
    </div>
  </section>
  )
}

export default Register