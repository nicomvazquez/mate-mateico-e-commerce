import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/admin/NavbarAdmin.jsx";

import ProductForm from "./ProductForm.jsx";

function Admin() {
  return (
    <div className="flex">
      <div className="sticky top-0">
        <Navbar />
      </div>
      <div className="flex-1 bg-[#394032] ml-64 min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
