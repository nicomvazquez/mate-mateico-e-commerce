import React from "react";

function Foother() {
  return (
    <div className="bg-[#1a1b1c] w-full">
      <div className="w-5/6 m-auto flex justify-between items-center py-5 border-b-2">
        <h1 className="text-2xl md:text-4xl text-white">
          Iphone Market
        </h1>
        <img src="./logo.png" alt="" className="w-[100px] md:w-[150px]"/>
      </div>
      <div className="w-5/6 m-auto flex justify-between">
        <h1 className="text-base md:text-xl text-white py-5">Diseñado por <span className="text-[#ed6464]"><a href="https://master--nvdev-tech.netlify.app/">NVdev.com</a></span></h1>
      </div>
    </div>
  );
}

export default Foother;
