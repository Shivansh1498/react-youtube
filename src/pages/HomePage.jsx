import React from "react";
import Header from "../components/Header";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import routes from "../routes";

const HomePage = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={routes} />
    </div>
  );
};

export default HomePage;
