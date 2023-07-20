import React from "react";

const Card = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} width={200} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>Add</button>
          </div>
        );
      })}
    </>
  );
};

export default Card;
