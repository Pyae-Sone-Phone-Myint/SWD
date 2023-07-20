import React from "react";

const Card = ({product}) => {
  return (
    <div>
      <div className="card p-3" style={{ width: "18rem" }}>
        <img
          src={product.image}
          className="img-thumbnail"
          width={100}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-truncate">{product.title}</h5>
          <p className="card-text text-truncate">{product.description}</p>
          <a href="#" className="btn btn-primary mt-auto">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
