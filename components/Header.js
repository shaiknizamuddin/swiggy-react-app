import { appLogoUrl } from "../shared/swiggyApi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginbtnName, setLoginBtnName] = useState("Login");

  useEffect(() => {
    console.log(
      "use effect called in header whenever ther is a change in loginbtnName"
    );
  }, [loginbtnName]);

  const onLoginClick = () => {
    loginbtnName === "Login"
      ? setLoginBtnName("Logout")
      : setLoginBtnName("Login");
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={appLogoUrl} alt="App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button className="login-btn" onClick={() => onLoginClick()}>
            {loginbtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
