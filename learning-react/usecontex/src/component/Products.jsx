import React from "react";
import { StateContextCustom } from "../context/StateContext";
import Product from "./Product";
import { AiOutlineArrowUp } from "react-icons/ai";
import Loading from "./Loading";

const Products = () => {
  const {
    state: { products },
    loading,
  } = StateContextCustom();

  const scrollTop = () => {
    window.scroll(0, 0);
  };
  return (
    <div className=" flex flex-wrap justify-center gap-5 my-5">
      {loading
        ? <Loading/>
        : products?.map((pd) => {
            return <Product key={pd.id} {...pd} />;
          })}
      <button
        className=" text-white animate-bounce fixed right-10 bottom-10 bg-blue-400 p-2 rounded"
        onClick={scrollTop}
      >
        <AiOutlineArrowUp />
      </button>
    </div>
  );
};

export default Products;
