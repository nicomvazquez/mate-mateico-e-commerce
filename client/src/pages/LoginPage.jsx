import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";

function LoguinPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { singin, isLogin, error: loginErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) navigate("/admin");
  }, [isLogin]);

  return (
    <div className="w-full m-auto">
      <form
        className="flex flex-col max-w-3xl m-auto rounded-md bg-[#1E2019] p-5"
        onSubmit={handleSubmit(async (values) => {
          singin(values);
        })}
      >
        {loginErrors.map((message, i) => (
          <div className="bg-red-500 p-2 text-xl text-white" key={i}>
            {message}
          </div>
        ))}

        <label htmlFor="" className="text-4xl py-3 text-white">DNI</label>
        <input type="number" className="h-10 bg-inherit border-b-2 border-b-[#CFEE9E] focus:bg-[#394032] text-white" {...register("dni", { required: true })} />
        {errors.dni && <span className="text-red-500">DNI es requerido</span>}

        <label htmlFor="" className="text-4xl py-3 text-white">password</label>
        <input type="password" className="h-10 bg-inherit border-b-2 border-b-[#CFEE9E] focus:bg-[#394032] text-white" {...register("password", { required: true })} />
        {errors.password && (
          <span className="text-red-500">Password es requerido</span>
        )}

        <button type="submit" className="py-2 mt-10 rounded-md w-32 bg-[#587B7F] hover:bg-[#385254]">Submit</button>
      </form>
    </div>
  );
}

export default LoguinPage;
