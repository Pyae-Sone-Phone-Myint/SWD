import React from "react";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className=" bg-cyan-400 py-4 px-3">
        <div className=" flex items-center text-white">
          <AiOutlineShopping className=" text-3xl" />
          <h1 className=" text-3xl font-semibold">Shop</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
