import React from "react";
import About from "./About";

const Home = (props) => {
  return (
    <div>
      <h1 className="text-danger">
        Home Page {props.name} - {props.age}
      </h1>
      <h2 className=" text-success">{props.info.name} - {props.info.age} - {props.info.gender} </h2>
    </div>
  );
};

export default Home;
