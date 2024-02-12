import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { FcShop } from "react-icons/fc";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import {FaTimes} from "react-icons/fa"
const logo = (
  <div className={styles.logo}>
    <NavLink to="/">
      <h2>
        M<span>shop.</span>
      </h2>
    </NavLink>
  </div>
);

const cart = (
  <span className={styles.cart}>
    <NavLink to="/cart" >
      Cart
      <FcShop size={34} />
      <p>0</p>
    </NavLink>
  </span>
);
const Header = () => {
  
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <div className={styles.header1}>
        {logo}
        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
          onClick={hideMenu}
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
          ></div>
            <ul onClick={hideMenu}>
              <li className={styles["logo-mobile"]}>
                {logo}
                <FaTimes size={24} color="#fff" onClick={hideMenu}/>
              </li>
              <li>
                {/* <NavLink to="/" className={(state)=>console.log(state')}>Home</NavLink> */}
                <NavLink to="/" className={({isActive})=>(isActive ? `${styles.active}` :"")}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({isActive})=>(isActive ? `${styles.active}` :"")}>Contact</NavLink>
              </li>
            </ul>

            <div className={styles.header_right} onClick={hideMenu}>
              <span className={styles.links}>
                <NavLink to="/login" className={({isActive})=>(isActive ? `${styles.active}` :"")}>Login</NavLink>
                <NavLink to="/register"className={({isActive})=>(isActive ? `${styles.active}` :"")}>Register</NavLink>
                <NavLink to="/order-history"className={({isActive})=>(isActive ? `${styles.active}` :"")}>My Orders</NavLink>
              </span>
              {cart}
            </div>
         
        </nav>

        <div className={styles["menu-icon"]}>
          {cart}
          <HiOutlineMenuAlt3 size={34} onClick={toogleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
