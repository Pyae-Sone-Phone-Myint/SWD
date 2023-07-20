import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../context/StateContext";

const Navbar = () => {
  const {
    search,
    setSearch,
    state: { cart },
  } = StateContextCustom();
  return (
    <div className=" flex gap-3 justify-around items-center bg-cyan-300 py-3 text-white text-xl px-10">
      <Link to={"/"}>
      <h1 className="text-3xl">Shop</h1>
      </Link>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" border-b-2 border-b-white-300 text-white placeholder:text-white ml-auto bg-transparent outline-none"
        placeholder="Search by name"
      />
      <Link to={"/addtocart"}>
        <div className=" relative">
          <HiShoppingCart className=" text-2xl" />
          <span className=" text-sm absolute -top-2 -right-1 bg-blue-400 rounded-full px-1">
            {cart.length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
