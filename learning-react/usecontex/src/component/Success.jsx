import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StateContextCustom } from "../context/StateContext";

const Success = () => {
  const navigate = useNavigate();
  const {
    dispatch,
    state: { cart },
  } = StateContextCustom();

  useEffect(() => {
    dispatch({ type: "REMOVE_PRODUCT", payload: [] });
  }, []);

  return (
    <div className=" h-screen flex flex-col justify-center items-center align-middle my-auto gap-6">
      <h1 className=" bg-green-400 text-white text-4xl p-4 rounded">
        Payment Success!
      </h1>
      <button
        onClick={() => navigate("/")}
        className=" btn-transform py-1 px-2 bg-blue-500 text-white rounded text-2xl"
      >
        Go to shopping
      </button>
    </div>
  );
};

export default Success;
