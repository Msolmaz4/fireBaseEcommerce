import { Link } from "react-router-dom"
import styles from "./auth.module.scss"
import forgot from "../../assets/forgot.png"
import { useState } from "react"

const Reset = () => {
  const [email,setEmail] = useState("")
  return (
    <section className={`container ${styles.auth}`}>
    <div className={styles.img}>
      <img src={forgot} alt="forgot" width="400" />
    </div>
    <div className={styles.form}>
      <h2>Reset Password</h2>
      <form>
        <input type="text" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
  
        <button className="--btn --btn-primary --btn-block">Reset Password</button>
        <div className={styles.links}>
          <p><Link to="/login"> Login</Link></p>
          <p><Link to="/register"> Register</Link></p>
        </div>
     
      
      </form>
    
    </div>
  </section>
  )
}

export default Reset