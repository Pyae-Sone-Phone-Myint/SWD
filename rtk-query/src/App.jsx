import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import Create from "./components/Create";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </div>
  );
};

export default App;
