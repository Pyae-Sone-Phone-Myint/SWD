import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Cart = ({ item, total, dTotal, removeItem }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    total(item.price);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      dTotal(item.price)
    }
  };
  const oneItemPrice = (item.price * quantity).toFixed(2);

  const remove = () => {
    removeItem(item,oneItemPrice)
  }

  return (
    <div className="flex items-center w-[40%] justify-between border gap-3 p-3 my-3">
      <img
        src={item.image}
        className=" w-[100px] h-[100px] object-contain"
        alt=""
      />
      <div className=" mr-auto">
        <h1 className=" text-2xl mb-3">{item.title.substring(0, 25)}...</h1>
        <p>${oneItemPrice}</p>
        <button onClick={remove} className=" text-red-500">remove</button>
      </div>
      <div className=" flex flex-col items-center gap-2 select-none">
        <IoIosArrowUp
          className=" cursor-pointer bg-blue-800 rounded text-white p-1 text-xl"
          onClick={increaseQuantity}
        />
        <p>{quantity}</p>
        <IoIosArrowDown
          className=" cursor-pointer bg-blue-800 rounded text-white p-1 text-xl"
          onClick={decreaseQuantity}
        />
      </div>
    </div>
  );
};

export default Cart;
