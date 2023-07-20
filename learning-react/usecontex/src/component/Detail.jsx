import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineTag, AiFillStar } from "react-icons/ai";
import { StateContextCustom } from "../context/StateContext";

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState("");
  const [catItem, setCatItem] = useState([]);
  const { dispatch} = StateContextCustom();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((data) => data.json())
      .then((item) => setItem(item));
  }, [id]);

  useEffect(() => {
    fetchDataCat();
  }, [item]);

  const fetchDataCat = async () => {
    const api = await fetch(
      `https://fakestoreapi.com/products/category/${item.category}`
    );
    const data = await api.json();
    const filterData = data.filter((d) => d.id !== item.id);
    setCatItem(filterData);
  };

  console.log(catItem);
  return (
    <>
      <div className=" flex justify-between mt-5">
        <img
          src={item.image}
          className=" w-[400px] h-[400px] object-contain"
          alt={item.title}
        />
        <div className=" basis-7/12 flex flex-col gap-4">
          <h1 className=" text-3xl font-semibold">{item.title}</h1>
          <p className=" text-gray-400">{item.description}</p>
          <div className="flex items-center gap-2 border-2 rounded-lg text-gray-500 p-2 w-fit">
            <AiOutlineTag />
            <p className="">{item.category}</p>
          </div>
          <div className=" flex gap-2 items-center border-2 w-fit py-1 px-2 rounded">
            <AiFillStar className=" text-yellow-300" />
            <small className=" text-gray-400">({item?.rating?.rate})</small>
          </div>
          <p>${item.price}</p>

          <div className=" flex text-white gap-3">
            <button
              onClick={() => dispatch({ type: "ADD_PRODUCT", payload: item })}
              className=" bg-blue-500 py-1 px-2 rounded btn-transform"
            >
              Add to cart
            </button>
            <Link to={"/success"}>
              <button className="bg-red-500 py-1 px-2 w-fit rounded btn-transform">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="m-4 ">
        <h3 className=" text-2xl">You may also like :</h3>
        <div className=" flex flex-wrap gap-5 my-5 justify-center">
          {catItem.map((i) => {
            return (
              <Link to={`/detail/${i.id}`}>
                <div
                  key={i.id}
                  className=" flex flex-col border-2 shadow p-3 rounded "
                >
                  <img src={i.image} className="transition hover:scale-105 cursor-pointer h-32" alt={i.title} />
                  <p className=" text-sm text-gray-500">${i.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Detail;
