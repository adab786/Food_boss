import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constant";
import { CONTAINER_DATA } from "../utils/constant";
import { Link, useHref } from "react-router-dom";

const Food = () => {
  const [dataFood, setdata] = useState(null);
  const imgurl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const fooddata = await fetch(CONTAINER_DATA);
    const jasondata = await fooddata.json();
    setdata(
      jasondata?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  };
  if (dataFood == null) {
    return <h1>loading...</h1>;
  }

  //   const { text, link } = dataFood?.action;
  //   console.log(dataFood[0].action);

  return (
    <div className="">
      <h1 className="m-2 text-lg">whats on your mind</h1>
      <div className="flex w-full overflow-hidden overflow-x-scroll scroll-smooth scroll-m-3 snap-x no-scrollbar">
        {dataFood?.map((r) => {
          return (
            <div key={r.id} className=" w-52">
              <Link className="w-40" target="blank" to={r.action.link}>
                <img
                  //   onClick={handleclick}
                  className=" w-40 cursor-pointer"
                  src={imgurl + r.imageId}
                ></img>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Food;
