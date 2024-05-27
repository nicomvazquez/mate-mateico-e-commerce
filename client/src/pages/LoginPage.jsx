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
    <div className="w-full m-auto p-5">
      <form
        className="flex flex-col max-w-xl gap-5 border-2 border-[#87586c] m-auto rounded-md p-5"
        onSubmit={handleSubmit(async (values) => {
          singin(values);
        })}
      >
        <h1 className="text-2xl">Para administradores</h1>

        {loginErrors.map((message, i) => (
          <div className="bg-red-500 p-2 text-xl text-white" key={i}>
            {message}
          </div>
        ))}

        <input
          type="number"
          placeholder="DNI"
          className="text-2xl p-1 rounded-md bg-inherit border-2 border-[#ed6464]"
          {...register("dni", { required: true })}
        />
        {errors.dni && <span className="text-red-500">DNI es requerido</span>}

        <input
          type="password"
          placeholder="Contraseña"
          className="text-2xl p-1 rounded-md bg-inherit border-2 border-[#ed6464]"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500">Password es requerido</span>
        )}

        <button
          type="submit"
          className="py-2 text-white rounded-md w-32 bg-[#ed6464] hover:bg-[#bf6370] transition-all"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoguinPage;
