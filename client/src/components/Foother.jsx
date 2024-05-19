import React from "react";

function Foother() {
  return (
    <div className="bg-[#8DAB7F] w-full">
      <div className="w-5/6 m-auto flex justify-between items-center py-5 border-b-2">
        <h1 className="text-4xl text-white">
          Entre Amigos
        </h1>
        <img src="./logo.png" alt="" className="w-[80px]"/>
      </div>
      <div className="w-5/6 m-auto flex justify-between">
        <h1 className="text-xl text-white py-5">Designed by <span className="text-violet-600"><a href="https://nicomvazquez.github.io/portfolio/">NVdev.com</a></span></h1>
      </div>
    </div>
  );
}

export default Foother;
