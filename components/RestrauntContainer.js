import Rescard from "./Rescard";
// import { reslist } from "../utils/reslist";
import { BallTriangle } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

// key index value<<<<<<<map value
const RestrauntContainer = () => {
  const [reslistn, setlist] = useState([]);
  const [inputtxt, settxt] = useState("");
  const onlinestatus = useOnlinestatus();
  useEffect(() => {
    fetchdata();
  }, []);
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  const fetchdata = async () => {
    const data = await fetch(url);
    const jsondata = await data.json();
    // optional chaining "?"
    setlist(
      jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (onlinestatus == false) {
    return <h1 className="p-2 m-3 text-lg">You are offline ......</h1>;
  }
  if (reslistn.length == 0) {
    return (
      <div className="loader">
        <BallTriangle
          height={300}
          width={300}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{ alignItems: "center", display: "flex" }}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="">
      {/* <Rescard resobj={resobj[0]} />
        <Rescard resobj={resobj[1]} />
        <Rescard resobj={resobj[2]} />
        <Rescard resobj={resobj[3]} />
        <Rescard resobj={resobj[4]} />
        <Rescard resobj={resobj[5]} />
        <Rescard resobj={resobj[6]} />
        <Rescard resobj={resobj[7]} />
        <Rescard resobj={resobj[8]} /> */}
      <div className="p-2 m-3">
        <input
          type="text"
          value={inputtxt}
          onChange={(e) => {
            settxt(e.target.value);
          }}
          className="p-2 m-3"
          placeholder="search"
        ></input>
        <button
          className="bg-yellow-500 rounded-t-full rounded-bl-full p-4 shadow-lg m-3"
          onClick={() => {
            const renderingsearch = reslistn.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(inputtxt.toLowerCase());
            });
            setlist(renderingsearch);
          }}
        >
          Search
        </button>
      </div>
      <button
        className="bg-amber-500 p-3 m-3 rounded-lg shadow-xl"
        onClick={() => {
          const reslistnew = reslistn.filter((res) => res.info.avgRating > 4.5);
          setlist(reslistnew);
        }}
      >
        Top Rated
      </button>
      <div className="flex flex-wrap m-5 ">
        {reslistn.map((r) => (
          <Link key={r.info.id} to={"resto/" + r.info.id}>
            <Rescard reslist={r} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default RestrauntContainer;
