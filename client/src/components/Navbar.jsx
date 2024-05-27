import React from "react";
import { Link, Outlet } from "react-router-dom";

import { LuShoppingCart } from "react-icons/lu";
import { RiAdminLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className="bg-[#1a1b1c] w-full sticky top-0 z-10">
      <div className="w-5/6 m-auto flex justify-between items-center py-4">
        <Link className="w-[150px] md:w-[200px] text-white font-light font-serif" to={"/"}>
          <img src="./logo.png" alt="" />
        </Link>
        <div className="flex gap-10">
          <Link className="text-3xl text-white font-light hover:text-4xl hover:text-[#ed6464] transition-all" to={"/login"}>
            <RiAdminLine />
          </Link>
          <Link to={"/cart"} className="text-3xl text-white font-light hover:text-4xl hover:text-[#ed6464] transition-all">
            <LuShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
