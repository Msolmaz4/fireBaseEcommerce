import { signInWithPopup,signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../firebase/config";
const Login = () => {
  const [inp, setInp] = useState({
    email: "",
    password: "",
  });
  const navi = useNavigate()

  const derleme = (e) => {
    setInp({ ...inp, [e.target.name]: e.target.value });
  };

  const dert = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, inp.email, inp.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    toast.success("login success")
    navi("/")
  })
  .catch((error) => {
    const errorMessage = error.message;
    toast.error(errorMessage)
  });
  };
  const provider = new GoogleAuthProvider();
const google = ()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
   
  
    
    const user = result.user;
    console.log(user)
  toast.success("succes Google")
  navi("/")

  }).catch((error) => {
    
toast.error(error)    
  });
  
}
  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="login" width="400" />
      </div>
      <div className={styles.form}>
        <h2>Login</h2>
        <form onSubmit={dert}>
          <input
            type="text"
            placeholder="Email"
            required
            name="email"
            value={inp.email}
            onChange={derleme}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={inp.password}
            onChange={derleme}
          />
          <button className="--btn --btn-primary --btn-block" onClick={dert}>
            Login
          </button>
          <div className={styles.links}>
            <Link to="/reset">Reset Password</Link>
          </div>
          <p>------- or ------</p>
        </form>
        <button className="--btn --btn-danger --btn-block" onClick={google}>
          {" "}
          <FaGoogle color="#fff" style={{ paddingRight: "4px" }} /> Login With
          Google
        </button>
        <span className={styles.register}>
          <p>Don't hve an account?</p>
          <Link to="/register"> Register</Link>
        </span>
      </div>
    </section>
  );
};

export default Login;
