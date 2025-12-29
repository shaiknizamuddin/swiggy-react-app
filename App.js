import React from "react";
import ReactDOM from "react-dom/client";

// const reactElement = (
//   <div className="container">
//     <h1>Hello, World!</h1>
//     <p>Welcome to my React application.</p>
//   </div>
// );

//
// root.render(reactElement);
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Bar
 *  - Restaurant Cards
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const appLogoUrl =
  "https://images.seeklogo.com/logo-png/34/2/swiggy-logo-png_seeklogo-348257.png";
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

const RestaurantCards = () => (
  <div className="restaurant-cards">
    <div className="card-container">
      <img src={appLogoUrl} alt="Restaurant" />
      <div className="title">Riyaz Biriyani</div>
      <div className="details">
        <p>Delivers in 30 mins</p>
        <p>4.5 star</p>
        <p>Biriyani, Mughali, Roti, Curries</p>
        <p>Hitech City</p>
      </div>
    </div>
    <div className="card-container">
      <img src={appLogoUrl} alt="Restaurant" />
      <div className="title">Riyaz Biriyani</div>
      <div className="details">
        <p>Delivers in 30 mins</p>
        <p>4.5 star</p>
        <p>Biriyani, Mughali, Roti, Curries</p>
        <p>Hitech City</p>
      </div>
    </div>
    <div className="card-container">
      <img src={appLogoUrl} alt="Restaurant" />
      <div className="title">Riyaz Biriyani</div>
      <div className="details">
        <p>Delivers in 30 mins</p>
        <p>4.5 star</p>
        <p>Biriyani, Mughali, Roti, Curries</p>
        <p>Hitech City</p>
      </div>
    </div>
    <div className="card-container">
      <img src={appLogoUrl} alt="Restaurant" />
      <div className="title">Riyaz Biriyani</div>
      <div className="details">
        <p>Delivers in 30 mins</p>
        <p>4.5 star</p>
        <p>Biriyani, Mughali, Roti, Curries</p>
        <p>Hitech City</p>
      </div>
    </div>
    <div className="card-container">
      <img src={appLogoUrl} alt="Restaurant" />
      <div className="title">Riyaz Biriyani</div>
      <div className="details">
        <p>Delivers in 30 mins</p>
        <p>4.5 star</p>
        <p>Biriyani, Mughali, Roti, Curries</p>
        <p>Hitech City</p>
      </div>
    </div>
    <div className="card-container">
      <img src={appLogoUrl} alt="Restaurant" />
      <div className="title">Riyaz Biriyani</div>
      <div className="details">
        <p>Delivers in 30 mins</p>
        <p>4.5 star</p>
        <p>Biriyani, Mughali, Roti, Curries</p>
        <p>Hitech City</p>
      </div>
    </div>
  </div>
);

const Body = () => (
  <div className="body" style={{ backgroundColor: "beige" }}>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for restaurants, cuisines or a dish"
      />
    </div>
    <div className="restaurant">
      <RestaurantCards />
    </div>
  </div>
);

const SwiggyApp = () => (
  <div className="main-app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SwiggyApp />);
