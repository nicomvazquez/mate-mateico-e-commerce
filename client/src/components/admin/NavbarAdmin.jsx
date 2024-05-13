import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext.jsx";

function NavbarAdmin() {
  const { logout } = useAuth();

  return (
    <div className="sidebar bg-[#8DAB7F] h-screen w-72 pt-10 fixed top-0 left-0">
      <div className="flex flex-col">
        <Link
          className="text-white py-4 px-4 hover:bg-[#5f7853] text-2xl"
          to={"/admin"}
        >
          products
        </Link>
        <Link
          className="text-white py-4 px-4 hover:bg-[#5f7853] text-2xl"
          to={"/admin/new"}
        >
          nuw products
        </Link>
        <Link
          className="text-white py-4 px-4 hover:bg-[#5f7853] text-2xl"
          to={"/admin/categories"}
        >
          categories
        </Link>
        <Link
          className="text-white py-4 px-4 hover:bg-[#5f7853] text-2xl"
          onClick={() => {
            logout();
          }}
        >
          logout
        </Link>
      </div>
    </div>
  );
}

export default NavbarAdmin;
