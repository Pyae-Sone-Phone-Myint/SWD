import React from "react";
import { Route, Routes } from "react-router-dom";
import AddToCart from "./component/AddToCart";
import Detail from "./component/Detail";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import Success from "./component/Success";


const App = () => {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/addtocart" element={<AddToCart/>} />
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </>
  );
};

export default App;
