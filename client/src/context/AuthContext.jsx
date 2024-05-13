import { useContext, createContext, useEffect, useState } from "react";
import Cookie from "js-cookie";

import {
  loginRequest,
  logoutRequest,
  registerRequest,
  verifyTokenRequest,
} from "../api/auth.api";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState([]);

  useEffect(() => {
    const checklogin = async () => {
      try {
        const res = await verifyTokenRequest();
        if (!res.data) return setIsLogin(false);
        setUser(res.data);
        setIsLogin(true);
      } catch (error) {
        console.log(error);
        setIsLogin(false);
      }
    };
    checklogin();
  }, []);

  const singup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      setIsLogin(true);
    } catch (error) {
      console.log(error.response.data.message);
      setError([error.response.data.message]);
    }
  };

  const singin = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsLogin(true);
    } catch (error) {
      console.log(error.response.data.message);
      setError([error.response.data.message]);
    }
  };

  const logout = async () => {
    try {
      Cookie.remove("token");
      setUser(null);
      setIsLogin(false);
    } catch (error) {
      console.log(error.response.data.message);
      setError([error.response.data.message]);
    }
  };

  return (
    <authContext.Provider
      value={{
        user,
        singup,
        singin,
        logout,
        isLogin,
        error,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
