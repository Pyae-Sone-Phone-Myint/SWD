import React from "react";
import { Link } from "react-router-dom";
import { StateContextCustom } from "../context/StateContext";

const Product = (props) => {
  const { id, title, image, price } = props;
  const { dispatch } = StateContextCustom();
  return (
    <div className=" basis-3/12 shadow-md p-7 flex flex-col rounded-md transition hover:scale-105 hover:shadow-lg">
      <img src={image} className=" h-52 mx-auto object-contain" alt="" />
      <h1 className=" text-2xl mb-3">{title.substring(0, 25)}...</h1>
      <div className=" mt-auto flex gap-3">
        <Link to={`/detail/${id}`}>
          <button className=" py-1 px-3 bg-gray-500 rounded btn-transform">Detail</button>
        </Link>
        <button
          onClick={() => dispatch({ type: "ADD_PRODUCT", payload: props })}
          className=" py-1 px-3 bg-blue-500 rounded btn-transform"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
