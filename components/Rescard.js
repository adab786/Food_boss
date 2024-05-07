import { CDN_URL } from "../utils/constant";

const Rescard = (props) => {
  const resdata = props;
  const { cloudinaryImageId, name, locality, avgRating, areaName, cuisines } =
    resdata?.reslist?.info;
  // ----------------------------------note---------------------------------------
  // ! "?" if a reference
  // is nullish (null or undefined), the expression returns
  // a value of undefined.
  //----------------------------------------------------------------------------------
  return (
    <div className="p-2 m-6 w-60 h-[450px]  border-2 border-indigo-200 shadow-lg hover:shadow-2xl">
      <img
        className=" rounded-md border "
        src={CDN_URL + cloudinaryImageId}
        alt="HappyFace"
      ></img>
      <div className="p-2 ">
        <h3>{name}</h3>
        <h4>{locality}</h4>
        <h4>Rating : {avgRating}</h4>
        <p>{areaName}</p>
        <p>{cuisines.slice(1, 4).join(" , ")}</p>
      </div>
    </div>
  );
};

export default Rescard;
