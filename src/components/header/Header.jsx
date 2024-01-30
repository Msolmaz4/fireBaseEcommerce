import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { FcShop } from "react-icons/fc"
const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        M<span>shop.</span>
      </h2>
    </Link>
  </div>
);

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
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
        </nav>
     
      <div className={styles.header_right}>
        <span className={styles.links}>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/order-history">My Orders</Link>
        </span>
        <span className={styles.cart}>

        <Link to="/cart">Cart<FcShop  size={34}/> </Link>
        
        </span>
      </div> </div>
    </header>
  );
};

export default Header;
