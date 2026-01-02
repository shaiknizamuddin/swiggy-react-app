import { restaurantImgUrl } from "../shared/swiggyApi";

const getUrl = (url) => {
  const previewText = "Image preview";
  return url.includes(previewText) ? url.replace(previewText, "").trim() : url;
};

const onCardClick = (cta) => {
  window.open(cta?.link, "_blank");
};

const RestaurantCards = (props) => {
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
        <p>{totalRatingsString} ratings</p>
        <p>{costForTwo}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCards;
