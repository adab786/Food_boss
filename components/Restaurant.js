import { BallTriangle } from "react-loader-spinner";
import useRestaurant from "../utils/useRestaurant";

import { useParams } from "react-router-dom";

const Restaurant = () => {
  const { resid } = useParams();
  const menu = useRestaurant(resid);
  //   const [menu, setmenu] = useState(null);
  //   // console.log(resid); console to resid log value object milta hai
  //   // const [recomm, setrecomm] = useState(null);
  //   useEffect(() => {
  //     fetchdata();
  //   }, []);
  //   const menuurl = MENU_URL.concat(resid);
  //   console.log(menuurl);
  //   const fetchdata = async () => {
  //     const datamenu = await fetch(menuurl);
  //     const jsonData = await datamenu.json();
  //     // return jsonData;
  //     // console.log(jsonData?.data?.cards[2]?.card?.card?.info?.name);
  //     setmenu(jsonData?.data);
  //   };
  if (menu == null) {
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

  const {
    name,
    // cloudinaryImageId,
    locality,
    avgRating,
    areaName,
    cuisines,
    sla,
    costForTwoMessage,
  } = menu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  {
    // console.log(itemCards);
  }
  // console.log(
  //   menu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  //     .itemCards[0].card.info.name
  // );

  return (
    <div className="flex flex-wrap justify-center">
      <div className="shadow-lg border border-l-2  bg-red-200 p-2 m-2">
        {/* {console.log(itemCards)} */}
        <h1>{name}</h1>
        <h2>Locality {locality}</h2>
        <h2>Rating {avgRating}⭐</h2>
        <h2>
          {cuisines.join(", ")} -- {costForTwoMessage}{" "}
        </h2>
        <h2>{areaName}</h2>
        <h2>{sla.slaString}</h2>
        <ul className="">
          <h3>Menu</h3>

          {itemCards?.map((res) => (
            <li key={res?.card?.info?.id}>
              {res?.card?.info?.name} ➡️🔛 Rs.{" "}
              {res?.card?.info?.price / 100 ||
                res?.card?.info?.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Restaurant;
