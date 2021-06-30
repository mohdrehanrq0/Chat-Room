import React, { useContext } from "react";
import "../App.css";
import { ContextProvider } from "../context/ContextProvider";

function Navbar() {
  const { register, user, loader, logout } = useContext(ContextProvider);
  const userRegister = () => {
    register();
  };
  const userLogout = () => {
    logout();
  };
  const User = () => {
    return !loader ? (
      user ? (
        <div className="navbar__links">
          <li>
            <span className="navbar__img">
              <img src={user.photoURL} alt="" />
            </span>
          </li>
          <li>
            <button className="navbar__btn" onClick={userLogout}>
              Logout{" "}
            </button>
          </li>
        </div>
      ) : (
        <div className="navbar__links">
          <li>
            <span className="navbar__img"></span>
          </li>
          <li>
            <button className="navbar__btn" onClick={userRegister}>
              Register with Google{" "}
            </button>
          </li>
        </div>
      )
    ) : (
      ".... "
    );
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo">ChatRoom</div>
          {/* <div className="navbar__links">
                        <li><span className="navbar__img"></span></li>
                        <li><button className="navbar__btn" onClick={userRegister}>Register with Google </button></li>
                    </div> */}
          {User()}
        </div>
      </div>
    </>
  );
}

export default Navbar;
