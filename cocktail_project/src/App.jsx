import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  About,
  HomeLayout,
  NewLetter,
  Cocktail,
  Landing,
  Error,
} from "./pages/index.js";
import { element } from "prop-types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
       index:true,
        element: <Landing />,
       
      },
      {
        path: "/cocktail",
        element: <Cocktail />,
      },
      {
        path: "/newletter",
        element: <NewLetter />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            index: true,
            element: <h2>company name</h2>,
          },
          {
            path: "/flm",
            element: <h2>
              <Outlet/>
              </h2>,
          },
        ],
      },
      {
        path: "/cocktail",
        element: <Cocktail />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
