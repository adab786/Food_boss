import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = () => {
  const [loginbutton, setbuuton] = useState("Login");

  return (
    <div className="flex justify-between bg-orange-300">
      <img className="w-20 h-22 rounded-md " src={LOGO_URL}></img>
      <div className="">
        <ul className="flex p-2 space-x-4 ">
          <Link to="/">
            <li className="p-2 font-serif">Home </li>
          </Link>
          <Link to="/about">
            <li className="p-2 font-serif">About</li>
          </Link>
          <Link to="/Contactus">
            <li className="p-2 font-serif">contactus</li>
          </Link>
          <Link to="/">
            <li className="p-2 font-serif">Cart</li>
          </Link>
          <button
            className="p-2 font-serif"
            onClick={() => {
              if (loginbutton === "Login") {
                setbuuton("Logout");
              } else if (loginbutton === "Logout") {
                setbuuton("Login");
              }
            }}
          >
            {loginbutton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
