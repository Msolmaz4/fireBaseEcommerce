import styles from "./Header.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { FcShop } from "react-icons/fc";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "../../redux/slice/authSlice";
import useFetchDocument from "../../customHooks/useFetchDocument";

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
  const dispatch = useDispatch();
  const { email, userName } = useSelector((state) => state.auth);
  console.log(email, userName);
  const {veri} = useFetchDocument()
 console.log(veri,"header")


  const navi = useNavigate();
  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        //userkontrol edecgiy
        //const uid = user.uid;
        // console.log(uid)
        // console.log(user)
        if (user.displayName === null) {
          //const u1 = user.email.slice(0,-10)
          // console.log(u1)
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          // console.log(uName)
          setDisplay(uName);
        } else {
          // setDisplay(user.displayName)
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : display,
            userID: user.uid,
          })

        );
      } else {
        // User is signed out
        setDisplay("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch]);

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("sucess logout");
        navi("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <header className={styles.fixed}>
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
              {!email && (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ""
                  }
                >
                  Login
                </NavLink>
              )}

              {email && (
                <a href="#">
                  <FaUserCircle size={16} />
                  Hi {display}
                </a>
              )}

              {!email && (
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ""
                  }
                >
                  Register
                </NavLink>
              )}

              {email && (
                <NavLink
                  to="/order"
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ""
                  }
                >
                  My Orders
                </NavLink>
              )}
              {email && (
                <NavLink to="/" onClick={logout}>
                  Logout
                </NavLink>
              )}
            </span>
            {email && (
              <span className={styles.cart}>
                <NavLink to="/order">
                  Cart
                  <FcShop size={34} />
                  <p>{veri?.length}</p>
                </NavLink>
              </span>
            )}
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
