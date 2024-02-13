import styles from "./Header.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { FcShop } from "react-icons/fc";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";

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
    <NavLink to="/cart">
      Cart
      <FcShop size={34} />
      <p>0</p>
    </NavLink>
  </span>
);
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [display, setDisplay] = useState("");

  const navi = useNavigate()
  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      //userkontrol edecgiy 
      const uid = user.uid;
      console.log(uid)
      console.log(user)
     setDisplay(user.displayName)
     
    } else {
      // User is signed out
      setDisplay("")
    }
  });
},[])

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("sucess logout");
        navi("/")
      })
      .catch((error) => {
        toast.error(error);
      });
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
              <FaTimes size={24} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              {/* <NavLink to="/" className={(state)=>console.log(state')}>Home</NavLink> */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : ""
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className={styles.header_right} onClick={hideMenu}>
            <span className={styles.links}>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : ""
                }
              >
                Login
              </NavLink>
               <a href="#">
                <FaUserCircle size={16}/>
                Hi {display}
              </a> 
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : ""
                }
              >
                Register
              </NavLink>
              <NavLink
                to="/order-history"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : ""
                }
              >
                My Orders
              </NavLink>
              <NavLink to="/" onClick={logout}>
                Logout
              </NavLink>
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
