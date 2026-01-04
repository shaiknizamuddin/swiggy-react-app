import { appLogoUrl } from "../shared/swiggyApi";
import { useState, useEffect } from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => onLoginClick()}>
            {loginbtnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
