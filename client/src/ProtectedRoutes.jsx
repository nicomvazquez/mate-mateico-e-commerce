import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "./context/AuthContext.jsx";

function ProtectedRoutes() {
  const { isLogin } = useAuth();

  if (!isLogin) return <Navigate to={"/"} replace />;

  return <Outlet />;
}

export default ProtectedRoutes;
