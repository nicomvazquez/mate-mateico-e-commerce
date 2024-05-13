import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#8DAB7F] w-full sticky top-0 z-10">
      <div className="w-5/6 m-auto flex justify-between items-center py-8">
        <Link className="text-5xl text-white font-light font-serif" to={"/"}>
          MM
        </Link>
        <div className="flex gap-5">
          <Link className="text-2xl text-white font-light" to={"/login"}>
            admin
          </Link>
          <Link to={"/cart"} className="text-2xl text-white font-light">cart</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
