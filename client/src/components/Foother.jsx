import React from "react";

function Foother() {
  return (
    <div className="bg-[#8DAB7F] w-full">
      <div className="w-5/6 m-auto flex justify-between items-center py-5 border-b-2">
        <h1 className="text-4xl text-white">
          MateMateico
        </h1>
        <p className="text-3xl text-white font-serif">MM</p>
      </div>
      <div className="w-5/6 m-auto flex justify-between">
        <h1 className="text-xl text-white py-5">Designed by <span className="text-violet-600"><a href="https://nicomvazquez.github.io/portfolio/">NicoVazquez.com</a></span></h1>
      </div>
    </div>
  );
}

export default Foother;
