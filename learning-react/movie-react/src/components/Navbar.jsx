import React from "react";
import { BiCameraMovie } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <div className=" bg-cyan-400 py-4 px-10">
        <div className=" flex items-center text-white">
          <BiCameraMovie className=" text-3xl" />
          <h1 className=" text-3xl font-semibold">Movie Theatre</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
