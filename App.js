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

const RestaurantCards = (props) => {
  console.log(props, "props");
  return (
    <div className="card-container">
      <img src={appLogoUrl} alt="Restaurant" />
      <div className="title">{props.resName}</div>
      <div className="details">
        <p>{props.rating} star</p>
        <p>{props.cusine}</p>
        <p>{props.address}</p>
      </div>
    </div>
  );
};

const Body = () => (
  <div
    className="body"
    style={{ backgroundColor: "beige", height: "calc(100vh - 70px)" }}
  >
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for restaurants, cuisines or a dish"
      />
    </div>
    <div className="restaurant-cards">
      <RestaurantCards
        resName="Riyaz Biriyani"
        rating="4.5"
        cusine="Biriyani, Mughali, Roti, Curries"
        address="Hitech City"
      />
      <RestaurantCards
        resName="Biryani House"
        rating="4.2"
        cusine="Biriyani, Mughali, Roti, Curries"
        address="Hitech City"
      />
      <RestaurantCards
        resName="Tasty Biryani"
        rating="4.7"
        cusine="Biriyani, Mughali, Roti, Curries"
        address="Hitech City"
      />
      <RestaurantCards
        resName="Spicy Biryani"
        rating="4.3"
        cusine="Biriyani, Mughali, Roti, Curries"
        address="Hitech City"
      />
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
