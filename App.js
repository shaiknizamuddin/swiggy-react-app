import React from "react";
import ReactDOM from "react-dom/client";
import {
  restaurantsList,
  appLogoUrl,
  restaurantImgUrl,
} from "./shared/swiggyApi";

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
  const {
    name,
    areaName,
    avgRatingString,
    totalRatingsString,
    cuisines,
    costForTwo,
    cloudinaryImageId,
  } = props?.resData?.info;
  return (
    <div
      className="card-container"
      onClick={() => onCardClick(props?.resData?.cta)}
    >
      <img
        src={restaurantImgUrl + getUrl(cloudinaryImageId)}
        alt="Restaurant"
      />
      <div className="title">{name}</div>
      <div className="details">
        <p>{avgRatingString} star</p>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

const getUrl = (url) => {
  const previewText = "Image preview";
  return url.includes(previewText) ? url.replace(previewText, "").trim() : url;
};

const onCardClick = (cta) => {
  window.open(cta?.link, "_blank");
};

console.log(restaurantsList, "restaurantsList");

const Body = () => (
  <div className="body" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for restaurants, cuisines or a dish"
      />
    </div>
    <div className="restaurant-cards">
      {restaurantsList.map((restaurant, index) => {
        return <RestaurantCards key={index} resData={restaurant} />;
      })}
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
