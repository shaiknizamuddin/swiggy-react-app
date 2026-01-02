const ActionBar = () => {
  let filteredList = [];

  const filterTopRatedRes = (value) => {
    filteredList = restaurantsList.filter(
      (restaurant) => restaurant?.info?.avgRating >= value
    );
    setFilteredRes(filteredList);
  };

  const onSearchRes = (e) => {
    const searchText = e.target.value.toLowerCase();
    filteredList = restaurantsList.filter(
      (restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(searchText) ||
        restaurant?.info?.cuisines.join(" ").toLowerCase().includes(searchText)
    );
    setFilteredRes(filteredList);
  };

  return (
    <div className="search-bar">
      <button style={{ padding: "20px" }} onClick={() => filterTopRatedRes(0)}>
        Show All Restaurants
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
  );
};

export default ActionBar;
