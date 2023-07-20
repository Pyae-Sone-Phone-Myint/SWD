import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Card from "./Card";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NavList from "./pages/Navlink";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    // console.log(data);
    setItems(data);
  };
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route  path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/nav" element={<NavList/>} />
    </Routes>
    </>
  );
};

export default App;
