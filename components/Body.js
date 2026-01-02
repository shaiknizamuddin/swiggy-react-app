import { restaurantsList } from "../shared/swiggyApi";
import RestaurantCards from "./Restaurantcards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredRes, setFilteredRes] = useState([]);
  const [apiDataCopy, setApiDataCopy] = useState([]);

  useEffect(() => {
    getResListFromApi();
  }, []);
  async function getResListFromApi() {
    const apiUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.458489649946085&lng=78.39860314785044&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(apiUrl);
    const apiResponse = await response.json();

    const finalData =
      apiResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(finalData, "apiResponse++++");
    setApiDataCopy(finalData);
    setFilteredRes(finalData);
  }

  let filteredList = [];

  const clearFilters = () => {
    setFilteredRes(apiDataCopy);
  };

  const filterTopRatedRes = (value) => {
    filteredList = filteredRes.filter(
      (restaurant) => restaurant?.info?.avgRating >= value
    );
    setFilteredRes(filteredList);
  };

  const onSearchRes = (e) => {
    const searchText = e.target.value.toLowerCase();
    if (searchText.length === 0) {
      setFilteredRes(apiDataCopy);
      return;
    }
    filteredList = filteredRes.filter(
      (restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(searchText) ||
        restaurant?.info?.cuisines.join(" ").toLowerCase().includes(searchText)
    );
    setFilteredRes(filteredList);
  };

  if (filteredRes.length === 0) {
    // return (
    //   <div style={{ display: "flex", flexWrap: "wrap" }}>
    //     {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => {
    //       return <Shimmer key={i} />;
    //     })}
    //   </div>
    // );
    return <Shimmer />;
  }

  return (
    <div
      className="body"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <div className="search-bar">
        <button style={{ padding: "20px" }} onClick={() => clearFilters()}>
          Clear Filters
        </button>
        <button
          style={{ padding: "20px" }}
          onClick={() => filterTopRatedRes(4.3)}
        >
          Restaurant with rating 4.3 +
        </button>
        <button
          style={{ padding: "20px" }}
          onClick={() => filterTopRatedRes(4.4)}
        >
          Restaurant with rating 4.4 +
        </button>

        <input
          type="text"
          placeholder="Search for restaurants, cuisines or a dish"
          onChange={(e) => onSearchRes(e)}
        />
      </div>
      <div className="restaurant-cards">
        {filteredRes.map((restaurant, index) => {
          return <RestaurantCards key={index} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
