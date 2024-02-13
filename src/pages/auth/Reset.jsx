import { Link } from "react-router-dom"
import styles from "./auth.module.scss"
import forgot from "../../assets/forgot.png"
import { useState } from "react"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../../firebase/config"
import { toast } from "react-toastify"

const Reset = () => {
  const [email,setEmail] = useState("")

const reset = (e)=>{
  e.preventDefault()
  sendPasswordResetEmail(auth, email)
  .then(() => {
   toast.success("kontrol Email")
  })
  .catch((error) => {
  
    const errorMessage = error.message;
   toast.error(errorMessage)
  });
}


  return (
    <section className={`container ${styles.auth}`}>
    <div className={styles.img}>
      <img src={forgot} alt="forgot" width="400" />
    </div>
    <div className={styles.form}>
      <h2>Reset Password</h2>
      <form onSubmit={reset}>
        <input type="text" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
  
        <button className="--btn --btn-primary --btn-block" type="submit">Reset Password</button>
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