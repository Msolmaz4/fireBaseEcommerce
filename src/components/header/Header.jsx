import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { FcShop } from "react-icons/fc"
import {HiOutlineMenuAlt3} from "react-icons/hi"
import { useState } from "react";
const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        M<span>shop.</span>
      </h2>
    </Link>
  </div>
);


const cart =(
  <span className={styles.cart}>
  <Link to="/cart">Cart
  <FcShop  size={34}/>
  <p>0</p>
 </Link>  </span>
)
const Header = () => {

  const [showMenu,setShowMenu] = useState(false)

  const toogleMenu = ()=>{
    
  }




  return (
    <header>
      <div className={styles.header1} >
        {logo}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
       
     
      <div className={styles.header_right}>
        <span className={styles.links}>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/order-history">My Orders</Link>
        </span>
       {cart}
      </div>
       </nav>

       <div className={styles["menu-icon"]}>
        {cart}
        <HiOutlineMenuAlt3 size={34}/>
       </div>
       </div>
    </header>
  );
};

export default Header;
