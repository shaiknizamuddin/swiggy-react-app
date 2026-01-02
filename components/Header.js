import { appLogoUrl } from "../shared/swiggyApi";

const Header = () => (
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
      </ul>
    </div>
  </div>
);

export default Header;
