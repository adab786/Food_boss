import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constant";

const useRestaurant = (resid) => {
  useEffect(() => {
    fetchdata();
  }, []);
  const [menu, setmenu] = useState(null);
  fetchdata = async () => {
    const data = await fetch(MENU_URL + resid);
    const jasondata = await data.json();
    setmenu(jasondata?.data);
  };

  return menu;
};
export default useRestaurant;
