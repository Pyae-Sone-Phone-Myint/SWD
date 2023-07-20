import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../context/StateContext";
import Cart from "./Cart";

const AddToCart = () => {
  const {
    state: { cart },
    dispatch,
  } = StateContextCustom();

  const totalPrice = cart.reduce((pv, cv) => pv + cv.price, 0);
  const [price, setPrice] = useState(totalPrice);
  const total = (p) => {
    setPrice((prev) => prev + p);
  };

  const dTotal = (p) => {
    setPrice((prev) => prev - p);
  };

  const removeItem = (item, p) => {
    const filterCart = cart.filter((i) => i.id !== item.id);
    setPrice(price - p);
    dispatch({ type: "REMOVE_PRODUCT", payload: filterCart });
  };

  const clearCart = () => {
    dispatch({ type: "REMOVE_PRODUCT", payload: [] });
  };

  return (
    <>
      <div className="relative flex flex-col ml-10">
        {cart.length >= 1 ? (
          cart.map((item) => {
            return (
              <Cart
                key={item.id}
                item={item}
                total={total}
                dTotal={dTotal}
                removeItem={removeItem}
              />
            );
          })
        ) : (
          <div className=" text-center flex flex-col gap-3 items-center">
            <h1 className=" text-3xl">Your Cart is Empty</h1>
            <Link to={"/"}>
              <button className=" bg-gray-600 text-white py-1 px-3 rounded btn-transform">
                Add to cart
              </button>
            </Link>
          </div>
        )}
      </div>
      {cart.length >= 1 ? (
        <>
          <div className=" fixed right-10 top-20 w-[30%] mx-auto p-4 border-2 border-blue-500 rounded bg-green-200">
            <div className="flex justify-between ">
              <h2 className=" text-2xl font-semibold text-gray-400">Total</h2>
              <p>${price.toFixed(2)}</p>
            </div>
            <div className=" flex justify-between my-2">
              <button
                onClick={clearCart}
                className=" text-white rounded bg-red-400 py-1 px-3 btn-transform"
              >
                Clear cart
              </button>
              <Link to={"/success"}>
                <button className=" text-white rounded bg-blue-400 py-1 px-3 btn-transform">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default AddToCart;
