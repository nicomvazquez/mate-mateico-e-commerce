import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Foother from "../components/Foother.jsx";

function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <Outlet />
      <Foother />
    </div>
  );
}

export default Home;
