import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contactus from "./components/Contactus";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";
import { lazy, Suspense } from "react";
const About = lazy(() => import("./components/About"));
/*lazy loading 
On demand loadin 
chunking 
dynamic loading 
code splitting
 */

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
        element: (
          // <About />
          <Suspense fallback={<h1>loading</h1>}>
            <About />
          </Suspense>
        ),
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
