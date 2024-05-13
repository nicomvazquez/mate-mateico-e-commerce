import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Foother from "../components/Foother.jsx";

function Home() {
  return (
    <div className="bg-[#394032] flex flex-col justify-between min-h-screen">
      <Navbar />
      <Outlet />
      <Foother />
    </div>
  );
}

export default Home;
