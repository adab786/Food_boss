import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contactus from "./components/Contactus";
import {
  Router,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
// ----------------------------------------------------------------------------------------------------------------------------------

const Applayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const browserroter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contactus",
        element: <Contactus />,
      },
      {
        path: "/Resto/:resid",
        element: <Restaurant />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={browserroter} />);
